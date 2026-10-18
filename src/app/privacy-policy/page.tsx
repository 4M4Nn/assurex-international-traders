import type { Metadata } from "next";
import { LegalPageView } from "@/components/shared/LegalPageView";
import { privacyPolicy } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: privacyPolicy.seoTitle,
  description: privacyPolicy.metaDescription,
  path: privacyPolicy.path,
});

export default function PrivacyPolicyPage() {
  return <LegalPageView page={privacyPolicy} breadcrumbName="Privacy Policy" />;
}
