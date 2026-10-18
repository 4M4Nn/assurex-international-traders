import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { PhoneLink, WhatsAppLink } from "@/components/shared/ContactLinks";

interface CtaBannerProps {
  heading: string;
  body: string;
  primary: { label: string; href: string };
  id?: string;
  eyebrow?: string;
  whatsappMessage?: string;
}

/** Deep-emerald conversion band used at the end of most pages. */
export function CtaBanner({ heading, body, primary, id = "cta-heading", eyebrow = "Next step", whatsappMessage }: CtaBannerProps) {
  return (
    <section aria-labelledby={id} className="relative overflow-hidden bg-emerald-deep text-champagne">
      <div className="gold-rule absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:px-8">
        <div data-reveal>
          <p className="eyebrow text-gold">{eyebrow}</p>
          <h2 id={id} className="mt-4 text-[2.1rem] leading-[1.1] font-semibold text-champagne sm:text-5xl">
            {heading}
          </h2>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-champagne/80">{body}</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-stretch" data-reveal>
          <ButtonLink href={primary.href} variant="gold">
            {primary.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          <WhatsAppLink
            message={whatsappMessage}
            className="inline-flex min-h-11 items-center justify-center gap-2 border border-gold/60 px-6 py-3 text-[0.8rem] font-semibold tracking-[0.14em] text-champagne uppercase transition-colors hover:border-gold hover:bg-gold hover:text-emerald-deep"
          />
          <PhoneLink className="inline-flex items-center justify-center gap-2 py-1 text-sm text-champagne/80 hover:text-gold" />
        </div>
      </div>
    </section>
  );
}
