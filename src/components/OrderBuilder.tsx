import { MessageCircle, PenLine } from "lucide-react";
import { whatsappBaseUrl } from "@/lib/brand";

export function OrderBuilder() {
  return (
    <section id="montar-pedido" className="bg-forest py-12 text-white sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-gold">Monte seu pedido</p>
          <h2 className="mt-2 text-3xl font-semibold">
            Cada detalhe pode ser combinado antes da finalização
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/75">
            Use o botão de personalização em qualquer produto para enviar uma mensagem completa com quantidade, cores, embalagem, laço, cartão, entrega ou retirada e forma de pagamento.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-white/12 bg-white/8 p-5">
            <PenLine className="h-6 w-6 text-gold" aria-hidden="true" />
            <h3 className="mt-4 font-semibold">Mensagem pronta</h3>
            <p className="mt-2 text-sm leading-6 text-white/70">
              O WhatsApp abre com todos os dados preenchidos para reduzir erros no atendimento.
            </p>
          </div>
          <a
            href={whatsappBaseUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-gold bg-gold p-5 text-ink transition hover:bg-white"
          >
            <MessageCircle className="h-6 w-6" aria-hidden="true" />
            <h3 className="mt-4 font-semibold">Atendimento direto</h3>
            <p className="mt-2 text-sm leading-6">
              Tire dúvidas, consulte disponibilidade e combine detalhes com a loja.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
