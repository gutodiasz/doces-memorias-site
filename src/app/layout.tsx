import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doces Memórias Café e Flores",
  description:
    "Catálogo de flores, café e presentes personalizados em Teresópolis, RJ.",
  icons: {
    icon: "/brand/simbolo-cor.png",
    apple: "/brand/simbolo-cor.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
