"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useId, useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { riceVarietyOptions, unitOptions } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { ImageAsset, ProductKey, RiceVarietyKey } from "@/types";

interface QuickRfqProps {
  products: { key: ProductKey; label: string; image: ImageAsset }[];
}

/** Hero "start an RFQ" panel — hands the choices to the full quote form. */
export function QuickRfq({ products }: QuickRfqProps) {
  const router = useRouter();
  const uid = useId();
  const [product, setProduct] = useState<ProductKey>("rice");
  const [variety, setVariety] = useState<RiceVarietyKey | "">("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState(unitOptions[0]);
  const [destination, setDestination] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({ product, from: "/ (hero quick RFQ)" });
    if (product === "rice" && variety) params.set("variety", variety);
    if (quantity.trim()) params.set("qty", quantity.trim().slice(0, 40));
    if (unit) params.set("unit", unit);
    if (destination.trim()) params.set("dest", destination.trim().slice(0, 80));
    router.push(`/request-a-quote/?${params.toString()}`);
  };

  const field =
    "h-11 w-full border border-[#cfcabb] bg-white px-3 text-[0.92rem] text-ink outline-none placeholder:text-slate-green/70 focus:border-forest";

  return (
    <form
      onSubmit={submit}
      aria-labelledby={`${uid}-title`}
      className="relative border-t-2 border-gold bg-white p-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] sm:p-7"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h2 id={`${uid}-title`} className="text-[1.65rem] leading-tight font-semibold text-forest">
          Start a quotation
        </h2>
        <span className="flex items-center gap-1.5 text-[0.62rem] font-semibold tracking-[0.18em] text-forest uppercase">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-600" aria-hidden="true" />
          Enquiries open
        </span>
      </div>
      <p className="mt-1.5 text-[0.85rem] text-slate-green">Choose a commodity — we&apos;ll carry it into the full RFQ.</p>

      <fieldset className="mt-5">
        <legend className="text-[0.72rem] font-semibold tracking-[0.16em] text-gold-ink uppercase">Commodity</legend>
        <div className="mt-2.5 grid grid-cols-3 gap-2">
          {products.map((p) => {
            const active = product === p.key;
            return (
              <label
                key={p.key}
                className={cn(
                  "group relative flex cursor-pointer flex-col items-center gap-1.5 border p-1.5 pb-2 text-center transition-colors",
                  active ? "border-forest bg-champagne" : "border-line hover:border-gold",
                )}
              >
                <input
                  type="radio"
                  name="product"
                  value={p.key}
                  checked={active}
                  onChange={() => setProduct(p.key)}
                  className="sr-only"
                />
                <span className="relative block aspect-[4/3] w-full overflow-hidden">
                  <Image src={p.image.src} alt="" fill sizes="110px" className="object-cover" />
                </span>
                <span className="text-[0.66rem] leading-tight font-semibold tracking-[0.08em] text-forest uppercase">{p.label}</span>
                {active ? (
                  <span className="absolute top-1 right-1 grid size-4 place-items-center bg-forest text-white" aria-hidden="true">
                    <Check className="size-3" />
                  </span>
                ) : null}
              </label>
            );
          })}
        </div>
      </fieldset>

      {product === "rice" ? (
        <div className="mt-4">
          <label htmlFor={`${uid}-variety`} className="text-[0.72rem] font-semibold tracking-[0.16em] text-gold-ink uppercase">
            Rice variety
          </label>
          <select id={`${uid}-variety`} value={variety} onChange={(e) => setVariety(e.target.value as RiceVarietyKey)} className={cn(field, "mt-2")}>
            <option value="">Choose a variety</option>
            {riceVarietyOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <div className="mt-4 grid grid-cols-[1fr_1.1fr] gap-2">
        <div>
          <label htmlFor={`${uid}-qty`} className="text-[0.72rem] font-semibold tracking-[0.16em] text-gold-ink uppercase">
            Quantity
          </label>
          <input id={`${uid}-qty`} value={quantity} onChange={(e) => setQuantity(e.target.value)} inputMode="decimal" placeholder="e.g. 50" className={cn(field, "mt-2")} />
        </div>
        <div>
          <label htmlFor={`${uid}-unit`} className="text-[0.72rem] font-semibold tracking-[0.16em] text-gold-ink uppercase">
            Unit
          </label>
          <select id={`${uid}-unit`} value={unit} onChange={(e) => setUnit(e.target.value)} className={cn(field, "mt-2")}>
            {unitOptions.map((u) => (
              <option key={u}>{u}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor={`${uid}-dest`} className="text-[0.72rem] font-semibold tracking-[0.16em] text-gold-ink uppercase">
          Destination port or country
        </label>
        <input id={`${uid}-dest`} value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="e.g. Jebel Ali, UAE" className={cn(field, "mt-2")} />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-forest px-6 py-3 text-[0.8rem] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-emerald-deep"
      >
        Continue to full RFQ <ArrowRight className="size-4" aria-hidden="true" />
      </button>
      <p className="mt-3 text-center text-[0.72rem] text-slate-green">No obligation · Pricing confirmed per enquiry</p>
    </form>
  );
}
