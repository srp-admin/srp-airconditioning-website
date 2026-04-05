@echo off
echo ========================================
echo    SRP Airconditioning Website
echo    Local Git Repository Setup
echo ========================================
echo.
echo Current working directory: %CD%
echo.
echo Step 1: Initializing Git repository...
git init
echo.
echo Step 2: Adding all files to Git...
git add .
echo.
echo Step 3: Creating initial commit...
git commit -m "Initial commit: SRP Airconditioning website with team profiles"
echo.
echo Step 4: Adding GitHub remote...
echo Please enter your GitHub repository URL:
set /p github_url=
echo Example: https://github.com/username/srp-airconditioning-website.git
git remote add origin %github_url%
echo.
echo Step 5: Creating main branch...
git branch -M main
echo.
echo Step 6: Pushing to GitHub...
git push -u origin main
echo.
echo ========================================
echo    Repository Setup Complete!
echo ========================================
echo.
echo Your local repository is now connected to GitHub
echo Next steps:
echo 1. Deploy to Vercel or Netlify for public URL
echo 2. Share repository URL with your team
echo 3. Team can clone and review code
echo.
pause
