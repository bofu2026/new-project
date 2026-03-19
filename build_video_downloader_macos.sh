#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
RESULTS_ROOT="$PROJECT_ROOT/results/video_downloader_package_macos"
BUILD_ROOT="$RESULTS_ROOT/build"
DIST_ROOT="$RESULTS_ROOT/dist"
SPEC_ROOT="$RESULTS_ROOT/spec"
DMG_STAGING="$RESULTS_ROOT/dmg-staging"
APP_NAME="VideoDownloader"
APP_PATH="$DIST_ROOT/$APP_NAME.app"
DMG_PATH="$RESULTS_ROOT/VideoDownloader_macOS.dmg"
VOLUME_NAME="Video Downloader"

rm -rf "$RESULTS_ROOT"
mkdir -p "$BUILD_ROOT" "$DIST_ROOT" "$SPEC_ROOT" "$DMG_STAGING"

python -m PyInstaller \
  --noconfirm \
  --clean \
  --windowed \
  --name "$APP_NAME" \
  --paths "$PROJECT_ROOT/scripts" \
  --collect-all yt_dlp \
  --collect-all imageio_ffmpeg \
  --distpath "$DIST_ROOT" \
  --workpath "$BUILD_ROOT" \
  --specpath "$SPEC_ROOT" \
  "$PROJECT_ROOT/scripts/video_downloader_gui.py"

if [[ ! -d "$APP_PATH" ]]; then
  echo "Expected app bundle not found: $APP_PATH" >&2
  exit 1
fi

cp -R "$APP_PATH" "$DMG_STAGING/"
cp "$PROJECT_ROOT/README_video_downloader.md" "$DMG_STAGING/"

hdiutil create \
  -volname "$VOLUME_NAME" \
  -srcfolder "$DMG_STAGING" \
  -ov \
  -format UDZO \
  "$DMG_PATH"

echo "macOS app bundle: $APP_PATH"
echo "macOS dmg: $DMG_PATH"
