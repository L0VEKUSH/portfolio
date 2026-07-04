# Lovekush Kumar — Portfolio

A production-ready personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Stack

- React 18 + Vite
- Tailwind CSS (dark/light mode via class strategy)
- Framer Motion (scroll-triggered reveals, hero terminal animation)
- React Icons
- EmailJS for the contact form
- Code-split sections via `React.lazy` + gzip/brotli compression at build time

## Getting started

```bash
npm install
cp .env.example .env   # then fill in your real values
npm run dev
```

## Before you deploy

1. **Content** — open `src/data/portfolioData.js` and fill in:
   - `profile.email`, `profile.github`, `profile.linkedin`
   - `github` / `demo` links for each project (cards show "Code coming soon" / "Not deployed" until you do)
   - `githubUsername` for the live GitHub repo cards and contribution graph
2. **Resume** — drop your PDF at `public/resume.pdf` (referenced by the Download Resume buttons).
3. **Contact form** — create a free account at [EmailJS](https://www.emailjs.com), then set:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

   in your `.env` file. Until these are set, the form will show a friendly error instead of silently failing.
4. **OG image** — replace `public/og-image.png` with a real 1200x630 preview image for social sharing.
5. **Domain** — update the canonical URL and Open Graph URLs in `index.html`.

## Build & deploy

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

Deploy the `dist/` folder to Vercel, Netlify, or Render (static site).

## Accessibility & performance notes

- Semantic landmarks (`header`, `nav`, `main`, `footer`), skip-to-content link, and visible focus rings throughout.
- `prefers-reduced-motion` is respected — animations collapse to near-instant for users who request it.
- Sections below the fold are code-split and lazy-loaded.
- GitHub activity (contribution graph + repo cards) is pulled live from the GitHub API at runtime — nothing is hardcoded or fabricated. If the API call fails, the section fails gracefully with a link to your GitHub profile instead of showing stale or fake data.

## Project structure

```
src/
  components/   one file per section
  context/      ThemeContext (dark/light mode)
  data/         portfolioData.js — single source of truth for all content
  App.jsx
  main.jsx
  index.css
```
