"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Minus, Plus, Send, X } from "lucide-react";
import { paymentMethods, whatsappBaseUrl } from "@/lib/brand";
import { formatPrice, type Product } from "@/data/products";
import { createWhatsappMessage, type OrderForm } from "@/lib/orderMessage";

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};

const initialForm: OrderForm = {
  quantity: 1,
  predominantColor: "",
  packaging: "",
  bowType: "",
  cardMessage: "",
  desiredDate: "",
  desiredTime: "",
  fulfillment: "Retirada",
  address: "",
  paymentMethod: "Pix",
  changeFor: "",
  notes: ""
};

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [form, setForm] = useState<OrderForm>(initialForm);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  const whatsappUrl = useMemo(() => {
    if (!product) {
      return whatsappBaseUrl;
    }

    const message = createWhatsappMessage(product, form);
    return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  }, [form, product]);

  if (!product) {
    return null;
  }

  const updateField = <K extends keyof OrderForm>(field: K, value: OrderForm[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const quantity = Math.max(1, form.quantity);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-ink/65 px-4 py-5 backdrop-blur-sm">
      <div className="mx-auto flex min-h-full max-w-3xl items-center">
        <div className="w-full rounded-lg bg-cream shadow-2xl">
          <div className="flex items-start justify-between gap-4 border-b border-forest/10 p-5 sm:p-6">
            <div>
              <p className="text-sm font-semibold text-gold">Personalizar pedido</p>
              <h2 className="mt-1 text-2xl font-semibold text-forest">{product.name}</h2>
              <p className="mt-1 text-sm text-ink/65">{formatPrice(product)}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-forest/15 bg-white text-forest transition hover:border-gold"
              aria-label="Fechar modal"
              title="Fechar"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="px-5 pt-5 sm:px-6 sm:pt-6">
            <div
              className={`product-modal-visual product-visual product-visual-${product.visual} ${
                product.imageSrc ? "product-visual-has-image" : ""
              }`}
            >
              {product.imageSrc ? (
                <>
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    fill
                    sizes="(min-width: 768px) 720px, calc(100vw - 40px)"
                    className="object-cover"
                  />
                  <div className="product-visual-shade" />
                </>
              ) : null}
              <span>{product.tag}</span>
            </div>
          </div>

          <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
            <label className="sm:col-span-2">
              <span className="form-label">Quantidade</span>
              <div className="mt-2 flex h-12 max-w-[180px] items-center rounded-md border border-forest/15 bg-white">
                <button
                  type="button"
                  onClick={() => updateField("quantity", Math.max(1, quantity - 1))}
                  className="flex h-full w-12 items-center justify-center text-forest transition hover:bg-cream"
                  aria-label="Diminuir quantidade"
                  title="Diminuir"
                >
                  <Minus className="h-4 w-4" aria-hidden="true" />
                </button>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(event) =>
                    updateField("quantity", Math.max(1, Number(event.target.value)))
                  }
                  className="h-full min-w-0 flex-1 border-x border-forest/10 bg-transparent text-center font-semibold text-forest outline-none"
                />
                <button
                  type="button"
                  onClick={() => updateField("quantity", quantity + 1)}
                  className="flex h-full w-12 items-center justify-center text-forest transition hover:bg-cream"
                  aria-label="Aumentar quantidade"
                  title="Aumentar"
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </label>

            <Field
              label="Cor predominante"
              value={form.predominantColor}
              onChange={(value) => updateField("predominantColor", value)}
              placeholder="Ex.: branco, rosa, vermelho"
            />
            <Field
              label="Tipo de embalagem"
              value={form.packaging}
              onChange={(value) => updateField("packaging", value)}
              placeholder="Ex.: kraft, cone, cachepot"
            />
            <Field
              label="Tipo de laço"
              value={form.bowType}
              onChange={(value) => updateField("bowType", value)}
              placeholder="Ex.: laço bola, infinito"
            />
            <Field
              label="Data desejada"
              type="date"
              value={form.desiredDate}
              onChange={(value) => updateField("desiredDate", value)}
            />
            <Field
              label="Horário desejado"
              type="time"
              value={form.desiredTime}
              onChange={(value) => updateField("desiredTime", value)}
            />
            <label>
              <span className="form-label">Entrega ou retirada</span>
              <select
                value={form.fulfillment}
                onChange={(event) =>
                  updateField("fulfillment", event.target.value as OrderForm["fulfillment"])
                }
                className="form-control mt-2"
              >
                <option>Retirada</option>
                <option>Entrega</option>
              </select>
            </label>
            <Field
              label="Endereço/bairro"
              value={form.address}
              onChange={(value) => updateField("address", value)}
              placeholder="Informe se for entrega"
            />
            <label>
              <span className="form-label">Forma de pagamento</span>
              <select
                value={form.paymentMethod}
                onChange={(event) => updateField("paymentMethod", event.target.value)}
                className="form-control mt-2"
              >
                {paymentMethods.map((method) => (
                  <option key={method}>{method}</option>
                ))}
              </select>
            </label>
            {form.paymentMethod === "Dinheiro" ? (
              <Field
                label="Precisa de troco para quanto?"
                value={form.changeFor}
                onChange={(value) => updateField("changeFor", value)}
                placeholder="Ex.: R$ 100,00"
              />
            ) : null}
            <label className="sm:col-span-2">
              <span className="form-label">Mensagem no cartão</span>
              <textarea
                value={form.cardMessage}
                onChange={(event) => updateField("cardMessage", event.target.value)}
                placeholder="Escreva a mensagem que vai acompanhar o pedido"
                className="form-control mt-2 min-h-24 resize-y"
              />
            </label>
            <label className="sm:col-span-2">
              <span className="form-label">Observações</span>
              <textarea
                value={form.notes}
                onChange={(event) => updateField("notes", event.target.value)}
                placeholder="Detalhes adicionais sobre flores, cores, entrega ou retirada"
                className="form-control mt-2 min-h-24 resize-y"
              />
            </label>
          </div>

          <div className="flex flex-col gap-3 border-t border-forest/10 p-5 sm:flex-row sm:justify-end sm:p-6">
            <button
              type="button"
              onClick={onClose}
              className="h-12 rounded-md border border-forest/15 bg-white px-5 text-sm font-semibold text-forest transition hover:border-gold"
            >
              Continuar vendo catálogo
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest px-5 text-sm font-semibold text-white transition hover:bg-moss"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Finalizar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "date" | "time";
};

function Field({ label, value, onChange, placeholder, type = "text" }: FieldProps) {
  return (
    <label>
      <span className="form-label">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="form-control mt-2"
      />
    </label>
  );
}
