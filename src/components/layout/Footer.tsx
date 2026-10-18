import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { CopyrightYear } from "@/components/shared/CopyrightYear";
import { PhoneLink, WhatsAppLink } from "@/components/shared/ContactLinks";
import { siteConfig } from "@/config/site";
import { footerNav } from "@/lib/data";

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-sans text-[0.7rem] font-semibold tracking-[0.28em] text-gold uppercase">{title}</h2>
      <ul className="mt-5 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-[0.92rem] text-champagne/80 transition-colors hover:text-gold">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-emerald-deep pb-24 text-champagne lg:pb-0">
      <div className="gold-rule" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <div className="inline-block bg-champagne px-5 py-4">
              <Image
                src={siteConfig.logo.full.src}
                alt={siteConfig.logo.alt}
                width={siteConfig.logo.full.width}
                height={siteConfig.logo.full.height}
                sizes="200px"
                className="h-auto w-[200px]"
              />
            </div>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-champagne/80">{siteConfig.description}</p>
            <div className="mt-6 space-y-3">
              <PhoneLink className="flex items-center gap-3 text-[0.95rem] font-medium hover:text-gold" iconClassName="text-gold" />
              <WhatsAppLink
                label="WhatsApp +91 97467 33133"
                className="flex items-center gap-3 text-[0.95rem] font-medium hover:text-gold"
                iconClassName="text-gold"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterColumn title="Products" links={footerNav.products} />
            <FooterColumn title="Rice" links={footerNav.rice} />
            <FooterColumn title="Company" links={footerNav.company} />
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-6 border-t border-champagne/15 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.82rem] text-champagne/70">
            © <Suspense fallback={siteConfig.contentUpdated.slice(0, 4)}><CopyrightYear /></Suspense> {siteConfig.name}. {siteConfig.tagline}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerNav.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[0.82rem] text-champagne/70 hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
