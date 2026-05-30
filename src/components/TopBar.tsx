import { Clock, MapPin, MessageCircle } from "lucide-react";
import { brand, whatsappBaseUrl } from "@/lib/brand";

export function TopBar() {
  return (
    <div className="bg-forest text-cream">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
          <span>{brand.city}</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href={whatsappBaseUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition hover:text-gold"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {brand.whatsappDisplay}
          </a>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {brand.hours}
          </span>
        </div>
      </div>
    </div>
  );
}
