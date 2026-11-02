import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPageView } from "@/components/product/ProductPageView";
import { coffeeBeanVarieties } from "@/content/catalog";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return coffeeBeanVarieties.map((v) => ({ variety: v.slug }));
}

function findVariety(slug: string) {
  return coffeeBeanVarieties.find((v) => v.slug === slug);
}

export async function generateMetadata({ params }: PageProps<"/products/coffee-beans/[variety]">): Promise<Metadata> {
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

export default async function CoffeeBeanVarietyPage({ params }: PageProps<"/products/coffee-beans/[variety]">) {
  const { variety } = await params;
  const product = findVariety(variety);
  if (!product) notFound();
  return (
    <ProductPageView
      product={product}
      crumbs={[
        { name: "Products", path: "/products/" },
        { name: "Green Coffee Beans", path: "/products/coffee-beans/" },
        { name: product.cardTitle, path: product.path },
      ]}
    />
  );
}
