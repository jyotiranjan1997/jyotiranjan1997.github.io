# Jyotiranjan Mohanty — Portfolio

A single-page portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **react-icons**, generated from your resume. Configured for static export so it can be hosted on GitHub Pages exactly like your current site.

## What's inside

- `app/` — root layout, global styles, and the single page (`app/page.js`) that composes every section
- `components/` — Navbar, Hero, About, Skills, Experience, Projects, Achievements, Education, Contact, Footer, plus `icons.js` (react-icons map) and `Reveal.jsx` (scroll-in animation)
- `data/portfolioData.js` — every piece of resume content in one place (edit this file to update your info without touching markup)
- `public/resume.pdf` — your uploaded resume, wired up to every "Download Resume" button
- `out/` — a pre-built static export, ready to upload as-is if you don't want to run a build yourself

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build & deploy to GitHub Pages (jyotiranjan1997.github.io)

```bash
npm install
npm run build
```

This produces a static site in `out/`. Since your GitHub Pages repo **is** `jyotiranjan1997.github.io` (a root user-page, not a project page), no `basePath` config is needed — the site is already set up to work at the domain root.

To publish:

1. Copy everything from `out/` into the root of your `jyotiranjan1997.github.io` repository (replacing the old `create-react-app` build).
2. Commit and push to the `main` branch.
3. GitHub Pages will serve it automatically at https://jyotiranjan1997.github.io/.

**Alternative (recommended long-term):** connect the repo to [Vercel](https://vercel.com) for automatic builds on every push — no manual `out/` copying needed. If you switch later, just remove `output: "export"` from `next.config.js`.

## Updating content

Everything text-based (summary, skills, experience, projects, achievements, education, certifications, contact links) lives in `data/portfolioData.js`. Change it there and every section updates automatically — no need to touch component files.

To swap the resume file, replace `public/resume.pdf` with your new PDF (keep the same filename, or update `resumeFile` in `data/portfolioData.js`).
