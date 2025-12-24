# Push to GitHub - Commands

## If you already have a GitHub repository:

Replace `YOUR_GITHUB_USERNAME` and `REPO_NAME` with your actual values:

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

## If you need to create a new repository:

1. Go to https://github.com/new
2. Repository name: `COTECH` (or any name you prefer)
3. Description: "COTECH - High-Precision BLE Location Tracking Website"
4. Choose Public or Private
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click "Create repository"
7. Copy the repository URL
8. Run the commands above with your URL

## Example:
```bash
git remote add origin https://github.com/yourusername/COTECH.git
git branch -M main
git push -u origin main
```

## Note about large files:
Your videos are large (100+ MB each). GitHub has a 100MB file size limit. You may need to:
- Use Git LFS (Large File Storage) for videos
- Or host videos elsewhere (like Vercel/Netlify handles them automatically)

