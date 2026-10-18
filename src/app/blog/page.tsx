import type { Metadata } from "next";
import { BlogIndexView } from "@/components/blog/BlogListing";
import { blogIndex } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: blogIndex.seoTitle,
  description: blogIndex.metaDescription,
  path: blogIndex.path,
});

export default function BlogPage() {
  return <BlogIndexView page={1} />;
}
