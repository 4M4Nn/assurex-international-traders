import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/sections/Hero";
import {
  BuyersSection,
  ParallaxBand,
  EnquirySection,
  HomeFaqSection,
  InsightsSection,
  IntroSection,
  ProcessSection,
  ProductsSection,
  RiceSection,
  SourcingSection,
  WhySection,
} from "@/components/sections/HomeSections";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { homeContent } from "@/lib/data";
import { buildMetadata, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: homeContent.seoTitle,
  description: homeContent.metaDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/",
          name: homeContent.seoTitle,
          description: homeContent.metaDescription,
          image: homeContent.hero.image,
        })}
      />
      <Hero />
      <IntroSection />
      <ProductsSection />
      <RiceSection />
      <SourcingSection />
      <BuyersSection />
      <ParallaxBand />
      <ProcessSection />
      <WhySection />
      <EnquirySection />
      <HomeFaqSection />
      <InsightsSection />
      <CtaBanner
        id="final-cta-heading"
        eyebrow="Get started"
        heading={homeContent.finalCta.heading}
        body={homeContent.finalCta.body}
        primary={homeContent.finalCta.cta}
      />
    </>
  );
}
