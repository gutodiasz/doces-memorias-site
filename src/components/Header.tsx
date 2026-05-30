import Image from "next/image";
import { MessageCircle, Search } from "lucide-react";
import { brand, menuItems, whatsappBaseUrl } from "@/lib/brand";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 lg:px-8">
        <a href="#inicio" className="flex shrink-0 items-center" aria-label={brand.name}>
          <Image
            src="/brand/logo-cor.png"
            alt={brand.name}
            width={220}
            height={92}
            priority
            className="hidden h-14 w-auto object-contain md:block"
          />
          <Image
            src="/brand/simbolo-cor.png"
            alt={brand.name}
            width={52}
            height={52}
            priority
            className="h-11 w-11 object-contain md:hidden"
          />
        </a>

        <label className="relative ml-auto hidden min-w-0 flex-1 md:block">
          <span className="sr-only">Buscar no catálogo</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-forest/55" />
          <input
            type="search"
            placeholder="Buscar flores, coroas, presentes..."
            className="h-11 w-full rounded-md border border-forest/15 bg-white px-10 text-sm text-ink outline-none transition placeholder:text-ink/45 focus:border-gold focus:ring-2 focus:ring-gold/25"
          />
        </label>

        <a
          href={whatsappBaseUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden h-11 items-center gap-2 rounded-md bg-forest px-4 text-sm font-semibold text-white transition hover:bg-moss lg:inline-flex"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>

        <a
          href={whatsappBaseUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-forest/15 text-forest lg:hidden"
          aria-label="Chamar no WhatsApp"
          title="WhatsApp"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>

      <nav className="border-t border-forest/10 bg-white">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-2 text-sm font-medium text-forest lg:px-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-md px-3 py-2 transition hover:bg-cream hover:text-moss"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
