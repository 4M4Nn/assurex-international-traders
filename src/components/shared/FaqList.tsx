import { Plus } from "lucide-react";
import { Markdown } from "@/components/shared/Markdown";
import type { FaqItem } from "@/types";

interface FaqListProps {
  items: FaqItem[];
  headingLevel?: "h3" | "h4";
}

/** Accessible FAQ accordion built on native details/summary; works without JavaScript. */
export function FaqList({ items, headingLevel = "h3" }: FaqListProps) {
  const Heading = headingLevel;
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
            <Heading className="font-sans text-[1.02rem] leading-snug font-semibold tracking-normal text-ink group-open:text-forest">
              {item.q}
            </Heading>
            <span className="mt-0.5 grid size-7 shrink-0 place-items-center border border-gold/60 text-gold-ink transition-transform duration-200 group-open:rotate-45">
              <Plus className="size-4" aria-hidden="true" />
            </span>
          </summary>
          <div className="pr-4 pb-6 sm:pr-12">
            <Markdown content={item.a} className="text-[0.98rem] leading-relaxed text-slate-green" />
          </div>
        </details>
      ))}
    </div>
  );
}
