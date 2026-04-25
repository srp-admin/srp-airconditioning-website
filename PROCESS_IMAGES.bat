@echo off
echo ========================================
echo    SRP Airconditioning Image Processor
echo ========================================
echo.
echo This script will:
echo 1. Create backup of original images
echo 2. Resize chiller images to 800x400px
echo 3. Resize service images to 600x400px
echo 4. Optimize images for web
echo.
echo Checking for Node.js...
node --version >nul 2>&1
if errorlevel 1 (
  echo ❌ Node.js not found. Please install Node.js first.
  echo Visit: https://nodejs.org/
  pause
  exit /b 1
)

echo ✅ Node.js found
echo.
echo Installing Sharp image processor...
npm install sharp --save-dev
echo.

echo Starting image processing...
node image-processor.js
echo.
echo ========================================
echo    Processing Complete!
echo ========================================
echo.
echo 📁 Backup created: public\images-backup\
echo 📁 Processed images: public\images\
echo.
echo Your images are now optimized for the website!
echo.
pause
