"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { PhoneLink, WhatsAppLink } from "@/components/shared/ContactLinks";
import { siteConfig } from "@/config/site";
import { mainNav, resourceNav } from "@/lib/data";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="grid size-11 place-items-center border border-forest/30 text-forest transition-colors hover:border-forest hover:bg-forest hover:text-white xl:hidden"
      >
        <Menu className="size-5" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[88vw] max-w-sm gap-0 overflow-y-auto bg-white p-0">
        <div className="border-b border-line px-5 pt-5 pb-4">
          <Image
            src={siteConfig.logo.lockup.src}
            alt={siteConfig.logo.alt}
            width={siteConfig.logo.lockup.width}
            height={siteConfig.logo.lockup.height}
            className="h-9 w-auto"
          />
          <SheetTitle className="sr-only">Site menu</SheetTitle>
          <SheetDescription className="sr-only">Navigate Assurex International Traders</SheetDescription>
        </div>
        <nav aria-label="Mobile" className="px-5 py-4">
          <ul className="divide-y divide-line">
            {mainNav.map((item) => (
              <li key={item.href} className="py-1">
                <Link
                  href={item.href}
                  onClick={close}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "block py-2.5 font-display text-2xl font-semibold",
                    pathname === item.href ? "text-gold-ink" : "text-forest",
                  )}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <ul className="mb-3 space-y-0.5 border-l border-gold/50 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} onClick={close} className="block py-1.5 text-[0.95rem] font-medium text-ink">
                          {child.label}
                        </Link>
                        {child.children ? (
                          <ul className="ml-3 grid grid-cols-1 border-l border-line pl-3">
                            {child.children.map((sub) => (
                              <li key={sub.href}>
                                <Link href={sub.href} onClick={close} className="block py-1 text-sm text-slate-green">
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
            <li className="py-3">
              <ul className="grid grid-cols-2 gap-2">
                {resourceNav.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} onClick={close} className="block py-1 text-sm text-slate-green underline-offset-4 hover:underline">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
        <div className="mt-auto space-y-3 bg-emerald-deep px-5 py-6 text-champagne">
          <Link
            href="/request-a-quote/"
            onClick={close}
            className="flex min-h-11 items-center justify-center gap-2 bg-gold px-5 py-3 text-[0.8rem] font-semibold tracking-[0.14em] text-emerald-deep uppercase"
          >
            Request a Quote <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <WhatsAppLink className="flex min-h-11 items-center justify-center gap-2 border border-gold/60 px-5 py-3 text-[0.8rem] font-semibold tracking-[0.14em] uppercase" />
          <PhoneLink className="flex items-center justify-center gap-2 pt-1 text-sm text-champagne/85" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
