from __future__ import annotations

import argparse
import importlib
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Callable


DEFAULT_OUTPUT_DIR = Path.home() / "Downloads" / "VideoDownloads"
OUTPUT_TEMPLATE = "%(title).180B [%(id)s].%(ext)s"


LogCallback = Callable[[str], None]
ProgressCallback = Callable[[dict], None]


@dataclass(frozen=True)
class DownloadProfile:
    key: str
    label: str
    description: str


DOWNLOAD_PROFILES: dict[str, DownloadProfile] = {
    "video_best": DownloadProfile(
        key="video_best",
        label="视频(最佳质量)",
        description="优先下载最佳画质和音质，并在本地合并为单个文件。",
    ),
    "video_mp4": DownloadProfile(
        key="video_mp4",
        label="视频(MP4优先)",
        description="优先下载 MP4 格式，兼容性更好。",
    ),
    "audio_mp3": DownloadProfile(
        key="audio_mp3",
        label="音频(MP3)",
        description="提取音频并输出为 MP3。",
    ),
}


def _default_log(message: str) -> None:
    print(message)


def ensure_dependencies(log_callback: LogCallback | None = None) -> None:
    log = log_callback or _default_log
    required_packages = {
        "yt_dlp": "yt-dlp",
        "imageio_ffmpeg": "imageio-ffmpeg",
    }

    for module_name, package_name in required_packages.items():
        try:
            importlib.import_module(module_name)
        except ImportError:
            log(f"正在安装依赖: {package_name}")
            subprocess.check_call(
                [sys.executable, "-m", "pip", "install", "--user", package_name]
            )


def resolve_ffmpeg_path(log_callback: LogCallback | None = None) -> str | None:
    log = log_callback or _default_log
    ensure_dependencies(log)
    imageio_ffmpeg = importlib.import_module("imageio_ffmpeg")

    try:
        ffmpeg_path = imageio_ffmpeg.get_ffmpeg_exe()
    except Exception as exc:  # pragma: no cover - defensive runtime path
        log(f"未能准备 FFmpeg，将尝试使用免合并模式。原因: {exc}")
        return None

    return str(ffmpeg_path)


def resolve_format(profile_key: str, ffmpeg_path: str | None) -> str:
    if profile_key == "video_best":
        if ffmpeg_path:
            return "bv*+ba/b"
        return "best[ext=mp4]/best"

    if profile_key == "video_mp4":
        if ffmpeg_path:
            return "bv*[ext=mp4]+ba[ext=m4a]/b[ext=mp4]/best[ext=mp4]/best"
        return "best[ext=mp4]/best"

    if profile_key == "audio_mp3":
        return "bestaudio/best"

    raise ValueError(f"不支持的下载模式: {profile_key}")


def build_ydl_options(
    profile_key: str,
    output_dir: Path,
    ffmpeg_path: str | None,
    cookies_browser: str | None,
    progress_callback: ProgressCallback | None,
) -> dict:
    options: dict = {
        "outtmpl": str(output_dir / OUTPUT_TEMPLATE),
        "format": resolve_format(profile_key, ffmpeg_path),
        "noplaylist": True,
        "quiet": True,
        "noprogress": True,
        "no_warnings": True,
        "retries": 10,
        "continuedl": True,
        "overwrites": False,
        "windowsfilenames": False,
        "concurrent_fragment_downloads": 4,
    }

    if cookies_browser:
        options["cookiesfrombrowser"] = (cookies_browser,)

    if ffmpeg_path:
        options["ffmpeg_location"] = ffmpeg_path
        options["prefer_ffmpeg"] = True

    if profile_key in {"video_best", "video_mp4"} and ffmpeg_path:
        options["merge_output_format"] = "mp4"

    if profile_key == "audio_mp3" and ffmpeg_path:
        options["postprocessors"] = [
            {
                "key": "FFmpegExtractAudio",
                "preferredcodec": "mp3",
                "preferredquality": "192",
            }
        ]

    if progress_callback:
        options["progress_hooks"] = [progress_callback]

    return options


def guess_output_path(
    info: dict,
    profile_key: str,
    ffmpeg_path: str | None,
    downloader,
) -> Path | None:
    try:
        candidate = Path(downloader.prepare_filename(info))
    except Exception:
        return None

    if profile_key == "audio_mp3" and ffmpeg_path:
        return candidate.with_suffix(".mp3")

    if profile_key in {"video_best", "video_mp4"} and ffmpeg_path:
        return candidate.with_suffix(".mp4")

    return candidate


def download_url(
    url: str,
    output_dir: str | Path | None = None,
    profile_key: str = "video_best",
    cookies_browser: str | None = None,
    log_callback: LogCallback | None = None,
    progress_callback: ProgressCallback | None = None,
) -> dict:
    log = log_callback or _default_log

    if profile_key not in DOWNLOAD_PROFILES:
        raise ValueError(f"不支持的下载模式: {profile_key}")

    if not url.strip():
        raise ValueError("URL 不能为空。")

    output_path = Path(output_dir or DEFAULT_OUTPUT_DIR).expanduser().resolve()
    output_path.mkdir(parents=True, exist_ok=True)

    log(f"输出目录: {output_path}")
    log(f"下载模式: {DOWNLOAD_PROFILES[profile_key].label}")

    if cookies_browser:
        log(f"浏览器 Cookie: {cookies_browser}")

    ensure_dependencies(log)
    yt_dlp = importlib.import_module("yt_dlp")
    ffmpeg_path = resolve_ffmpeg_path(log)

    if not ffmpeg_path and profile_key != "audio_mp3":
        log("当前未找到 FFmpeg，将优先下载单文件视频流。")

    def hook(payload: dict) -> None:
        if progress_callback:
            progress_callback(payload)

    ydl_options = build_ydl_options(
        profile_key=profile_key,
        output_dir=output_path,
        ffmpeg_path=ffmpeg_path,
        cookies_browser=cookies_browser,
        progress_callback=hook if progress_callback else None,
    )

    log("开始解析视频地址...")
    with yt_dlp.YoutubeDL(ydl_options) as downloader:
        info = downloader.extract_info(url, download=True)
        final_path = guess_output_path(info, profile_key, ffmpeg_path, downloader)

    result = {
        "title": info.get("title"),
        "uploader": info.get("uploader"),
        "webpage_url": info.get("webpage_url") or url,
        "output_dir": str(output_path),
        "output_path": str(final_path) if final_path else None,
        "profile": profile_key,
    }

    if result["output_path"]:
        log(f"下载完成: {result['output_path']}")
    else:
        log("下载完成。")

    return result


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="给定 URL 下载视频或音频。")
    parser.add_argument("url", nargs="?", help="要下载的视频地址")
    parser.add_argument(
        "--output",
        default=str(DEFAULT_OUTPUT_DIR),
        help="输出目录，默认为 ~/Downloads/VideoDownloads",
    )
    parser.add_argument(
        "--profile",
        default="video_best",
        choices=sorted(DOWNLOAD_PROFILES.keys()),
        help="下载模式",
    )
    parser.add_argument(
        "--cookies-browser",
        choices=["chrome", "edge", "firefox", "brave"],
        help="从本机浏览器读取登录态 Cookie",
    )
    parser.add_argument(
        "--list-profiles",
        action="store_true",
        help="列出支持的下载模式",
    )
    return parser


def main() -> int:
    parser = build_parser()
    args = parser.parse_args()

    if args.list_profiles:
        for profile in DOWNLOAD_PROFILES.values():
            print(f"{profile.key}: {profile.label} - {profile.description}")
        return 0

    if not args.url:
        parser.print_help()
        return 0

    def cli_progress(payload: dict) -> None:
        status = payload.get("status")
        if status == "downloading":
            percent = payload.get("_percent_str", "").strip()
            speed = payload.get("_speed_str", "").strip()
            eta = payload.get("_eta_str", "").strip() or payload.get("eta", "")
            filename = Path(payload.get("filename", "")).name
            message = f"下载中 {percent}"
            if speed:
                message += f" | 速度 {speed}"
            if eta:
                message += f" | 剩余 {eta}"
            if filename:
                message += f" | {filename}"
            print(message)
        elif status == "finished":
            print("文件下载完成，正在进行合并或后处理...")

    try:
        download_url(
            url=args.url,
            output_dir=args.output,
            profile_key=args.profile,
            cookies_browser=args.cookies_browser,
            progress_callback=cli_progress,
        )
    except Exception as exc:
        print(f"下载失败: {exc}", file=sys.stderr)
        return 1

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
