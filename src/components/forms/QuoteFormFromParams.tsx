"use client";

import { useSearchParams } from "next/navigation";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { productOptions, riceVarietyOptions, unitOptions } from "@/lib/data";
import type { ProductKey, RiceVarietyKey } from "@/types";

/**
 * Reads ?product=, ?variety= and ?from= so that visitors arriving from a
 * product page see that product pre-selected and the source page is kept.
 */
export function QuoteFormFromParams() {
  const params = useSearchParams();
  const product = params.get("product");
  const variety = params.get("variety");
  const from = params.get("from");
  const qty = params.get("qty")?.slice(0, 40) ?? "";
  const unit = params.get("unit") ?? "";
  const dest = params.get("dest")?.slice(0, 80) ?? "";
  const defaults = {
    ...(qty ? { quantity: qty } : {}),
    ...(unitOptions.includes(unit) ? { unit } : {}),
    ...(dest ? { destination: dest } : {}),
  };

  const defaultProduct = productOptions.some((p) => p.value === product) ? (product as ProductKey) : undefined;
  const defaultVariety = riceVarietyOptions.some((r) => r.value === variety) ? (variety as RiceVarietyKey) : undefined;
  const sourcePage = from && from.startsWith("/") && !from.startsWith("//") ? from.slice(0, 200) : undefined;

  return (
    <EnquiryForm
      key={`${defaultProduct ?? "none"}-${defaultVariety ?? "none"}-${qty}-${dest}`}
      variant="quote"
      defaultProduct={defaultProduct}
      defaultVariety={defaultVariety}
      defaults={defaults}
      sourcePage={sourcePage ? `/request-a-quote/ (from ${sourcePage})` : undefined}
    />
  );
}
