import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { productNav } from "@/lib/data";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Assurex International Traders" },
  description: "The page you were looking for could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-champagne">
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <p className="ledger-index text-7xl font-semibold text-gold">404</p>
        <h1 className="mt-6 text-[2.6rem] leading-[1.05] font-semibold text-forest sm:text-6xl">This page could not be found</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/85">
          The link may be out of date, or the page may have moved. Try one of the pages below, or contact us directly.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">
            Back to home <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/contact-us/" variant="outline">
            Contact us
          </ButtonLink>
        </div>
        <nav aria-label="Products" className="mt-14 border-t border-gold/40 pt-6">
          <h2 className="eyebrow text-gold-ink">Our products</h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {productNav.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="font-display text-xl font-semibold text-forest underline-offset-4 hover:underline">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
