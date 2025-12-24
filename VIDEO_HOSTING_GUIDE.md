# Video Hosting Guide

## ✅ Current Setup
Your code is now configured to use video URLs from `src/config/videoUrls.ts`. This makes it easy to switch from local videos to hosted videos.

## 🎥 Recommended Hosting Options

### Option 1: Vercel/Netlify (Easiest - If deploying there)
**If you deploy to Vercel or Netlify:**
- Videos in `public/videos/` are automatically served
- Just keep videos in the `public/videos/` folder
- No changes needed - current setup works!

### Option 2: Cloudinary (Free tier available)
1. Sign up at https://cloudinary.com (free tier: 25GB storage)
2. Upload your videos:
   - Go to Media Library
   - Upload each video
   - Get the public URL for each
3. Update `src/config/videoUrls.ts` with the URLs

**Example Cloudinary URL format:**
```
https://res.cloudinary.com/your-cloud/video/upload/v1234567890/construction.mp4
```

### Option 3: AWS S3 + CloudFront
1. Create S3 bucket
2. Upload videos
3. Make bucket public or use CloudFront
4. Get URLs and update config

### Option 4: GitHub Releases (Simple but not ideal)
1. Create a GitHub Release
2. Upload videos as release assets
3. Get direct download URLs
4. Update config

## 📝 How to Update Video URLs

1. **Upload your videos** to your chosen hosting service
2. **Get the public URLs** for each video
3. **Edit `src/config/videoUrls.ts`**:

```typescript
export const videoUrls = {
  howItWorks: 'https://your-cdn.com/videos/how-it-works.mp4',
  construction: 'https://your-cdn.com/videos/construction.mp4',
  museum: 'https://your-cdn.com/videos/museum.mp4',
  logistics: 'https://your-cdn.com/videos/logistics.mp4',
  hospital: 'https://your-cdn.com/videos/hospital.mp4',
  retail: 'https://your-cdn.com/videos/retail.mp4',
  airport: 'https://your-cdn.com/videos/airport.mp4',
};
```

4. **Save the file** - videos will automatically load from new URLs!

## 🚀 Quick Start with Cloudinary

1. Go to https://cloudinary.com/users/register_free
2. Sign up (free)
3. Upload videos to Media Library
4. For each video:
   - Click on the video
   - Copy the "URL" (not the secure URL)
   - Paste into `videoUrls.ts`

## ✅ Benefits

- ✅ Smaller GitHub repo (no large video files)
- ✅ Faster page loads (CDN delivery)
- ✅ Easy to update (just change URLs in one file)
- ✅ Works with any hosting service

## 📦 Current Video Files

Your videos are currently in `public/videos/`:
- `0. How it works.mp4` (114MB)
- `1. Construction.mp4` (146MB)
- `2. Museum.mp4` (138MB)
- `3. Logistics.mp4` (134MB)
- `4. Hospital.mp4` (146MB)
- `5. Retail.mp4` (136MB)
- `6. Airport.mp4` (135MB)

**Total: ~945MB** - This is why we're hosting them separately!

