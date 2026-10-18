import type { Metadata } from "next";
import { InfoPageView } from "@/components/shared/InfoPageView";
import { marketsPage } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: marketsPage.seoTitle,
  description: marketsPage.metaDescription,
  path: marketsPage.path,
  image: marketsPage.image,
});

export default function MarketsPage() {
  return <InfoPageView page={marketsPage} breadcrumbName="Markets" />;
}
