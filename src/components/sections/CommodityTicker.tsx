const items = [
  "Indian Red Onions",
  "Kerala Vadi Matta Rice",
  "Basmati Rice",
  "IR 64 Rice",
  "Parboiled Rice",
  "Sona Masoori Rice",
  "Green Cardamom",
  "Black Pepper",
  "Nutmeg",
  "Mace",
];

/** Scrolling commodity strip. Shows product names and enquiry status only — never prices. */
export function CommodityTicker() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-4 px-6 whitespace-nowrap">
          <span className="size-1.5 rotate-45 bg-gold" aria-hidden="true" />
          <span className="font-display text-lg font-semibold text-champagne">{item}</span>
          <span className="text-[0.62rem] font-semibold tracking-[0.2em] text-gold uppercase">Enquiries open</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="relative border-t border-gold/30 bg-emerald-deep py-3.5">
      <p className="sr-only">Commodities available for enquiry: {items.join(", ")}.</p>
      <div className="ticker-mask flex overflow-hidden" aria-hidden="true">
        <div className="ticker-track flex">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}
