import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SakuraPetals from "@/components/SakuraPetals";

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
        <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}