import Image from "next/image";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { whatsappBaseUrl } from "@/lib/brand";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-forest text-white">
      <Image
        src="/hero/hero-doces-memorias.png"
        alt="Flores e presentes da Doces Memórias"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-forest/70 to-forest/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/60 via-transparent to-ink/25" />

      <div className="mx-auto flex min-h-[600px] max-w-7xl items-center px-4 py-16 sm:min-h-[640px] sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur">
            <Sparkles className="h-4 w-4 text-gold" aria-hidden="true" />
            Flores, café e presentes em Teresópolis
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Flores, café e presentes para criar doces memórias.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
            Escolha seu produto, personalize os detalhes e finalize seu pedido diretamente pelo WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#catalogo"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-5 text-sm font-semibold text-ink transition hover:bg-white"
            >
              Ver catálogo
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#montar-pedido"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur transition hover:border-gold hover:bg-white hover:text-forest"
            >
              Montar meu pedido
            </a>
            <a
              href={whatsappBaseUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 bg-forest/80 px-5 text-sm font-semibold text-white backdrop-blur transition hover:border-gold hover:bg-moss"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Pedir pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
