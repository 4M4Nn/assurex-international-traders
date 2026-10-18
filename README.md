# Assurex International Traders — Website

Multi-page B2B website for Assurex International Traders, an India-based trader of onions, rice (Vadi Matta, Basmati, IR 64, parboiled and Sona Masoori) and spices (green cardamom, black pepper, nutmeg and mace).

**Stack:** Next.js 16 (App Router), TypeScript (strict), Tailwind CSS v4, shadcn/ui (Base UI), lucide-react.

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

- Company facts: `src/config/site.ts`
- Content: `src/lib/data.ts` and `src/content/*`
- Enquiry endpoint: `src/app/api/enquiry/route.ts` (Resend email and/or webhook)
- SEO: `src/lib/seo.ts`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/llms.txt/route.ts`

See `docs/HANDOVER.md` for configuration, the facts still to confirm and the testing report. `docs/KEYWORD-MAP.md` has the keyword-to-page map, and `docs/EDITORIAL-BACKLOG.md` has the article plan.
