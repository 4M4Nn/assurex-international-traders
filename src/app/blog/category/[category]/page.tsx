import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleGrid, BlogHero, collectionSchema } from "@/components/blog/BlogListing";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { articlesInCategory, blogCategories, getCategory } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";

/** Only the listed paths exist; anything else returns a real 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return blogCategories.map((c) => ({ category: c.key }));
}

export async function generateMetadata({ params }: PageProps<"/blog/category/[category]">): Promise<Metadata> {
  const category = getCategory((await params).category);
  if (!category) return {};
  return buildMetadata({
    title: category.seoTitle,
    description: category.metaDescription,
    path: `/blog/category/${category.key}/`,
  });
}

export default async function BlogCategoryPage({ params }: PageProps<"/blog/category/[category]">) {
  const category = getCategory((await params).category);
  if (!category) notFound();
  const items = articlesInCategory(category.key);
  const path = `/blog/category/${category.key}/`;

  return (
    <>
      <JsonLd data={collectionSchema(path, category.h1, category.metaDescription, items)} />
      <BlogHero
        crumbs={[
          { name: "Insights", path: "/blog/" },
          { name: category.name, path },
        ]}
        eyebrow={`Insights · ${category.name}`}
        h1={category.h1}
        intro={category.description}
        activeCategory={category.key}
      />
      <section aria-labelledby="category-articles" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 id="category-articles" className="mb-10 text-[2.2rem] leading-tight font-semibold text-forest sm:text-5xl">
            {items.length} {items.length === 1 ? "Article" : "Articles"}
          </h2>
          <ArticleGrid items={items} />
        </div>
      </section>
      <CtaBanner
        heading="Discuss Your Requirements"
        body="Tell us your product, quantity and destination and we will confirm what can be offered."
        primary={{ label: "Request a Quote", href: "/request-a-quote/" }}
      />
    </>
  );
}
