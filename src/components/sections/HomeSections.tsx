import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  ClipboardCheck,
  Handshake,
  MessagesSquare,
  PackageCheck,
  Scale,
  Ship,
  Store,
  Truck,
  UtensilsCrossed,
  Factory,
  Warehouse,
  Globe2,
  FileSearch,
} from "lucide-react";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { ProductCard } from "@/components/product/ProductCard";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { PhoneLink, WhatsAppLink } from "@/components/shared/ContactLinks";
import { FaqList } from "@/components/shared/FaqList";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { articles } from "@/content/blog";
import { productCategories, riceVarieties } from "@/content/catalog";
import { homeFaqs } from "@/content/faqs";
import { homeContent } from "@/lib/data";

export function IntroSection() {
  const { intro, companyFacts } = homeContent;
  return (
    <section aria-labelledby="intro-heading" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
        <div data-reveal>
          <SectionHeading id="intro-heading" eyebrow={intro.eyebrow} heading={intro.heading} />
          <p className="mt-8 border-l-2 border-gold pl-6 font-display text-[1.65rem] leading-snug font-medium text-emerald-deep sm:text-3xl">
            {intro.statement}
          </p>
          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink/85">
            {intro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ButtonLink href="/about-us/" variant="text" className="mt-8">
            More about Assurex
          </ButtonLink>
        </div>
        <aside data-reveal aria-labelledby="company-facts" className="self-start border border-line bg-mist">
          <h3 id="company-facts" className="border-b border-line px-6 py-4 font-sans text-[0.72rem] font-semibold tracking-[0.24em] text-gold-ink uppercase">
            Company information
          </h3>
          <dl className="divide-y divide-line">
            {companyFacts.map((fact) => (
              <div key={fact.term} className="grid gap-1 px-6 py-4 sm:grid-cols-[150px_1fr] sm:gap-4">
                <dt className="text-[0.8rem] font-semibold text-forest">{fact.term}</dt>
                <dd className="text-[0.92rem] leading-relaxed text-ink">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}

export function ProductsSection() {
  const { productsSection } = homeContent;
  return (
    <section aria-labelledby="products-heading" className="border-y border-line bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading id="products-heading" eyebrow={productsSection.eyebrow} heading={productsSection.heading} lede={productsSection.lede} />
          <ButtonLink href="/products/" variant="outline" className="self-start md:self-auto">
            All products
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const grainNotes: Record<string, string> = {
  "vadi-matta-rice": "Bold · reddish · parboiled",
  "basmati-rice": "Extra-long · aromatic",
  "ir-64-rice": "Long grain · non-aromatic",
  "parboiled-rice": "Firm · separate grains",
  "sona-masoori-rice": "Medium grain · lightweight",
};

export function RiceSection() {
  const { riceSection } = homeContent;
  return (
    <section aria-labelledby="rice-heading" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.25fr] lg:px-8 lg:py-28">
        <div data-reveal>
          <SectionHeading id="rice-heading" eyebrow={riceSection.eyebrow} heading={riceSection.heading} lede={riceSection.lede} />
          <div className="relative mt-10 aspect-[4/3] overflow-hidden border border-line">
            <Image
              src={riceVarieties[0].secondaryImage?.src ?? riceVarieties[0].image.src}
              alt={riceVarieties[0].secondaryImage?.alt ?? riceVarieties[0].image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 92vw"
              className="object-cover"
            />
          </div>
        </div>
        <ol className="self-center border-t border-forest/80" data-reveal>
          {riceVarieties.map((variety, i) => (
            <li key={variety.slug} className="border-b border-line">
              <Link href={variety.path} className="group grid grid-cols-[48px_1fr_auto] items-center gap-4 py-6 sm:grid-cols-[64px_1fr_auto]">
                <span className="ledger-index text-2xl font-semibold text-gold-ink sm:text-3xl">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block font-display text-[1.7rem] leading-tight font-semibold text-forest group-hover:text-emerald-deep sm:text-3xl">
                    {variety.cardTitle}
                  </span>
                  <span className="mt-1 block text-[0.8rem] tracking-wide text-slate-green">{grainNotes[variety.slug]}</span>
                </span>
                <ArrowUpRight className="size-5 text-gold-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const sourcingIcons = [Handshake, ClipboardCheck, Scale, PackageCheck, Ship];

export function SourcingSection() {
  const { sourcingSection } = homeContent;
  return (
    <section aria-labelledby="sourcing-heading" className="relative overflow-hidden bg-forest text-champagne">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8 lg:py-28">
        <div data-reveal>
          <SectionHeading id="sourcing-heading" tone="dark" eyebrow={sourcingSection.eyebrow} heading={sourcingSection.heading} lede={sourcingSection.lede} />
          <div className="relative mt-10 aspect-[16/10] overflow-hidden border border-gold/40">
            <Image src={sourcingSection.image.src} alt={sourcingSection.image.alt} fill sizes="(min-width: 1024px) 40vw, 92vw" className="object-cover" />
          </div>
          <ButtonLink href="/quality-and-sourcing/" variant="outline-light" className="mt-8">
            Our sourcing approach
          </ButtonLink>
        </div>
        <ul className="grid gap-px self-center bg-champagne/15 sm:grid-cols-2" data-reveal>
          {sourcingSection.points.map((point, i) => {
            const Icon = sourcingIcons[i % sourcingIcons.length];
            return (
              <li key={point.title} className={`bg-forest p-7 ${i === sourcingSection.points.length - 1 ? "sm:col-span-2" : ""}`}>
                <Icon className="size-6 text-gold" aria-hidden="true" />
                <h3 className="mt-5 text-2xl font-semibold text-champagne">{point.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-champagne/75">{point.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

const buyerIcons = [Globe2, Warehouse, Truck, Store, UtensilsCrossed, Factory];

export function BuyersSection() {
  const { buyersSection } = homeContent;
  return (
    <section aria-labelledby="buyers-heading" className="bg-champagne">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading id="buyers-heading" eyebrow={buyersSection.eyebrow} heading={buyersSection.heading} lede={buyersSection.lede} />
        <ul className="mt-14 grid border-t border-l border-gold/40 sm:grid-cols-2 lg:grid-cols-3">
          {buyersSection.buyers.map((buyer, i) => {
            const Icon = buyerIcons[i % buyerIcons.length];
            return (
              <li key={buyer.title} data-reveal className="border-r border-b border-gold/40 p-7 transition-colors hover:bg-white/70">
                <div className="flex items-center justify-between">
                  <Icon className="size-6 text-forest" aria-hidden="true" />
                  <span className="ledger-index text-lg text-gold-ink">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-forest">{buyer.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/80">{buyer.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const { processSection } = homeContent;
  return (
    <section aria-labelledby="process-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading id="process-heading" eyebrow={processSection.eyebrow} heading={processSection.heading} lede={processSection.lede} />
          <ButtonLink href="/export-process/" variant="outline" className="self-start md:self-auto">
            Full export process
          </ButtonLink>
        </div>
        <ol className="mt-14 grid gap-0 md:grid-cols-5">
          {processSection.steps.map((step, i) => (
            <li key={step.title} data-reveal className="relative border-t-2 border-gold pt-6 pr-6 pb-8 md:border-t-0 md:pt-0">
              <div className="hidden items-center md:flex" aria-hidden="true">
                <span className="grid size-11 place-items-center border border-gold bg-white ledger-index text-lg font-semibold text-gold-ink">
                  {i + 1}
                </span>
                {i < processSection.steps.length - 1 ? <span className="h-px flex-1 bg-gold/60" /> : null}
              </div>
              <p className="ledger-index text-3xl font-semibold text-gold-ink md:hidden">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-[1.45rem] leading-snug font-semibold text-forest md:mt-6">{step.title}</h3>
              <p className="mt-3 text-[0.93rem] leading-relaxed text-slate-green">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const whyIcons = [MessagesSquare, FileSearch, ClipboardCheck, Scale, Boxes];

export function WhySection() {
  const { whySection } = homeContent;
  return (
    <section aria-labelledby="why-heading" className="border-y border-line bg-mist">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:px-8 lg:py-28">
        <div data-reveal>
          <SectionHeading id="why-heading" eyebrow={whySection.eyebrow} heading={whySection.heading} lede={whySection.lede} />
          <ButtonLink href="/our-capabilities/" variant="text" className="mt-8">
            See what we coordinate
          </ButtonLink>
        </div>
        <ul className="divide-y divide-line border-y border-line" data-reveal>
          {whySection.principles.map((p, i) => {
            const Icon = whyIcons[i % whyIcons.length];
            return (
              <li key={p.title} className="grid grid-cols-[44px_1fr] gap-5 py-6 sm:grid-cols-[44px_220px_1fr] sm:items-baseline">
                <Icon className="size-6 text-gold-ink" aria-hidden="true" />
                <h3 className="text-2xl leading-snug font-semibold text-forest">{p.title}</h3>
                <p className="col-start-2 text-[0.95rem] leading-relaxed text-ink/80 sm:col-start-3">{p.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function EnquirySection() {
  const { enquirySection } = homeContent;
  return (
    <section aria-labelledby="enquiry-heading" className="relative bg-emerald-deep">
      <div className="gold-rule absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.35fr] lg:px-8 lg:py-28">
        <div className="text-champagne">
          <SectionHeading id="enquiry-heading" tone="dark" eyebrow={enquirySection.eyebrow} heading={enquirySection.heading} lede={enquirySection.lede} />
          <div className="mt-10 space-y-4">
            <WhatsAppLink className="flex min-h-12 w-full items-center justify-center gap-2 bg-gold px-6 py-3 text-[0.8rem] font-semibold tracking-[0.14em] text-emerald-deep uppercase hover:bg-gold-soft sm:w-auto sm:justify-start" />
            <PhoneLink className="flex items-center gap-3 text-lg font-medium text-champagne hover:text-gold" iconClassName="text-gold" />
            <Link
              href="/request-a-quote/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-champagne underline decoration-gold underline-offset-[6px] hover:text-gold"
            >
              Need a detailed RFQ? Use the full quote form
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <EnquiryForm variant="compact" tone="card" sourcePage="/ (homepage enquiry)" />
      </div>
    </section>
  );
}

export function HomeFaqSection() {
  const { faqSection } = homeContent;
  return (
    <section aria-labelledby="home-faq-heading" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:px-8 lg:py-28">
        <div>
          <SectionHeading id="home-faq-heading" eyebrow={faqSection.eyebrow} heading={faqSection.heading} />
          <ButtonLink href="/faq/" variant="outline" className="mt-8">
            View all FAQs
          </ButtonLink>
        </div>
        <FaqList items={homeFaqs} />
      </div>
    </section>
  );
}

export function InsightsSection() {
  const { insightsSection } = homeContent;
  const latest = articles.slice(0, 3);
  return (
    <section aria-labelledby="insights-heading" className="bg-champagne">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading id="insights-heading" eyebrow={insightsSection.eyebrow} heading={insightsSection.heading} lede={insightsSection.lede} />
          <ButtonLink href="/blog/" variant="outline" className="self-start md:self-auto">
            All insights
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
