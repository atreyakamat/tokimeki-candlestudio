"use client";

import { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";
import { notFound } from "next/navigation";

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const [product, setProduct] = useState<typeof products[0] | null>(null);

  useEffect(() => {
    const found = products.find(p => p.id === unwrappedParams.id);
    if (found) {
      setProduct(found);
    } else {
      notFound();
    }
  }, [unwrappedParams.id]);

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(`Hello, I would like to order the ${product.name} candle ($${product.price}).`);
  const whatsappUrl = `https://wa.me/1234567890?text=${whatsappMessage}`;

  return (
    <div className="py-12 md:py-24 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-warmNeutral shadow-xl"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col space-y-8"
        >
          <div>
            <p className="text-maroon/60 uppercase tracking-widest text-sm mb-4">{product.category}</p>
            <h1 className="font-serif text-4xl md:text-5xl text-maroon mb-4">{product.name}</h1>
            <p className="text-2xl text-charcoal/80 font-light">${product.price}</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-xl text-maroon">The Experience</h3>
            <p className="text-charcoal/70 leading-relaxed font-light">
              {product.description}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl text-maroon mb-3">Scent Notes</h3>
            <div className="flex flex-wrap gap-3">
              {product.notes.map(note => (
                <span key={note} className="bg-blush/20 text-maroon/80 px-4 py-2 rounded-full text-sm font-medium tracking-wide">
                  {note}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center bg-maroon text-cream px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-maroon/90 transition-all hover:shadow-lg w-full"
            >
              Order via WhatsApp
            </a>
            <Link
              href="/shop"
              className="text-center border border-maroon/30 text-maroon px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-maroon/5 transition-all w-full"
            >
              Back to Shop
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}