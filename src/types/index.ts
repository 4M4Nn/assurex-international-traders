export type ProductKey =
  | "onion"
  | "rice"
  | "cardamom"
  | "black-pepper"
  | "nutmeg"
  | "mace"
  | "other";

export type RiceVarietyKey =
  | "vadi-matta"
  | "basmati"
  | "ir-64"
  | "parboiled"
  | "sona-masoori"
  | "other";

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ImageCredit {
  file: string;
  subject: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
  modified: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface FaqItem {
  q: string;
  /** Markdown answer. */
  a: string;
}

export interface FaqCategory {
  id: string;
  heading: string;
  items: FaqItem[];
}

export type SectionSlot = "spec-table" | "rice-grid" | "spice-grid";

export interface ContentSection {
  id: string;
  heading: string;
  /** Markdown body. */
  body: string;
  slot?: SectionSlot;
}

export interface SpecRow {
  parameter: string;
  note: string;
}

export interface QuickAnswer {
  whatItIs: string;
  commonUses: string;
  formats: string;
  specsToConfirm: string;
  howToEnquire: string;
}

export interface ProductContent {
  slug: string;
  path: string;
  kind: "product" | "rice-category" | "rice-variety";
  name: string;
  cardTitle: string;
  eyebrow: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  summary: string;
  heroIntro: string;
  image: ImageAsset;
  secondaryImage?: ImageAsset;
  quickAnswer: QuickAnswer;
  specs: SpecRow[];
  sections: ContentSection[];
  cta: { heading: string; body: string };
  faqHeading: string;
  faqs: FaqItem[];
  related: string[];
  relatedArticles: string[];
  quote: { product: ProductKey; variety?: RiceVarietyKey };
  keywords: string[];
}

export interface InfoPageContent {
  path: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  image?: ImageAsset;
  layout: "editorial" | "steps";
  schemaType: "AboutPage" | "WebPage" | "CollectionPage";
  sections: ContentSection[];
  cta: {
    heading: string;
    body: string;
    primary: { label: string; href: string };
  };
  relatedLinks?: NavLink[];
  disclaimer?: string;
}

export type BlogCategoryKey =
  | "rice"
  | "onions"
  | "spices"
  | "export-guides"
  | "buyer-guides"
  | "quality-and-packaging";

export interface BlogCategory {
  key: BlogCategoryKey;
  name: string;
  h1: string;
  description: string;
  seoTitle: string;
  metaDescription: string;
}

export interface ArticleSource {
  label: string;
  url: string;
}

export interface Article {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  category: BlogCategoryKey;
  published: string;
  updated: string;
  image: ImageAsset;
  /** Concise answer shown near the top of the article. */
  summary: string;
  /** Markdown body (H2/H3 sections). */
  body: string;
  faqs?: FaqItem[];
  relatedProducts: string[];
  relatedArticles: string[];
  sources?: ArticleSource[];
}

export interface BacklogItem {
  title: string;
  category: BlogCategoryKey;
  status: "published" | "planned";
  slug?: string;
}
