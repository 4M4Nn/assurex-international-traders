import { coffeeArticles } from "@/content/blog/coffee-articles";
import { produceSpiceArticles } from "@/content/blog/produce-spice-articles";
import { riceArticles } from "@/content/blog/rice-articles";
import { tradeArticles } from "@/content/blog/trade-articles";
import type { Article, BacklogItem, BlogCategory, BlogCategoryKey } from "@/types";

export const blogIndex = {
  path: "/blog/",
  seoTitle: "Indian Commodity Export Insights and Buyer Guides | Assurex",
  metaDescription:
    "Buyer guides on Indian green coffee beans, rice and spices, plus export documentation, trade terms, quality specifications and global market guides from Assurex International Traders.",
  eyebrow: "Insights",
  h1: "Indian Commodity Export Insights and Buyer Guides",
  intro:
    "Practical, buyer-focused guides on Indian green coffee, rice and spices — written to help importers and roasters ask better questions and agree clearer specifications.",
  pageSize: 6,
};

export const blogCategories: BlogCategory[] = [
  {
    key: "coffee",
    name: "Green Coffee",
    h1: "Indian Green Coffee Guides for Roasters and Importers",
    description: "Arabica and Robusta origins, grades, certifications and global market guides.",
    seoTitle: "Indian Green Coffee Buying Guides | Assurex Insights",
    metaDescription: "Guides to buying Indian green coffee beans — Arabica and Robusta origins, grades, processing methods, certifications and export to US, UK and Middle East.",
  },
  {
    key: "rice",
    name: "Rice",
    h1: "Rice Guides for Commercial Buyers",
    description: "Varieties, characteristics and buying considerations for Indian rice.",
    seoTitle: "Indian Rice Guides for Buyers | Assurex Insights",
    metaDescription: "Guides to Indian rice varieties including Vadi Matta and Basmati, with buying considerations for wholesale and import buyers.",
  },
  {
    key: "spices",
    name: "Spices",
    h1: "Indian Spice Guides",
    description: "Grades, quality parameters and testing for cardamom, black pepper, nutmeg and mace.",
    seoTitle: "Indian Spice Buying Guides | Assurex Insights",
    metaDescription: "Guides to buying Indian green cardamom, black pepper, nutmeg and mace: grades, quality parameters and food-safety testing.",
  },
  {
    key: "export-guides",
    name: "Export Guides",
    h1: "Export Documentation and Trade Term Guides",
    description: "Trade terms, documentation and the mechanics of international shipments.",
    seoTitle: "Export Documentation and Trade Term Guides | Assurex Insights",
    metaDescription: "General guides to export documentation and international trade terms such as FOB and CIF for agricultural commodity buyers.",
  },
  {
    key: "buyer-guides",
    name: "Buyer Guides",
    h1: "Buyer Guides for Commodity Procurement",
    description: "RFQs, supplier selection and procurement checklists for commodity buyers.",
    seoTitle: "Commodity Procurement Buyer Guides | Assurex Insights",
    metaDescription: "Practical procurement guides for agricultural commodity buyers, including RFQ checklists and supplier questions.",
  },
  {
    key: "quality-and-packaging",
    name: "Quality & Packaging",
    h1: "Quality, Packaging and Product Specifications",
    description: "Specifications, quality parameters and packaging options explained.",
    seoTitle: "Quality, Packaging and Specification Guides | Assurex Insights",
    metaDescription: "Guides to agricultural product specifications, quality parameters and bulk or private-label packaging options.",
  },
];

/** Groupings shown on the blog index, as H2 sections. */
export const blogGroups: { heading: string; categories: BlogCategoryKey[] }[] = [
  { heading: "Indian Green Coffee Guides", categories: ["coffee"] },
  { heading: "Rice Guides", categories: ["rice"] },
  { heading: "Indian Spice Guides", categories: ["spices"] },
  { heading: "Export Documentation and Buyer Guides", categories: ["export-guides", "buyer-guides"] },
  { heading: "Quality, Packaging and Product Specifications", categories: ["quality-and-packaging"] },
];

export const articles: Article[] = [...coffeeArticles, ...riceArticles, ...produceSpiceArticles, ...tradeArticles].sort(
  (a, b) => b.published.localeCompare(a.published),
);

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getCategory(key: string): BlogCategory | undefined {
  return blogCategories.find((c) => c.key === key);
}

export function articlesInCategory(key: BlogCategoryKey): Article[] {
  return articles.filter((a) => a.category === key);
}

export function totalPages(): number {
  return Math.max(1, Math.ceil(articles.length / blogIndex.pageSize));
}

export function articlesForPage(page: number): Article[] {
  const start = (page - 1) * blogIndex.pageSize;
  return articles.slice(start, start + blogIndex.pageSize);
}

export function readingMinutes(article: Article): number {
  const words = `${article.summary} ${article.body}`.split(/\s+/).length;
  return Math.max(3, Math.round(words / 220));
}

/** Full editorial backlog (see docs/EDITORIAL-BACKLOG.md). */
export const editorialBacklog: BacklogItem[] = [
  { title: "Vadi Matta Rice: Characteristics, Uses and Buyer Considerations", category: "rice", status: "published", slug: "vadi-matta-rice-characteristics-uses-buyer-considerations" },
  { title: "Vadi Matta Rice vs Basmati Rice: Key Differences", category: "rice", status: "published", slug: "vadi-matta-vs-basmati-rice-key-differences" },
  { title: "Understanding IR 64 Rice for Commercial Buyers", category: "rice", status: "planned" },
  { title: "What Is Parboiled Rice? Processing and Buying Considerations", category: "rice", status: "planned" },
  { title: "Sona Masoori Rice: Characteristics and Common Uses", category: "rice", status: "planned" },
  { title: "How to Select Rice Specifications for Bulk Purchasing", category: "rice", status: "planned" },
  { title: "Rice Packaging Options for Wholesale and Private-Label Buyers", category: "quality-and-packaging", status: "published", slug: "rice-packaging-options-for-wholesale-and-private-label-buyers" },
  { title: "What Importers Should Check Before Buying Rice in Bulk", category: "rice", status: "planned" },
  { title: "Rice Moisture and Broken Percentage: Why Specifications Matter", category: "quality-and-packaging", status: "published", slug: "rice-moisture-and-broken-percentage-specifications" },
  { title: "A Practical Guide to Requesting a Rice Export Quotation", category: "rice", status: "planned" },
  { title: "Indian Green Coffee Beans: A Buyer's Guide for Roasters and Importers", category: "coffee", status: "published", slug: "indian-green-coffee-beans-buyers-guide" },
  { title: "Arabica vs Robusta: Choosing Indian Green Coffee for Your Roastery", category: "coffee", status: "published", slug: "arabica-vs-robusta-indian-green-coffee-for-roasters" },
  { title: "Buying Indian Green Coffee for the Gulf Market", category: "coffee", status: "published", slug: "buying-indian-green-coffee-for-gulf-market" },
  { title: "Importing Indian Green Coffee Beans into the USA", category: "coffee", status: "published", slug: "importing-indian-green-coffee-beans-usa" },
  { title: "Importing Indian Green Coffee into the UK Post-Brexit", category: "coffee", status: "published", slug: "importing-indian-green-coffee-beans-uk" },
  { title: "Monsooned Malabar: India's Unique Coffee Processing Method Explained", category: "coffee", status: "published", slug: "monsooned-malabar-indian-coffee-processing-explained" },
  { title: "Buying Indian Green Coffee for European Roasters", category: "coffee", status: "planned" },
  { title: "Indian Coffee Certifications: Organic NPOP, Rainforest Alliance and Fair Trade", category: "coffee", status: "planned" },
  { title: "How to Request a Green Coffee Bean Export Quotation", category: "coffee", status: "planned" },
  { title: "Indian Green Cardamom: Grades and Buying Considerations", category: "spices", status: "published", slug: "indian-green-cardamom-grades-buying-considerations" },
  { title: "What Buyers Should Know About Cardamom Size and Colour", category: "spices", status: "planned" },
  { title: "Indian Black Pepper: Product Specifications for Importers", category: "spices", status: "planned" },
  { title: "Black Pepper Quality Parameters Buyers Should Discuss", category: "spices", status: "published", slug: "black-pepper-quality-parameters-buyers-should-discuss" },
  { title: "Nutmeg Buying Guide for Wholesale Spice Buyers", category: "spices", status: "planned" },
  { title: "Mace vs Nutmeg: Differences, Uses and Product Selection", category: "spices", status: "published", slug: "mace-vs-nutmeg-differences-uses-and-selection" },
  { title: "How to Evaluate Spice Packaging Requirements", category: "quality-and-packaging", status: "planned" },
  { title: "Food-Safety Testing Considerations for Imported Spices", category: "quality-and-packaging", status: "planned" },
  { title: "How to Request a Commercial Export Quotation", category: "buyer-guides", status: "planned" },
  { title: "What Information Should an Importer Include in an RFQ?", category: "buyer-guides", status: "published", slug: "what-to-include-in-an-rfq" },
  { title: "Export Documentation: A General Introduction for Commodity Buyers", category: "export-guides", status: "published", slug: "export-documentation-introduction-for-commodity-buyers" },
  { title: "FOB vs CIF: Understanding Common International Trade Terms", category: "export-guides", status: "published", slug: "fob-vs-cif-understanding-common-trade-terms" },
  { title: "What Importers Should Know About Incoterms", category: "export-guides", status: "planned" },
  { title: "Planning Packaging for Bulk Agricultural Shipments", category: "quality-and-packaging", status: "planned" },
  { title: "Understanding Product Specifications Before Signing a Contract", category: "buyer-guides", status: "planned" },
  { title: "A Buyer's Checklist for Agricultural Commodity Procurement", category: "buyer-guides", status: "planned" },
  { title: "Questions to Ask Before Selecting an Indian Commodity Supplier", category: "buyer-guides", status: "planned" },
  { title: "Understanding Samples, Inspection and Quality Acceptance", category: "quality-and-packaging", status: "planned" },
  { title: "How to Compare Agricultural Commodity Quotations Fairly", category: "buyer-guides", status: "planned" },
  { title: "Preparing for a First International Commodity Purchase", category: "buyer-guides", status: "planned" },
];
