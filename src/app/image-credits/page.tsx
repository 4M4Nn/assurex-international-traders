import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { imageCredits } from "@/content/images";
import { buildMetadata, webPageSchema } from "@/lib/seo";

const page = {
  path: "/image-credits/",
  seoTitle: "Image Credits | Assurex International Traders",
  metaDescription:
    "Attribution and licence details for the openly licensed photographs used on the Assurex International Traders website.",
};

export const metadata: Metadata = buildMetadata({
  title: page.seoTitle,
  description: page.metaDescription,
  path: page.path,
});

export default function ImageCreditsPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: page.path, name: page.seoTitle, description: page.metaDescription })} />
      <section className="bg-champagne">
        <div className="mx-auto max-w-5xl px-4 pt-8 pb-12 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Image Credits", path: page.path }]} />
          <h1 className="mt-10 text-[2.6rem] leading-[1.05] font-semibold text-forest sm:text-6xl">Image Credits</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink/85">
            Product and logistics photographs on this website are openly licensed images from Wikimedia Commons. They are representative images and do not show a specific Assurex consignment, packaging, facility or shipment. Each image was resized and converted to WebP; the original licence continues to apply.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <ul className="divide-y divide-line border-y border-line">
          {imageCredits.map((credit) => (
            <li key={credit.file} className="grid grid-cols-[72px_1fr] items-center gap-5 py-5 sm:grid-cols-[96px_1fr]">
              <div className="relative aspect-square overflow-hidden border border-line bg-mist">
                <Image src={`/images/${credit.file}`} alt="" fill sizes="96px" className="object-cover" />
              </div>
              <div className="text-[0.92rem] leading-relaxed">
                <p className="font-semibold text-forest">{credit.subject}</p>
                <p className="text-slate-green">
                  By {credit.author} ·{" "}
                  <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer license" className="underline decoration-gold underline-offset-4">
                    {credit.license}
                  </a>{" "}
                  ·{" "}
                  <a href={credit.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-gold underline-offset-4">
                    Source
                  </a>{" "}
                  · {credit.modified}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-slate-green">
          The {siteConfig.name} logo is the property of {siteConfig.name} and is not covered by the licences above.
        </p>
      </div>
    </>
  );
}
