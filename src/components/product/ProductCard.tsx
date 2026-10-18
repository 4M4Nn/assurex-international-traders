import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductContent } from "@/types";

interface ProductCardProps {
  product: ProductContent;
  index?: number;
  headingLevel?: "h2" | "h3";
  className?: string;
  sizes?: string;
}

export function ProductCard({
  product,
  index,
  headingLevel = "h3",
  className,
  sizes = "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw",
}: ProductCardProps) {
  const Heading = headingLevel;
  return (
    <article
      data-reveal
      className={cn("group relative flex flex-col border border-line bg-white transition-colors hover:border-gold", className)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {typeof index === "number" ? (
          <span className="ledger-index absolute top-0 left-0 bg-white/95 px-3 py-1.5 text-lg font-semibold text-gold-ink">
            {String(index + 1).padStart(2, "0")}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Heading className="text-[1.7rem] leading-tight font-semibold text-forest">
          <Link href={product.path} className="after:absolute after:inset-0 focus-visible:outline-none">
            {product.cardTitle}
          </Link>
        </Heading>
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate-green">{product.summary}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.18em] text-forest uppercase">
          View {product.cardTitle}
          <ArrowUpRight className="size-4 text-gold-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}
