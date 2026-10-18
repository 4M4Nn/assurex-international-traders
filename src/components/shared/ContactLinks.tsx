import { Phone } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

interface LinkProps {
  className?: string;
  label?: string;
  message?: string;
  iconClassName?: string;
}

export function WhatsAppLink({
  className,
  label = "Contact Us on WhatsApp",
  message,
  iconClassName,
}: LinkProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-track="whatsapp_click"
      className={className}
    >
      <WhatsAppIcon className={cn("size-4 shrink-0", iconClassName)} />
      <span>{label}</span>
    </a>
  );
}

export function PhoneLink({ className, label = siteConfig.phone.display, iconClassName }: LinkProps) {
  return (
    <a href={siteConfig.phone.tel} data-track="phone_click" className={className}>
      <Phone className={cn("size-4 shrink-0", iconClassName)} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
