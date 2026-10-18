import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogIndexView, pageHref } from "@/components/blog/BlogListing";
import { blogIndex, totalPages } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";

function parsePage(raw: string): number | null {
  const n = Number(raw);
  if (!Number.isInteger(n) || n < 2 || n > totalPages()) return null;
  return n;
}

/** Only the listed paths exist; anything else returns a real 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  const pages = Array.from({ length: Math.max(0, totalPages() - 1) }, (_, i) => ({ page: String(i + 2) }));
  return pages.length ? pages : [{ page: "2" }];
}

export async function generateMetadata({ params }: PageProps<"/blog/page/[page]">): Promise<Metadata> {
  const n = parsePage((await params).page);
  if (!n) return {};
  return buildMetadata({
    title: `Agricultural Commodity Insights — Page ${n} | Assurex`,
    description: `${blogIndex.metaDescription} Page ${n} of the article archive.`,
    path: pageHref(n),
  });
}

export default async function BlogArchivePage({ params }: PageProps<"/blog/page/[page]">) {
  const n = parsePage((await params).page);
  if (!n) notFound();
  return <BlogIndexView page={n} />;
}
