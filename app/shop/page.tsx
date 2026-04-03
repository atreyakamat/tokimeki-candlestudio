"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import products from "@/data/products.json";

export default function Shop() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="font-serif text-4xl md:text-5xl text-maroon mb-4">Our Collection</h1>
        <p className="text-charcoal/70 max-w-2xl mx-auto">
          Each candle is hand-poured with love, intention, and a focus on soft, elegant fragrances inspired by Japanese nature.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group block"
          >
            <Link href={`/shop/${product.id}`}>
              <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-2xl bg-warmNeutral">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl text-maroon mb-2">{product.name}</h3>
                <p className="text-charcoal/60 text-sm tracking-wider uppercase">${product.price}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}