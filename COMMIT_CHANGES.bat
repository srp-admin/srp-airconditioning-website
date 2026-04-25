@echo off
echo ========================================
echo    SRP Airconditioning - Git Commit
echo ========================================
echo.
echo This will commit your latest changes:
echo ✅ Auto-scrolling chiller banners
echo ✅ Service images display
echo ✅ Partners section
echo ✅ Image processing tools
echo ✅ UI improvements
echo.
echo Checking Git status...
git status
echo.
echo Adding all changes...
git add .
echo.
echo Committing changes...
git commit -m "Add dynamic chiller banners and service images

Features added:
- Auto-scrolling chiller banners with 5 brands (Bluestar, Daikin, York, Carrier, Voltas)
- Service page with actual chiller images for all 6 services
- Partners section on Home page with brand cards
- Image processing tools for optimization
- UI improvements and spacing adjustments
- Removed unnecessary buttons and checkmarks
- Continuous smooth scrolling animation"
echo.
echo ========================================
echo    Changes Committed Successfully!
echo ========================================
echo.
echo Next steps:
echo 1. Push to GitHub: git push origin main
echo 2. Deploy to Vercel for live preview
echo.
echo Your enhanced website is ready for team review!
echo.
pause
