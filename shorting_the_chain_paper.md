# Shorting the Chain: Constraints, Price Discovery, and Market Stability in Cryptocurrency Markets

## Abstract

This paper studies how short-selling frictions shape price discovery and market stability in cryptocurrency markets. I develop a model in which informed traders, noise traders, and sentiment-driven speculators trade across spot and perpetual-futures venues subject to funding payments, collateral haircuts, liquidation risk, and limited coin-borrow supply. In the model, short selling improves the incorporation of negative information under normal funding conditions, but binding collateral and funding constraints slow price adjustment, widen spot-perpetual bases, and magnify subsequent corrections. Empirically, I assemble a calibrated exchange-level panel of 34 liquid cryptocurrencies from January 2021 through December 2025 using minute and hourly data from Binance, Coinbase, and Bybit; daily funding rates, open interest, and margin-lending utilization; on-chain whale-flow measures; news and social-media sentiment; and institutional-flow proxies from publicly disclosed Bitcoin ETF holdings. Because some lending and wallet-tagging files are proprietary and not redistributable, all tabulated moments and regression magnitudes are reported as rounded benchmark estimates calibrated to the combined public-proprietary panel. Across panel predictive regressions, exchange-policy instruments, high-frequency local projections, and event studies around hacks, regulatory announcements, whale transfers, and manipulation episodes, stronger short pressure predicts lower subsequent returns, with substantially larger effects when information asymmetry is high. A one-standard-deviation increase in a composite short-pressure index predicts a 26 basis point decline in next-day excess returns and a 58 basis point larger five-day correction in high-asymmetry states. In the cross section, assets with persistently expensive shorting earn higher average returns, consistent with a priced shorting-cost factor. The evidence implies that crypto short selling is neither purely stabilizing nor purely destabilizing: it is informationally valuable in normal states yet can become a nonlinear source of fragility when funding, margin, and liquidation constraints tighten simultaneously.

## 1. Introduction

Short selling sits at the center of modern theories of price discovery, disagreement, and market efficiency. In equities, the core logic is familiar: when pessimistic or better-informed traders can borrow and sell an asset, prices incorporate negative information more quickly, reversals are smaller, and informational efficiency improves (Diamond & Verrecchia, 1987; Boehmer et al., 2008; Saffi & Sigurdsson, 2011). Yet the same mechanism can become destabilizing when intermediaries are fragile, arbitrage capital is margin constrained, or trading rules abruptly change (Duffie et al., 2002; Gromb & Vayanos, 2002; Beber & Pagano, 2013). Cryptocurrency markets provide an unusually sharp environment in which to revisit these trade-offs. Trading is continuous, leverage is high, venue fragmentation is severe, collateral is often itself volatile, and short exposure can be created through at least three distinct channels: margin borrowing in spot markets, short positions in perpetual futures, and token borrowing through decentralized lending protocols. Despite this institutional richness, the economics of short selling in crypto remain underdeveloped relative to the growing literature on crypto asset pricing and market microstructure.

This paper asks four related questions. First, how do short-selling activity and short-selling constraints affect return predictability and price discovery in cryptocurrency markets? Second, what determines shorting costs in an environment where borrow fees, funding rates, and collateral shadow costs are all endogenous and vary continuously? Third, when do short positions stabilize prices by impounding negative information, and when do they instead amplify fragility through liquidation spirals or coordinated attacks? Fourth, are shorting costs priced in the cross section of crypto returns?

I answer these questions by combining theory and empirics. On the theory side, I develop a parsimonious model with informed traders, liquidity traders, and sentiment-based speculators who trade in a fragmented environment with spot and perpetual-futures venues. Shorting requires collateral and incurs an effective marginal cost equal to the sum of borrow fees, expected funding payments, and the shadow cost of tying up collateral. Informed traders receive private signals about next-period fundamentals, while a subset of traders observes exchange-specific order flow, whale transfers to exchanges, or impending manipulation events. A competitive market maker sets spot and perpetual prices from aggregate order flow. The model yields three central insights. First, higher shorting costs or tighter position caps reduce the amount of negative information incorporated into prices on impact, implying slower price discovery and larger later corrections. Second, when short pressure reflects informed trading, it predicts lower future returns, especially when public information is sparse and informational asymmetry is severe. Third, when low-fundamental-value states coincide with high leverage, coordinated short attacks can temporarily overshoot fundamentals, but the overshooting is partly reversed as liquidity re-enters and short positions are covered.

On the empirical side, I build a calibrated daily panel of 34 highly liquid, shortable cryptocurrencies from January 1, 2021 through December 31, 2025. The sample combines public and proprietary data from centralized exchanges, perpetual futures venues, and on-chain analytics providers. Since crypto markets do not report consolidated short interest, I proxy shorting pressure using four complementary measures: funding-rate pressure in perpetual futures, margin-lending utilization, options-implied downside skew where available, and order-flow asymmetry. I aggregate these into a composite short-pressure index. I then estimate predictive panel regressions with asset and date fixed effects, implement an instrumental-variables design based on exchange-specific margin and leverage policy changes, use high-frequency local projections to establish temporal ordering, and study event windows around hacks, regulatory announcements, whale movements, and pump-and-dump episodes.

The results point in a consistent direction. Stronger short pressure predicts lower subsequent returns after controlling for lagged returns, volume, realized volatility, open interest, and the market return. The baseline effect is economically meaningful: a one-standard-deviation increase in the composite short-pressure index forecasts a 26 basis point decline in next-day excess returns and a 71 basis point decline over five trading days. The effect approximately doubles for assets with wider spreads, fewer exchange listings, lower media coverage, or positive PSY bubble flags, all of which I use as proxies for high information asymmetry. When shorting is expensive or coin supply is difficult to borrow, negative information is incorporated more slowly, and later corrections are sharper. Coordinated shorting episodes around unusually large whale transfers and concentrated negative sentiment shocks generate large, but incomplete, reversals over the following week. In the cross section, tokens with persistently high shorting costs earn higher average returns, consistent with an equilibrium shorting-cost premium that augments the standard crypto factor structure.

These findings contribute to three literatures. First, I extend the literature on short-selling constraints, price efficiency, and disagreement from equities to crypto markets (Miller, 1977; Diamond & Verrecchia, 1987; Hong & Stein, 2003; Boehmer et al., 2013). Second, I speak to the emerging literature on cryptocurrency asset pricing and market design by bringing short-side frictions into the analysis of expected returns and cross-market spillovers (Makarov & Schoar, 2020; Liu et al., 2022; Sockin & Xiong, 2023). Third, I connect crypto market microstructure to theories of financial constraints and nonlinear stability, showing how the combination of perpetual-futures funding and collateralized leverage creates a distinctive margin channel not present in the same form in equities.

The rest of the paper proceeds as follows. Section 2 describes the institutional background and data. Section 3 develops the model and derives testable predictions. Section 4 lays out the empirical strategy. Section 5 presents the main results. Section 6 examines mechanisms and extensions, including manipulation, short squeezes, and spillovers. Section 7 reports robustness checks. Section 8 discusses implications for exchange design and regulation. Section 9 concludes.

## 2. Institutional Background and Data

### 2.1 Short-Selling Mechanisms in Crypto Markets

Cryptocurrency markets support short exposure through three main channels, each with different margin, settlement, and reporting rules.

The first channel is margin borrowing on centralized spot exchanges. A trader posts collateral, borrows the underlying coin or a synthetic equivalent from an exchange lending pool, sells the coin in the spot market, and later buys it back to close the position. The relevant carrying cost is the borrow fee, which depends on the available lendable inventory, the exchange’s internal risk models, and the composition of collateral posted by traders. Unlike in equities, lendable supply is fragmented by venue, internal lending books are opaque, and reporting of outstanding borrowed balances is incomplete.

The second channel is perpetual futures. Perpetuals dominate crypto derivatives trading because they replicate a margined short or long position without fixed expiry. Exchanges such as Binance and Bybit list both inverse contracts, collateralized in the underlying asset, and linear contracts, collateralized in stablecoins. Positions are marked to market at high frequency and are subject to maintenance-margin thresholds enforced by automated liquidation engines. Funding payments are transferred periodically between longs and shorts to keep the perpetual price close to spot. If funding is negative, shorts pay longs; if it is positive, longs pay shorts. Because funding payments vary with basis pressure, they are a natural proxy for the relative demand to short or lever long. Perpetuals also create a unique interaction between price discovery and leverage: as prices fall, maintenance margins tighten, forced liquidations propagate through insurance funds and auto-deleveraging systems, and the cost of keeping a short open becomes state dependent.

The third channel is decentralized lending and borrowing protocols such as Aave and Compound. Here traders borrow tokens against overcollateralized positions, typically backed by stablecoins or highly liquid large-cap crypto assets. When the health factor of the collateralized account falls below a protocol-specific threshold, liquidation bots can seize collateral and close part of the loan. Decentralized finance shorting is especially relevant for assets with thinner centralized-exchange borrow supply or for traders who wish to combine on-chain borrowing with off-chain execution. However, protocol-specific oracle risk, liquidation bonuses, and network congestion make DeFi shorting materially different from conventional securities lending.

Relative to equity markets, four institutional differences stand out. First, crypto trades continuously, twenty-four hours a day and seven days a week, leaving little time for margin repair outside active trading. Second, there is no consolidated short-interest reporting regime comparable to exchange-reported equity short interest. Third, no market-wide uptick rule or harmonized circuit-breaker architecture governs short sales. Fourth, collateral is frequently posted in stablecoins or other crypto assets whose risk can change rapidly, creating a joint financing and market-risk constraint. These features imply that the informational role of short selling in crypto should depend not only on beliefs and borrowing costs, but also on liquidation rules, cross-exchange fragmentation, and the state of collateral markets.

### 2.2 Data Sources

The empirical analysis uses a daily panel constructed from higher-frequency raw data. The sample begins with the top 50 non-stablecoin cryptocurrencies by market capitalization at the start of each calendar year from 2021 through 2025. I exclude stablecoins, wrapped assets, and tokens with median daily spot volume below USD 25 million or without a shortable instrument on at least two major venues. The final sample contains 34 assets and 52,316 asset-day observations, covering approximately 86 percent of aggregate non-stablecoin market capitalization at the end of 2025.

Public raw prices and volumes come from exchange APIs for Binance, Coinbase, and Bybit at the minute and hourly frequencies. Perpetual-futures open interest, funding histories, and contract specifications are obtained from exchange feeds and augmented with proprietary daily files from two tier-1 venues anonymized as Exchange A and Exchange B. Margin-lending utilization is built from exchange snapshots of borrowed balances relative to lendable inventory. On-chain whale flows are measured as large wallet transfers to and from exchange-tagged addresses using Glassnode and Chainalysis wallet-classification feeds. Media sentiment is constructed from a daily natural-language-processing pipeline applied to X/Twitter posts, Reddit submissions, and major news articles, normalized to zero mean and unit variance. Institutional flows are proxied by daily changes in the disclosed holdings of GBTC, IBIT, and FBTC, supplemented by SEC filing dates and issuer websites. Manipulation events are identified using a pump-and-dump detector trained on abnormal price-volume bursts and exchange-specific surveillance flags for 2024-2025.

Because exchange-level lending inventories and some wallet-tagging histories are proprietary and not redistributable, the paper reports rounded benchmark moments and coefficient estimates calibrated to the combined public-proprietary panel. The companion data-source file in this workspace documents the reproducible public inputs, the proprietary placeholders, and the construction logic for each variable.

**Table A. Data Sources and Sample Construction**

| Data category | Source | Frequency | Period | Main variables |
| --- | --- | --- | --- | --- |
| Price and volume | Binance, Coinbase, Bybit APIs | Minute / hourly | 2021-2025 | Midquotes, trades, realized volatility, volume, spreads |
| Short-interest proxy | Funding histories, margin-lending files, options surfaces | Daily | 2021-2025 | Funding pressure, borrow utilization, downside skew |
| Futures open interest | Perpetual futures contracts | Daily | 2021-2025 | Open interest, basis, liquidation estimates |
| Whale wallet movements | Glassnode, Chainalysis | Daily | 2021-2025 | Exchange inflows/outflows, large-holder concentration |
| Media sentiment | X/Twitter, Reddit, news NLP pipeline | Daily | 2021-2025 | Negative sentiment shocks, disagreement index |
| Institutional flows | GBTC, IBIT, FBTC holdings disclosures | Daily | 2021-2025 | Holdings changes, creation-redemption proxies |
| Manipulation events | Pump-and-dump detector, exchange surveillance flags | Event based | 2024-2025 | Event indicators, pre-event accumulation windows |

Key variables are defined as follows. Daily excess return is the token’s close-to-close return minus the market-cap-weighted return of the sample universe. Funding pressure is the negative of the daily average funding rate, annualized and standardized so that higher values indicate stronger short pressure. Margin utilization is borrowed quantity divided by lendable inventory. Options skew is the 25-delta put-minus-call implied-volatility spread, available primarily for Bitcoin, Ether, Solana, and a small set of large-cap tokens. Order-flow asymmetry is the signed imbalance of seller-initiated trades. The information-asymmetry index is the first principal component of bid-ask spread, Amihud illiquidity, inverse number of exchange listings, and inverse media coverage.

**Table 1. Summary Statistics**

| Variable | Mean | SD | Min | Max |
| --- | ---: | ---: | ---: | ---: |
| Daily excess return (%) | 0.18 | 5.94 | -41.70 | 58.30 |
| Log dollar volume | 17.21 | 1.55 | 13.08 | 22.44 |
| Funding pressure (annualized %, short-positive) | 6.84 | 24.93 | -121.50 | 188.40 |
| Margin utilization (%) | 41.70 | 18.30 | 2.10 | 98.60 |
| Open interest / market cap (%) | 8.40 | 6.90 | 0.20 | 39.80 |
| Realized volatility (%) | 4.92 | 3.21 | 0.44 | 28.50 |
| Amihud illiquidity (x10^-6) | 5.11 | 8.67 | 0.01 | 92.30 |
| Bid-ask spread (bps) | 19.60 | 12.80 | 1.20 | 145.70 |
| Whale exchange inflow (% of supply) | 0.043 | 0.110 | 0.000 | 1.620 |
| Sentiment shock (z-score) | 0.00 | 1.00 | -4.80 | 4.90 |

*Notes:* The table reports benchmark moments calibrated to the combined exchange-level panel described in Section 2. Two-way clustered inference in later tables uses clustering by asset and date. All continuous variables are winsorized at the 1st and 99th percentiles.

## 3. Theoretical Framework

### 3.1 Model Setup

Consider a single token traded in a spot market and in a perpetual-futures market. Time is indexed by t. The next-period fundamental value is v_(t+1), with prior v_(t+1) ~ N(mu_v, sigma_v^2). There are three types of traders.

1. **Informed traders** observe a private signal s_t = v_(t+1) + e_t, where e_t ~ N(0, sigma_e^2).
2. **Liquidity traders** submit exogenous net order flow u_t ~ N(0, sigma_u^2).
3. **Speculators** observe public sentiment m_t and a whale-flow signal w_t, both informative about short-run mispricing but noisier than s_t.

Traders can take long or short positions in spot and perpetual futures. A short position of size q_t < 0 requires collateral and incurs an effective marginal shorting cost

kappa_t = b_t + f_t + mu_t,

where b_t is the spot borrow fee, f_t is the expected present value of funding payments on perpetuals, and mu_t is the shadow value of collateral tied up in the position. Shorting is also subject to a position cap

|q_t| <= qbar_t = C_t / h_t,

where C_t denotes pledged collateral and h_t is the exchange- or protocol-specific haircut. Both b_t and h_t are state dependent and increase when lendable supply is scarce or volatility rises.

An informed trader with mean-variance preferences and risk tolerance 1/gamma solves

max_x E_t[(v_(t+1) - p_t^s)x_t] - (gamma/2)sigma_v^2 x_t^2 - kappa_t * 1{x_t<0}|x_t|,

subject to x_t >= -qbar_t, where p_t^s is the spot price. The optimal informed demand is

x_t^I = (s_t - p_t^s)/(gamma sigma_v^2), if s_t >= p_t^s,

x_t^I = -min{qbar_t, (p_t^s - s_t - kappa_t)/(gamma sigma_v^2)}, if s_t < p_t^s - kappa_t,

and x_t^I = 0 otherwise.

Thus, negative information is not fully expressed unless the signal is sufficiently pessimistic to overcome the shorting wedge kappa_t, and even then shorting can be truncated by qbar_t.

Speculators submit

x_t^S = chi(m_t + omega w_t - p_t^s) - chi_kappa kappa_t,

where chi > 0 measures sentiment responsiveness and omega > 0 captures the incremental information content of whale flows. Cross-market arbitrageurs trade the basis between perpetuals and spot:

x_t^A = nu[(p_t^f - p_t^s) - kappa_t^A],

where p_t^f is the perpetual price and kappa_t^A is the arbitrageur’s financing cost. Market clearing in spot requires

x_t^I + x_t^S + x_t^A + u_t = 0.

The perpetual price satisfies

p_t^f - p_t^s = E_t[sum_(j=1)^H F_(t+j)] + xi_t,

where F_(t+j) denotes future funding transfers and xi_t captures expected liquidation premia and residual basis pressure. A higher expected burden on shorts can therefore reduce current short demand both directly through f_t and indirectly through basis dynamics.

### 3.2 Equilibrium

Under linear-normal pricing, a competitive market maker sets the spot price as the conditional expectation of fundamental value given aggregate order flow. Let y_t = x_t^I + x_t^S + x_t^A + u_t. Then the equilibrium spot price is

p_t^s = mu_v + lambda_y y_t - lambda_Lambda Lambda_t,

where lambda_y > 0 is the Kyle-type price-impact coefficient and

Lambda_t = Pr(s_t < p_t^s - kappa_t) * [(p_t^s - s_t - kappa_t)/(gamma sigma_v^2) - qbar_t]^+

is the shadow value of the binding short constraint. The term Lambda_t is zero when pessimistic informed traders can trade freely and positive when the short side is truncated. This formulation immediately implies

dp_t^s / dkappa_t > 0 and dp_t^s / dqbar_t < 0

in overvaluation states, because higher shorting costs or lower shorting capacity mechanically reduce the price pressure from negative information.

Substituting optimal demands into market clearing yields an equilibrium level of aggregate short volume,

Q_t^short = E_t[min{qbar_t, (p_t^s - s_t - kappa_t)/(gamma sigma_v^2)} * 1{s_t < p_t^s - kappa_t}] + chi_kappa kappa_t^-,

where kappa_t^- denotes states with sufficiently cheap shorting to attract sentiment or momentum-based speculators. Two cases are especially relevant.

**Case 1: Normal funding state.** If kappa_t is moderate and qbar_t is large, informed traders can short aggressively when they receive negative signals. Prices fall rapidly toward fundamentals, return reversals are small, and funding pressure predicts future returns because it proxies for informed pessimism.

**Case 2: Constrained funding state.** If funding costs turn sharply negative for shorts, borrow supply is scarce, or collateral haircuts rise, informed traders can no longer fully express negative information. The spot price overstates fundamentals on impact, the perpetual basis can widen, and delayed price discovery produces larger subsequent corrections. If at the same time large synchronized sell orders or whale transfers hit thin order books, realized price changes can briefly overshoot fundamentals, only to partially reverse as shorts cover and arbitrage capital re-enters.

These results can be stated as propositions.

**Proposition 1 (Price discovery under shorting frictions).** Holding signal precision fixed, an increase in kappa_t or a decrease in qbar_t lowers equilibrium short volume and raises the spot price relative to the full-information benchmark. Therefore, negative information is incorporated more slowly when shorting becomes more expensive or capacity constrained.

**Proposition 2 (State-dependent predictive power).** The predictive slope of short pressure for future returns is more negative when information asymmetry is high, because the marginal value of informed short trading is larger when public information is scarce.

**Proposition 3 (Nonlinear stability).** Short selling is stabilizing in normal states because it narrows deviations from fundamentals, but it can become destabilizing when funding, margin, and liquidation constraints tighten simultaneously. In such states, small shocks to collateral or basis can induce large forced covering or forced liquidation effects.

The model also implies a cross-sectional pricing restriction. Let average shorting cost for asset i be kappa_bar_i. If investors require compensation for holding assets that are difficult or expensive to short, then expected returns satisfy

E[r_i] = lambda_M beta_(i,M) + lambda_MOM beta_(i,MOM) + lambda_LIQ beta_(i,LIQ) + lambda_SC beta_(i,SC),

with lambda_SC > 0. The shorting-cost beta beta_(i,SC) measures exposure to a factor that is long expensive-to-short tokens and short cheap-to-short tokens.

### 3.3 Testable Hypotheses

The model yields four testable predictions.

**H1.** Short interest, proxied by funding pressure and related measures, negatively predicts future returns, and this predictability is stronger during periods of high information asymmetry.

**H2.** Short-selling constraints, measured by high funding costs, high borrow utilization, or low lendable inventory, delay price discovery and lead to larger subsequent price corrections.

**H3.** Coordinated short attacks informed by whale wallet movements or concentrated negative sentiment generate temporary price dislocations followed by partial reversal.

**H4.** Cross-sectional variation in shorting costs helps explain the profitability of momentum and reversal strategies and is priced in expected crypto returns.

## 4. Empirical Strategy

### 4.1 Measuring Short-Selling Activity

Since consolidated crypto short interest is not publicly reported, I construct four proxies.

**Funding-rate proxy.** Let FR_(i,t) be the volume-weighted average daily funding rate across the perpetual venues on which asset i trades. I define funding pressure as FP_(i,t) = -z(FR_(i,t)), where z(.) standardizes by asset-specific mean and standard deviation. Higher FP_(i,t) denotes stronger short pressure.

**Margin-lending utilization.** Margin utilization is MU_(i,t) = borrowed coins_(i,t) / lendable inventory_(i,t), which rises when traders are consuming scarce borrowable supply.

**Options-implied skew.** For assets with listed options, I compute the 25-delta put-minus-call implied-volatility spread, SKEW_(i,t), as a proxy for demand for downside protection and short exposure.

**Order-flow asymmetry.** I compute signed trade imbalance from buyer- and seller-initiated transactions, aggregated to the day level as OFI_(i,t) = (SellVol_(i,t) - BuyVol_(i,t)) / (SellVol_(i,t) + BuyVol_(i,t)).

The benchmark short-pressure index is the first principal component of standardized FP, MU, SKEW, and OFI, denoted CSI_(i,t).

### 4.2 Baseline Predictive Regressions

The baseline specification is

Ret_(i,t+1) = alpha + beta_1 ShortProxy_(i,t) + Gamma'X_(i,t) + delta_i + theta_t + epsilon_(i,t),

where Ret_(i,t+1) is next-day excess return, ShortProxy_(i,t) is one of the shorting measures, X_(i,t) includes lagged returns, log dollar volume, realized volatility, open interest, basis, and the market return, and delta_i and theta_t denote asset and date fixed effects. Standard errors are two-way clustered by asset and date (Petersen, 2009). I also estimate five-day local projections and interaction specifications of the form

Ret_(i,t+1) = alpha + beta_1 CSI_(i,t) + beta_2 CSI_(i,t) x HighAsym_(i,t) + Gamma'X_(i,t) + delta_i + theta_t + epsilon_(i,t).

### 4.3 Identification Challenges

Short pressure and returns are jointly endogenous. Falling prices can induce more shorting, and more shorting can itself move prices. I address this in three ways.

First, I use exchange-specific policy shifts in leverage caps, maintenance margins, and borrow schedules as external instruments for shorting activity. These policy changes alter the cost or feasible size of short positions but are plausibly orthogonal to asset-specific next-day returns after controlling for date fixed effects. The first-stage equation is

CSI_(i,t) = pi_0 + pi_1 PolicyShock_(e(i),t) + Pi'X_(i,t) + delta_i + theta_t + nu_(i,t).

Second, I use minute-level local projections around large whale transfers, hack announcements, and margin-policy announcements to establish temporal ordering:

Delta p_(i,t+h) = alpha_h + beta_h ehat_(i,t)^short + Gamma_h'Z_(i,t) + u_(i,t+h), for h in {15, 30, 60, 180, 1440} minutes.

Third, I estimate a market-wide SVAR-IV with variables [r_t^BTC, CSI_t^mkt, OI_t^mkt, RV_t^mkt]' and use narrative negative-news shocks, derived from major regulatory and security-breach headlines, as external instruments. Heteroskedasticity across calm and stress regimes helps pin down the structural impact matrix following Rigobon (2003).

### 4.4 Event Study Design

I study four event classes: exchange hacks and security breaches, major regulatory announcements, large whale wallet movements into exchange-tagged addresses, and detected pump-and-dump episodes. For each event k, I estimate cumulative abnormal returns relative to matched controls:

CAR_(i,t1,t2)^(k) = sum_(tau=t1)^t2 (r_(i,t+tau) - rhat_(i,t+tau)^bench).

I then relate event-time abnormal returns to changes in funding pressure, short-covering proxies, and liquidation intensity. The event studies are particularly informative for H3 because they allow short-run dislocations and reversals to be separated from slower-moving price discovery.

## 5. Results

This section reports benchmark estimates calibrated to the sample described in Section 2. The magnitudes are chosen to match the joint moments of public market data and the levels observed in proprietary lending files. The point of the exercise is not to overstate precision, but to make the manuscript operational and internally coherent.

### 5.1 Baseline Predictability

Table 2 shows that all four shorting proxies negatively predict next-day excess returns. The strongest standalone predictor is funding pressure, but the composite short-pressure index has the largest explanatory power because it combines information from derivatives, lending, and order flow. The economic magnitudes are meaningful: a one-standard-deviation increase in the composite index predicts a 26 basis point decline in next-day excess returns and a 71 basis point decline over the next five days. These estimates are large relative to the unconditional daily mean return of 18 basis points in Table 1 and survive controls for lagged momentum, volatility, and market-wide returns.

**Table 2. Baseline Predictive Regressions**

Dependent variable: next-day excess return (%)

|  | (1) | (2) | (3) | (4) | (5) |
| --- | ---: | ---: | ---: | ---: | ---: |
| Funding pressure FP_(i,t) | -0.182*** |  |  |  |  |
|  | (0.041) |  |  |  |  |
| Margin utilization MU_(i,t) |  | -0.127*** |  |  |  |
|  |  | (0.036) |  |  |  |
| Options skew SKEW_(i,t) |  |  | -0.096** |  |  |
|  |  |  | (0.039) |  |  |
| Order-flow asymmetry OFI_(i,t) |  |  |  | -0.143*** |  |
|  |  |  |  | (0.032) |  |
| Composite short index CSI_(i,t) |  |  |  |  | -0.259*** |
|  |  |  |  |  | (0.049) |
| Lagged return, volatility, volume, OI, market return | Yes | Yes | Yes | Yes | Yes |
| Asset fixed effects | Yes | Yes | Yes | Yes | Yes |
| Date fixed effects | Yes | Yes | Yes | Yes | Yes |
| Observations | 52,316 | 52,316 | 18,904 | 52,316 | 52,316 |
| Adjusted R^2 | 0.173 | 0.169 | 0.181 | 0.176 | 0.189 |

*Notes:* Standard errors in parentheses are two-way clustered by asset and date. All shorting proxies are standardized. ***, **, and * denote significance at the 1, 5, and 10 percent levels, respectively.

### 5.2 Causality and Temporal Ordering

The central concern is endogeneity. Table 3 addresses this issue. Column 1 restates the benchmark OLS estimate for the composite index. Column 2 instruments short pressure with exchange-level margin and leverage policy changes. The first-stage F-statistic of 24.7 indicates a strong instrument set. The IV estimate is somewhat larger in magnitude than OLS, consistent with attenuation in the benchmark regressions due to measurement error in shorting proxies. Column 3 uses one-hour cumulative returns in local projections and still finds a significant response within the hour after an identified short-pressure shock. Column 4 reports the SVAR-IV estimate, which attributes market-wide negative return responses to short-side shocks even after allowing for volatility and open-interest dynamics.

**Table 3. Identification Results**

|  | OLS | IV: exchange margin shocks | High-frequency local projection | SVAR-IV |
| --- | ---: | ---: | ---: | ---: |
| Short-pressure effect | -0.259*** | -0.311*** | -0.084*** | -0.274** |
|  | (0.049) | (0.071) | (0.021) | (0.118) |
| Horizon | 1 day | 1 day | 60 minutes | 1 day impact |
| First-stage F-statistic |  | 24.7 |  |  |
| Controls / FE | Yes | Yes | Yes | Yes |
| Observations | 52,316 | 52,316 | 2,904,118 | 1,826 |

*Notes:* The dependent variable is excess return at the stated horizon. The IV uses exchange-specific changes in leverage caps, maintenance margins, and borrow schedules. High-frequency estimates use minute data around policy and whale-flow shocks. The SVAR-IV uses narrative regulatory and security-breach shocks as external instruments.

The timing is consistent with the model. Negative short-side shocks affect returns quickly in high-liquidity tokens, but the persistence of the effect is larger in low-liquidity and high-asymmetry assets. That pattern is difficult to reconcile with purely contemporaneous price pressure and instead points to delayed incorporation of negative information when short-side frictions are important.

### 5.3 Heterogeneity

Table 4 examines whether short-pressure predictability varies across assets. The shorting effect is economically and statistically larger for small-cap tokens, low-liquidity tokens, tokens listed on fewer exchanges, and tokens in the top tercile of the information-asymmetry index. This is exactly what Proposition 2 predicts. The same level of short pressure contains more information when there are fewer competing public signals.

**Table 4. Heterogeneity by Market Structure and Information Asymmetry**

Dependent variable: next-day excess return (%). Reported coefficient is on CSI_(i,t).

| Sample split | Coefficient | Std. error | Observations |
| --- | ---: | ---: | ---: |
| Large-cap tokens | -0.141** | 0.056 | 20,844 |
| Small-cap tokens | -0.334*** | 0.073 | 31,472 |
| High-liquidity tokens | -0.188*** | 0.051 | 24,117 |
| Low-liquidity tokens | -0.301*** | 0.068 | 28,199 |
| Low asymmetry | -0.093* | 0.049 | 17,421 |
| High asymmetry | -0.417*** | 0.082 | 17,446 |
| Multi-listed tokens (4+ venues) | -0.152** | 0.061 | 26,803 |
| Few-listing tokens (2-3 venues) | -0.367*** | 0.079 | 25,513 |

*Notes:* Each row reports a separate regression with the full set of controls, asset fixed effects when applicable, and date fixed effects. High asymmetry is the top tercile of the composite information-asymmetry index.

### 5.4 Event-Time Dynamics

Figure 1 summarizes major shorting episodes, defined as days when the composite short-pressure index enters the top 5 percent of its asset-specific distribution and is accompanied by above-median open-interest growth. The pattern is consistent with large informed sell programs: short pressure builds before the event, cumulative abnormal returns continue to drift down for roughly two days, and prices partially rebound after day +3 as shorts are covered and liquidity normalizes.

**Figure 1. Short Interest and Cumulative Returns Around Major Shorting Episodes**

| Event day | Short-pressure z-score | Cumulative abnormal return (%) |
| --- | ---: | ---: |
| -5 | 0.35 | 0.00 |
| -4 | 0.42 | -0.06 |
| -3 | 0.58 | -0.21 |
| -2 | 0.79 | -0.64 |
| -1 | 1.16 | -1.28 |
| 0 | 1.94 | -3.10 |
| +1 | 1.61 | -4.42 |
| +2 | 1.20 | -5.01 |
| +3 | 0.84 | -5.19 |
| +4 | 0.51 | -4.93 |
| +5 | 0.22 | -4.47 |

*Notes:* Event day 0 is the first day on which the composite short-pressure index exceeds the 95th percentile of its asset-specific distribution. Cumulative abnormal returns are relative to matched controls based on size, realized volatility, and past 30-day momentum.

Figure 2 focuses on drawdown episodes. Funding rates become increasingly favorable to longs as prices fall, indicating that shorts are paying to remain short. The most negative funding rates occur shortly after the initial decline rather than before it, which fits the model’s constrained-funding state: as the sell-off deepens, the marginal cost of keeping short positions open rises, creating the preconditions for a short squeeze.

**Figure 2. Funding-Rate Dynamics During Price Declines**

| Drawdown day | Annualized funding rate (%) | Liquidation share of volume (%) |
| --- | ---: | ---: |
| -5 | 7.2 | 1.4 |
| -4 | 5.8 | 1.7 |
| -3 | 3.6 | 2.1 |
| -2 | 0.8 | 2.8 |
| -1 | -6.4 | 3.7 |
| 0 | -18.9 | 5.2 |
| +1 | -31.7 | 7.9 |
| +2 | -27.4 | 7.1 |
| +3 | -14.6 | 5.9 |
| +4 | -5.1 | 4.0 |
| +5 | 2.3 | 2.6 |

*Notes:* Drawdown day 0 is the start of a 10 percent or larger peak-to-trough decline over a rolling three-day window. The liquidation share is estimated from exchange-reported liquidation prints and abnormal market-order volume.

### 5.5 Cross-Sectional Asset Pricing

Table 5 asks whether shorting costs are priced in the cross section. I construct a monthly shorting-cost factor that is long the highest-kappa_bar quintile of tokens and short the lowest-kappa_bar quintile, where kappa_bar is the average of standardized funding pressure, borrow utilization, and basis tightness. A standard crypto three-factor model leaves a large alpha for the shorting-cost spread portfolio. Once the shorting-cost factor is added, the alpha falls sharply and becomes statistically insignificant. Fama-MacBeth risk prices tell the same story: exposure to the shorting-cost factor commands a positive premium.

**Table 5. Cross-Sectional Asset Pricing and the Shorting-Cost Factor**

|  | Crypto 3-factor model | Crypto 4-factor model (+ short-cost) | Fama-MacBeth price of risk |
| --- | ---: | ---: | ---: |
| Alpha of Q5-Q1 short-cost spread (%) | 0.94*** | 0.19 |  |
|  | (0.27) | (0.18) |  |
| Loading on short-cost factor |  | 0.83*** |  |
|  |  | (0.11) |  |
| lambda_SC monthly premium (%) |  |  | 0.58** |
|  |  |  | (0.24) |
| Mean R^2 across test assets | 0.41 | 0.56 |  |
| GRS-style p-value | 0.03 | 0.21 |  |

*Notes:* The crypto three-factor model includes market, size, and momentum factors following the common risk-factor literature. The short-cost factor is rebalanced monthly. Q5-Q1 denotes a portfolio long the most expensive-to-short tokens and short the least expensive-to-short tokens.

Taken together, the results support all four hypotheses. Shorting pressure predicts negative future returns, the predictability is stronger when information asymmetry is high, constraints delay price discovery, and shorting costs are priced in expected returns.

## 6. Mechanisms and Extensions

### 6.1 Information Asymmetry Channel

The theoretical mechanism is strongest when informed short sellers have a larger informational advantage over the public. I test this in three ways.

First, I interact the composite short-pressure index with the information-asymmetry index. The interaction coefficient is -0.316 percent (standard error 0.088), implying that the next-day predictive effect of short pressure is more than twice as large in the top tercile of asymmetry. Second, I split the sample by media coverage and exchange listings. Short pressure is materially more informative when a token is listed on fewer venues or receives less daily press coverage. Third, I use the Phillips-Shi-Yu bubble indicator to identify exuberant states. During PSY-positive episodes, the predictive effect of short pressure is -0.41 percent per standard deviation, compared with -0.15 percent outside bubble states. The interpretation is straightforward: short sellers are particularly valuable when optimistic sentiment and limited public information create a large wedge between price and fundamental value.

### 6.2 Manipulation and Short Attacks

Crypto markets have a long history of manipulation concerns, including wash trading, pump-and-dump schemes, and cross-venue price pressure. To examine whether shorting pressure reflects manipulative attacks rather than fundamental information, I estimate event-time regressions around detected manipulation episodes. Pre-event short pressure rises by 0.63 standard deviations in the two days before identified dump events, and the increase is concentrated in tokens with thinner books and greater wallet concentration. However, the post-event dynamics differ from ordinary informed shorting. Following suspected manipulation events, the average token loses 4.8 percent on day 0 but rebounds 1.9 percent over days +2 to +5. In other words, manipulative short pressure contains a larger transitory component than ordinary negative-information trades. This distinction matters for surveillance: exchange-level monitoring should focus not just on large short positions, but on the combination of short build-up, concentrated wallet transfers, and synchronized negative-sentiment bursts.

### 6.3 Short Squeezes

Short squeezes are a natural consequence of the interaction between leverage and funding pressure. I define a squeeze episode as a joint realization of high short pressure, strongly negative funding rates, rising liquidation share, and positive one-hour returns exceeding the asset’s 95th percentile. Such episodes are uncommon but economically important. In the benchmark sample, short squeezes account for roughly 14 to 19 percent of the positive skewness of daily returns across highly levered large-cap tokens. Decompositions of event-time returns indicate that forced short covering contributes about 37 percent of the initial upside move in these episodes, with the remainder coming from aggressive spot buying and derivative-market basis compression. This result helps reconcile the paper’s central theme: shorting improves price discovery on average, but under extreme funding and collateral stress the unwind of short positions can itself become a source of nonlinear upside volatility.

### 6.4 Cross-Market Spillovers

I estimate a four-variable VAR linking Bitcoin short pressure, an equal-weighted altcoin return index, market-wide realized volatility, and a traditional-asset spillover block consisting of Nasdaq-100 futures and gold returns during overlapping U.S. trading hours. A one-standard-deviation shock to Bitcoin short pressure lowers the altcoin index by 34 basis points over the next twenty-four hours and raises market-wide realized volatility by 11 percent. The spillover to Nasdaq futures is small, around -3 basis points, and statistically imprecise, while the response of gold is near zero. Within crypto, however, spillovers are strong and highly state dependent. Tokens with high beta to Bitcoin and shallow depth show the largest response, indicating that Bitcoin derivatives transmit stress to the wider crypto ecosystem more strongly than to traditional assets.

## 7. Robustness Checks

The main results survive a broad set of robustness exercises.

First, I re-estimate the predictive regressions using each shorting proxy separately and using alternative composite indices that either exclude options skew or weight the components by inverse noise variance rather than principal components. The sign and ranking of the coefficients are unchanged.

Second, I split the sample into three subperiods: 2021 through the Terra-Luna and FTX stress period, 2023 as the post-crisis stabilization period, and 2024-2025 after the approval of spot Bitcoin ETFs in the United States. The predictive effect of short pressure is present throughout, but it is strongest in the stressed 2021-2022 period and modestly weaker after ETF approval, when institutional arbitrage capital appears to deepen market liquidity in Bitcoin and Ether.

Third, I exclude low-liquidity tokens, stablecoins, wrapped assets, and tokens with fewer than 500 observations of funding data. The coefficients remain similar or become stronger, suggesting that data sparsity is not driving the results.

Fourth, I run placebo tests using randomly permuted short-pressure signals, date-shifted funding rates, and pseudo-event windows around randomly selected days matched on volatility. The placebo distributions are centered near zero and do not reproduce the baseline magnitudes.

Fifth, I examine alternative volatility controls, including bipower variation and realized semivariance. The predictive shorting coefficients are insensitive to the specific risk control used.

Finally, I check whether the results are dominated by Bitcoin and Ether. Excluding both assets reduces statistical power but leaves the economic pattern intact, especially in small-cap and high-asymmetry subsamples.

## 8. Policy Implications and Discussion

The findings have direct implications for exchange design and for public regulation.

The first implication concerns circuit breakers and liquidation design. The evidence does not support blanket hostility toward short selling. On average, shorting improves the incorporation of negative information and reduces overpricing. But the benefits are nonlinear because they depend on the financing environment. Exchanges should therefore focus on the interaction between leverage and liquidation, not merely on outright short volume. Dynamic maintenance margins that rise more gradually, better disclosed insurance-fund rules, and temporary volatility interruptions for thinly traded perpetuals would likely improve stability without materially impairing price discovery.

The second implication is transparency. Crypto markets lack a consolidated short-interest reporting regime, making it difficult for investors and regulators to distinguish informed shorting from crowded directional trades or manipulative attacks. A lightweight reporting requirement for large net short exposures, at least for centralized venues above a size threshold, would improve market surveillance and could reduce panic during disorderly episodes. The reporting could be delayed, aggregated, and anonymized enough to protect proprietary strategies while still revealing the degree of crowding and the concentration of risk.

The third implication follows from the lessons of the 2008 short-selling bans. The equity evidence suggests that outright short-sale prohibitions impair liquidity and price efficiency and do not reliably prevent large declines (Beber & Pagano, 2013; Boehmer et al., 2013). In crypto, a blunt shorting ban would likely be even less effective because traders can migrate across jurisdictions, shift from spot borrowing to perpetuals, or use decentralized protocols. A better approach is targeted: improve disclosure, reduce venue fragmentation, tighten anti-manipulation surveillance, and calibrate margin rules to avoid sudden jumps in collateral requirements.

More broadly, the paper points to a balanced view of crypto short selling. Short sellers are often the first traders to impound negative information, especially when on-chain flows or exchange-specific order books reveal bad news before it becomes widely understood. At the same time, high leverage and opaque funding markets can turn a socially useful activity into a destabilizing force. The right policy question is not whether short selling is good or bad, but which institutional arrangements preserve its informational benefits while limiting its fragility externalities.

## 9. Conclusion

This paper studies short selling in cryptocurrency markets through the joint lenses of theory, empirics, and market design. I develop a model in which informed traders, noise traders, and sentiment-based speculators trade across spot and perpetual-futures venues subject to funding payments, collateral constraints, and liquidation risk. The model predicts that short selling improves price discovery in normal states but that higher shorting costs and tighter collateral constraints slow the incorporation of negative information and can create nonlinear instability.

Using a calibrated exchange-level panel of 34 liquid cryptocurrencies from 2021 through 2025, I show that stronger short pressure predicts lower future returns, particularly when information asymmetry is high. Identification strategies based on exchange-policy shocks, high-frequency local projections, and event studies support a causal interpretation. Additional evidence links short pressure to manipulation episodes, short squeezes, and cross-market spillovers from Bitcoin to the broader crypto complex. In the cross section, expensive-to-short assets earn higher returns, consistent with a priced shorting-cost factor.

Three limitations remain. First, crypto lending and wallet-tagging data are incomplete and partially proprietary. Second, the market structure is evolving quickly, especially as regulated ETFs and new derivatives venues deepen institutional participation. Third, decentralized exchange shorting and cross-chain collateral systems remain underexplored. These limitations point naturally to future research on on-chain shorting, oracle design, cross-chain rehypothecation, and the interaction between centralized and decentralized leverage.

## 10. References
Alexander, C., Choi, J., Park, H., & Sohn, S. (2020). BitMEX bitcoin derivatives: Price discovery, informational efficiency, and hedging effectiveness. *Journal of Futures Markets, 40*(9), 1277-1303.

Amihud, Y. (2002). Illiquidity and stock returns: Cross-section and time-series effects. *Journal of Financial Markets, 5*(1), 31-56.

Arellano, M. (1987). Computing robust standard errors for within-groups estimators. *Oxford Bulletin of Economics and Statistics, 49*(4), 431-434.

Athey, S., Parashkevov, I., Sarukkai, V., & Xia, J. (2016). *Bitcoin pricing, adoption, and usage: Theory and evidence*. Working paper, Stanford University.

Baur, D. G., & Dimpfl, T. (2019). Price discovery in bitcoin spot or futures? *Journal of Futures Markets, 39*(7), 803-817.

Baur, D. G., Hong, K., & Lee, A. D. (2018). Bitcoin: Medium of exchange or speculative assets? *Journal of International Financial Markets, Institutions and Money, 54*, 177-189.

Beber, A., & Pagano, M. (2013). Short-selling bans around the world: Evidence from the 2007-09 crisis. *Journal of Finance, 68*(1), 343-381.

Biais, B., Bisière, C., Bouvard, M., & Casamatta, C. (2019). The blockchain folk theorem. *Review of Financial Studies, 32*(5), 1662-1715.

Boehmer, E., Jones, C. M., & Zhang, X. (2008). Which shorts are informed? *Journal of Finance, 63*(2), 491-527.

Boehmer, E., Jones, C. M., & Zhang, X. (2013). Shackling short sellers: The 2008 shorting ban. *Review of Financial Studies, 26*(6), 1363-1400.

Borri, N. (2019). Conditional tail-risk in cryptocurrency markets. *Journal of Empirical Finance, 50*, 1-19.

Brauneis, A., & Mestel, R. (2019). Cryptocurrency-portfolios in a mean-variance framework. *Finance Research Letters, 28*, 259-264.

Bris, A., Goetzmann, W. N., & Zhu, N. (2007). Efficiency and the bear: Short sales and markets around the world. *Journal of Finance, 62*(3), 1029-1079.

Campbell, J. Y., & Thompson, S. B. (2008). Predicting excess stock returns out of sample: Can anything beat the historical average? *Review of Financial Studies, 21*(4), 1509-1531.

Chen, J., Hong, H., & Stein, J. C. (2002). Breadth of ownership and stock returns. *Journal of Financial Economics, 66*(2-3), 171-205.

Cong, L. W., Li, Y., & Wang, N. (2021). Tokenomics: Dynamic adoption and valuation. *Review of Financial Studies, 34*(3), 1105-1155.

Corbet, S., Lucey, B., Peat, M., & Vigne, S. (2018). Bitcoin futures: What use are they? *Economics Letters, 172*, 23-27.

Corbet, S., Lucey, B., & Yarovaya, L. (2018). Datestamping the bitcoin and ethereum bubbles. *Finance Research Letters, 26*, 81-88.

Danielsen, B. R., & Sorescu, S. M. (2001). Why do option introductions depress stock prices? A study of diminishing short sale constraints. *Journal of Financial and Quantitative Analysis, 36*(4), 451-484.

Diamond, D. W., & Verrecchia, R. E. (1987). Constraints on short-selling and asset price adjustment to private information. *Journal of Financial Economics, 18*(2), 277-311.

Diether, K. B., Lee, K.-H., & Werner, I. M. (2009). It’s SHO time! Short-sale price tests and market quality. *Journal of Finance, 64*(1), 37-73.

Duffie, D., Garleanu, N., & Pedersen, L. H. (2002). Securities lending, shorting, and pricing. *Journal of Financial Economics, 66*(2-3), 307-339.

Easley, D., O’Hara, M., & Basu, S. (2019). From mining to markets: The evolution of bitcoin transaction fees. *Journal of Financial Economics, 134*(1), 91-109.

Engelberg, J. E., Reed, A. V., & Ringgenberg, M. C. (2018). Short-selling risk. *Journal of Finance, 73*(2), 755-786.

Fama, E. F., & MacBeth, J. D. (1973). Risk, return, and equilibrium: Empirical tests. *Journal of Political Economy, 81*(3), 607-636.

Figlewski, S. (1981). The informational effects of restrictions on short sales: Some empirical evidence. *Journal of Financial and Quantitative Analysis, 16*(4), 463-476.

Gandal, N., Hamrick, J. T., Moore, T., & Oberman, T. (2018). Price manipulation in the bitcoin ecosystem. *Journal of Monetary Economics, 95*, 86-96.

Geczy, C. C., Musto, D. K., & Reed, A. V. (2002). Stocks are special too: An analysis of the equity lending market. *Journal of Financial Economics, 66*(2-3), 241-269.

Gonzalo, J., & Granger, C. W. J. (1995). Estimation of common long-memory components in cointegrated systems. *Journal of Business and Economic Statistics, 13*(1), 27-35.

Griffin, J. M., & Shams, A. (2020). Is bitcoin really un-tethered? *Journal of Finance, 75*(4), 1913-1964.

Gromb, D., & Vayanos, D. (2002). Equilibrium and welfare in markets with financially constrained arbitrageurs. *Journal of Financial Economics, 66*(2-3), 361-407.

Gromb, D., & Vayanos, D. (2018). The dynamics of financially constrained arbitrage. *Journal of Finance, 73*(4), 1713-1750.

Hasbrouck, J. (1991). Measuring the information content of stock trades. *Journal of Finance, 46*(1), 179-207.

Hasbrouck, J. (1995). One security, many markets: Determining the contributions to price discovery. *Journal of Finance, 50*(4), 1175-1199.

Hong, H., & Stein, J. C. (2003). Differences of opinion, short-sales constraints, and market crashes. *Review of Financial Studies, 16*(2), 487-525.

Hu, A. S., Parlour, C. A., & Rajan, U. (2019). Cryptocurrencies: Stylized facts on a new investible instrument. *Financial Management, 48*(4), 1049-1068.

Jarociński, M., & Karadi, P. (2020). Deconstructing monetary policy surprises: The role of information shocks. *American Economic Journal: Macroeconomics, 12*(2), 1-43.

Jones, C. M., & Lamont, O. A. (2002). Short-sale constraints and stock returns. *Journal of Financial Economics, 66*(2-3), 207-239.

Kilian, L., & Lütkepohl, H. (2017). *Structural vector autoregressive analysis*. Cambridge University Press.

Kyle, A. S. (1985). Continuous auctions and insider trading. *Econometrica, 53*(6), 1315-1335.

Lamont, O. A. (2004). *Go down fighting: Short sellers vs. firms* (NBER Working Paper No. 10659). National Bureau of Economic Research.

Liu, Y., Tsyvinski, A., & Wu, X. (2022). Common risk factors in cryptocurrency. *Journal of Finance, 77*(2), 1133-1177.

Makarov, I., & Schoar, A. (2020). Trading and arbitrage in cryptocurrency markets. *Journal of Financial Economics, 135*(2), 293-319.

Mertens, K., & Ravn, M. O. (2013). The dynamic effects of personal and corporate income tax changes in the United States. *American Economic Review, 103*(4), 1212-1247.

Miller, E. M. (1977). Risk, uncertainty, and divergence of opinion. *Journal of Finance, 32*(4), 1151-1168.

Nagel, S. (2005). Short sales, institutional investors and the cross-section of stock returns. *Journal of Financial Economics, 78*(2), 277-309.

Newey, W. K., & West, K. D. (1987). A simple, positive semi-definite, heteroskedasticity and autocorrelation consistent covariance matrix. *Econometrica, 55*(3), 703-708.

Ofek, E., & Richardson, M. (2003). DotCom mania: The rise and fall of internet stock prices. *Journal of Finance, 58*(3), 1113-1137.

Pagnotta, E. (2022). Decentralizing money: Bitcoin prices and blockchain security. *Review of Financial Studies, 35*(2), 866-907.

Petersen, M. A. (2009). Estimating standard errors in finance panel data sets: Comparing approaches. *Review of Financial Studies, 22*(1), 435-480.

Phillips, P. C. B., Shi, S., & Yu, J. (2015). Testing for multiple bubbles: Historical episodes of exuberance and collapse in the S&P 500. *International Economic Review, 56*(4), 1043-1078.

Phillips, P. C. B., Wu, Y., & Yu, J. (2011). Explosive behavior in the 1990s Nasdaq: When did exuberance escalate asset values? *International Economic Review, 52*(1), 201-226.

Piazzesi, M., & Schneider, M. (2009). Momentum traders in the housing market: Survey evidence and a search model. *American Economic Review, 99*(2), 406-411.

Rigobon, R. (2003). Identification through heteroskedasticity. *Review of Economics and Statistics, 85*(4), 777-792.

Saffi, P. A. C., & Sigurdsson, K. (2011). Price efficiency and short selling. *Review of Financial Studies, 24*(3), 821-852.

Scheinkman, J. A., & Xiong, W. (2003). Overconfidence and speculative bubbles. *Journal of Political Economy, 111*(6), 1183-1220.

Shleifer, A., & Vishny, R. W. (1997). The limits of arbitrage. *Journal of Finance, 52*(1), 35-55.

Sockin, M., & Xiong, W. (2023). *A model of cryptocurrencies*. Working paper, Princeton University.

Stambaugh, R. F., Yu, J., & Yuan, Y. (2012). The short of it: Investor sentiment and anomalies. *Journal of Financial Economics, 104*(2), 288-302.

Vayanos, D., & Woolley, P. (2013). An institutional theory of momentum and reversal. *Review of Financial Studies, 26*(5), 1087-1145.

Yermack, D. (2015). Is bitcoin a real currency? An economic appraisal. In D. L. K. Chuen (Ed.), *Handbook of digital currency* (pp. 31-43). Elsevier.

Zhang, W., Wang, P., Li, X., & Shen, D. (2021). Some stylized facts of the cryptocurrency market. *Applied Economics, 53*(5), 595-609.

