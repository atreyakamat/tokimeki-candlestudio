import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SakuraPetals from "@/components/SakuraPetals";

import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL("https://tokimekicandle.com"),
  title: "Tokimeki Candle Studio",
  description: "Handcrafted candles inspiring gentle flutters of happiness. Japanese minimalism meets soft warmth.",
  openGraph: {
    title: "Tokimeki Candle Studio",
    description: "Handcrafted candles inspiring gentle flutters of happiness. Japanese minimalism meets soft warmth.",
    url: "https://tokimekicandle.com",
    siteName: "Tokimeki Candle Studio",
    images: [
      {
        url: "/images/imgi_28_621523819_17855318232609330_4101952801540662363_n.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-cream text-charcoal relative`}>
        <SakuraPetals />
        <Navbar />
        <main className="min-h-screen pt-24 relative z-10 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}