import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductSectionHome from "@/components/ProductSectionHome";
import WhyLumeaSection from "@/components/WhyLumeaSection";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <ProductSectionHome />
        <WhyLumeaSection />
      </main>
    </>
  )
}
