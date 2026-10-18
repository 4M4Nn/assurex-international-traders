import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  current: number;
  total: number;
  hrefFor: (page: number) => string;
}

export function Pagination({ current, total, hrefFor }: PaginationProps) {
  if (total <= 1) return null;
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <nav aria-label="Article pages" className="mt-14 flex items-center justify-between gap-4 border-t border-line pt-6">
      {current > 1 ? (
        <Link href={hrefFor(current - 1)} className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold-ink">
          <ArrowLeft className="size-4" aria-hidden="true" /> Newer
        </Link>
      ) : (
        <span />
      )}
      <ol className="flex items-center gap-2">
        {pages.map((p) => (
          <li key={p}>
            <Link
              href={hrefFor(p)}
              aria-current={p === current ? "page" : undefined}
              className={cn(
                "grid size-10 place-items-center border text-sm font-semibold",
                p === current ? "border-forest bg-forest text-white" : "border-line text-forest hover:border-gold",
              )}
            >
              {p}
            </Link>
          </li>
        ))}
      </ol>
      {current < total ? (
        <Link href={hrefFor(current + 1)} className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold-ink">
          Older <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
