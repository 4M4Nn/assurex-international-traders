import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPageView } from "@/components/product/ProductPageView";
import { riceVarieties } from "@/content/catalog";
import { buildMetadata } from "@/lib/seo";

/** Only the listed paths exist; anything else returns a real 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return riceVarieties.map((v) => ({ variety: v.slug }));
}

function findVariety(slug: string) {
  return riceVarieties.find((v) => v.slug === slug);
}

export async function generateMetadata({ params }: PageProps<"/products/rice/[variety]">): Promise<Metadata> {
  const { variety } = await params;
  const product = findVariety(variety);
  if (!product) return {};
  return buildMetadata({
    title: product.seoTitle,
    description: product.metaDescription,
    path: product.path,
    image: product.image,
    keywords: product.keywords,
  });
}

export default async function RiceVarietyPage({ params }: PageProps<"/products/rice/[variety]">) {
  const { variety } = await params;
  const product = findVariety(variety);
  if (!product) notFound();
  return (
    <ProductPageView
      product={product}
      crumbs={[
        { name: "Products", path: "/products/" },
        { name: "Rice", path: "/products/rice/" },
        { name: product.cardTitle, path: product.path },
      ]}
    />
  );
}
