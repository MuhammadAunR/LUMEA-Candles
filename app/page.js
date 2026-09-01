import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductSectionHome from "@/components/ProductSectionHome";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <ProductSectionHome />
      </main>
    </>
  )
}
