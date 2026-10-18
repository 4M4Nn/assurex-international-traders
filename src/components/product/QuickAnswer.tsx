import type { QuickAnswer as QuickAnswerData } from "@/types";

interface QuickAnswerProps {
  name: string;
  data: QuickAnswerData;
}

const rows: { key: keyof QuickAnswerData; label: string }[] = [
  { key: "whatItIs", label: "What it is" },
  { key: "commonUses", label: "Common uses" },
  { key: "formats", label: "Formats" },
  { key: "specsToConfirm", label: "Specs to confirm" },
  { key: "howToEnquire", label: "How to enquire" },
];

/** Concise, extractable product summary placed near the top of each product page. */
export function QuickAnswer({ name, data }: QuickAnswerProps) {
  return (
    <section aria-labelledby="at-a-glance" className="border-y border-line bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <div>
            <p className="eyebrow text-gold-ink">At a glance</p>
            <h2 id="at-a-glance" className="mt-3 text-3xl leading-tight font-semibold text-forest">
              {name} in brief
            </h2>
          </div>
          <dl className="grid gap-px border border-line bg-line sm:grid-cols-2 xl:grid-cols-5">
            {rows.map((row) => (
              <div key={row.key} className="bg-white p-5">
                <dt className="text-[0.68rem] font-semibold tracking-[0.2em] text-gold-ink uppercase">{row.label}</dt>
                <dd className="mt-2.5 text-[0.92rem] leading-relaxed text-ink">{data[row.key]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
