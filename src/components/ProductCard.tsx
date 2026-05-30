"use client";

import { MessageCircle } from "lucide-react";
import { formatPrice, type Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  onPersonalize: (product: Product) => void;
};

export function ProductCard({ product, onPersonalize }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-forest/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-gold hover:shadow-soft">
      <div className={`product-visual product-visual-${product.visual}`}>
        <span>{product.tag}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase text-gold">{product.category}</p>
            <h3 className="mt-2 text-lg font-semibold leading-snug text-forest">
              {product.name}
            </h3>
          </div>
          <p className="shrink-0 rounded-md bg-cream px-2.5 py-1 text-sm font-semibold text-forest">
            {formatPrice(product)}
          </p>
        </div>
        <p className="mt-3 flex-1 text-sm leading-6 text-ink/65">{product.description}</p>
        <button
          type="button"
          onClick={() => onPersonalize(product)}
          className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-forest px-4 text-sm font-semibold text-white transition hover:bg-moss"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Personalizar pedido
        </button>
      </div>
    </article>
  );
}
