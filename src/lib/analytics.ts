/**
 * Privacy-safe analytics helpers. Events carry only non-personal context
 * (form type, product category, page path) — never form contents.
 */

type GtagFn = (command: "event", name: string, params?: Record<string, string | number>) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

export const CONSENT_KEY = "assurex-analytics-consent";

export type ConsentValue = "granted" | "denied";

export function readConsent(): ConsentValue | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(value: ConsentValue) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* storage unavailable — consent applies to this page view only */
  }
}

export function trackEvent(name: string, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, { page_path: window.location.pathname, ...params });
}
