import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/seo";
import { cn } from "@/lib/utils";

interface BreadcrumbsProps {
  items: Crumb[];
  tone?: "light" | "dark";
  className?: string;
}

/** Visible breadcrumb trail plus matching BreadcrumbList structured data. */
export function Breadcrumbs({ items, tone = "light", className }: BreadcrumbsProps) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  const dark = tone === "dark";
  return (
    <>
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.78rem] tracking-wide">
          {trail.map((crumb, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className={cn(dark ? "text-champagne" : "text-ink", "font-medium")}>
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.path}
                    className={cn(
                      "underline-offset-4 hover:underline",
                      dark ? "text-champagne/75 hover:text-gold" : "text-slate-green hover:text-forest",
                    )}
                  >
                    {crumb.name}
                  </Link>
                )}
                {!last ? (
                  <ChevronRight className={cn("size-3.5", dark ? "text-gold/70" : "text-gold-ink")} aria-hidden="true" />
                ) : null}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(trail)} />
    </>
  );
}
