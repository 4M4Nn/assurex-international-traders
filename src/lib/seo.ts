import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";
import type { FaqItem, ImageAsset } from "@/types";

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: ImageAsset;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  keywords?: string[];
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  noindex = false,
  keywords,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image
    ? { url: absoluteUrl(image.src), width: image.width, height: image.height, alt: image.alt }
    : {
        url: absoluteUrl(siteConfig.ogImage.src),
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: siteConfig.logo.alt,
      };

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [ogImage],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

/* ---------------------------------------------------------------- JSON-LD */

export const organizationId = `${siteConfig.url}/#organization`;
export const websiteId = `${siteConfig.url}/#website`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.logo.full.src),
      width: siteConfig.logo.full.width,
      height: siteConfig.logo.full.height,
    },
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    telephone: siteConfig.phone.e164,
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    ...(siteConfig.socialLinks.length ? { sameAs: siteConfig.socialLinks.map((s) => s.url) } : {}),
    knowsAbout: [
      "Indian red onions",
      "Kerala Vadi Matta rice",
      "Basmati rice",
      "IR 64 rice",
      "Parboiled rice",
      "Sona Masoori rice",
      "Green cardamom",
      "Black pepper",
      "Nutmeg",
      "Mace",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone.e164,
        contactType: "sales",
        availableLanguage: ["English"],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: { "@id": organizationId },
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function webPageSchema(input: {
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "FAQPage";
  path: string;
  name: string;
  description: string;
  image?: ImageAsset;
}) {
  return {
    "@type": input.type ?? "WebPage",
    "@id": `${absoluteUrl(input.path)}#webpage`,
    url: absoluteUrl(input.path),
    name: input.name,
    description: input.description,
    inLanguage: "en",
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    ...(input.image ? { primaryImageOfPage: absoluteUrl(input.image.src) } : {}),
  };
}

export function faqSchema(items: FaqItem[], path: string) {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: stripMarkdown(item.a) },
    })),
  };
}

export function stripMarkdown(md: string): string {
  return md
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/^[-*]\s+/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}
