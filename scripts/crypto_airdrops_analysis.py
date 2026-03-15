from __future__ import annotations

import json
import io
import math
import time
import zipfile
from dataclasses import dataclass
from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import requests


ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data" / "crypto_airdrops"
RESULTS_DIR = ROOT / "results" / "crypto_airdrops"
FIGURES_DIR = ROOT / "figures" / "crypto_airdrops"

for path in (DATA_DIR, RESULTS_DIR, FIGURES_DIR):
    path.mkdir(parents=True, exist_ok=True)


USER_AGENT = "codex-airdrops-research/1.0"
BINANCE_VISION_BASE = "https://data.binance.vision/data/spot/monthly/klines"


@dataclass(frozen=True)
class EventSpec:
    symbol: str
    binance_symbol: str
    label: str
    event_date: str
    event_name: str
    source_url: str
    snapshot_space: str | None = None


EVENTS = [
    EventSpec(
        symbol="UNI",
        binance_symbol="UNIUSDT",
        label="Uniswap",
        event_date="2020-09-17",
        event_name="UNI airdrop / trading start",
        source_url="https://blog.uniswap.org/uni",
        snapshot_space="uniswapgovernance.eth",
    ),
    EventSpec(
        symbol="ENS",
        binance_symbol="ENSUSDT",
        label="ENS",
        event_date="2021-11-08",
        event_name="ENS claim / trading start",
        source_url="https://docs.ens.domains/dao/token/",
        snapshot_space="ens.eth",
    ),
    EventSpec(
        symbol="APT",
        binance_symbol="APTUSDT",
        label="Aptos",
        event_date="2022-10-19",
        event_name="Aptos community airdrop announcement",
        source_url="https://aptosfoundation.org/currents/aptos-airdrop-announcement",
        snapshot_space=None,
    ),
    EventSpec(
        symbol="ARB",
        binance_symbol="ARBUSDT",
        label="Arbitrum",
        event_date="2023-03-23",
        event_name="ARB airdrop claim date",
        source_url="https://blog.arbitrum.foundation/arbitrum-the-next-phase-of-decentralization/",
        snapshot_space="arbitrumfoundation.eth",
    ),
]

BENCHMARKS = {
    "BTCUSDT": "BTC",
    "ETHUSDT": "ETH",
}


def retry_get(url: str, params: dict[str, object] | None = None) -> requests.Response:
    headers = {"User-Agent": USER_AGENT, "accept": "*/*"}
    for attempt in range(8):
        resp = requests.get(url, params=params, headers=headers, timeout=60)
        if resp.status_code == 200:
            return resp
        if resp.status_code == 404:
            return resp
        if resp.status_code in {429, 500, 502, 503, 504}:
            time.sleep(min(2 ** attempt, 20))
            continue
        resp.raise_for_status()
    raise RuntimeError(f"Failed after retries: {url}")


def month_strings(start: str, end: str) -> list[str]:
    months = pd.period_range(pd.Period(start, freq="M"), pd.Period(end, freq="M"), freq="M")
    return [str(period) for period in months]


def fetch_binance_monthly_klines(symbol: str, start_month: str, end_month: str) -> pd.DataFrame:
    frames = []
    columns = [
        "open_time",
        "open",
        "high",
        "low",
        "close",
        "volume_base",
        "close_time",
        "quote_volume_usd",
        "number_of_trades",
        "taker_buy_base",
        "taker_buy_quote",
        "ignore",
    ]
    for month in month_strings(start_month, end_month):
        url = f"{BINANCE_VISION_BASE}/{symbol}/1d/{symbol}-1d-{month}.zip"
        resp = retry_get(url)
        if resp.status_code == 404:
            continue
        with zipfile.ZipFile(io.BytesIO(resp.content)) as zf:
            inner = zf.namelist()[0]
            with zf.open(inner) as handle:
                month_df = pd.read_csv(handle, header=None, names=columns)
        frames.append(month_df)
        time.sleep(0.25)
    if not frames:
        raise RuntimeError(f"No Binance Vision files found for {symbol}")
    out = pd.concat(frames, ignore_index=True)
    out["date"] = pd.to_datetime(out["open_time"], unit="ms", utc=True).dt.tz_localize(None).dt.normalize()
    numeric_cols = ["open", "high", "low", "close", "volume_base", "quote_volume_usd", "taker_buy_base", "taker_buy_quote"]
    for col in numeric_cols:
        out[col] = pd.to_numeric(out[col], errors="coerce")
    out["number_of_trades"] = pd.to_numeric(out["number_of_trades"], errors="coerce")
    out["binance_symbol"] = symbol
    keep_cols = [
        "date",
        "open",
        "high",
        "low",
        "close",
        "volume_base",
        "quote_volume_usd",
        "number_of_trades",
        "taker_buy_base",
        "taker_buy_quote",
        "binance_symbol",
    ]
    return out[keep_cols].sort_values("date").drop_duplicates("date")


def build_market_panel() -> pd.DataFrame:
    start_month = "2020-09"
    end_month = "2024-12"
    all_symbols = [event.binance_symbol for event in EVENTS] + list(BENCHMARKS.keys())
    frames = []
    for symbol in all_symbols:
        cache_path = DATA_DIR / f"{symbol}_daily.csv"
        if cache_path.exists():
            df = pd.read_csv(cache_path, parse_dates=["date"])
        else:
            df = fetch_binance_monthly_klines(symbol, start_month, end_month)
            df.to_csv(cache_path, index=False)
        frames.append(df)
    panel = pd.concat(frames, ignore_index=True)
    panel.to_csv(DATA_DIR / "binance_market_panel_raw.csv", index=False)
    return panel


def prepare_panel(panel: pd.DataFrame) -> pd.DataFrame:
    panel = panel.copy()
    panel["date"] = pd.to_datetime(panel["date"])
    panel = panel.sort_values(["binance_symbol", "date"])
    panel["price_usd"] = panel["close"]
    panel["ret"] = panel.groupby("binance_symbol")["price_usd"].pct_change()
    panel["log_ret"] = np.log(panel["price_usd"]).groupby(panel["binance_symbol"]).diff()
    panel["amihud"] = np.abs(panel["ret"]) / (panel["quote_volume_usd"] / 1_000_000)
    panel["amihud"] = panel["amihud"].replace([np.inf, -np.inf], np.nan)
    panel["avg_trade_size_usd"] = panel["quote_volume_usd"] / panel["number_of_trades"]
    return panel


def build_market_factor(panel: pd.DataFrame) -> pd.DataFrame:
    btc = panel.loc[panel["binance_symbol"] == "BTCUSDT", ["date", "ret"]].rename(columns={"ret": "btc_ret"})
    eth = panel.loc[panel["binance_symbol"] == "ETHUSDT", ["date", "ret"]].rename(columns={"ret": "eth_ret"})
    market = btc.merge(eth, on="date", how="inner")
    market["mkt_ret"] = market[["btc_ret", "eth_ret"]].mean(axis=1)
    return market[["date", "mkt_ret"]]


def event_study_for_token(df: pd.DataFrame, market: pd.DataFrame, event: EventSpec) -> tuple[pd.DataFrame, dict[str, float]]:
    token = df.loc[df["binance_symbol"] == event.binance_symbol].copy()
    token = token.merge(market, on="date", how="left")
    observed_start = token["date"].min()
    event_date = max(pd.Timestamp(event.event_date), observed_start)
    token["event_date"] = event_date
    token["event_day"] = (token["date"] - token["event_date"]).dt.days
    token = token.loc[token["event_day"] >= 0].copy()
    token["abn_ret"] = token["ret"] - token["mkt_ret"]
    token["car"] = token["abn_ret"].fillna(0).cumsum()

    window_map = {
        "car_0_1": (0, 1),
        "car_0_7": (0, 7),
        "car_0_30": (0, 30),
        "car_0_90": (0, 90),
    }
    result = {
        "symbol": event.symbol,
        "label": event.label,
        "binance_symbol": event.binance_symbol,
        "event_date": str(event_date.date()),
        "event_name": event.event_name,
        "source_url": event.source_url,
    }
    for name, (lo, hi) in window_map.items():
        mask = (token["event_day"] >= lo) & (token["event_day"] <= hi)
        result[name] = float(token.loc[mask, "abn_ret"].sum())

    post7 = token.loc[(token["event_day"] >= 0) & (token["event_day"] <= 7)]
    post30 = token.loc[(token["event_day"] >= 0) & (token["event_day"] <= 30)]
    post90 = token.loc[(token["event_day"] >= 31) & (token["event_day"] <= 90)]

    def safe_mean(frame: pd.DataFrame, col: str) -> float:
        series = frame[col].replace([np.inf, -np.inf], np.nan).dropna()
        return float(series.mean()) if not series.empty else math.nan

    result.update(
        {
            "post7_quote_volume_usd": safe_mean(post7, "quote_volume_usd"),
            "post30_quote_volume_usd": safe_mean(post30, "quote_volume_usd"),
            "post90_quote_volume_usd": safe_mean(post90, "quote_volume_usd"),
            "post7_volatility": safe_mean(post7.assign(abs_ret=np.abs(post7["ret"])), "abs_ret"),
            "post30_volatility": safe_mean(post30.assign(abs_ret=np.abs(post30["ret"])), "abs_ret"),
            "post90_volatility": safe_mean(post90.assign(abs_ret=np.abs(post90["ret"])), "abs_ret"),
            "post7_amihud": safe_mean(post7, "amihud"),
            "post30_amihud": safe_mean(post30, "amihud"),
            "post90_amihud": safe_mean(post90, "amihud"),
            "post7_trades": safe_mean(post7, "number_of_trades"),
            "post30_trades": safe_mean(post30, "number_of_trades"),
            "post90_trades": safe_mean(post90, "number_of_trades"),
            "price_event_day": float(token.loc[token["event_day"] == 0, "price_usd"].iloc[0]) if (token["event_day"] == 0).any() else math.nan,
            "price_day_30": float(token.loc[token["event_day"] == 30, "price_usd"].iloc[0]) if (token["event_day"] == 30).any() else math.nan,
            "price_day_90": float(token.loc[token["event_day"] == 90, "price_usd"].iloc[0]) if (token["event_day"] == 90).any() else math.nan,
        }
    )
    token["symbol"] = event.symbol
    token["label"] = event.label
    return token, result


def write_summary_tables(results_df: pd.DataFrame) -> None:
    summary = pd.DataFrame(
        {
            "metric": [
                "Average CAR[0,1]",
                "Average CAR[0,+7]",
                "Average CAR[0,+30]",
                "Average CAR[0,+90]",
                "Mean quote volume ratio (post30/post90)",
                "Mean Amihud ratio (post30/post90)",
            ],
            "value": [
                results_df["car_0_1"].mean(),
                results_df["car_0_7"].mean(),
                results_df["car_0_30"].mean(),
                results_df["car_0_90"].mean(),
                (results_df["post30_quote_volume_usd"] / results_df["post90_quote_volume_usd"]).replace([np.inf, -np.inf], np.nan).mean(),
                (results_df["post30_amihud"] / results_df["post90_amihud"]).replace([np.inf, -np.inf], np.nan).mean(),
            ],
        }
    )
    summary.to_csv(RESULTS_DIR / "summary_metrics.csv", index=False)


def plot_event_cars(event_panel: pd.DataFrame) -> None:
    fig, ax = plt.subplots(figsize=(10, 6))
    for symbol, grp in event_panel.groupby("symbol"):
        window = grp.loc[(grp["event_day"] >= 0) & (grp["event_day"] <= 90)].copy()
        window = window.sort_values("event_day")
        window["car_window"] = window["abn_ret"].fillna(0).cumsum()
        ax.plot(window["event_day"], window["car_window"], label=symbol, linewidth=2)
    ax.axvline(0, color="black", linestyle="--", linewidth=1)
    ax.set_title("Cumulative Market-Adjusted Returns After Major Airdrops")
    ax.set_xlabel("Event day")
    ax.set_ylabel("CAR")
    ax.legend(frameon=False)
    ax.grid(alpha=0.3)
    fig.tight_layout()
    fig.savefig(FIGURES_DIR / "airdrop_cars.png", dpi=200)
    plt.close(fig)


def plot_liquidity_bars(results_df: pd.DataFrame) -> None:
    fig, axes = plt.subplots(1, 2, figsize=(11, 4.8))
    volume_ratio = results_df["post30_quote_volume_usd"] / results_df["post90_quote_volume_usd"]
    amihud_ratio = results_df["post30_amihud"] / results_df["post90_amihud"]
    axes[0].bar(results_df["symbol"], volume_ratio, color="#2f6db3")
    axes[0].set_title("Quote Volume Ratio: Days 0-30 / Days 31-90")
    axes[0].axhline(1, color="black", linewidth=1)
    axes[0].grid(axis="y", alpha=0.3)
    axes[1].bar(results_df["symbol"], amihud_ratio, color="#b35a2f")
    axes[1].set_title("Amihud Ratio: Days 0-30 / Days 31-90")
    axes[1].axhline(1, color="black", linewidth=1)
    axes[1].grid(axis="y", alpha=0.3)
    fig.tight_layout()
    fig.savefig(FIGURES_DIR / "airdrop_liquidity_changes.png", dpi=200)
    plt.close(fig)


def export_latex_table(results_df: pd.DataFrame) -> None:
    table = results_df[
        [
            "symbol",
            "event_date",
            "car_0_1",
            "car_0_7",
            "car_0_30",
            "car_0_90",
            "post30_quote_volume_usd",
            "post90_quote_volume_usd",
            "post30_amihud",
            "post90_amihud",
        ]
    ].copy()
    table = table.rename(
        columns={
            "symbol": "Token",
            "event_date": "Event Date",
            "car_0_1": "CAR[0,1]",
            "car_0_7": "CAR[0,7]",
            "car_0_30": "CAR[0,30]",
            "car_0_90": "CAR[0,90]",
            "post30_quote_volume_usd": "QuoteVol 0-30",
            "post90_quote_volume_usd": "QuoteVol 31-90",
            "post30_amihud": "Amihud 0-30",
            "post90_amihud": "Amihud 31-90",
        }
    )
    latex = table.to_latex(index=False, float_format=lambda x: f"{x:0.4f}")
    (RESULTS_DIR / "event_study_table.tex").write_text(latex, encoding="utf-8")


def fetch_snapshot_governance(events: list[EventSpec]) -> pd.DataFrame:
    rows = []
    endpoint = "https://hub.snapshot.org/graphql"
    for event in events:
        if not event.snapshot_space:
            continue
        start = int(pd.Timestamp(event.event_date, tz="UTC").timestamp())
        end = int((pd.Timestamp(event.event_date, tz="UTC") + pd.Timedelta(days=180)).timestamp())
        query = f"""query {{
          proposals(
            first: 1000,
            where: {{space: "{event.snapshot_space}", created_gte: {start}, created_lte: {end}}},
            orderBy: "created",
            orderDirection: asc
          ) {{
            id
            title
            created
            votes
            scores_total
            state
          }}
        }}"""
        resp = requests.post(endpoint, json={"query": query}, headers={"User-Agent": USER_AGENT}, timeout=60)
        resp.raise_for_status()
        proposals = resp.json()["data"]["proposals"]
        if proposals:
            votes = [proposal["votes"] for proposal in proposals]
            scores = [proposal["scores_total"] for proposal in proposals]
            rows.append(
                {
                    "symbol": event.symbol,
                    "snapshot_space": event.snapshot_space,
                    "governance_window_days": 180,
                    "proposal_count": len(proposals),
                    "avg_votes_per_proposal": float(np.mean(votes)),
                    "median_votes_per_proposal": float(np.median(votes)),
                    "avg_scores_total": float(np.mean(scores)),
                    "first_proposal_date": str(pd.to_datetime(proposals[0]["created"], unit="s").date()),
                }
            )
        else:
            rows.append(
                {
                    "symbol": event.symbol,
                    "snapshot_space": event.snapshot_space,
                    "governance_window_days": 180,
                    "proposal_count": 0,
                    "avg_votes_per_proposal": math.nan,
                    "median_votes_per_proposal": math.nan,
                    "avg_scores_total": math.nan,
                    "first_proposal_date": "",
                }
            )
    return pd.DataFrame(rows)


def main() -> None:
    panel = build_market_panel()
    panel = prepare_panel(panel)
    panel.to_csv(DATA_DIR / "binance_market_panel_prepared.csv", index=False)
    market = build_market_factor(panel)

    event_frames = []
    result_rows = []
    for event in EVENTS:
        token_panel, result_row = event_study_for_token(panel, market, event)
        event_frames.append(token_panel)
        result_rows.append(result_row)

    event_panel = pd.concat(event_frames, ignore_index=True)
    event_panel.to_csv(RESULTS_DIR / "event_panel_with_abnormal_returns.csv", index=False)
    results_df = pd.DataFrame(result_rows).sort_values("event_date")
    results_df.to_csv(RESULTS_DIR / "event_study_results.csv", index=False)
    write_summary_tables(results_df)
    plot_event_cars(event_panel)
    plot_liquidity_bars(results_df)
    export_latex_table(results_df)
    governance_df = fetch_snapshot_governance(EVENTS)
    governance_df.to_csv(RESULTS_DIR / "governance_summary.csv", index=False)

    narrative = {
        "generated_at": pd.Timestamp.utcnow().isoformat(),
        "events": [event.__dict__ for event in EVENTS],
        "benchmark": "equal-weighted BTC/ETH daily return",
        "notes": [
            "Daily OHLCV data are sourced from Binance Vision monthly spot kline archives.",
            "Market-adjusted returns are computed relative to an equal-weighted BTC/ETH benchmark.",
            "Liquidity proxies use quote-volume ratios, trade counts, and an Amihud-style illiquidity ratio based on dollar trading volume.",
            "Governance activity is summarized from Snapshot proposals in the 180 days following the airdrop date for protocols with Snapshot spaces.",
        ],
    }
    (RESULTS_DIR / "analysis_metadata.json").write_text(json.dumps(narrative, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
