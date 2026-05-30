import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: "#123C25",
        moss: "#244B1D",
        cream: "#F7F1E3",
        gold: "#C8A96A",
        ink: "#0B0F0C"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(18, 60, 37, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
