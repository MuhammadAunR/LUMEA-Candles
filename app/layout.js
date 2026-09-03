import { Bodoni_Moda, Lora, DM_Sans } from "next/font/google";
import "./globals.css";
import AppWrapper from "./context/AppWrapper";
import NavSidebar from "@/components/NavDrawer";
import LenisWrapper from "@/components/LenisWrapper";
import ScrollToTop from "@/components/ScrollToTop";
import Cart from "@/components/Cart";
import SonnerToast from "@/components/SonnerToast";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "LUMÉA — Handmade Scented Candles",
  description:
    "Discover LUMÉA — handcrafted scented candles where luxury meets light and fragrance.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${lora.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LenisWrapper>
          <AppWrapper>
            <SonnerToast>
              <NavSidebar />
              <Cart />
              <ScrollToTop />
              {children}
            </SonnerToast>
          </AppWrapper>
        </LenisWrapper>
      </body>
    </html>
  );
}