import type { Metadata } from "next";
import { InfoPageView } from "@/components/shared/InfoPageView";
import { exportProcessPage } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: exportProcessPage.seoTitle,
  description: exportProcessPage.metaDescription,
  path: exportProcessPage.path,
  image: exportProcessPage.image,
});

export default function ExportProcessPage() {
  return <InfoPageView page={exportProcessPage} breadcrumbName="Export Process" />;
}
