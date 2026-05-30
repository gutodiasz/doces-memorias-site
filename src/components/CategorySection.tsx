import { Flower2, Gift, HeartHandshake, Package, Ribbon, Sparkles } from "lucide-react";

const categories = [
  {
    id: "buques",
    title: "Buquês",
    description: "Composições personalizadas para presentear e emocionar.",
    icon: Flower2
  },
  {
    id: "rosas",
    title: "Rosas",
    description: "Naturais, artificiais e detalhes delicados para compor pedidos.",
    icon: Sparkles
  },
  {
    id: "coroas",
    title: "Coroas",
    description: "Homenagens florais com atendimento respeitoso e ágil.",
    icon: HeartHandshake
  },
  {
    id: "arranjos",
    title: "Arranjos",
    description: "Cachepots, galhos e flores sortidas para montar sua escolha.",
    icon: Ribbon
  },
  {
    id: "cafe-presentes",
    title: "Café & Presentes",
    description: "Combinações afetivas para datas especiais e lembranças.",
    icon: Gift
  },
  {
    id: "personalizar",
    title: "Personalizar",
    description: "Escolha cor, embalagem, mensagem, entrega e pagamento.",
    icon: Package
  }
];

export function CategorySection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-gold">
              Categorias
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-forest">
              Encontre pelo tipo de pedido
            </h2>
          </div>
          <a
            href="#catalogo"
            className="text-sm font-semibold text-forest underline decoration-gold underline-offset-4"
          >
            Ver todos os produtos
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <a
                key={category.id}
                id={category.id}
                href="#catalogo"
                className="group rounded-lg border border-forest/10 bg-cream p-5 transition hover:-translate-y-1 hover:border-gold hover:bg-white hover:shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-forest text-white transition group-hover:bg-gold group-hover:text-ink">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-forest">{category.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{category.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
