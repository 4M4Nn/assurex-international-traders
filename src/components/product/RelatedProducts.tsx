import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getProductByPath } from "@/content/catalog";
import { resourceNav } from "@/lib/data";

interface RelatedProductsProps {
  paths: string[];
  heading?: string;
}

export function RelatedProducts({ paths, heading = "Related Products" }: RelatedProductsProps) {
  return (
    <section aria-labelledby="related-products" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading id="related-products" eyebrow="Explore further" heading={heading} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
          {paths.map((path) => {
            const product = getProductByPath(path);
            if (product) return <ProductCard key={path} product={product} />;
            const resource = resourceNav.find((r) => r.href === path);
            if (!resource) return null;
            return (
              <Link
                key={path}
                href={path}
                className="group flex flex-col justify-between border border-line bg-champagne/60 p-6 transition-colors hover:border-gold"
              >
                <h3 className="text-[1.7rem] leading-tight font-semibold text-forest">{resource.label}</h3>
                <span className="mt-8 inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.18em] text-forest uppercase">
                  Read more <ArrowUpRight className="size-4 text-gold-ink" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
