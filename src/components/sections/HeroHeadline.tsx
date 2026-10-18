"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Hero H1 with a word-by-word rise. Words are plain text in the HTML, so the
 * heading is fully readable without JavaScript. Spaces sit outside the
 * inline-block word masks so they are never trimmed.
 */
export function HeroHeadline({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const words = el.querySelectorAll<HTMLElement>("[data-word]");
    const tween = gsap.fromTo(
      words,
      { yPercent: 110 },
      { yPercent: 0, duration: 1.1, ease: "power4.out", stagger: 0.06, delay: 0.1 },
    );
    return () => {
      tween.kill();
      gsap.set(words, { clearProps: "transform" });
    };
  }, []);

  const words = text.split(" ");
  return (
    <h1
      id="hero-heading"
      ref={ref}
      className="mt-6 text-[2.9rem] leading-[1.02] font-semibold text-white sm:text-[4.4rem] xl:text-[5.4rem]"
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <span data-word className="inline-block">
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </h1>
  );
}
