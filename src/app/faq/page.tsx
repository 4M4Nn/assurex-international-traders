import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { FaqList } from "@/components/shared/FaqList";
import { allFaqs, faqCategories, faqPage } from "@/content/faqs";
import { ctaLabels } from "@/lib/data";
import { buildMetadata, faqSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: faqPage.seoTitle,
  description: faqPage.metaDescription,
  path: faqPage.path,
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: faqPage.path, name: faqPage.seoTitle, description: faqPage.metaDescription }),
          faqSchema(allFaqs, faqPage.path),
        ]}
      />
      <section className="bg-champagne">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-14 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "FAQ", path: faqPage.path }]} />
          <p className="eyebrow mt-10 text-gold-ink">{faqPage.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-[2.5rem] leading-[1.04] font-semibold text-forest sm:text-6xl">{faqPage.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/85">{faqPage.intro}</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr] xl:gap-20">
          <aside>
            <nav aria-label="FAQ categories" className="lg:sticky lg:top-28">
              <p className="eyebrow text-gold-ink">Categories</p>
              <ul className="mt-5 flex flex-wrap gap-2 lg:flex-col lg:gap-0 lg:border-l lg:border-line">
                {faqCategories.map((c) => (
                  <li key={c.id}>
                    <a
                      href={`#${c.id}`}
                      className="block border border-line px-3 py-1.5 text-[0.85rem] text-slate-green hover:border-gold hover:text-forest lg:-ml-px lg:border-0 lg:border-l lg:border-transparent lg:py-1.5 lg:pl-4"
                    >
                      {c.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <div className="min-w-0 space-y-16">
            {faqCategories.map((category, i) => (
              <section key={category.id} id={category.id} aria-labelledby={`${category.id}-heading`} className="scroll-mt-28">
                <p className="ledger-index text-xl font-semibold text-gold-ink">{String(i + 1).padStart(2, "0")}</p>
                <h2 id={`${category.id}-heading`} className="mt-2 mb-6 text-[2rem] leading-tight font-semibold text-forest sm:text-[2.3rem]">
                  {category.heading}
                </h2>
                <FaqList items={category.items} />
              </section>
            ))}
          </div>
        </div>
      </div>

      <CtaBanner
        heading="Have a Question We Have Not Answered?"
        body="Send us your question with your product and destination, and we will reply directly."
        primary={{ label: ctaLabels.discuss, href: "/contact-us/" }}
      />
    </>
  );
}
