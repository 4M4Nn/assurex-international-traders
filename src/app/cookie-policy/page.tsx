import type { Metadata } from "next";
import { LegalPageView } from "@/components/shared/LegalPageView";
import { cookiePolicy } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: cookiePolicy.seoTitle,
  description: cookiePolicy.metaDescription,
  path: cookiePolicy.path,
});

export default function CookiePolicyPage() {
  return <LegalPageView page={cookiePolicy} breadcrumbName="Cookie Policy" />;
}
