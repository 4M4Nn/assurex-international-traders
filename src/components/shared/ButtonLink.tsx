import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "gold" | "outline" | "outline-light" | "text";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 px-6 py-3 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-forest text-white hover:bg-emerald-deep focus-visible:outline-gold-ink",
  gold: "bg-gold text-emerald-deep hover:bg-gold-soft focus-visible:outline-white",
  outline: "border border-forest text-forest hover:bg-forest hover:text-white",
  "outline-light":
    "border border-gold/70 text-champagne hover:border-gold hover:bg-gold hover:text-emerald-deep focus-visible:outline-white",
  text: "min-h-0 px-0 py-1 text-forest underline decoration-gold decoration-1 underline-offset-[6px] hover:text-gold-ink",
};

export function buttonLinkClass(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

interface ButtonLinkProps extends Omit<ComponentProps<typeof Link>, "className"> {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export function ButtonLink({ variant = "primary", className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonLinkClass(variant, className)} {...props}>
      {children}
    </Link>
  );
}
