import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Info } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Markdown } from "@/components/shared/Markdown";
import { webPageSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";
import type { InfoPageContent } from "@/types";

interface InfoPageViewProps {
  page: InfoPageContent;
  breadcrumbName: string;
}

export function InfoPageView({ page, breadcrumbName }: InfoPageViewProps) {
  const steps = page.layout === "steps";
  return (
    <>
      <JsonLd
        data={webPageSchema({
          type: page.schemaType,
          path: page.path,
          name: page.seoTitle,
          description: page.metaDescription,
          image: page.image,
        })}
      />

      <section className="bg-champagne">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-14 sm:px-6 lg:px-8 lg:pb-20">
          <Breadcrumbs items={[{ name: breadcrumbName, path: page.path }]} />
          <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <p className="eyebrow text-gold-ink">{page.eyebrow}</p>
              <h1 className="mt-5 text-[2.6rem] leading-[1.02] font-semibold text-forest sm:text-6xl">{page.h1}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/85">{page.intro}</p>
            </div>
            {page.image ? (
              <div className="relative aspect-[4/3] overflow-hidden border border-gold/40">
                <Image src={page.image.src} alt={page.image.alt} fill priority sizes="(min-width: 1024px) 42vw, 92vw" className="object-cover" data-zoom />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          {steps ? (
            <ol className="relative">
              {page.sections.map((section, i) => {
                const isStep = section.id.startsWith("step-");
                return (
                  <li
                    key={section.id}
                    id={section.id}
                    data-reveal
                    className={cn(
                      "grid scroll-mt-28 gap-6 border-t border-line py-10 md:grid-cols-[120px_1fr_1.3fr] md:gap-10",
                      !isStep && "mt-10 border-t-2 border-gold bg-mist px-6 md:px-8",
                    )}
                  >
                    <span className="ledger-index text-5xl leading-none font-semibold text-gold md:text-6xl" aria-hidden="true">
                      {isStep ? String(i + 1).padStart(2, "0") : "—"}
                    </span>
                    <h2 className="text-[1.8rem] leading-tight font-semibold text-forest sm:text-[2.1rem]">{section.heading}</h2>
                    <Markdown content={section.body} />
                  </li>
                );
              })}
            </ol>
          ) : (
            <div className="space-y-0">
              {page.sections.map((section, i) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-heading`}
                  data-reveal
                  className="grid scroll-mt-28 gap-6 border-t border-line py-12 first:border-t-0 first:pt-0 lg:grid-cols-[1fr_1.6fr] lg:gap-16"
                >
                  <div>
                    <p className="ledger-index text-xl font-semibold text-gold-ink">{String(i + 1).padStart(2, "0")}</p>
                    <h2 id={`${section.id}-heading`} className="mt-2 text-[2rem] leading-tight font-semibold text-forest sm:text-[2.4rem] lg:sticky lg:top-28">
                      {section.heading}
                    </h2>
                  </div>
                  <Markdown content={section.body} className="max-w-3xl" />
                </section>
              ))}
            </div>
          )}

          {page.disclaimer ? (
            <p className="mt-12 flex max-w-4xl items-start gap-3 border-l-2 border-gold bg-champagne/70 px-5 py-4 text-sm leading-relaxed text-ink">
              <Info className="mt-0.5 size-4 shrink-0 text-gold-ink" aria-hidden="true" />
              {page.disclaimer}
            </p>
          ) : null}

          {page.relatedLinks?.length ? (
            <nav aria-label="Related pages" className="mt-14 border-t border-line pt-8">
              <p className="eyebrow text-gold-ink">Continue reading</p>
              <ul className="mt-5 grid gap-4 sm:grid-cols-3">
                {page.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between border border-line px-5 py-4 font-display text-xl font-semibold text-forest hover:border-gold"
                    >
                      {link.label}
                      <ArrowUpRight className="size-4 text-gold-ink" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </div>

      <CtaBanner heading={page.cta.heading} body={page.cta.body} primary={page.cta.primary} />
    </>
  );
}
