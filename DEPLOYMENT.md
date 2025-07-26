# 🚀 GitHub Pages Deployment Guide

## Quick Deployment Steps

### 1. **Initialize Git Repository** (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: Transformers Portfolio"
```

### 2. **Create GitHub Repository**
1. Go to [GitHub](https://github.com) and create a new repository named `Portfolio`
2. **Important**: Make sure the repository is **public** for GitHub Pages to work
3. Don't initialize with README (we already have one)

### 3. **Connect Local Repository to GitHub**
```bash
git remote add origin https://github.com/adityarajbisoyi/Portfolio.git
git branch -M main
git push -u origin main
```

### 4. **Enable GitHub Pages**
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select "Deploy from a branch"
5. Select **gh-pages** branch
6. Click **Save**

### 5. **Deploy Your Portfolio**

#### Option A: Automatic Deployment (Recommended)
- Just push any changes to the `main` branch
- GitHub Actions will automatically build and deploy
- Your site will be live at: `https://adityarajbisoyi.github.io/Portfolio`

#### Option B: Manual Deployment
```bash
npm run deploy
```

## 🔧 Troubleshooting

### Common Issues:

1. **404 Error**: 
   - Check if repository name matches the one in `vite.config.js` base path
   - Ensure repository is public

2. **White Screen**: 
   - Clear browser cache
   - Check console for errors
   - Verify all assets are loading correctly

3. **Profile Image Not Loading**:
   - Make sure `profile.jpg` is in the `public/` folder
   - Check the file path in `HolographicProfile.jsx`

### Build Size Warning
The bundle is large (1.2MB) due to Three.js. This is normal for 3D applications but consider:
- Enabling gzip compression on your server
- Using dynamic imports for Three.js components
- Optimizing 3D models and textures

## 📝 Post-Deployment Checklist

- [ ] Site loads correctly at GitHub Pages URL
- [ ] All animations work properly
- [ ] Contact form submissions work (Formspree)
- [ ] All navigation links function
- [ ] Mobile responsiveness works
- [ ] Profile photo displays correctly
- [ ] 3D animations render properly

## 🌐 Custom Domain (Optional)

To use your own domain:
1. Add a `CNAME` file in `public/` folder with your domain name
2. Update DNS settings with your domain provider
3. Update `homepage` in `package.json`
4. Update `base` in `vite.config.js` to `'/'`

## 🔄 Updating Your Portfolio

1. Make changes to your code
2. Commit and push to main branch:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
3. GitHub Actions will automatically redeploy
4. Changes will be live in 1-2 minutes

---

Your Transformers portfolio is ready to deploy! 🤖✨
