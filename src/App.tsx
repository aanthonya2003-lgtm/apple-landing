import { useEffect } from "react";
import { initSmoothScroll } from "./lib/lenis";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { PromoBento } from "./components/PromoBento";
import { AppleIntelligence } from "./components/AppleIntelligence";
import { FeatureSpotlight } from "./components/FeatureSpotlight";
import { ServicesStrip } from "./components/ServicesStrip";
import { Privacy } from "./components/Privacy";
import { ShopCategory } from "./components/ShopCategory";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    const handle = initSmoothScroll();
    return () => handle.destroy();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PromoBento />
        <AppleIntelligence />
        <FeatureSpotlight />
        <ServicesStrip />
        <Privacy />
        <ShopCategory />
      </main>
      <Footer />
    </>
  );
}
