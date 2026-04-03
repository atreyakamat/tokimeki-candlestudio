"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-cream/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl tracking-wide text-maroon">
          Tokimeki
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center text-sm uppercase tracking-widest text-charcoal/80">
          <Link href="/shop" className="hover:text-maroon transition-colors duration-300">Shop</Link>
          <Link href="/about" className="hover:text-maroon transition-colors duration-300">Story</Link>
          <Link href="/contact" className="hover:text-maroon transition-colors duration-300">Contact</Link>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-4">
          <button className="text-charcoal/80 hover:text-maroon transition-colors">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
          <button className="md:hidden text-charcoal/80" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-cream shadow-md overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              <Link href="/shop" onClick={() => setIsOpen(false)} className="text-xl font-serif text-charcoal">Shop</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl font-serif text-charcoal">Story</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xl font-serif text-charcoal">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}