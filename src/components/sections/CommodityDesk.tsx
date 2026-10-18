"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState, type KeyboardEvent } from "react";
import { ArrowRight, ArrowUpRight, CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/types";

export interface DeskItem {
  slug: string;
  path: string;
  name: string;
  short: string;
  summary: string;
  image: ImageAsset;
  formats: string;
  checklist: string[];
  quoteHref: string;
  varieties?: { label: string; path: string }[];
}

/**
 * Trading-desk style product explorer. Every panel is rendered in the HTML
 * (inactive ones are hidden), so all product links stay crawlable.
 */
export function CommodityDesk({ items }: { items: DeskItem[] }) {
  const uid = useId();
  const [active, setActive] = useState(0);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let next = i;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (i + 1) % items.length;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (i - 1 + items.length) % items.length;
    else return;
    e.preventDefault();
    setActive(next);
    document.getElementById(`${uid}-tab-${next}`)?.focus();
  };

  return (
    <div className="grid border border-line bg-white shadow-[0_40px_80px_-50px_rgba(3,41,31,0.45)] lg:grid-cols-[320px_1fr]">
      <div role="tablist" aria-label="Commodities" aria-orientation="vertical" className="flex overflow-x-auto border-b border-line bg-emerald-deep lg:flex-col lg:overflow-visible lg:border-r lg:border-b-0">
        <div className="hidden items-center justify-between border-b border-champagne/10 px-6 py-4 lg:flex">
          <span className="text-[0.62rem] font-semibold tracking-[0.24em] text-gold uppercase">Commodity</span>
          <span className="text-[0.62rem] font-semibold tracking-[0.24em] text-gold uppercase">Status</span>
        </div>
        {items.map((item, i) => {
          const selected = active === i;
          return (
            <button
              key={item.slug}
              id={`${uid}-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${uid}-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={cn(
                "group relative flex shrink-0 items-center gap-4 px-5 py-4 text-left transition-colors lg:px-6",
                selected ? "bg-forest" : "hover:bg-forest/60",
              )}
            >
              {selected ? <span className="absolute inset-y-0 left-0 hidden w-[3px] bg-gold lg:block" aria-hidden="true" /> : null}
              <span className="ledger-index text-sm text-gold/80">{String(i + 1).padStart(2, "0")}</span>
              <span className={cn("font-display text-xl font-semibold whitespace-nowrap", selected ? "text-white" : "text-champagne/80")}>
                {item.short}
              </span>
              <span className="ml-auto hidden items-center gap-1.5 text-[0.6rem] font-semibold tracking-[0.14em] text-emerald-300 uppercase lg:flex">
                <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                Open
              </span>
            </button>
          );
        })}
      </div>

      {items.map((item, i) => (
        <div
          key={item.slug}
          id={`${uid}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${uid}-tab-${i}`}
          hidden={active !== i}
          className="grid md:grid-cols-[1.05fr_1fr]"
        >
          <div className="relative min-h-[280px] overflow-hidden bg-mist md:min-h-[520px]">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
              className="desk-image object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/2"
              style={{ backgroundImage: "linear-gradient(to top, rgba(3,41,31,0.75) 0%, rgba(3,41,31,0) 100%)" }}
            />
            <p className="absolute bottom-5 left-5 text-[0.66rem] font-semibold tracking-[0.2em] text-champagne uppercase">
              Representative image
            </p>
          </div>
          <div className="flex flex-col p-7 sm:p-9">
            <div className="flex flex-wrap items-center gap-3">
              <span className="border border-emerald-700/30 bg-emerald-50 px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.16em] text-emerald-800 uppercase">
                Enquiries open
              </span>
              <span className="border border-gold/40 bg-champagne px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.16em] text-gold-ink uppercase">
                Availability confirmed per RFQ
              </span>
            </div>
            <h3 className="mt-5 text-[2.2rem] leading-tight font-semibold text-forest">{item.name}</h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-ink/80">{item.summary}</p>

            <dl className="mt-6 border-t border-line">
              <div className="grid grid-cols-[92px_1fr] gap-3 border-b border-line py-3.5">
                <dt className="text-[0.66rem] font-semibold tracking-[0.18em] text-gold-ink uppercase">Formats</dt>
                <dd className="text-[0.9rem] leading-relaxed text-ink">{item.formats}</dd>
              </div>
              <div className="grid grid-cols-[92px_1fr] gap-3 border-b border-line py-3.5">
                <dt className="text-[0.66rem] font-semibold tracking-[0.18em] text-gold-ink uppercase">Spec checklist</dt>
                <dd>
                  <ul className="grid gap-1.5 sm:grid-cols-2">
                    {item.checklist.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-[0.88rem] text-ink">
                        <CircleCheck className="size-3.5 shrink-0 text-forest" aria-hidden="true" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              {item.varieties ? (
                <div className="grid grid-cols-[92px_1fr] gap-3 border-b border-line py-3.5">
                  <dt className="text-[0.66rem] font-semibold tracking-[0.18em] text-gold-ink uppercase">Varieties</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {item.varieties.map((v) => (
                      <Link key={v.path} href={v.path} className="border border-forest/25 px-2 py-1 text-[0.8rem] text-forest hover:border-gold hover:bg-champagne">
                        {v.label}
                      </Link>
                    ))}
                  </dd>
                </div>
              ) : null}
            </dl>

            <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
              <Link
                href={item.quoteHref}
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 whitespace-nowrap bg-forest px-4 py-3 text-[0.75rem] font-semibold tracking-[0.14em] text-white uppercase hover:bg-emerald-deep"
              >
                Request a Quote <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href={item.path}
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 whitespace-nowrap border border-forest px-4 py-3 text-[0.75rem] font-semibold tracking-[0.14em] text-forest uppercase hover:bg-forest hover:text-white"
              >
                View {item.short} <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
