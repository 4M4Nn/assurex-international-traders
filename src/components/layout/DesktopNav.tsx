"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { mainNav, resourceNav } from "@/lib/data";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function DesktopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLLIElement>(null);
  const panelId = useId();
  const products = mainNav.find((item) => item.children);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav aria-label="Main" className="hidden xl:block">
      <ul className="flex items-center gap-6">
        {mainNav.map((item) => {
          const active = isActive(pathname, item.href);
          if (item.children && products) {
            return (
              <li
                key={item.href}
                ref={wrapperRef}
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpen((v) => !v)}
                  className={cn(
                    "flex items-center gap-1 py-6 text-[0.82rem] font-semibold tracking-[0.08em] whitespace-nowrap uppercase transition-colors",
                    active ? "text-forest" : "text-ink/80 hover:text-forest",
                  )}
                >
                  {item.label}
                  <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} aria-hidden="true" />
                </button>
                <div
                  id={panelId}
                  hidden={!open}
                  className="absolute top-full left-1/2 w-[640px] -translate-x-1/2 border border-line border-t-2 border-t-gold bg-white shadow-[0_24px_48px_-24px_rgba(3,41,31,0.35)]"
                >
                  <div className="grid grid-cols-[1.35fr_1fr]">
                    <div className="p-7">
                      <p className="eyebrow text-gold-ink">Products</p>
                      <ul className="mt-4 space-y-1">
                        {products.children!.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={close}
                              className="block py-1.5 font-display text-xl font-semibold text-forest hover:text-gold-ink"
                            >
                              {child.label}
                            </Link>
                            {child.children ? (
                              <ul className="mb-2 ml-1 grid grid-cols-2 gap-x-4 border-l border-gold/50 pl-4">
                                {child.children.map((sub) => (
                                  <li key={sub.href}>
                                    <Link
                                      href={sub.href}
                                      onClick={close}
                                      className="block py-1 text-sm text-slate-green hover:text-forest"
                                    >
                                      {sub.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-champagne/70 p-7">
                      <p className="eyebrow text-gold-ink">For buyers</p>
                      <ul className="mt-4 space-y-2">
                        {resourceNav.map((r) => (
                          <li key={r.href}>
                            <Link href={r.href} onClick={close} className="text-sm font-medium text-ink hover:text-forest">
                              {r.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/products/"
                        onClick={close}
                        className="mt-8 inline-block text-[0.75rem] font-semibold tracking-[0.16em] text-forest uppercase underline decoration-gold underline-offset-[6px]"
                      >
                        View all products
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            );
          }
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-6 text-[0.82rem] font-semibold tracking-[0.08em] whitespace-nowrap uppercase transition-colors",
                  active ? "text-forest" : "text-ink/80 hover:text-forest",
                  active && "after:absolute after:inset-x-0 after:bottom-4 after:h-px after:bg-gold",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
