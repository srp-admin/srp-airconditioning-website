# GitHub Setup Guide for SRP Airconditioning Website

## 🚀 Next Steps to Push to GitHub

### Step 1: Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: SRP Airconditioning Website"
```

### Step 2: Add Remote Repository
```bash
git remote add origin https://github.com/YOUR_USERNAME/srp-airconditioning-website.git
```

### Step 3: Push to GitHub
```bash
git branch -M main
git push -u origin main
```

## 📋 Files to Add to .gitignore (if not already there):
```
# Dependencies
/node_modules
/.pnp
.pnp.js

# Next.js
/.next/
/out/

# Environment variables
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/

# OS
.DS_Store
*.log

# Build
/build/
```

## 🌐 Creating Public URL

### Option 1: GitHub Pages (Free)
1. Go to your repository on GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: main
5. Folder: /root
6. Click Save

Your site will be available at: `https://YOUR_USERNAME.github.io/srp-airconditioning-website`

### Option 2: Vercel (Recommended for Next.js)
1. Go to vercel.com
2. Import GitHub repository
3. Deploy automatically

Your site will be available at: `https://srp-airconditioning-website.vercel.app`

### Option 3: Netlify
1. Go to netlify.com
2. Drag and drop your repository
3. Deploy automatically

## 🔧 GitHub Commands for You

### If you have Git installed:
```bash
cd "d:\Prince\AI Explore\SRP_Web"
git init
git add .
git commit -m "Add SRP Airconditioning website with team profiles"
git remote add origin https://github.com/YOUR_USERNAME/srp-airconditioning-website.git
git push -u origin main
```

### If you don't have Git installed:
1. Download GitHub Desktop
2. Clone your repository locally
3. Copy your project files into the repository folder
4. Commit and push using GitHub Desktop interface

## 📱 Team Review Process

### For Team Review:
1. **Share the GitHub repository URL** with your team
2. **Team members can**:
   - View code online
   - Clone repository locally
   - Test the website
   - Leave comments/suggestions
   - Create issues for bugs

### Public URL Options:
- **GitHub Pages**: Free, static hosting
- **Vercel**: Free, Next.js optimized
- **Netlify**: Free, easy deployment

## 🎯 Recommended Approach

1. **Push to GitHub first** (using commands above)
2. **Deploy to Vercel** (best for Next.js)
3. **Share Vercel URL** with team for review

## 📞 Need Help?

If you encounter any issues:
1. Check if Git is installed: `git --version`
2. Verify GitHub repository URL
3. Ensure all files are committed
4. Check GitHub repository settings

---

**Next**: Replace `YOUR_USERNAME` with your actual GitHub username!
