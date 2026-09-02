import Footer from "@/components/Footer";
import FragranceRoom from "@/components/FragranceRoom";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductSectionHome from "@/components/ProductSectionHome";
import WhatsappButton from "@/components/WhatsappButton";
import WhyLumeaSection from "@/components/WhyLumeaSection";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <WhatsappButton/>
        <HeroSection />
        <ProductSectionHome />
        <WhyLumeaSection />
        <FragranceRoom />
      </main>

      <Footer />
    </>
  )
}
