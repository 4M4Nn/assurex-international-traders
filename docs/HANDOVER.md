# Assurex International Traders — Handover

## 1. Business facts that need confirmation

The site publishes **only** confirmed facts: the business name, the phone/WhatsApp number (+91 97467 33133), the logo, the product list and the tagline. Everything below was left out on purpose. To add a fact once it is confirmed, set it in `src/config/site.ts`. The website shows each field only when it has a value.

| Item | Where to set | Status |
| --- | --- | --- |
| Verified business email | `siteConfig.email` + `ENQUIRY_TO_EMAIL` | **Missing** — required for email delivery of enquiries |
| Registered business address | `siteConfig.address` | Missing |
| Legal entity type / registration number | Legal pages | Missing |
| GST number, IEC (Importer-Exporter Code) | `siteConfig.certifications` | Missing |
| Spices Board (CRES) / APEDA registrations | `siteConfig.certifications` | Missing |
| Any product certifications | `siteConfig.certifications` | None claimed |
| Social media profiles | `siteConfig.socialLinks` | Missing |
| Custom domain | `NEXT_PUBLIC_SITE_URL` env + Vercel domain settings | Using the vercel.app URL for now |
| Governing law for website terms | `src/content/legal.ts` | Intentionally not stated |
| Founding year, team, export history, clients, testimonials | — | Not published (not verified) |
| Real product/packaging photos | `public/images` + `src/content/images.ts` | Openly licensed representative photos are in use, credited on `/image-credits/` |

## 2. Environment variables (set in Vercel → Project → Settings → Environment Variables)

See `.env.example`.

- **Enquiry delivery (required for online forms):** `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL` and `ENQUIRY_FROM_EMAIL` (the sending domain must be verified in Resend). An alternative or addition is `ENQUIRY_WEBHOOK_URL`.
  Until one of these is set, the forms validate input and then honestly tell the buyer the form can't deliver yet. They offer a one-tap WhatsApp hand-off with the enquiry text pre-filled. No fake "success" message is ever shown.
- `NEXT_PUBLIC_SITE_URL`: the canonical domain. Change it when a custom domain is connected, then redeploy so canonicals, the sitemap and robots.txt update.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: optional GA4. It loads only after cookie consent. Events: `generate_lead`, `whatsapp_click`, `phone_click`. Form contents are never sent.
- `GOOGLE_SITE_VERIFICATION`: the Search Console HTML-tag token.

After changing any environment variable, redeploy.

## 3. Search Console

1. Add the property (domain or URL prefix) in Google Search Console.
2. Put the HTML-tag token in `GOOGLE_SITE_VERIFICATION` and redeploy, then verify.
3. Submit `<domain>/sitemap.xml`.

## 4. Editing content

- Company facts: `src/config/site.ts`
- Navigation, homepage copy, form options: `src/lib/data.ts`
- Products: `src/content/products.ts` (onions and spices) and `src/content/rice.ts`
- Informational pages: `src/content/pages.ts`
- FAQ hub: `src/content/faqs.ts`
- Blog: `src/content/blog/*`; editorial rules are in `docs/EDITORIAL-BACKLOG.md`
- Legal pages: `src/content/legal.ts`
- Images and credits: `src/content/images.ts`

Body text uses a small Markdown subset: `##`, `###`, lists, `>` notes, tables, `**bold**`, `*italic*` and `[links](/path/)`.

## 5. Deployment

- Vercel project `assurex-international-traders`, with GitHub repo `4M4Nn/assurex-international-traders`.
- Commands: `npm run build`, then `vercel --prod`.

## 6. Testing report (18 October 2026, local production build)

**Verified:**

- `next build` passes; TypeScript strict mode passes; ESLint reports 0 problems.
- All 46 public HTML routes return 200, and the crawler found no broken internal links.
- Unknown product, article and pagination URLs return a real 404. Legacy URLs (`/about`, `/products/onion`, etc.) return 308 redirects.
- Every page has exactly one H1, a unique title, a unique meta description, a self-referencing canonical and index/follow robots. JSON-LD on every page parses as valid JSON.
- No images are missing alt text. All 7 external source links return 200.
- `sitemap.xml` lists 46 URLs, and `robots.txt` references the sitemap and allows search and AI crawlers. `/llms.txt` is served.
- Enquiry API:
  - Validation errors return 422.
  - Spam honeypot and too-fast submissions are rejected.
  - Disallowed file types are rejected.
  - Without a delivery channel it returns 503 and the UI offers the WhatsApp fallback.
  - With a webhook configured it returns 200 with a reference ID, and the payload (including the attachment name) reached the receiver.
- Quote form pre-fills product and rice variety from product-page links.
- Desktop (1440 px) and mobile (390 px) layouts were reviewed visually.

**Not yet verified / needs the owner:**

- Email delivery through Resend (no API key or verified sender yet).
- GA4 and Search Console (no IDs supplied).
- Lighthouse scores were not measured in this session; run PageSpeed Insights on the live URL.
- Structured data has not yet been checked in Google's Rich Results Test; JSON validity was checked locally. FAQPage markup is present, but Google currently limits FAQ rich results, so none are expected.
- `Product` schema was intentionally left out: there are no verified prices, offers, ratings or brand claims to support it.
