import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@/components/shared/Analytics";
import { RevealObserver } from "@/components/shared/RevealObserver";
import { ScrollEffects } from "@/components/shared/ScrollEffects";
import { SmoothScroll } from "@/components/shared/SmoothScroll";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/lib/data";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: homeContent.seoTitle,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: homeContent.metaDescription,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { telephone: true, email: false, address: false },
  ...(siteConfig.verification.google ? { verification: { google: siteConfig.verification.google } } : {}),
};

export const viewport: Viewport = {
  themeColor: "#063d2e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-ink">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        <SmoothScroll />
        <ScrollEffects />
        <RevealObserver />
        <Analytics measurementId={siteConfig.analytics.gaMeasurementId} />
      </body>
    </html>
  );
}
