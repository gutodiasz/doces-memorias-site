import { MessageCircle, PackageCheck, SlidersHorizontal, Truck } from "lucide-react";

const steps = [
  {
    title: "Escolha no catálogo",
    description: "Veja flores, coroas, arranjos, embalagens e presentes disponíveis.",
    icon: PackageCheck
  },
  {
    title: "Personalize detalhes",
    description: "Informe cor, quantidade, laço, cartão, data, horário e retirada ou entrega.",
    icon: SlidersHorizontal
  },
  {
    title: "Finalize pelo WhatsApp",
    description: "A mensagem já sai organizada para o atendimento confirmar disponibilidade.",
    icon: MessageCircle
  },
  {
    title: "Receba ou retire",
    description: "Combine retirada na loja ou entrega conforme endereço e horário desejado.",
    icon: Truck
  }
];

export function HowItWorks() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-gold">Como funciona</p>
          <h2 className="mt-2 text-3xl font-semibold text-forest">
            Um pedido simples, humano e direto
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="rounded-lg border border-forest/10 bg-cream p-5">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-forest text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-semibold text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-forest">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
