import { articles } from "@/content/blog";
import { allProductPages } from "@/content/catalog";
import { infoPages } from "@/content/pages";
import { absoluteUrl, siteConfig } from "@/config/site";

export const dynamic = "force-static";

/** Plain-language site summary for AI assistants (llms.txt convention). */
export function GET() {
  const lines = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    "## Company information",
    `- Name: ${siteConfig.name}`,
    `- Business: ${siteConfig.businessCategory}`,
    `- Country: ${siteConfig.country}`,
    `- Products: ${siteConfig.productCategories.join("; ")}`,
    `- Enquiries accepted: ${siteConfig.enquiryTypes.join("; ")}`,
    `- Contact: telephone and WhatsApp ${siteConfig.phone.display}`,
    `- Website: ${siteConfig.url}`,
    "- Notes: availability, grade, packaging, quantity, price and shipment terms are confirmed per enquiry; markets listed on the website are regions of interest, not established customers.",
    "",
    "## Products",
    ...allProductPages.map((p) => `- [${p.name}](${absoluteUrl(p.path)}): ${p.summary}`),
    "",
    "## Buyer information",
    ...infoPages.map((p) => `- [${p.h1}](${absoluteUrl(p.path)}): ${p.metaDescription}`),
    `- [FAQ](${absoluteUrl("/faq/")}): Answers to common buyer questions.`,
    `- [Request a Quote](${absoluteUrl("/request-a-quote/")}): Quotation request form.`,
    "",
    "## Guides",
    ...articles.map((a) => `- [${a.title}](${absoluteUrl(`/blog/${a.slug}/`)}): ${a.excerpt}`),
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
