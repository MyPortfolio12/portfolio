# Vinod Kumar Aluru — Portfolio

Senior Agentic AI Engineer portfolio built with **Next.js 14 + Tailwind CSS**.

## Quick Start (Local Dev)

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

## Add Your Resume PDF

Drop your resume PDF into the `/public` folder:
```
/public/resume.pdf
```

The "Download Resume" and "View Resume" buttons already link to `/resume.pdf`.

## Deploy to Vercel via Git

```bash
# 1. Delete all your old Java project files

# 2. Copy these files into your repo root:
#    - app/
#    - public/
#    - package.json
#    - next.config.js
#    - tailwind.config.js
#    - postcss.config.js

# 3. Add your resume
cp /path/to/your/resume.pdf public/resume.pdf

# 4. Commit and push
git add .
git commit -m "Rebuild: Next.js portfolio - Sr Agentic AI Engineer"
git push origin main

# Vercel auto-detects Next.js and deploys in ~60 seconds
```

## Vercel Configuration

No extra config needed. Vercel auto-detects Next.js 14.
Framework Preset: **Next.js** (auto-detected)
Build Command: `npm run build`
Output Directory: `.next`

## Customization

### Update contact info
Edit `app/page.js` — find the `Contact()` component and update:
- Email
- Phone
- LinkedIn URL

### Add a real project
In `app/page.js`, find the `PROJECTS` array and add/edit entries.

### Update experience highlights
Find the `EXPERIENCE` array and edit the `highlights` array for each role.

### Change availability status
Search for `Open to opportunities` and update with your current status.

## LinkedIn Update

1. Go to your LinkedIn profile
2. **Featured section** → Add Media → Upload `resume.pdf`
3. **Contact Info** → Add Website → paste your Vercel URL
4. **About section** → mention your Vercel portfolio link
 
