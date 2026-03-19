@echo off
setlocal
cd /d "%~dp0"

where python >nul 2>nul
if %errorlevel%==0 (
    python "scripts\video_downloader_gui.py"
) else (
    py "scripts\video_downloader_gui.py"
)

if errorlevel 1 (
    echo.
    echo 启动失败，请确认 Python 已正确安装。
    pause
)
