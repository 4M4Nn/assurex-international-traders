import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { homeContent } from "@/lib/data";

export function Hero() {
  const { hero } = homeContent;
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-champagne">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] bg-white/55 lg:block"
      />
      <div className="relative mx-auto grid max-w-[1440px] gap-12 px-4 pt-12 pb-16 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:px-8 lg:pt-16 lg:pb-24">
        <div className="flex flex-col justify-center">
          <p className="eyebrow text-gold-ink">{hero.eyebrow}</p>
          <h1
            id="hero-heading"
            className="mt-6 text-[2.85rem] leading-[0.98] font-semibold text-forest sm:text-[4.2rem] xl:text-[5rem]"
          >
            {hero.h1}
          </h1>
          <div className="mt-7 h-px w-24 bg-gold" aria-hidden="true" />
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/85 sm:text-xl">{hero.lede}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="outline">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
          <dl className="mt-12 grid grid-cols-3 border-y border-gold/40">
            {hero.facts.map((fact, i) => (
              <div key={fact.label} className={i > 0 ? "border-l border-gold/40 py-4 pl-4" : "py-4 pr-4"}>
                <dt className="text-[0.62rem] font-semibold tracking-[0.18em] text-gold-ink uppercase sm:text-[0.66rem]">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-[0.9rem] leading-tight font-semibold text-forest sm:text-base">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative">
            <div className="absolute -top-3 -right-3 hidden h-full w-full border border-gold/60 sm:block" aria-hidden="true" />
            <div className="relative aspect-[4/3] overflow-hidden bg-forest lg:aspect-[5/4]">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                fetchPriority="high"
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-[60%_50%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{ backgroundImage: "linear-gradient(to top, rgba(3,41,31,0.55) 0%, rgba(3,41,31,0.08) 45%, rgba(3,41,31,0) 70%)" }}
              />
              <p className="absolute top-3 left-3 bg-emerald-deep/70 px-2.5 py-1 text-[0.66rem] tracking-wide text-champagne/90">
                Container vessel at Vizhinjam port, Kerala — representative image
              </p>
            </div>
          </div>
          <ul className="relative mt-4 grid grid-cols-4 gap-2 sm:gap-3 lg:-mt-14 lg:ml-10">
            {hero.tiles.map((tile) => (
              <li key={tile.label}>
                <Link href={tile.href} className="group block border-2 border-white bg-white shadow-[0_18px_30px_-18px_rgba(3,41,31,0.55)]">
                  <span className="relative block aspect-square overflow-hidden">
                    <Image
                      src={tile.image.src}
                      alt={tile.image.alt}
                      fill
                      sizes="(min-width: 1024px) 140px, 24vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </span>
                  <span className="block px-1.5 py-2 text-center text-[0.62rem] font-semibold tracking-[0.12em] text-forest uppercase sm:text-[0.68rem]">
                    {tile.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
