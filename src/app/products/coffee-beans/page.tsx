import type { Metadata } from "next";
import { ProductPageView } from "@/components/product/ProductPageView";
import { greenCoffeeBeans } from "@/content/coffee";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: greenCoffeeBeans.seoTitle,
  description: greenCoffeeBeans.metaDescription,
  path: greenCoffeeBeans.path,
  image: greenCoffeeBeans.image,
  keywords: greenCoffeeBeans.keywords,
});

export default function CoffeeBeansPage() {
  return (
    <ProductPageView
      product={greenCoffeeBeans}
      crumbs={[
        { name: "Products", path: "/products/" },
        { name: "Green Coffee Beans", path: "/products/coffee-beans/" },
      ]}
    />
  );
}
