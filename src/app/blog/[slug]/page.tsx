import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, BookOpen, ExternalLink } from "lucide-react";
import { formatDate } from "@/components/blog/ArticleCard";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { FaqList } from "@/components/shared/FaqList";
import { Markdown, extractHeadings } from "@/components/shared/Markdown";
import { articles, getArticle, getCategory, readingMinutes } from "@/content/blog";
import { getProductByPath } from "@/content/catalog";
import { absoluteUrl, siteConfig } from "@/config/site";
import { resourceNav } from "@/lib/data";
import { buildMetadata, faqSchema, organizationId } from "@/lib/seo";

/** Only the listed paths exist; anything else returns a real 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  return buildMetadata({
    title: article.seoTitle,
    description: article.metaDescription,
    path: `/blog/${article.slug}/`,
    image: article.image,
    type: "article",
    publishedTime: article.published,
    modifiedTime: article.updated,
  });
}

function linkLabel(path: string) {
  const product = getProductByPath(path);
  if (product) return product.name;
  const resource = resourceNav.find((r) => r.href === path);
  if (resource) return resource.label;
  if (path === "/products/") return "All Products";
  if (path === "/export-process/") return "Export Process";
  return path;
}

export default async function ArticlePage({ params }: PageProps<"/blog/[slug]">) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const category = getCategory(article.category);
  const path = `/blog/${article.slug}/`;
  const headings = extractHeadings(article.body, 2);

  const schema: Record<string, unknown>[] = [
    {
      "@type": "BlogPosting",
      "@id": `${absoluteUrl(path)}#article`,
      headline: article.title,
      description: article.metaDescription,
      image: absoluteUrl(article.image.src),
      datePublished: article.published,
      dateModified: article.updated,
      inLanguage: "en",
      mainEntityOfPage: absoluteUrl(path),
      articleSection: category?.name,
      author: { "@type": "Organization", "@id": organizationId, name: siteConfig.name, url: siteConfig.url },
      publisher: { "@id": organizationId },
    },
  ];
  if (article.faqs?.length) schema.push(faqSchema(article.faqs, path));

  return (
    <>
      <JsonLd data={schema} />
      <article>
        <header className="bg-champagne">
          <div className="mx-auto max-w-5xl px-4 pt-8 pb-12 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Insights", path: "/blog/" },
                ...(category ? [{ name: category.name, path: `/blog/category/${category.key}/` }] : []),
                { name: article.title, path },
              ]}
            />
            {category ? (
              <Link href={`/blog/category/${category.key}/`} className="eyebrow mt-10 text-gold-ink hover:text-forest">
                {category.name}
              </Link>
            ) : null}
            <h1 className="mt-5 text-[2.4rem] leading-[1.05] font-semibold text-forest sm:text-[3.4rem]">{article.title}</h1>
            <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-green">
              <span>Published by {siteConfig.name}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={article.published}>{formatDate(article.published)}</time>
              {article.updated !== article.published ? (
                <>
                  <span aria-hidden="true">·</span>
                  <span>
                    Updated <time dateTime={article.updated}>{formatDate(article.updated)}</time>
                  </span>
                </>
              ) : null}
              <span aria-hidden="true">·</span>
              <span>{readingMinutes(article)} min read</span>
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-2 aspect-[16/8] overflow-hidden border border-line">
            <Image src={article.image.src} alt={article.image.alt} fill priority sizes="(min-width: 1024px) 960px, 100vw" className="object-cover" />
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_220px]">
            <div className="min-w-0">
              <section aria-label="Short answer" className="border-l-2 border-gold bg-mist px-6 py-5">
                <p className="text-[0.7rem] font-semibold tracking-[0.24em] text-gold-ink uppercase">The short answer</p>
                <p className="mt-3 text-[1.06rem] leading-relaxed text-ink">{article.summary}</p>
              </section>
              <Markdown content={article.body} className="mt-4" />

              {article.faqs?.length ? (
                <section aria-labelledby="article-faq" className="mt-16">
                  <h2 id="article-faq" className="mb-6 text-[2rem] font-semibold text-forest">
                    Frequently Asked Questions
                  </h2>
                  <FaqList items={article.faqs} />
                </section>
              ) : null}

              {article.sources?.length ? (
                <section aria-labelledby="article-sources" className="mt-14 border-t border-line pt-8">
                  <h2 id="article-sources" className="text-[1.6rem] font-semibold text-forest">
                    Sources and Further Reading
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {article.sources.map((s) => (
                      <li key={s.url}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-start gap-2 text-[0.95rem] text-forest underline decoration-gold underline-offset-4"
                        >
                          {s.label}
                          <ExternalLink className="mt-1 size-3.5 shrink-0" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs leading-relaxed text-slate-green">
                    This article is general information for commercial buyers. It is not legal, customs, tax or financial advice. Regulations change — confirm current requirements with the relevant authority.
                  </p>
                </section>
              ) : null}
            </div>

            <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
              {headings.length ? (
                <nav aria-label="In this article">
                  <p className="eyebrow text-gold-ink">In this article</p>
                  <ol className="mt-4 space-y-2 border-l border-line">
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`} className="-ml-px block border-l border-transparent pl-4 text-[0.85rem] leading-snug text-slate-green hover:border-gold hover:text-forest">
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              ) : null}
              <div>
                <p className="eyebrow text-gold-ink">Related pages</p>
                <ul className="mt-4 space-y-2">
                  {article.relatedProducts.map((p) => (
                    <li key={p}>
                      <Link href={p} className="group flex items-center justify-between gap-3 border border-line px-4 py-3 text-sm font-medium text-forest hover:border-gold">
                        <span className="flex items-center gap-2">
                          <BookOpen className="size-4 text-gold-ink" aria-hidden="true" />
                          {linkLabel(p)}
                        </span>
                        <ArrowUpRight className="size-4 text-gold-ink" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <CtaBanner
        heading="Discuss Your Requirements with Assurex"
        body="Have a product, quantity and destination in mind? Send us the details and we will confirm what can be offered."
        primary={{ label: "Request a Quote", href: "/request-a-quote/" }}
      />
      <RelatedArticles slugs={article.relatedArticles} heading="Related Articles" />
    </>
  );
}
