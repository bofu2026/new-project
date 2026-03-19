# 视频下载工具

这是一个本地 Windows 小工具，支持输入一个 URL 后下载视频或音频。

## 启动方式

直接双击：

`启动视频下载工具.bat`

或者命令行运行：

```powershell
python scripts/video_downloader_gui.py
```

## 命令行模式

```powershell
python scripts/video_downloader.py "https://example.com/video"
python scripts/video_downloader.py "https://example.com/video" --profile video_mp4
python scripts/video_downloader.py "https://example.com/video" --profile audio_mp3 --cookies-browser chrome
```

## 支持的模式

- `video_best`: 视频最佳质量
- `video_mp4`: 优先 MP4
- `audio_mp3`: 提取 MP3

## 输出目录

默认保存到：

`%USERPROFILE%\Downloads\VideoDownloads`

## 说明

- 首次运行会自动安装 `yt-dlp` 和 `imageio-ffmpeg`
- 某些站点如果需要登录，可以尝试选择浏览器登录态
- 请仅下载你有权保存、使用或归档的内容
