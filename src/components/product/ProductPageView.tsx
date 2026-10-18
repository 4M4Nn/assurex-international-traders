import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ProductCard } from "@/components/product/ProductCard";
import { QuickAnswer } from "@/components/product/QuickAnswer";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { SpecTable } from "@/components/product/SpecTable";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { WhatsAppLink } from "@/components/shared/ContactLinks";
import { FaqList } from "@/components/shared/FaqList";
import { Markdown } from "@/components/shared/Markdown";
import { riceVarieties } from "@/content/catalog";
import { ctaLabels, quoteHref } from "@/lib/data";
import { faqSchema, webPageSchema, type Crumb } from "@/lib/seo";
import type { ProductContent } from "@/types";

interface ProductPageViewProps {
  product: ProductContent;
  crumbs: Crumb[];
}

export function ProductPageView({ product, crumbs }: ProductPageViewProps) {
  const quote = quoteHref(product.quote.product, product.quote.variety, product.path);
  const whatsappMessage = `Hello Assurex, I would like to enquire about ${product.name}.`;
  const tocItems = [
    ...product.sections.map((s) => ({ id: s.id, label: s.heading })),
    { id: "request-quotation", label: product.cta.heading },
    { id: "faq", label: product.faqHeading },
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: product.path,
            name: product.seoTitle,
            description: product.metaDescription,
            image: product.image,
            type: product.kind === "rice-category" ? "CollectionPage" : "WebPage",
          }),
          faqSchema(product.faqs, product.path),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-champagne">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-14 sm:px-6 lg:px-8 lg:pb-20">
          <Breadcrumbs items={crumbs} />
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <p className="eyebrow text-gold-ink">{product.eyebrow}</p>
              <h1 className="mt-5 text-[2.6rem] leading-[1.02] font-semibold text-forest sm:text-6xl">{product.h1}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/85">{product.heroIntro}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={quote}>
                  {ctaLabels.quote}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </ButtonLink>
                <WhatsAppLink
                  message={whatsappMessage}
                  className="inline-flex min-h-11 items-center justify-center gap-2 border border-forest px-6 py-3 text-[0.8rem] font-semibold tracking-[0.14em] text-forest uppercase transition-colors hover:bg-forest hover:text-white"
                />
              </div>
              <a
                href="#specifications-table"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-forest underline decoration-gold underline-offset-4"
              >
                <FileText className="size-4 text-gold-ink" aria-hidden="true" />
                {ctaLabels.specs}
              </a>
            </div>
            <figure className="relative">
              <div className="relative ml-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden border border-gold/40 bg-white sm:aspect-[5/6]">
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 92vw"
                  className="object-cover"
                  data-zoom
                />
              </div>
              {product.secondaryImage ? (
                <div className="absolute -bottom-8 -left-2 hidden aspect-square w-44 overflow-hidden border-4 border-champagne bg-white shadow-[0_20px_40px_-20px_rgba(3,41,31,0.5)] sm:block lg:-left-10">
                  <Image
                    src={product.secondaryImage.src}
                    alt={product.secondaryImage.alt}
                    fill
                    sizes="176px"
                    className="object-cover"
                  />
                </div>
              ) : null}
              <figcaption className="mt-3 text-right text-xs text-slate-green">
                Representative product image — not a specific Assurex lot.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <QuickAnswer name={product.name} data={product.quickAnswer} />

      {/* Body */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr] xl:gap-20">
          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-28">
              <p className="eyebrow text-gold-ink">On this page</p>
              <ol className="mt-5 space-y-2.5 border-l border-line">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="-ml-px block border-l border-transparent pl-4 text-[0.85rem] leading-snug text-slate-green hover:border-gold hover:text-forest"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="min-w-0 max-w-3xl">
            {product.sections.map((section, i) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-28 border-t border-line pt-10 pb-12 first:border-t-0 first:pt-0">
                <p className="ledger-index text-xl font-semibold text-gold-ink">{String(i + 1).padStart(2, "0")}</p>
                <h2 id={`${section.id}-heading`} className="mt-2 text-[2rem] leading-tight font-semibold text-forest sm:text-[2.4rem]">
                  {section.heading}
                </h2>
                <Markdown content={section.body} className="mt-5" />
                {section.slot === "spec-table" ? (
                  <div id="specifications-table" className="scroll-mt-28">
                    <SpecTable rows={product.specs} caption={`${product.name} — specification checklist`} />
                  </div>
                ) : null}
                {section.slot === "rice-grid" ? (
                  <div className="mt-8 grid gap-6 sm:grid-cols-2" data-stagger>
                    {riceVarieties.map((variety, idx) => (
                      <ProductCard key={variety.slug} product={variety} index={idx} sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 92vw" />
                    ))}
                  </div>
                ) : null}
              </section>
            ))}

            <section id="request-quotation" aria-labelledby="request-quotation-heading" className="scroll-mt-28 border border-gold/50 bg-champagne/70 p-7 sm:p-10">
              <p className="eyebrow text-gold-ink">Enquire</p>
              <h2 id="request-quotation-heading" className="mt-3 text-[2rem] leading-tight font-semibold text-forest sm:text-[2.4rem]">
                {product.cta.heading}
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink/85">{product.cta.body}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={quote}>
                  {ctaLabels.quote}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href={quote} variant="outline">
                  {ctaLabels.bulk}
                </ButtonLink>
                <WhatsAppLink
                  message={whatsappMessage}
                  className="inline-flex min-h-11 items-center justify-center gap-2 px-2 py-3 text-[0.8rem] font-semibold tracking-[0.14em] text-forest uppercase underline decoration-gold underline-offset-[6px]"
                />
              </div>
            </section>

            <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-28 pt-16">
              <p className="eyebrow text-gold-ink">Buyer questions</p>
              <h2 id="faq-heading" className="mt-3 mb-8 text-[2rem] leading-tight font-semibold text-forest sm:text-[2.4rem]">
                {product.faqHeading}
              </h2>
              <FaqList items={product.faqs} />
            </section>
          </div>
        </div>
      </div>

      <RelatedProducts paths={product.related} />
      <RelatedArticles slugs={product.relatedArticles} />
    </>
  );
}
