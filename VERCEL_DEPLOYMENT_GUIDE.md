# Vercel Deployment Guide for SRP Airconditioning Website

## 🚀 Step-by-Step Deployment to Vercel

### Prerequisites
- ✅ Code pushed to GitHub repository
- ✅ GitHub repository URL ready
- ✅ Vercel account (free)

### Step 1: Go to Vercel
1. Visit [https://vercel.com](https://vercel.com)
2. Click "Sign Up" or "Login"
3. Sign up/login with:
   - GitHub account (recommended)
   - Email account

### Step 2: Import GitHub Repository
1. After login, click "New Project"
2. Select "Import Git Repository"
3. Choose your GitHub account
4. Find and select: `srp-airconditioning-website`
5. Click "Import"

### Step 3: Configure Project
1. Vercel will automatically detect:
   - Framework: Next.js ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `.next` ✅
   - Install Command: `npm install` ✅

2. **Configure Settings**:
   - Project Name: `srp-airconditioning-website`
   - Root Directory: `./` (keep default)
   - Build Settings: Keep defaults

### Step 4: Deploy
1. Click "Deploy" button
2. Vercel will:
   - Install dependencies
   - Build your Next.js app
   - Deploy to global CDN

### Step 5: Get Your URL
🎉 **Your website will be live at:**
```
https://srp-airconditioning-website.vercel.app
```

## 📋 What Vercel Provides

### Automatic Features:
- ✅ **HTTPS** automatically enabled
- ✅ **Custom Domain** (srp-airconditioning-website.vercel.app)
- ✅ **Global CDN** for fast loading
- ✅ **Automatic Deployments** from GitHub changes
- ✅ **Preview URLs** for each change
- ✅ **Environment Variables** support
- ✅ **Analytics** dashboard

### Deployment Settings:
- **Framework Detection**: Next.js (automatic)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node Version**: 18.x (recommended)

## 🔄 Future Updates

### Automatic Deployments:
- Push to GitHub → Vercel auto-deploys
- No manual intervention needed
- Preview URLs for each change

### Custom Domain (Later):
1. Go to Vercel dashboard
2. Project Settings → Domains
3. Add custom domain (e.g., srpairconditioning.com)
4. Configure DNS settings

## 📞 Troubleshooting

### Build Fails:
- Check `package.json` scripts
- Verify Next.js version compatibility
- Check for missing dependencies

### Import Issues:
- Ensure repository is public
- Check GitHub permissions
- Verify repository name matches

## 🎯 Success Checklist

- [ ] GitHub repository created and pushed
- [ ] Vercel account ready
- [ ] Repository imported to Vercel
- [ ] Deployment successful
- [ ] Website accessible at Vercel URL
- [ ] Share URL with team

---

**Ready to start?** Follow the steps above and your SRP Airconditioning website will be live in minutes!
