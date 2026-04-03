import { Metadata } from "next";
import products from "@/data/products.json";
import { notFound } from "next/navigation";
import ProductClient from "./ProductClient";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = products.find(p => p.id === id);
  if (!product) return {};

  return {
    title: `${product.name} | Tokimeki Candle Studio`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://tokimekicandle.com${product.image}`,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Tokimeki Candle Studio",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.price,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="py-12 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductClient product={product} />
    </div>
  );
}