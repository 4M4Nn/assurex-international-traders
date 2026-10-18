"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState, useSyncExternalStore } from "react";
import { readConsent, trackEvent, writeConsent, type ConsentValue } from "@/lib/analytics";

interface AnalyticsProps {
  measurementId: string;
}

const subscribe = () => () => {};

/**
 * Loads Google Analytics 4 only when a measurement ID is configured AND the
 * visitor has accepted analytics cookies. Without an ID, nothing loads and no
 * banner is shown, because the site sets no non-essential cookies.
 */
export function Analytics({ measurementId }: AnalyticsProps) {
  const storedConsent = useSyncExternalStore(subscribe, readConsent, () => null);
  const [choice, setChoice] = useState<ConsentValue | null>(null);
  const consent = choice ?? storedConsent;
  const isClient = useSyncExternalStore(subscribe, () => true, () => false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-track]");
      if (!target) return;
      trackEvent(target.dataset.track ?? "click", { link_location: target.closest("header, footer, main")?.tagName.toLowerCase() ?? "page" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!measurementId) return null;

  const decide = (value: ConsentValue) => {
    writeConsent(value);
    setChoice(value);
  };

  return (
    <>
      {consent === "granted" ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${measurementId}',{anonymize_ip:true});`}
          </Script>
        </>
      ) : null}
      {isClient && consent === null ? (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Analytics cookie consent"
          className="fixed inset-x-3 bottom-20 z-50 border border-gold/50 bg-white p-5 shadow-[0_20px_40px_-20px_rgba(3,41,31,0.45)] sm:inset-x-auto sm:right-6 sm:max-w-md lg:bottom-6"
        >
          <p className="text-sm leading-relaxed text-ink">
            We would like to use Google Analytics cookies to understand how visitors use this site. Form contents are never shared.
            See our <Link href="/cookie-policy/" className="underline decoration-gold underline-offset-4">Cookie Policy</Link>.
          </p>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={() => decide("granted")}
              className="min-h-11 flex-1 bg-forest px-4 text-[0.75rem] font-semibold tracking-[0.12em] text-white uppercase hover:bg-emerald-deep"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => decide("denied")}
              className="min-h-11 flex-1 border border-forest px-4 text-[0.75rem] font-semibold tracking-[0.12em] text-forest uppercase hover:bg-mist"
            >
              Decline
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
