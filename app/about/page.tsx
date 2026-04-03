"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="py-12 md:py-24 max-w-4xl mx-auto text-center space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-serif text-4xl md:text-5xl text-maroon mb-6">Our Story</h1>
        <p className="text-lg text-charcoal/80 font-light leading-relaxed max-w-2xl mx-auto">
          Tokimeki Candle Studio was born from a desire to capture quiet, beautiful moments. 
          "Tokimeki" is a Japanese word that describes the gentle flutter of excitement or joy you feel 
          when you encounter something truly special.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl bg-warmNeutral"
      >
        <Image
          src="/images/imgi_20_628274927_17856821139609330_4181317704577888734_n.jpg"
          alt="Tokimeki Studio Process"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="space-y-8"
      >
        <h2 className="font-serif text-3xl text-maroon">The Craft</h2>
        <p className="text-lg text-charcoal/80 font-light leading-relaxed max-w-2xl mx-auto">
          Every candle is meticulously hand-poured in small batches. We use only premium natural waxes, 
          lead-free cotton wicks, and carefully curated fragrance oils inspired by Japanese flora and 
          landscapes. We believe in simplicity, elegance, and the soft warmth of a beautifully crafted scent.
        </p>
      </motion.div>
    </div>
  );
}