import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Markdown } from "@/components/shared/Markdown";
import { productCategories, riceVarieties } from "@/content/catalog";
import { productsOverview } from "@/content/products-overview";
import { ctaLabels, quoteHref } from "@/lib/data";
import { absoluteUrl } from "@/config/site";
import { buildMetadata, webPageSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: productsOverview.seoTitle,
  description: productsOverview.metaDescription,
  path: productsOverview.path,
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            type: "CollectionPage",
            path: productsOverview.path,
            name: productsOverview.seoTitle,
            description: productsOverview.metaDescription,
          }),
          {
            "@type": "ItemList",
            itemListElement: productCategories.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.name,
              url: absoluteUrl(p.path),
            })),
          },
        ]}
      />
      <section className="bg-champagne">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-16 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Products", path: "/products/" }]} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow text-gold-ink">{productsOverview.eyebrow}</p>
              <h1 className="mt-5 text-[2.6rem] leading-[1.02] font-semibold text-forest sm:text-6xl">{productsOverview.h1}</h1>
            </div>
            <p className="text-lg leading-relaxed text-ink/85">{productsOverview.intro}</p>
          </div>
          <nav aria-label="Product index" className="mt-12 border-t border-gold/40 pt-6">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {productCategories.map((p, i) => (
                <li key={p.slug}>
                  <a href={`#${p.slug}`} className="group inline-flex items-baseline gap-2 text-forest">
                    <span className="ledger-index text-sm text-gold-ink">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-xl font-semibold group-hover:underline group-hover:decoration-gold group-hover:underline-offset-4">
                      {p.cardTitle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <div className="bg-white">
        {productCategories.map((product, i) => {
          const key = product.quote.product;
          const reversed = i % 2 === 1;
          return (
            <section
              key={product.slug}
              id={product.slug}
              aria-labelledby={`${product.slug}-heading`}
              className={cn("scroll-mt-24 border-b border-line", reversed && "bg-mist")}
            >
              <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
                <div className={cn("relative aspect-[4/3] overflow-hidden border border-line", reversed && "lg:order-2")} data-reveal>
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 92vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
                <div data-reveal>
                  <p className="ledger-index text-2xl font-semibold text-gold-ink">{String(i + 1).padStart(2, "0")}</p>
                  <h2 id={`${product.slug}-heading`} className="mt-2 text-4xl leading-tight font-semibold text-forest sm:text-5xl">
                    {productsOverview.headings[key]}
                  </h2>
                  <p className="mt-5 text-[1.05rem] leading-relaxed text-ink/85">{product.heroIntro}</p>
                  <ul className="mt-6 space-y-2.5">
                    {productsOverview.highlights[key].map((h) => (
                      <li key={h} className="flex items-start gap-3 text-[0.95rem] text-ink">
                        <Check className="mt-0.5 size-4 shrink-0 text-gold-ink" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  {key === "rice" ? (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {riceVarieties.map((v) => (
                        <li key={v.slug}>
                          <Link
                            href={v.path}
                            className="inline-block border border-forest/30 px-3 py-1.5 text-sm text-forest hover:border-gold hover:bg-champagne"
                          >
                            {v.cardTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="mt-8 flex flex-wrap items-center gap-6">
                    <ButtonLink href={product.path}>
                      Explore {product.cardTitle}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </ButtonLink>
                    <ButtonLink href={quoteHref(product.quote.product, undefined, productsOverview.path)} variant="text">
                      {ctaLabels.quote}
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section aria-labelledby="selecting-heading" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <h2 id="selecting-heading" className="text-4xl leading-tight font-semibold text-forest sm:text-5xl">
            {productsOverview.selecting.heading}
          </h2>
          <Markdown content={productsOverview.selecting.body} />
        </div>
      </section>

      <CtaBanner
        heading={productsOverview.request.heading}
        body={productsOverview.request.body}
        primary={{ label: ctaLabels.specs, href: "/request-a-quote/" }}
      />
    </>
  );
}
