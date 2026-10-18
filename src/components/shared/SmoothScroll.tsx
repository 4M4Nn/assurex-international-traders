"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setLenis } from "@/lib/smooth-scroll";

gsap.registerPlugin(ScrollTrigger);

/**
 * Single Lenis instance for the whole site, driven by GSAP's ticker and kept
 * in sync with ScrollTrigger. Disabled for visitors who prefer reduced motion.
 */
export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 0.95,
      smoothWheel: true,
      anchors: { offset: -120 },
    });
    lenisRef.current = lenis;
    setLenis(lenis);
    document.documentElement.classList.add("lenis-on");

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
      setLenis(null);
      document.documentElement.classList.remove("lenis-on");
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    if (!window.location.hash) lenis.scrollTo(0, { immediate: true, force: true });
    lenis.resize();
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}
