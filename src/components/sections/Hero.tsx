import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { CommodityTicker } from "@/components/sections/CommodityTicker";
import { HeroHeadline } from "@/components/sections/HeroHeadline";
import { QuickRfq } from "@/components/sections/QuickRfq";
import { images } from "@/content/images";
import { homeContent } from "@/lib/data";

const rfqProducts = [
  { key: "onion" as const, label: "Onions", image: images.onionsWhole },
  { key: "rice" as const, label: "Rice", image: images.basmati },
  { key: "cardamom" as const, label: "Cardamom", image: images.cardamom },
  { key: "black-pepper" as const, label: "Pepper", image: images.pepper },
  { key: "nutmeg" as const, label: "Nutmeg", image: images.nutmeg },
  { key: "mace" as const, label: "Mace", image: images.maceTray },
];

export function Hero() {
  const { hero } = homeContent;
  return (
    <section aria-labelledby="hero-heading" data-parallax-root className="relative isolate overflow-hidden bg-emerald-deep text-champagne">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 -inset-y-[12%]" data-parallax="0.08">
          <Image
            src={images.heroPort.src}
            alt={images.heroPort.alt}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-[50%_60%]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(100deg, rgba(3,41,31,0.94) 0%, rgba(3,41,31,0.8) 38%, rgba(3,41,31,0.42) 68%, rgba(3,41,31,0.22) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-40"
          style={{ backgroundImage: "linear-gradient(to top, rgba(3,41,31,0.95) 0%, rgba(3,41,31,0) 100%)" }}
        />
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 pt-14 pb-16 sm:px-6 lg:min-h-[calc(100svh-112px)] lg:grid-cols-[1.25fr_minmax(360px,440px)] lg:items-center lg:gap-16 lg:px-8 lg:pt-16 lg:pb-24">
        <div>
          <p className="eyebrow text-gold">{hero.eyebrow}</p>
          <HeroHeadline text={hero.h1} />
          <div className="mt-8 h-px w-24 bg-gold" aria-hidden="true" />
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-champagne/85 sm:text-xl">{hero.lede}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={hero.primaryCta.href} variant="gold">
              {hero.primaryCta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="outline-light">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
          <dl className="mt-14 grid max-w-2xl grid-cols-3 border-y border-gold/35">
            {hero.facts.map((fact, i) => (
              <div key={fact.label} className={i > 0 ? "border-l border-gold/35 py-4 pl-4 sm:pl-6" : "py-4 pr-4"}>
                <dt className="text-[0.6rem] font-semibold tracking-[0.18em] text-gold uppercase sm:text-[0.66rem]">{fact.label}</dt>
                <dd className="mt-1.5 text-[0.8rem] leading-tight font-semibold text-champagne sm:text-base">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <QuickRfq products={rfqProducts} />
      </div>

      <p className="absolute right-4 bottom-[4.25rem] hidden text-[0.62rem] tracking-wide text-champagne/60 lg:block">
        Vallarpadam container terminal, Kochi — representative image
      </p>
      <CommodityTicker />
    </section>
  );
}
