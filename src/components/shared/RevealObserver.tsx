"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Adds a gentle fade-up to elements marked with data-reveal once they enter
 * the viewport. Content stays visible without JavaScript and under
 * prefers-reduced-motion.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"));
    const viewportHeight = window.innerHeight;
    for (const el of targets) {
      // Anything already on screen is shown immediately to avoid a flash.
      if (el.getBoundingClientRect().top < viewportHeight) el.classList.add("is-visible");
      else observer.observe(el);
    }
    document.documentElement.classList.add("reveal-ready");

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
