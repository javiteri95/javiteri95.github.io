# javiteri95.github.io — Personal Portfolio

Personal portfolio site for **José Antonio Viteri Cuenca** — ML & Data Engineer.  
Built with **Next.js 15 (App Router)**, **Tailwind CSS**, and deployed as a static site on **GitHub Pages**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, static export) |
| Styling | Tailwind CSS v3 |
| Language | TypeScript |
| Deployment | GitHub Pages via GitHub Actions |
| Package manager | pnpm |

---

## Local Development

### Prerequisites

- Node.js ≥ 18
- pnpm ≥ 9 (`npm install -g pnpm`)

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/javiteri95/javiteri95.github.io.git
cd javiteri95.github.io

# 2. Install dependencies
pnpm install

# 3. Start the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build (static export)

```bash
pnpm build
# Output is written to /out — these are the files deployed to GitHub Pages
```

---

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout, metadata, global CSS import
│   ├── page.tsx         # Full portfolio page (all sections)
│   └── globals.css      # Tailwind directives + component classes
├── public/
│   ├── images/          # Profile photo and project images
│   └── CVs/             # Downloadable CV PDF
├── tailwind.config.ts   # Color palette + font config
├── postcss.config.mjs   # PostCSS pipeline
└── next.config.ts       # Static export + GitHub Pages settings
```

---

## Deploying to GitHub Pages

This repo is configured for automatic deployment via GitHub Actions.

1. **Create a public GitHub repository** named `<your-username>.github.io`
2. **Push** the `main` branch
3. In the repository go to **Settings → Pages → Source** and select **GitHub Actions**
4. The workflow at `.github/workflows/` will build and deploy on every push to `main`

Your site will be live at:

```
https://javiteri95.github.io/
```

> If deploying under a project path (e.g. `/my-portfolio/`), set the `PAGES_BASE_PATH` environment variable in the GitHub Actions workflow to match.

---

## Customization

- **Content** — Edit the `DATA` section at the top of `app/page.tsx` (experience, projects, stack, education, publications).
- **Colors** — Defined in `tailwind.config.ts` under `theme.extend.colors`.
- **CV file** — Replace `public/pdfs/CVs/jose_viteri_cv.pdf` with your updated PDF.
- **Papers** — Add PDFs to `public/pdfs/papers/` and update the `publications` array in `app/page.tsx`.
- **Images** — Place new images in `public/images/logos/` (company/institution logos) or `public/images/mine/` (personal photos).

---

## License

MIT

