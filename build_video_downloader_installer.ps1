Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$resultsRoot = Join-Path $projectRoot "results\video_downloader_package"
$pyiRoot = Join-Path $resultsRoot "pyinstaller"
$iexpressRoot = Join-Path $env:TEMP "VideoDownloaderPackage"
$payloadRoot = Join-Path $iexpressRoot "payload"
$sedPath = Join-Path $iexpressRoot "video_downloader_setup.sed"
$exeName = "VideoDownloader.exe"
$standaloneExe = Join-Path $pyiRoot "dist\$exeName"
$stagedInstallerExe = Join-Path $iexpressRoot "VideoDownloader_Setup.exe"
$installerExe = Join-Path $resultsRoot "VideoDownloader_Setup.exe"
$installCmd = Join-Path $projectRoot "installer\install_video_downloader.cmd"
$uninstallCmd = Join-Path $projectRoot "installer\uninstall_video_downloader.cmd"
$readmePath = Join-Path $projectRoot "README_video_downloader.md"
$guiScript = Join-Path $projectRoot "scripts\video_downloader_gui.py"
$iexpress = Join-Path $env:SystemRoot "System32\iexpress.exe"

if (-not (Test-Path $iexpress)) {
    throw "未找到 IExpress: $iexpress"
}

Remove-Item -Recurse -Force $resultsRoot -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force $iexpressRoot -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Force -Path $pyiRoot, $iexpressRoot, $payloadRoot | Out-Null

python -m PyInstaller `
    --noconfirm `
    --clean `
    --onefile `
    --windowed `
    --name "VideoDownloader" `
    --paths (Join-Path $projectRoot "scripts") `
    --collect-all yt_dlp `
    --collect-all imageio_ffmpeg `
    --distpath (Join-Path $pyiRoot "dist") `
    --workpath (Join-Path $pyiRoot "build") `
    --specpath $pyiRoot `
    $guiScript

if (-not (Test-Path $standaloneExe)) {
    throw "未生成独立 EXE: $standaloneExe"
}

Copy-Item $standaloneExe (Join-Path $payloadRoot $exeName) -Force
Copy-Item $readmePath (Join-Path $payloadRoot "README_video_downloader.md") -Force
Copy-Item $installCmd (Join-Path $payloadRoot "install_video_downloader.cmd") -Force
Copy-Item $uninstallCmd (Join-Path $payloadRoot "uninstall_video_downloader.cmd") -Force

$sed = @"
[Version]
Class=IEXPRESS
SEDVersion=3
[Options]
PackagePurpose=InstallApp
ShowInstallProgramWindow=1
HideExtractAnimation=1
UseLongFileName=1
InsideCompressed=0
CAB_FixedSize=0
CAB_ResvCodeSigning=0
RebootMode=I
InstallPrompt=%InstallPrompt%
DisplayLicense=%DisplayLicense%
FinishMessage=%FinishMessage%
TargetName=%TargetName%
FriendlyName=%FriendlyName%
AppLaunched=%AppLaunched%
PostInstallCmd=%PostInstallCmd%
AdminQuietInstCmd=%AdminQuietInstCmd%
UserQuietInstCmd=%UserQuietInstCmd%
SourceFiles=SourceFiles
[Strings]
InstallPrompt=
DisplayLicense=
FinishMessage=Video Downloader installation completed.
TargetName=$stagedInstallerExe
FriendlyName=Video Downloader Installer
AppLaunched=cmd.exe /d /s /c ""install_video_downloader.cmd""
PostInstallCmd=<None>
AdminQuietInstCmd=
UserQuietInstCmd=cmd.exe /d /s /c ""install_video_downloader.cmd""
FILE0="VideoDownloader.exe"
FILE1="README_video_downloader.md"
FILE2="install_video_downloader.cmd"
FILE3="uninstall_video_downloader.cmd"
[SourceFiles]
SourceFiles0=$payloadRoot
[SourceFiles0]
%FILE0%=
%FILE1%=
%FILE2%=
%FILE3%=
"@

Set-Content -Path $sedPath -Value $sed -Encoding ASCII

& $iexpress /N $sedPath
$iexpressExitCode = $LASTEXITCODE

for ($i = 0; $i -lt 20; $i++) {
    if (Test-Path $stagedInstallerExe) {
        break
    }
    Start-Sleep -Milliseconds 500
}

if (-not (Test-Path $stagedInstallerExe)) {
    throw "未生成安装包: $stagedInstallerExe (IExpress exit code: $iexpressExitCode)"
}

Copy-Item $stagedInstallerExe $installerExe -Force

Write-Host "Standalone EXE: $standaloneExe"
Write-Host "Installer EXE: $installerExe"
$global:LASTEXITCODE = 0
