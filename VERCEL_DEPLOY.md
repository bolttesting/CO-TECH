# Deploy to Vercel - Complete Guide

## ✅ Good News!
**You DON'T need to push videos to GitHub!** Vercel can deploy directly from your local machine and will include all videos.

## 🚀 Option 1: Deploy via Vercel CLI (Recommended)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
- This will open your browser to authenticate

### Step 3: Deploy
```bash
vercel
```
- Follow the prompts
- Vercel will detect it's a Vite project
- **All videos in `public/videos/` will be included automatically!**

### Step 4: Deploy to Production
```bash
vercel --prod
```

**That's it!** Your videos will be served from Vercel's CDN.

---

## 🔄 Option 2: Deploy from GitHub (Without Videos in Repo)

If you want to use GitHub for code but not videos:

### Step 1: Push code to GitHub (without videos)
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### Step 2: Connect GitHub to Vercel
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect settings

### Step 3: Add videos after deployment
- Upload videos to Vercel's file system, OR
- Use the Vercel CLI to add videos, OR
- Host videos on Cloudinary and update URLs

---

## 📦 Option 3: Use Git LFS for Videos (If you want videos in GitHub)

If you really want videos in GitHub:

### Step 1: Install Git LFS
```bash
brew install git-lfs  # macOS
# or download from https://git-lfs.github.com
```

### Step 2: Setup Git LFS
```bash
git lfs install
git lfs track "*.mp4"
git add .gitattributes
git add public/videos/*.mp4
git commit -m "Add videos with Git LFS"
git push origin main
```

### Step 3: Deploy to Vercel
- Connect GitHub repo to Vercel
- Vercel will automatically use Git LFS files

---

## 🎯 Recommended Approach

**For your situation, I recommend Option 1:**
1. Keep videos in `public/videos/` (they're already there)
2. Deploy directly via Vercel CLI
3. Videos will be automatically included and served
4. No GitHub needed for videos!

---

## ✅ What Happens with Videos

When you deploy to Vercel:
- Videos in `public/videos/` → Automatically served at `/videos/...`
- Your code uses `/videos/...` paths → Works perfectly!
- Videos are on Vercel's CDN → Fast loading worldwide

**No changes needed to your code!** The current setup with `/videos/...` paths will work perfectly on Vercel.

---

## 🚨 Important Notes

- **GitHub file limit:** 100MB per file (your videos are 100+ MB each)
- **Vercel file limit:** 100MB per file, but better handling
- **Vercel deployment size:** Up to 100MB total for free tier (you're close with videos)
- **Solution:** Vercel Pro ($20/month) has higher limits, OR use external hosting

---

## 💡 Best Practice

For production, consider:
1. Deploy code to Vercel (with or without videos)
2. Host videos on Cloudinary (free tier available)
3. Update `src/config/videoUrls.ts` with Cloudinary URLs
4. Get best of both worlds: fast code deployment + optimized video delivery

