# Doces Memórias Café e Flores

Primeira versão do catálogo online da marca **Doces Memórias Café e Flores**, em Teresópolis, RJ.

O projeto usa Next.js com App Router, React, TypeScript e Tailwind CSS. O site funciona como catálogo com aparência de e-commerce, mas sem carrinho, login, checkout online ou banco de dados. A finalização do pedido acontece pelo WhatsApp.

## Como rodar o projeto

Instale as dependências:

```bash
npm install
```

Rode o ambiente local:

```bash
npm run dev
```

Acesse `http://localhost:3000`.

Para validar o projeto:

```bash
npm run lint
npm run build
```

## Como editar produtos

Os produtos ficam em:

```text
src/data/products.ts
```

Para alterar nome, preço, categoria, descrição ou destaque visual, edite os objetos do array `products`.

Use `price` para valores numéricos e `priceLabel` para textos como `Consultar` ou `Consultar disponibilidade`.

## Onde trocar imagens

As logos reais da marca ficam em:

```text
public/brand/logo-cor.png
public/brand/logo-branca.png
public/brand/simbolo-cor.png
public/brand/simbolo-branco.png
```

Os cards de produtos usam placeholders visuais em CSS, preparados para receber fotos reais depois. Quando houver fotos, crie uma pasta como `public/products` e adicione o caminho das imagens nos dados de `src/data/products.ts`.

## Como alterar WhatsApp e dados da marca

Os dados principais ficam em:

```text
src/lib/brand.ts
```

Altere `whatsappDisplay` para o texto exibido e `whatsappNumber` para o número usado no link do WhatsApp, somente com código do país, DDD e número.

## Como publicar na Vercel

1. Importe o repositório no painel da Vercel.
2. Mantenha o framework como `Next.js`.
3. Use `npm run build` como comando de build.
4. Publique a branch `main`.
5. A cada novo commit na `main`, a Vercel fará o deploy automaticamente.
