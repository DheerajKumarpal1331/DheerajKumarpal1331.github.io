# Dheeraj Kumar Pal — Portfolio

Minimal, modern data scientist portfolio. Zero build tools — pure HTML/CSS/JS. Deploys directly to GitHub Pages.

## ✏️ Editing Content

**All content lives in `data.js`** — open it and edit:
- `personal` → name, bio, email, LinkedIn, GitHub, tagline, stats
- `roles` → typing animation roles in the hero
- `skills` → 8 skill categories and their items
- `experience` → work history with achievements
- `projects` → project cards with tags and links
- `education` → degrees and certifications

No build step needed — save the file and refresh.

## 🖼️ Adding Your Photo

Replace the initials avatar with a real photo:
1. Add `assets/photo.jpg` (square crop, ideally 600×600px)
2. In `script.js`, inside `renderAbout()`, replace:
   ```html
   <span class="about-initials">DKP</span>
   ```
   with:
   ```html
   <img src="assets/photo.jpg" alt="Dheeraj Kumar Pal" style="width:100%;height:100%;object-fit:cover;border-radius:20px;">
   ```

## 🤖 Adding Pixar-Style Characters

The 3 cursor characters are currently SVG placeholders. To replace with Midjourney-generated PNGs:
1. Generate each character with Midjourney (see Notion spec for prompts)
2. Remove background with remove.bg or Adobe Firefly
3. Optimise with TinyPNG (target < 100KB each)
4. Save as: `assets/characters/byte.png`, `spark.png`, `nova.png`
5. In `script.js`, replace the SVG content in `CHARACTERS` with:
   ```js
   "char-byte":  `<img src="assets/characters/byte.png"  alt="Byte">`,
   "char-spark": `<img src="assets/characters/spark.png" alt="Spark">`,
   "char-nova":  `<img src="assets/characters/nova.png"  alt="Nova">`,
   ```

## 📄 Resume

Place your updated resume as `resume.pdf` in the portfolio root folder.

## 🚀 Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `dheerajkumarpal.github.io` for root domain, or any repo name)
2. Push this folder:
   ```bash
   cd /Users/dheerajkumarpal/Desktop/Projects/portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. In the GitHub repo → Settings → Pages → Source: **Deploy from branch** → Branch: `main` / `/ (root)`
4. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO`

For a custom domain (e.g. `dheerajkumarpal.com`), add a `CNAME` file with your domain and configure DNS.

## 🗂️ File Structure

```
portfolio/
├── index.html      # HTML shell (nav, section anchors, meta tags)
├── style.css       # Complete design system (edit for visual changes)
├── script.js       # Renders content + all interactions
├── data.js         # ← EDIT THIS for all content changes
├── resume.pdf      # Your resume (add this file)
└── assets/
    ├── characters/ # Byte.png, Spark.png, Nova.png (add after Midjourney)
    └── og-image.png # 1200×630 social sharing preview image
```
