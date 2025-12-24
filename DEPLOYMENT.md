# Deployment Guide

## Option 1: Deploy to Vercel (Recommended - Easiest)

### Steps:
1. **Build your project first:**
   ```bash
   npm run build
   ```

2. **Install Vercel CLI (if not installed):**
   ```bash
   npm install -g vercel
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - It will ask you to login/create account
   - It will automatically detect Vite settings

4. **Or use Vercel Dashboard:**
   - Go to https://vercel.com
   - Sign up/Login
   - Click "Add New Project"
   - Connect your GitHub repository (if you have one)
   - Or drag and drop the `dist` folder after running `npm run build`

### After deployment:
- You'll get a URL like: `https://your-project.vercel.app`
- Updates: Just push to your repo or run `vercel --prod` again

---

## Option 2: Deploy to Netlify

### Steps:
1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

4. **Or use Netlify Dashboard:**
   - Go to https://netlify.com
   - Sign up/Login
   - Drag and drop the `dist` folder

---

## Option 3: Deploy to GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts:**
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

3. **Update vite.config.ts:**
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/COTECH/' // Replace COTECH with your repo name
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

---

## Quick Deploy (Vercel - No CLI needed)

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"
7. Done! Your site will be live in ~2 minutes

---

## Important Notes:

- Make sure all your videos and images in `public/` folder are included
- The build creates a `dist` folder with all production files
- Your site will be accessible via the provided URL
- You can add a custom domain later in the platform settings

