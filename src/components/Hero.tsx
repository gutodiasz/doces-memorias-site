import Image from "next/image";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { whatsappBaseUrl } from "@/lib/brand";

export function Hero() {
  return (
    <section id="inicio" className="hero-surface overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-gold/45 bg-white/75 px-3 py-2 text-sm font-semibold text-forest">
            <Sparkles className="h-4 w-4 text-gold" aria-hidden="true" />
            Flores, café e presentes em Teresópolis
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-forest sm:text-5xl lg:text-6xl">
            Flores, café e presentes para criar doces memórias.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink/72 sm:text-lg">
            Escolha seu produto, personalize os detalhes e finalize seu pedido diretamente pelo WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#catalogo"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest px-5 text-sm font-semibold text-white transition hover:bg-moss"
            >
              Ver catálogo
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#montar-pedido"
              className="inline-flex h-12 items-center justify-center rounded-md border border-forest/20 bg-white px-5 text-sm font-semibold text-forest transition hover:border-gold hover:text-moss"
            >
              Montar meu pedido
            </a>
            <a
              href={whatsappBaseUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-gold bg-gold px-5 text-sm font-semibold text-ink transition hover:bg-white"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Pedir pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="hero-arrangement relative min-h-[360px] lg:min-h-[560px]">
          <div className="absolute left-3 top-3 h-40 w-40 rounded-full border border-gold/35 bg-white/40" />
          <div className="absolute right-4 top-0 hidden h-24 w-24 rounded-full bg-gold/20 md:block" />
          <div className="absolute bottom-6 right-0 h-40 w-40 rounded-full bg-forest/10" />

          <div className="absolute left-[8%] top-[8%] w-[46%] max-w-[260px] rotate-[-5deg] rounded-lg border border-white/70 bg-white p-4 shadow-soft">
            <div className="mock-photo mock-bouquet" />
            <p className="mt-3 text-sm font-semibold text-forest">Buquês sob medida</p>
            <p className="mt-1 text-xs text-ink/60">Cores, laços e mensagens escolhidas por você</p>
          </div>

          <div className="absolute right-[4%] top-[23%] w-[48%] max-w-[280px] rotate-[3deg] rounded-lg bg-forest p-4 text-white shadow-soft">
            <Image
              src="/brand/simbolo-branco.png"
              alt=""
              width={72}
              height={72}
              className="mb-5 h-12 w-12 object-contain opacity-85"
            />
            <div className="mock-photo mock-wreath" />
            <p className="mt-3 text-sm font-semibold">Coroas e homenagens</p>
            <p className="mt-1 text-xs text-white/70">Atendimento direto e cuidadoso</p>
          </div>

          <div className="absolute bottom-[5%] left-[16%] w-[62%] max-w-[340px] rounded-lg border border-gold/25 bg-white p-4 shadow-soft">
            <div className="flex items-center gap-4">
              <div className="mock-mini mock-gift" />
              <div>
                <p className="text-sm font-semibold text-forest">Café & Presentes</p>
                <p className="mt-1 text-xs leading-5 text-ink/60">
                  Combinações prontas para transformar gestos simples em lembranças bonitas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
