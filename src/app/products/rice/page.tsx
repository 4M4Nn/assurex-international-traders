import type { Metadata } from "next";
import { ProductPageView } from "@/components/product/ProductPageView";
import { rice } from "@/content/rice";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: rice.seoTitle,
  description: rice.metaDescription,
  path: rice.path,
  image: rice.image,
  keywords: rice.keywords,
});

export default function RicePage() {
  return (
    <ProductPageView
      product={rice}
      crumbs={[
        { name: "Products", path: "/products/" },
        { name: "Rice", path: "/products/rice/" },
      ]}
    />
  );
}
