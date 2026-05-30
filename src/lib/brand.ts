export const brand = {
  name: "Doces Memórias Café e Flores",
  city: "Teresópolis, RJ",
  address:
    "Cemitério Carlinda Berlim — Av. Caingá, 1358 - Fonte Santa, Teresópolis - RJ, 25976-225",
  hours: "08h às 17h",
  whatsappDisplay: "+55 21 98426-9290",
  whatsappNumber: "5521984269290",
  instagram: "@docesmemoriascafeeflores"
};

export const whatsappBaseUrl = `https://wa.me/${brand.whatsappNumber}`;

export const paymentMethods = [
  "Pix",
  "Cartão de crédito",
  "Cartão de débito",
  "Dinheiro"
];

export const menuItems = [
  { label: "Início", href: "#inicio" },
  { label: "Buquês", href: "#buques" },
  { label: "Rosas", href: "#rosas" },
  { label: "Coroas", href: "#coroas" },
  { label: "Arranjos", href: "#arranjos" },
  { label: "Café & Presentes", href: "#cafe-presentes" },
  { label: "Personalizar Pedido", href: "#montar-pedido" }
];
