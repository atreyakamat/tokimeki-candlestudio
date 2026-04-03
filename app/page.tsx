"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import products from "@/data/products.json";
import ParallaxImage from "@/components/ParallaxImage";
import Magnetic from "@/components/Magnetic";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  const headingText = "A Gentle Flutter of Happiness".split(" ");

  return (
    <div className="flex flex-col w-full flex-grow">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] text-center relative overflow-hidden px-4">
        {/* Soft Decorative Glow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blush/20 rounded-full blur-[120px] -z-10 pointer-events-none" 
        />

        <div className="max-w-4xl space-y-8 z-10 flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xs md:text-sm uppercase tracking-[0.4em] text-maroon/70"
          >
            Handcrafted in Small Batches
          </motion.p>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-maroon leading-[1.1] flex flex-wrap justify-center gap-x-4 gap-y-2">
            {headingText.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: i * 0.15 + 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="text-lg md:text-xl text-charcoal/80 font-light leading-relaxed max-w-xl mx-auto pt-4"
          >
            Discover our collection of artisanal candles inspired by Japanese minimalism. 
            Designed to bring soft joy, warmth, and quiet emotional moments into your space.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="pt-10 flex gap-6 justify-center flex-col sm:flex-row items-center"
          >
            <Magnetic>
              <Link 
                href="/shop" 
                className="group relative overflow-hidden inline-block bg-maroon text-cream px-12 py-5 rounded-full uppercase tracking-[0.2em] text-xs hover:shadow-2xl transition-shadow duration-500 w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10">Explore the Collection</span>
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        {/* Decorative Floating Images */}
        <motion.div 
          className="hidden lg:block absolute top-[15%] left-[8%] w-56 h-72 rounded-2xl overflow-hidden shadow-2xl -z-10"
          animate={{ y: [0, -30, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/images/imgi_29_612204856_17853315858609330_1730257534694446087_n.jpg" alt="Decorative Candle" fill className="object-cover" />
        </motion.div>
        <motion.div 
          className="hidden lg:block absolute bottom-[10%] right-[10%] w-64 h-80 rounded-t-full overflow-hidden shadow-2xl -z-10"
          animate={{ y: [0, 30, 0], rotate: [2, -2, 2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Image src="/images/imgi_28_621523819_17855318232609330_4101952801540662363_n.jpg" alt="Decorative Candle" fill className="object-cover" />
        </motion.div>
      </section>

      {/* Featured Products Section with Staggered Parallax */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-maroon mb-6">Featured Scents</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto font-light text-lg">
            Curated fragrances designed to evoke tranquility and warmth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className={`group block ${index === 1 ? 'lg:mt-24' : ''}`} // Stagger layout
            >
              <Link href={`/shop/${product.id}`}>
                <div className="relative aspect-[3/4] mb-8 overflow-hidden rounded-3xl bg-warmNeutral shadow-lg hover:shadow-2xl transition-all duration-700">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-maroon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
                </div>
                <div className="text-center space-y-3">
                  <p className="text-maroon/50 text-xs tracking-[0.2em] uppercase font-semibold">{product.category}</p>
                  <h3 className="font-serif text-2xl text-maroon">{product.name}</h3>
                  <p className="text-charcoal/80 text-sm tracking-wider">${product.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <Magnetic>
            <Link href="/shop" className="inline-block relative overflow-hidden text-maroon border border-maroon/30 px-10 py-4 rounded-full uppercase tracking-[0.2em] text-xs hover:border-maroon transition-colors duration-500">
              View All Products
            </Link>
          </Magnetic>
        </motion.div>
      </section>

      {/* The Philosophy Section with Parallax Image */}
      <section className="py-32 w-full bg-warmNeutral/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <ParallaxImage 
              src="/images/imgi_26_622602637_17855320089609330_4461307980780273270_n.jpg" 
              alt="Tokimeki Philosophy"
              className="aspect-[4/5] w-full"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="space-y-8 lg:pl-10"
          >
            <h2 className="font-serif text-5xl md:text-6xl text-maroon leading-tight">The Essence <br/><span className="italic text-charcoal/60 text-4xl">of</span> Tokimeki</h2>
            <div className="w-16 h-[1px] bg-maroon/30" />
            <p className="text-xl text-charcoal/80 font-light leading-relaxed">
              In Japanese, "Tokimeki" describes the sensation of your heart fluttering with joy. It is the quiet thrill of encountering something beautiful, peaceful, and perfectly crafted.
            </p>
            <p className="text-xl text-charcoal/80 font-light leading-relaxed">
              Our candles are more than just home fragrance. They are an invitation to slow down, breathe deeply, and find magic in the small, softly lit moments of your day.
            </p>
            <div className="pt-8">
              <Magnetic>
                <Link href="/about" className="inline-block text-maroon uppercase tracking-[0.2em] text-sm font-semibold border-b border-maroon pb-1 hover:text-charcoal hover:border-charcoal transition-all duration-300">
                  Read Our Story
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aesthetic Image Banner */}
      <section className="py-32 max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-maroon mb-16"
        >
          Moments of Soft Joy
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
           {['imgi_16_648584363_17860961805609330_416113593074951408_n.jpg', 'imgi_21_626278394_17856698373609330_6909979132090822424_n.jpg', 'imgi_23_627481906_17856570996609330_3858864472857529797_n.jpg', 'imgi_25_624630085_17855890893609330_800010373396927809_n.jpg'].map((img, i) => (
             <motion.div 
                key={img}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                className={`relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group cursor-hover ${i % 2 !== 0 ? 'md:mt-16' : ''}`}
             >
               <Image src={`/images/${img}`} alt="Candle Lifestyle" fill className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
               <div className="absolute inset-0 bg-maroon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             </motion.div>
           ))}
        </div>
      </section>
    </div>
  );
}