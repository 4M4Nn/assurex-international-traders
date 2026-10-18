import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { Pagination } from "@/components/blog/Pagination";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { articlesForPage, articlesInCategory, blogCategories, blogGroups, blogIndex, totalPages } from "@/content/blog";
import { absoluteUrl } from "@/config/site";
import { webPageSchema, type Crumb } from "@/lib/seo";
import { cn } from "@/lib/utils";
import type { Article } from "@/types";

export function pageHref(page: number) {
  return page <= 1 ? "/blog/" : `/blog/page/${page}/`;
}

function CategoryFilters({ active }: { active?: string }) {
  return (
    <nav aria-label="Article categories" className="mt-10">
      <ul className="flex flex-wrap gap-2">
        <li>
          <Link
            href="/blog/"
            aria-current={!active ? "page" : undefined}
            className={cn(
              "inline-block border px-4 py-2 text-[0.78rem] font-semibold tracking-[0.1em] uppercase",
              !active ? "border-forest bg-forest text-white" : "border-forest/30 text-forest hover:border-gold",
            )}
          >
            All
          </Link>
        </li>
        {blogCategories.map((c) => (
          <li key={c.key}>
            <Link
              href={`/blog/category/${c.key}/`}
              aria-current={active === c.key ? "page" : undefined}
              className={cn(
                "inline-block border px-4 py-2 text-[0.78rem] font-semibold tracking-[0.1em] uppercase",
                active === c.key ? "border-forest bg-forest text-white" : "border-forest/30 text-forest hover:border-gold",
              )}
            >
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

interface BlogHeroProps {
  crumbs: Crumb[];
  eyebrow: string;
  h1: string;
  intro: string;
  activeCategory?: string;
}

export function BlogHero({ crumbs, eyebrow, h1, intro, activeCategory }: BlogHeroProps) {
  return (
    <section className="bg-champagne">
      <div className="mx-auto max-w-7xl px-4 pt-8 pb-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={crumbs} />
        <p className="eyebrow mt-10 text-gold-ink">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-[2.5rem] leading-[1.04] font-semibold text-forest sm:text-6xl">{h1}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/85">{intro}</p>
        <CategoryFilters active={activeCategory} />
      </div>
    </section>
  );
}

export function ArticleGrid({ items }: { items: Article[] }) {
  return (
    <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
      {items.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
}

function collectionSchema(path: string, name: string, description: string, items: Article[]) {
  return [
    webPageSchema({ type: "CollectionPage", path, name, description }),
    {
      "@type": "ItemList",
      itemListElement: items.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: absoluteUrl(`/blog/${a.slug}/`),
        name: a.title,
      })),
    },
  ];
}

export function BlogIndexView({ page }: { page: number }) {
  const total = totalPages();
  const pageItems = articlesForPage(page);
  const isFirst = page === 1;
  const path = pageHref(page);
  const h1 = isFirst ? blogIndex.h1 : `${blogIndex.h1} — Page ${page}`;

  return (
    <>
      <JsonLd data={collectionSchema(path, h1, blogIndex.metaDescription, pageItems)} />
      <BlogHero
        crumbs={isFirst ? [{ name: "Insights", path: "/blog/" }] : [{ name: "Insights", path: "/blog/" }, { name: `Page ${page}`, path }]}
        eyebrow={blogIndex.eyebrow}
        h1={h1}
        intro={blogIndex.intro}
      />

      {isFirst ? (
        <section aria-label="Guides by topic" className="border-b border-line bg-white">
          <div className="mx-auto grid max-w-7xl gap-x-12 gap-y-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
            {blogGroups.map((group) => {
              const items = group.categories.flatMap((c) => articlesInCategory(c));
              return (
                <div key={group.heading} data-reveal>
                  <h2 className="border-b-2 border-gold pb-3 text-[1.75rem] leading-tight font-semibold text-forest">{group.heading}</h2>
                  <ul className="mt-4 divide-y divide-line">
                    {items.map((a) => (
                      <li key={a.slug}>
                        <Link href={`/blog/${a.slug}/`} className="group flex items-start justify-between gap-4 py-3.5 text-[0.98rem] leading-snug text-ink hover:text-forest">
                          {a.title}
                          <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-gold-ink" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/blog/category/${group.categories[0]}/`}
                    className="mt-4 inline-block text-[0.72rem] font-semibold tracking-[0.18em] text-forest uppercase underline decoration-gold underline-offset-[6px]"
                  >
                    Browse {group.heading.toLowerCase()}
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      <section aria-labelledby="all-articles" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 id="all-articles" className="mb-10 text-[2.2rem] leading-tight font-semibold text-forest sm:text-5xl">
            {isFirst ? "Latest Articles" : `All Articles — Page ${page}`}
          </h2>
          <ArticleGrid items={pageItems} />
          <Pagination current={page} total={total} hrefFor={pageHref} />
        </div>
      </section>

      <CtaBanner
        heading="Ready to Discuss a Specific Requirement?"
        body="Our guides cover the general picture. For your product, quantity and destination, talk to us directly."
        primary={{ label: "Send Your Import Requirements", href: "/request-a-quote/" }}
      />
    </>
  );
}

export { collectionSchema };
