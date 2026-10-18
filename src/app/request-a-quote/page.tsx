import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Lock, MessageCircle } from "lucide-react";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { QuoteFormFromParams } from "@/components/forms/QuoteFormFromParams";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PhoneLink, WhatsAppLink } from "@/components/shared/ContactLinks";
import { buildMetadata, webPageSchema } from "@/lib/seo";

const page = {
  path: "/request-a-quote/",
  seoTitle: "Request an Agricultural Export Quote | Assurex",
  metaDescription:
    "Request a quotation for Indian onions, rice, cardamom, black pepper, nutmeg or mace. Share product, quantity, packaging, destination and specifications.",
};

export const metadata: Metadata = buildMetadata({
  title: page.seoTitle,
  description: page.metaDescription,
  path: page.path,
});

export default function RequestQuotePage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: page.path, name: page.seoTitle, description: page.metaDescription })} />
      <section className="bg-champagne">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-12 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Request a Quote", path: page.path }]} />
          <p className="eyebrow mt-10 text-gold-ink">Request for quotation</p>
          <h1 className="mt-5 text-[2.6rem] leading-[1.02] font-semibold text-forest sm:text-6xl">Request a Product Quotation</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/85">
            Tell us what you need. The more precise the specification, quantity, packing and destination, the faster we can confirm availability and prepare a written quotation.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.7fr_1fr] lg:gap-16">
          <div className="min-w-0 border border-line p-6 sm:p-10">
            <h2 className="sr-only">Quotation form</h2>
            <Suspense fallback={<EnquiryForm variant="quote" />}>
              <QuoteFormFromParams />
            </Suspense>
          </div>
          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <section aria-labelledby="prefer-whatsapp" className="bg-emerald-deep p-7 text-champagne">
              <MessageCircle className="size-6 text-gold" aria-hidden="true" />
              <h2 id="prefer-whatsapp" className="mt-4 text-[1.7rem] leading-tight font-semibold">
                Prefer WhatsApp?
              </h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-champagne/80">
                Send your product, quantity and destination directly. We reply on the same number.
              </p>
              <WhatsAppLink
                message="Hello Assurex, I would like a quotation for:"
                className="mt-6 flex min-h-11 items-center justify-center gap-2 bg-gold px-5 py-3 text-[0.78rem] font-semibold tracking-[0.12em] text-emerald-deep uppercase hover:bg-gold-soft"
              />
              <PhoneLink className="mt-4 flex items-center justify-center gap-2 text-sm text-champagne/85 hover:text-gold" />
            </section>
            <section aria-labelledby="privacy-info" className="border border-line p-7">
              <Lock className="size-5 text-gold-ink" aria-hidden="true" />
              <h2 id="privacy-info" className="mt-4 text-[1.5rem] leading-tight font-semibold text-forest">
                How we use your details
              </h2>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-slate-green">
                Your details are used only to respond to your enquiry and prepare a quotation. They are not sold, and form contents are never sent to analytics tools. Read the{" "}
                <Link href="/privacy-policy/" className="font-medium text-forest underline decoration-gold underline-offset-4">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>
          </aside>
        </div>
      </div>
    </>
  );
}
