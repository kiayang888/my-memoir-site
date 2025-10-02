
# MemoryPress — Next.js + Tailwind + shadcn starter

A clean starter to publish memoirs and books. Built with Next.js (App Router), Tailwind, and lightweight shadcn‑style UI components.

## Quick start
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel
1. Create a GitHub repo and push this folder.
2. Go to https://vercel.com/new, import the repo.
3. Accept defaults and Deploy.
4. (Optional) Add a custom domain in your Vercel project → Settings → Domains.

## Customize
- Edit `app/page.tsx` to change content.
- Tailwind styles live in `app/globals.css`.
- UI primitives in `components/ui` (button, card, input).
- Set your site title/description in `app/layout.tsx` metadata.

## Notes
- External Unsplash images are allowed via `next.config.js` remotePatterns.
- Replace placeholder book data and posts in `app/page.tsx`.
