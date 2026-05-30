import { Clock, MapPin, MessageCircle, Navigation } from "lucide-react";
import { brand, whatsappBaseUrl } from "@/lib/brand";

export function LocationSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    brand.address
  )}`;

  return (
    <section className="bg-cream py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_1.1fr] lg:items-stretch lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-gold">Localização</p>
          <h2 className="mt-2 text-3xl font-semibold text-forest">
            Estamos em Teresópolis, RJ
          </h2>
          <p className="mt-4 text-sm leading-6 text-ink/65">
            A loja fica no Cemitério Carlinda Berlim, com atendimento para retirada, encomendas e combinações de entrega pelo WhatsApp.
          </p>

          <div className="mt-6 space-y-3 text-sm text-ink/75">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span>{brand.address}</span>
            </p>
            <p className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span>Funcionamento: {brand.hours}</span>
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest px-5 text-sm font-semibold text-white transition hover:bg-moss"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Abrir mapa
            </a>
            <a
              href={whatsappBaseUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-forest/15 bg-white px-5 text-sm font-semibold text-forest transition hover:border-gold"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>

        <div className="location-panel rounded-lg border border-forest/10 bg-white p-5 shadow-soft">
          <div className="flex h-full min-h-[320px] flex-col justify-between rounded-md bg-forest p-6 text-white">
            <div>
              <p className="text-sm font-semibold text-gold">Doces Memórias</p>
              <h3 className="mt-2 max-w-md text-3xl font-semibold">
                Flores e presentes preparados perto de você.
              </h3>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md bg-white/10 p-4">
                <p className="text-sm text-white/65">Cidade</p>
                <p className="mt-1 font-semibold">{brand.city}</p>
              </div>
              <div className="rounded-md bg-white/10 p-4">
                <p className="text-sm text-white/65">Pedido</p>
                <p className="mt-1 font-semibold">WhatsApp e retirada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
