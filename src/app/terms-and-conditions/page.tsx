import type { Metadata } from "next";
import { LegalPageView } from "@/components/shared/LegalPageView";
import { termsAndConditions } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: termsAndConditions.seoTitle,
  description: termsAndConditions.metaDescription,
  path: termsAndConditions.path,
});

export default function TermsPage() {
  return <LegalPageView page={termsAndConditions} breadcrumbName="Terms and Conditions" />;
}
