"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Declarative scroll effects, applied per page:
 *  - data-parallax="0.12"  → element drifts vertically while its section scrolls
 *  - data-stagger          → direct children fade up in sequence when in view
 *  - data-zoom             → image slowly settles from a slight zoom as it enters
 */
export function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax || "0.12");
        const trigger = el.closest<HTMLElement>("[data-parallax-root]") ?? el.parentElement ?? el;
        gsap.fromTo(
          el,
          { yPercent: -amount * 100 },
          { yPercent: amount * 100, ease: "none", scrollTrigger: { trigger, start: "top bottom", end: "bottom top", scrub: true } },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        const items = Array.from(group.children) as HTMLElement[];
        if (group.getBoundingClientRect().top < window.innerHeight * 0.9) return;
        gsap.from(items, {
          y: 28,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: group, start: "top 85%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-zoom]").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 1.12 },
          { scale: 1, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom 40%", scrub: true } },
        );
      });
    });

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => {
      window.clearTimeout(refresh);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
