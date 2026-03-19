@echo off
setlocal

set "APP_DIR=%LocalAppData%\Programs\URLVideoDownloader"
set "APP_EXE=VideoDownloader.exe"
set "APP_README=README_video_downloader.md"
set "APP_UNINSTALL=uninstall_video_downloader.cmd"
set "DESKTOP_LINK=%USERPROFILE%\Desktop\URL Video Downloader.lnk"
set "START_MENU_DIR=%AppData%\Microsoft\Windows\Start Menu\Programs\URL Video Downloader"
set "START_MENU_LINK=%START_MENU_DIR%\URL Video Downloader.lnk"

if not exist "%APP_DIR%" mkdir "%APP_DIR%"
if not exist "%START_MENU_DIR%" mkdir "%START_MENU_DIR%"

copy /Y "%~dp0%APP_EXE%" "%APP_DIR%\%APP_EXE%" >nul
copy /Y "%~dp0%APP_README%" "%APP_DIR%\%APP_README%" >nul
copy /Y "%~dp0%APP_UNINSTALL%" "%APP_DIR%\%APP_UNINSTALL%" >nul

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ws = New-Object -ComObject WScript.Shell; " ^
  "$desktop = $ws.CreateShortcut('%DESKTOP_LINK%'); " ^
  "$desktop.TargetPath = '%APP_DIR%\%APP_EXE%'; " ^
  "$desktop.WorkingDirectory = '%APP_DIR%'; " ^
  "$desktop.Description = 'URL Video Downloader'; " ^
  "$desktop.Save(); " ^
  "$menu = $ws.CreateShortcut('%START_MENU_LINK%'); " ^
  "$menu.TargetPath = '%APP_DIR%\%APP_EXE%'; " ^
  "$menu.WorkingDirectory = '%APP_DIR%'; " ^
  "$menu.Description = 'URL Video Downloader'; " ^
  "$menu.Save();"

start "" "%APP_DIR%\%APP_EXE%"

exit /b 0
