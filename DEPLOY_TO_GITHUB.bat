@echo off
echo ========================================
echo    SRP Airconditioning Website
echo    GitHub Deployment Script
echo ========================================
echo.
echo Step 1: Initializing Git repository...
git init
echo.
echo Step 2: Adding all files...
git add .
echo.
echo Step 3: Creating initial commit...
git commit -m "Add SRP Airconditioning website with team profiles"
echo.
echo Step 4: Please enter your GitHub repository URL:
set /p repo_url=
echo.
echo Step 5: Adding remote repository...
git remote add origin %repo_url%
echo.
echo Step 6: Pushing to GitHub...
git branch -M main
git push -u origin main
echo.
echo ========================================
echo    Deployment Complete!
echo ========================================
echo.
echo Your website is now on GitHub!
echo.
echo Next steps:
echo 1. Deploy to Vercel or Netlify for public URL
echo 2. Share repository URL with your team
echo 3. Team can clone and review the code
echo.
pause
