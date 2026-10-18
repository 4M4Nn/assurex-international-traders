import type { MetadataRoute } from "next";
import { articles, blogCategories, totalPages } from "@/content/blog";
import { allProductPages } from "@/content/catalog";
import { infoPages } from "@/content/pages";
import { legalPages } from "@/content/legal";
import { absoluteUrl, siteConfig } from "@/config/site";

/** Built from the same content registries that generate the public routes. */
export default function sitemap(): MetadataRoute.Sitemap {
  const updated = siteConfig.contentUpdated;
  const entry = (path: string, priority: number, lastModified: string = updated): MetadataRoute.Sitemap[number] => ({
    url: absoluteUrl(path),
    lastModified,
    priority,
  });

  return [
    entry("/", 1),
    entry("/products/", 0.9),
    ...allProductPages.map((p) => entry(p.path, p.kind === "rice-variety" ? 0.8 : 0.9)),
    ...infoPages.map((p) => entry(p.path, 0.7)),
    entry("/faq/", 0.7),
    entry("/contact-us/", 0.8),
    entry("/request-a-quote/", 0.8),
    entry("/blog/", 0.7),
    ...Array.from({ length: Math.max(0, totalPages() - 1) }, (_, i) => entry(`/blog/page/${i + 2}/`, 0.4)),
    ...blogCategories.map((c) => entry(`/blog/category/${c.key}/`, 0.5)),
    ...articles.map((a) => entry(`/blog/${a.slug}/`, 0.6, a.updated)),
    ...legalPages.map((p) => entry(p.path, 0.2, p.updated)),
    entry("/image-credits/", 0.1),
  ];
}
