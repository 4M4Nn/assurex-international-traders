import type { Metadata } from "next";
import { InfoPageView } from "@/components/shared/InfoPageView";
import { qualityPage } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: qualityPage.seoTitle,
  description: qualityPage.metaDescription,
  path: qualityPage.path,
  image: qualityPage.image,
});

export default function QualityPage() {
  return <InfoPageView page={qualityPage} breadcrumbName="Quality and Sourcing" />;
}
