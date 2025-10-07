# Images Folder

This folder should contain your profile images and other assets for the portfolio website.

## Required Images:

### Profile Images:
- `profile-small.jpg` - Small circular profile image for the Home page (recommended: 240x240px)
- `profile-large.jpg` - Larger profile image for the About page (recommended: 400x400px)

### Resume:
- `resume.pdf` - Your resume file (place this in the root /public folder, not in /images)

## How to Add Your Images:

1. **For Home Page Profile Image:**
   - Add your small profile image as `profile-small.jpg`
   - In `src/pages/Home.tsx`, uncomment lines 22-26 and comment out line 30 (the emoji)

2. **For About Page Profile Image:**
   - Add your larger profile image as `profile-large.jpg`
   - In `src/pages/About.tsx`, uncomment lines 160-164 and comment out line 167 (the emoji)
   - Optionally uncomment line 175 to add your name overlay

3. **For Resume Download:**
   - Add your resume as `resume.pdf` in the `/public` folder (not in `/images`)
   - Update the filename in the download button if needed

## Image Specifications:
- **Format**: JPG, PNG, or WebP
- **Profile Images**: Square aspect ratio works best
- **Quality**: High resolution but web-optimized (under 1MB each)
- **Background**: Consider using images with good contrast for text overlays

## Example File Structure:
```
public/
├── images/
│   ├── profile-small.jpg
│   ├── profile-large.jpg
│   └── README.md (this file)
└── resume.pdf
```

After adding your images, the placeholders (👨‍💻 emojis) will be replaced with your actual photos!