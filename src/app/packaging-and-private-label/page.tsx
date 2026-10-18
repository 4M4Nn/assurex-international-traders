import type { Metadata } from "next";
import { InfoPageView } from "@/components/shared/InfoPageView";
import { packagingPage } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: packagingPage.seoTitle,
  description: packagingPage.metaDescription,
  path: packagingPage.path,
  image: packagingPage.image,
});

export default function PackagingPage() {
  return <InfoPageView page={packagingPage} breadcrumbName="Packaging and Private Label" />;
}
