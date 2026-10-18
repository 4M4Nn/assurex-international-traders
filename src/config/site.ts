/**
 * Central company-information configuration.
 *
 * Only verified business details belong here. Fields set to `null` or empty
 * arrays are intentionally unconfirmed: the website hides any element that
 * depends on them, so nothing is shown until the business owner supplies the
 * verified value. See docs/HANDOVER.md for the full list of items to confirm.
 */

const productionUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
  "https://assurex-international-traders.vercel.app";

export const siteConfig = {
  name: "Assurex International Traders",
  shortName: "Assurex",
  tagline: "Global Trade | Trusted Partnership | Sustainable Growth",
  taglineParts: ["Global Trade", "Trusted Partnership", "Sustainable Growth"],
  description:
    "Assurex International Traders is an India-based international trading business that handles enquiries for Indian onions, rice and selected spices — green cardamom, black pepper, nutmeg and mace — for importers, distributors, wholesalers and other commercial buyers.",
  businessCategory: "International trading of agricultural commodities",
  country: "India",
  countryCode: "IN",
  locale: "en_IN",
  language: "en",
  url: productionUrl,

  /** Confirmed contact number. */
  phone: {
    display: "+91 97467 33133",
    e164: "+919746733133",
    tel: "tel:+919746733133",
  },
  whatsapp: {
    number: "919746733133",
    baseUrl: "https://wa.me/919746733133",
  },

  /** Confirmed business email (receives website enquiries). */
  email: "assurexinternationaltraders@gmail.com" as string | null,
  /** Not yet confirmed — leave null until a verified registered address exists. */
  address: null as {
    street: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
  } | null,
  /** Not yet confirmed — add verified profile URLs only. */
  socialLinks: [] as { label: string; url: string }[],
  /** Not yet confirmed — add documented certifications/registrations only. */
  certifications: [] as { name: string; reference: string }[],

  logo: {
    lockup: { src: "/brand/assurex-lockup.png", width: 1322, height: 240 },
    full: { src: "/brand/assurex-logo.png", width: 1408, height: 872 },
    emblem: { src: "/brand/assurex-emblem-sm.png", width: 452, height: 256 },
    alt: "Assurex International Traders logo",
  },
  ogImage: { src: "/brand/og-default.jpg", width: 1200, height: 630 },

  /** Product categories the business accepts enquiries for. */
  productCategories: [
    "Indian onions",
    "Rice (Vadi Matta, Basmati, IR 64, Parboiled, Sona Masoori)",
    "Green cardamom",
    "Black pepper",
    "Nutmeg",
    "Mace",
  ],
  enquiryTypes: [
    "Bulk and wholesale supply enquiries",
    "Export quotation requests",
    "Product specification requests",
    "Packaging and private-label enquiries",
  ],

  analytics: {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION ?? "",
  },

  /** Date the site content was last reviewed; used for sitemap lastModified. */
  contentUpdated: "2026-10-18",
} as const;

export function whatsappLink(message?: string): string {
  if (!message) return siteConfig.whatsapp.baseUrl;
  return `${siteConfig.whatsapp.baseUrl}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
