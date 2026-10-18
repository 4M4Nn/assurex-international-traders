import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { buttonLinkClass } from "@/components/shared/ButtonLink";
import { EmailLink, PhoneLink, WhatsAppLink } from "@/components/shared/ContactLinks";
import { siteConfig } from "@/config/site";

function TopBar() {
  return (
    <div className="bg-emerald-deep text-champagne">
      <div className="mx-auto flex h-10 max-w-[1440px] items-center justify-between gap-4 px-4 text-[0.72rem] sm:px-6 lg:px-8">
        <p className="hidden items-center gap-3 tracking-[0.22em] text-champagne/80 uppercase md:flex">
          {siteConfig.taglineParts.map((part, i) => (
            <span key={part} className="flex items-center gap-3">
              {i > 0 ? <span className="text-gold" aria-hidden="true">|</span> : null}
              {part}
            </span>
          ))}
        </p>
        <div className="flex w-full items-center justify-between gap-5 md:w-auto md:justify-end">
          <EmailLink className="hidden items-center gap-2 font-medium tracking-wide hover:text-gold xl:inline-flex" iconClassName="size-3.5 text-gold" />
          <PhoneLink className="inline-flex items-center gap-2 font-medium tracking-wide hover:text-gold" iconClassName="size-3.5 text-gold" />
          <WhatsAppLink
            label="WhatsApp"
            className="inline-flex items-center gap-2 font-medium tracking-wide hover:text-gold"
            iconClassName="size-3.5 text-gold"
          />
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] bg-forest px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        Skip to content
      </a>
      <TopBar />
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Assurex International Traders — home" className="shrink-0">
            <Image
              src={siteConfig.logo.lockup.src}
              alt={siteConfig.logo.alt}
              width={siteConfig.logo.lockup.width}
              height={siteConfig.logo.lockup.height}
              priority
              sizes="(min-width: 640px) 264px, 220px"
              className="h-10 w-auto sm:h-12"
            />
          </Link>
          <DesktopNav />
          <div className="flex items-center gap-3">
            <Link href="/request-a-quote/" className={buttonLinkClass("primary", "hidden px-5 sm:inline-flex")}>
              Request a Quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
}
