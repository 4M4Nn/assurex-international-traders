import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPageView } from "@/components/product/ProductPageView";
import { topLevelProducts } from "@/content/catalog";
import { buildMetadata } from "@/lib/seo";

/** Only the listed paths exist; anything else returns a real 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return topLevelProducts.map((p) => ({ slug: p.slug }));
}

function findProduct(slug: string) {
  return topLevelProducts.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) return {};
  return buildMetadata({
    title: product.seoTitle,
    description: product.metaDescription,
    path: product.path,
    image: product.image,
    keywords: product.keywords,
  });
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();
  return (
    <ProductPageView
      product={product}
      crumbs={[
        { name: "Products", path: "/products/" },
        { name: product.cardTitle, path: product.path },
      ]}
    />
  );
}
