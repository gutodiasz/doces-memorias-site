import { brand } from "@/lib/brand";
import { formatPrice, type Product } from "@/data/products";

export type OrderForm = {
  quantity: number;
  predominantColor: string;
  packaging: string;
  bowType: string;
  cardMessage: string;
  desiredDate: string;
  desiredTime: string;
  fulfillment: "Entrega" | "Retirada";
  address: string;
  paymentMethod: string;
  changeFor: string;
  notes: string;
};

const valueOrDash = (value: string | number) => {
  if (typeof value === "number") {
    return value > 0 ? String(value) : "-";
  }

  return value.trim() || "-";
};

export const createWhatsappMessage = (product: Product, form: OrderForm) => {
  const lines = [
    `Olá, ${brand.name}! Gostaria de finalizar um pedido.`,
    "",
    `Produto: ${product.name}`,
    `Valor informado: ${formatPrice(product)}`,
    `Quantidade: ${valueOrDash(form.quantity)}`,
    `Cor predominante: ${valueOrDash(form.predominantColor)}`,
    `Tipo de embalagem: ${valueOrDash(form.packaging)}`,
    `Tipo de laço: ${valueOrDash(form.bowType)}`,
    `Mensagem no cartão: ${valueOrDash(form.cardMessage)}`,
    `Data desejada: ${valueOrDash(form.desiredDate)}`,
    `Horário desejado: ${valueOrDash(form.desiredTime)}`,
    `Entrega ou retirada: ${form.fulfillment}`,
    `Endereço/bairro: ${valueOrDash(form.address)}`,
    `Forma de pagamento: ${valueOrDash(form.paymentMethod)}`
  ];

  if (form.paymentMethod === "Dinheiro") {
    lines.push(`Precisa de troco para quanto? ${valueOrDash(form.changeFor)}`);
  }

  lines.push(`Observações: ${valueOrDash(form.notes)}`);

  return lines.join("\n");
};
