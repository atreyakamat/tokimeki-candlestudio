"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center relative overflow-hidden">
      
      {/* Soft Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blush/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-2xl space-y-6 z-10"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-maroon/70 mb-4"
        >
          Handcrafted in Small Batches
        </motion.p>
        
        <h1 className="font-serif text-5xl md:text-7xl text-maroon leading-tight">
          A Gentle Flutter <br /> of Happiness
        </h1>
        
        <p className="text-lg text-charcoal/80 font-light leading-relaxed max-w-xl mx-auto pt-4">
          Discover our collection of artisanal candles inspired by Japanese minimalism. 
          Designed to bring soft joy, warmth, and quiet emotional moments into your space.
        </p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="pt-10 flex gap-4 justify-center flex-col sm:flex-row items-center"
        >
          <Link 
            href="/shop" 
            className="inline-block bg-maroon text-cream px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-maroon/90 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 w-full sm:w-auto"
          >
            Explore the Collection
          </Link>
          <Link 
            href="/about" 
            className="inline-block bg-transparent text-maroon border border-maroon px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-maroon/10 transition-all hover:-translate-y-1 duration-300 w-full sm:w-auto"
          >
            Our Story
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative Floating Images */}
      <motion.div 
        className="hidden lg:block absolute top-10 left-10 w-48 h-64 rounded-2xl overflow-hidden shadow-xl -z-10 opacity-70"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/images/imgi_29_612204856_17853315858609330_1730257534694446087_n.jpg" alt="Decorative Candle" fill className="object-cover" />
      </motion.div>
      <motion.div 
        className="hidden lg:block absolute bottom-10 right-10 w-56 h-72 rounded-t-full overflow-hidden shadow-xl -z-10 opacity-70"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Image src="/images/imgi_28_621523819_17855318232609330_4101952801540662363_n.jpg" alt="Decorative Candle" fill className="object-cover" />
      </motion.div>
    </div>
  );
}