export type ProductCategory =
  | "Buquês"
  | "Rosas"
  | "Coroas"
  | "Arranjos"
  | "Café & Presentes"
  | "Complementos";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  price?: number;
  priceLabel?: string;
  description: string;
  tag: string;
  visual: "rose" | "bouquet" | "wreath" | "gift" | "wrap" | "arrangement";
  imageSrc?: string;
};

export const products: Product[] = [
  {
    id: "buque-personalizado",
    name: "Buquê Personalizado",
    category: "Buquês",
    priceLabel: "Consultar",
    description: "Montado sob medida com flores, cores e acabamento escolhidos para a ocasião.",
    tag: "Mais pedido",
    visual: "bouquet",
    imageSrc: "/products/buque-personalizado.png"
  },
  {
    id: "rosa-natural",
    name: "Rosa Natural",
    category: "Rosas",
    price: 15,
    description: "Rosa natural selecionada, ideal para homenagens, lembranças e composições.",
    tag: "Natural",
    visual: "rose",
    imageSrc: "/products/rosa-natural.png"
  },
  {
    id: "rosa-artificial",
    name: "Rosa Artificial",
    category: "Rosas",
    price: 15,
    description: "Opção durável e delicada para arranjos, vasos e presentes simbólicos.",
    tag: "Durável",
    visual: "rose"
  },
  {
    id: "rosa-artificial-pequena",
    name: "Rosa Artificial Pequena",
    category: "Rosas",
    price: 10,
    description: "Tamanho compacto para detalhes, lembranças e montagens especiais.",
    tag: "Compacta",
    visual: "rose"
  },
  {
    id: "galho-crisantemo",
    name: "Galho de Crisântemo",
    category: "Arranjos",
    price: 10,
    description: "Galho avulso para compor arranjos com presença, volume e afeto.",
    tag: "Avulso",
    visual: "arrangement"
  },
  {
    id: "galho-flores-sortidas",
    name: "Galho de Flores Sortidas",
    category: "Arranjos",
    price: 10,
    description: "Flores sortidas para composições leves, coloridas e personalizadas.",
    tag: "Sortidas",
    visual: "arrangement"
  },
  {
    id: "arranjo-cachepot",
    name: "Arranjo no Cachepot",
    category: "Arranjos",
    priceLabel: "Consultar",
    description: "Arranjo pronto no cachepot, com acabamento elegante para presentear.",
    tag: "Pronto",
    visual: "arrangement",
    imageSrc: "/products/arranjo-cachepot.png"
  },
  {
    id: "coroa-flores-natural",
    name: "Coroa de Flores Natural",
    category: "Coroas",
    price: 380,
    description: "Coroa natural para homenagens com flores frescas e composição respeitosa.",
    tag: "Homenagem",
    visual: "wreath",
    imageSrc: "/products/coroa-flores-natural.png"
  },
  {
    id: "coroa-flores-natural-grande",
    name: "Coroa de Flores Natural Grande",
    category: "Coroas",
    price: 450,
    description: "Versão maior, com mais presença visual e acabamento personalizado.",
    tag: "Grande",
    visual: "wreath"
  },
  {
    id: "coroa-flores-artificial",
    name: "Coroa de Flores Artificial",
    category: "Coroas",
    price: 400,
    description: "Coroa artificial durável, preparada com cuidado para homenagens.",
    tag: "Artificial",
    visual: "wreath"
  },
  {
    id: "coroa-flores-artificial-grande",
    name: "Coroa de Flores Artificial Grande",
    category: "Coroas",
    price: 750,
    description: "Modelo grande artificial, indicado para uma homenagem de maior destaque.",
    tag: "Premium",
    visual: "wreath"
  },
  {
    id: "faixa-coroa-flores",
    name: "Faixa para Coroa de Flores",
    category: "Complementos",
    price: 20,
    description: "Faixa personalizada para acompanhar coroas de flores.",
    tag: "Personaliza",
    visual: "wrap"
  },
  {
    id: "laco-bola-pequeno",
    name: "Laço Bola Pequeno",
    category: "Complementos",
    price: 3.99,
    description: "Laço pequeno para finalizar embalagens, flores e lembranças.",
    tag: "Acabamento",
    visual: "wrap"
  },
  {
    id: "laco-bola-grande",
    name: "Laço Bola Grande",
    category: "Complementos",
    price: 4.99,
    description: "Laço grande com volume para presentes e arranjos especiais.",
    tag: "Destaque",
    visual: "wrap"
  },
  {
    id: "laco-infinito-puro",
    name: "Laço Infinito Puro",
    category: "Complementos",
    price: 1.99,
    description: "Detalhe delicado para acabamento de flores e embalagens.",
    tag: "Delicado",
    visual: "wrap"
  },
  {
    id: "cone-manga-liso",
    name: "Cone Manga Liso",
    category: "Complementos",
    price: 0.99,
    description: "Cone liso para embalar flores avulsas de forma prática.",
    tag: "Embalagem",
    visual: "wrap"
  },
  {
    id: "cone-flor-kraft",
    name: "Cone para Flor Kraft",
    category: "Complementos",
    price: 2.49,
    description: "Cone kraft para apresentação natural e elegante de flores.",
    tag: "Kraft",
    visual: "wrap"
  },
  {
    id: "papel-colmeia-branco-kraft",
    name: "Papel Colmeia Branco Kraft",
    category: "Complementos",
    price: 2.49,
    description: "Papel decorativo para composições com acabamento leve.",
    tag: "Papel",
    visual: "wrap"
  },
  {
    id: "papel-colmeia-kraft-natural",
    name: "Papel Colmeia Kraft Natural",
    category: "Complementos",
    price: 2.19,
    description: "Papel kraft natural para embalagens com textura e cuidado.",
    tag: "Natural",
    visual: "wrap"
  },
  {
    id: "cachepot",
    name: "Cachepot",
    category: "Complementos",
    price: 5.99,
    description: "Base para arranjos e presentes com acabamento mais sofisticado.",
    tag: "Base",
    visual: "arrangement"
  },
  {
    id: "presente-cafe-flores",
    name: "Presente Café & Flores",
    category: "Café & Presentes",
    priceLabel: "Consultar",
    description: "Composição afetiva com flores, café e detalhes especiais para presentear.",
    tag: "Afetivo",
    visual: "gift",
    imageSrc: "/products/presente-cafe-flores.png"
  },
  {
    id: "petalas-rosas-naturais",
    name: "Pétalas de rosas naturais",
    category: "Rosas",
    priceLabel: "Consultar disponibilidade",
    description: "Pétalas naturais para momentos simbólicos, decoração e homenagens.",
    tag: "Disponibilidade",
    visual: "rose"
  }
];

export const featuredProducts = products.filter((product) =>
  [
    "buque-personalizado",
    "rosa-natural",
    "arranjo-cachepot",
    "coroa-flores-natural",
    "coroa-flores-artificial-grande",
    "presente-cafe-flores"
  ].includes(product.id)
);

export const formatPrice = (product: Product) => {
  if (product.priceLabel) {
    return product.priceLabel;
  }

  if (typeof product.price === "number") {
    return product.price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  }

  return "Consultar";
};
