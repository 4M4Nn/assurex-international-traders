import type { Metadata } from "next";
import { InfoPageView } from "@/components/shared/InfoPageView";
import { aboutPage } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: aboutPage.seoTitle,
  description: aboutPage.metaDescription,
  path: aboutPage.path,
  image: aboutPage.image,
});

export default function AboutPage() {
  return <InfoPageView page={aboutPage} breadcrumbName="About Us" />;
}
