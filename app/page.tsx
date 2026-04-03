"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import products from "@/data/products.json";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col w-full flex-grow">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] text-center relative overflow-hidden px-4">
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
      </section>

      {/* Featured Products Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-maroon mb-4">Featured Scents</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto font-light">
            Curated fragrances designed to evoke tranquility and warmth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block"
            >
              <Link href={`/shop/${product.id}`}>
                <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-2xl bg-warmNeutral shadow-sm hover:shadow-lg transition-shadow duration-500">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-maroon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl text-maroon mb-2">{product.name}</h3>
                  <p className="text-charcoal/60 text-sm tracking-wider uppercase">${product.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link href="/shop" className="inline-block border border-maroon text-maroon px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-maroon/5 transition-all">
            View All Products
          </Link>
        </div>
      </section>

      {/* The Philosophy Section */}
      <section className="py-24 w-full bg-blush/10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image 
              src="/images/imgi_26_622602637_17855320089609330_4461307980780273270_n.jpg" 
              alt="Tokimeki Philosophy" 
              fill 
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-maroon">The Essence of Tokimeki</h2>
            <p className="text-lg text-charcoal/80 font-light leading-relaxed">
              In Japanese, "Tokimeki" describes the sensation of your heart fluttering with joy. It is the quiet thrill of encountering something beautiful, peaceful, and perfectly crafted.
            </p>
            <p className="text-lg text-charcoal/80 font-light leading-relaxed">
              Our candles are more than just home fragrance. They are an invitation to slow down, breathe deeply, and find magic in the small, softly lit moments of your day.
            </p>
            <div className="pt-6">
              <Link href="/about" className="inline-block bg-maroon text-cream px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-maroon/90 transition-all hover:shadow-lg">
                Read Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aesthetic Image Banner */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-maroon mb-12">Moments of Soft Joy</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {['imgi_16_648584363_17860961805609330_416113593074951408_n.jpg', 'imgi_21_626278394_17856698373609330_6909979132090822424_n.jpg', 'imgi_23_627481906_17856570996609330_3858864472857529797_n.jpg', 'imgi_25_624630085_17855890893609330_800010373396927809_n.jpg'].map((img, i) => (
             <motion.div 
                key={img}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
             >
               <Image src={`/images/${img}`} alt="Candle Lifestyle" fill className="object-cover hover:scale-105 transition-transform duration-700" />
             </motion.div>
           ))}
        </div>
      </section>
    </div>
  );
}