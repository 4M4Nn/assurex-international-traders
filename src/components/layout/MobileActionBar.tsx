import Link from "next/link";
import { FileText, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { siteConfig, whatsappLink } from "@/config/site";

/** Fixed contact bar for phones and tablets. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-gold/40 bg-emerald-deep/97 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
      <div className="grid grid-cols-3 text-[0.68rem] font-semibold tracking-[0.12em] text-champagne uppercase">
        <a href={siteConfig.phone.tel} data-track="phone_click" className="flex min-h-14 flex-col items-center justify-center gap-1">
          <Phone className="size-4 text-gold" aria-hidden="true" />
          Call
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          data-track="whatsapp_click"
          className="flex min-h-14 flex-col items-center justify-center gap-1 border-x border-champagne/15"
        >
          <WhatsAppIcon className="size-4 text-gold" />
          WhatsApp
        </a>
        <Link href="/request-a-quote/" className="flex min-h-14 flex-col items-center justify-center gap-1 bg-gold text-emerald-deep">
          <FileText className="size-4" aria-hidden="true" />
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
