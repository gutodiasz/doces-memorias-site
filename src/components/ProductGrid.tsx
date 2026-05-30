"use client";

import { useMemo, useState } from "react";
import { products, type Product, type ProductCategory } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";

const categories: Array<ProductCategory | "Todos"> = [
  "Todos",
  "Buquês",
  "Rosas",
  "Coroas",
  "Arranjos",
  "Café & Presentes",
  "Complementos"
];

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "Todos">("Todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "Todos") {
      return products;
    }

    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="catalogo" className="bg-cream py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-gold">Catálogo</p>
            <h2 className="mt-2 text-3xl font-semibold text-forest">
              Produtos em destaque
            </h2>
            <p className="mt-3 text-sm leading-6 text-ink/65">
              Escolha uma opção, personalize cada detalhe e envie o pedido pronto para atendimento pelo WhatsApp.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pb-1">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 rounded-md border px-3 py-2 text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "border-forest bg-forest text-white"
                    : "border-forest/15 bg-white text-forest hover:border-gold"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onPersonalize={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      <ProductModal
        key={selectedProduct?.id ?? "empty-product-modal"}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
