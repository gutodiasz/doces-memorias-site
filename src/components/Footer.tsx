import Image from "next/image";
import { CreditCard, Instagram, MapPin, MessageCircle } from "lucide-react";
import { brand, whatsappBaseUrl } from "@/lib/brand";

const payments = ["Pix", "Crédito", "Débito", "Dinheiro"];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Image
            src="/brand/logo-branca.png"
            alt={brand.name}
            width={220}
            height={92}
            className="h-16 w-auto object-contain"
          />
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
            Flores, café e presentes personalizados para homenagens, lembranças e momentos especiais em Teresópolis.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gold">Contato</h2>
          <div className="mt-4 space-y-3 text-sm text-white/72">
            <a
              href={`https://www.instagram.com/${brand.instagram.replace("@", "")}/`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition hover:text-gold"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              {brand.instagram}
            </a>
            <a
              href={whatsappBaseUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {brand.whatsappDisplay}
            </a>
            <p className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{brand.address}</span>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gold">Pagamento e horário</h2>
          <p className="mt-4 text-sm text-white/72">Funcionamento: {brand.hours}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {payments.map((payment) => (
              <span
                key={payment}
                className="inline-flex items-center gap-2 rounded-md border border-white/12 px-3 py-2 text-xs text-white/75"
              >
                <CreditCard className="h-3.5 w-3.5" aria-hidden="true" />
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/45">
        {new Date().getFullYear()} {brand.name}. Catálogo sem checkout online.
      </div>
    </footer>
  );
}
