import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InfoPageView } from "@/components/shared/InfoPageView";
import { countryMarkets, getCountryMarket } from "@/content/markets-countries";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return countryMarkets.map((m) => ({ country: m.slug }));
}

export async function generateMetadata({ params }: PageProps<"/markets/[country]">): Promise<Metadata> {
  const { country } = await params;
  const market = getCountryMarket(country);
  if (!market) return {};
  return buildMetadata({
    title: market.seoTitle,
    description: market.metaDescription,
    path: market.path,
  });
}

export default async function CountryMarketPage({ params }: PageProps<"/markets/[country]">) {
  const { country } = await params;
  const market = getCountryMarket(country);
  if (!market) notFound();
  return (
    <InfoPageView
      page={market}
      breadcrumbName={market.countryName}
    />
  );
}
