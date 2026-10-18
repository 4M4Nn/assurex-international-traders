import type { Metadata } from "next";
import { InfoPageView } from "@/components/shared/InfoPageView";
import { capabilitiesPage } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: capabilitiesPage.seoTitle,
  description: capabilitiesPage.metaDescription,
  path: capabilitiesPage.path,
  image: capabilitiesPage.image,
});

export default function CapabilitiesPage() {
  return <InfoPageView page={capabilitiesPage} breadcrumbName="Our Capabilities" />;
}
