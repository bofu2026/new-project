@echo off
setlocal

set "APP_DIR=%~dp0"
set "DESKTOP_LINK=%USERPROFILE%\Desktop\URL Video Downloader.lnk"
set "START_MENU_DIR=%AppData%\Microsoft\Windows\Start Menu\Programs\URL Video Downloader"
set "START_MENU_LINK=%START_MENU_DIR%\URL Video Downloader.lnk"

taskkill /IM VideoDownloader.exe /F >nul 2>nul

if exist "%DESKTOP_LINK%" del /F /Q "%DESKTOP_LINK%"
if exist "%START_MENU_LINK%" del /F /Q "%START_MENU_LINK%"
if exist "%START_MENU_DIR%" rmdir "%START_MENU_DIR%"

if exist "%APP_DIR%VideoDownloader.exe" del /F /Q "%APP_DIR%VideoDownloader.exe"
if exist "%APP_DIR%README_video_downloader.md" del /F /Q "%APP_DIR%README_video_downloader.md"
if exist "%APP_DIR%uninstall_video_downloader.cmd" del /F /Q "%APP_DIR%uninstall_video_downloader.cmd"

cd /d "%LocalAppData%"
rmdir /S /Q "%APP_DIR%"

exit /b 0
