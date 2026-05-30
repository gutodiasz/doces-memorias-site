import { CategorySection } from "@/components/CategorySection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LocationSection } from "@/components/LocationSection";
import { OrderBuilder } from "@/components/OrderBuilder";
import { ProductGrid } from "@/components/ProductGrid";
import { TopBar } from "@/components/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <CategorySection />
        <ProductGrid />
        <HowItWorks />
        <OrderBuilder />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
