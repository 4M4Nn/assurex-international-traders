import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  lede?: string;
  id?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  lede,
  id,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className={cn("eyebrow", dark ? "text-gold" : "text-gold-ink", align === "center" && "justify-center")}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "mt-4 text-[2.1rem] leading-[1.08] font-semibold sm:text-5xl",
          dark ? "text-champagne" : "text-forest",
        )}
      >
        {heading}
      </h2>
      {lede ? (
        <p className={cn("mt-5 text-[1.05rem] leading-relaxed", dark ? "text-champagne/80" : "text-slate-green")}>
          {lede}
        </p>
      ) : null}
    </div>
  );
}
