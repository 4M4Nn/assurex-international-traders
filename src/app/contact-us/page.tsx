import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { PhoneLink, WhatsAppLink } from "@/components/shared/ContactLinks";
import { siteConfig } from "@/config/site";
import { buildMetadata, webPageSchema } from "@/lib/seo";

const page = {
  path: "/contact-us/",
  seoTitle: "Contact Assurex International Traders | Product Enquiries",
  metaDescription:
    "Contact Assurex International Traders about Indian onions, rice and spices. Call or WhatsApp +91 97467 33133 or send your product enquiry online.",
};

const checklist = [
  "Product, variety and grade (attach a specification if you have one)",
  "Estimated quantity and how often you buy",
  "Packing — bag type, weight or retail pack size",
  "Destination port or country",
  "Preferred trade term, such as FOB or CIF",
  "Expected shipment window",
  "Any testing, inspection or document requirements",
];

export const metadata: Metadata = buildMetadata({
  title: page.seoTitle,
  description: page.metaDescription,
  path: page.path,
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ type: "ContactPage", path: page.path, name: page.seoTitle, description: page.metaDescription })} />
      <section className="bg-champagne">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-14 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Contact Us", path: page.path }]} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow text-gold-ink">Contact</p>
              <h1 className="mt-5 text-[2.6rem] leading-[1.02] font-semibold text-forest sm:text-6xl">Contact Assurex International Traders</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/85">
                Speak to us directly by phone or WhatsApp, or send your requirements using the form below.
              </p>
            </div>
            <div className="border border-gold/50 bg-white p-7">
              <p className="text-[0.7rem] font-semibold tracking-[0.24em] text-gold-ink uppercase">Telephone &amp; WhatsApp</p>
              <a
                href={siteConfig.phone.tel}
                data-track="phone_click"
                className="mt-3 block font-display text-4xl font-semibold text-forest hover:text-emerald-deep sm:text-5xl"
              >
                {siteConfig.phone.display}
              </a>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <WhatsAppLink className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 bg-forest px-5 py-3 text-[0.78rem] font-semibold tracking-[0.12em] text-white uppercase hover:bg-emerald-deep" />
                <PhoneLink
                  label="Call now"
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 border border-forest px-5 py-3 text-[0.78rem] font-semibold tracking-[0.12em] text-forest uppercase hover:bg-forest hover:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div className="space-y-12">
            <section aria-labelledby="discuss-heading">
              <h2 id="discuss-heading" className="text-[2rem] leading-tight font-semibold text-forest">
                Discuss Your Product Requirements
              </h2>
              <p className="mt-4 leading-relaxed text-ink/85">
                Whether you are comparing suppliers, checking a specification or planning a first order, we are happy to talk it through. Tell us what you are looking for and we will explain what can be confirmed and what depends on supplier availability.
              </p>
            </section>
            <section aria-labelledby="quote-heading">
              <h2 id="quote-heading" className="text-[2rem] leading-tight font-semibold text-forest">
                Request a Quotation
              </h2>
              <p className="mt-4 leading-relaxed text-ink/85">
                For a detailed request with packaging, trade terms and a specification file, the dedicated quote form is quicker.
              </p>
              <ButtonLink href="/request-a-quote/" className="mt-6">
                Request a Quote <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </section>
            <section aria-labelledby="whatsapp-heading">
              <h2 id="whatsapp-heading" className="text-[2rem] leading-tight font-semibold text-forest">
                Contact Us on WhatsApp
              </h2>
              <p className="mt-4 leading-relaxed text-ink/85">
                WhatsApp is often the fastest way to reach us, especially across time zones. Message {siteConfig.phone.display} with your product and quantity.
              </p>
              <WhatsAppLink
                label="Open WhatsApp chat"
                message="Hello Assurex, I would like to discuss a product requirement."
                className="mt-5 inline-flex items-center gap-2 font-semibold text-forest underline decoration-gold underline-offset-[6px]"
              />
            </section>
            <section aria-labelledby="include-heading" className="border-l-2 border-gold bg-mist p-6">
              <h2 id="include-heading" className="text-[1.75rem] leading-tight font-semibold text-forest">
                Information to Include in Your Enquiry
              </h2>
              <ul className="mt-5 space-y-3">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.95rem] text-ink">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold-ink" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <div>
            <h2 className="sr-only">Contact form</h2>
            <EnquiryForm variant="contact" tone="card" sourcePage="/contact-us/" />
          </div>
        </div>
      </div>
    </>
  );
}
