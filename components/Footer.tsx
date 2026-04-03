"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-warmNeutral/30 pt-16 pb-8 border-t border-maroon/10 mt-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <h2 className="font-serif text-2xl text-maroon mb-4">Tokimeki</h2>
          <p className="text-charcoal/70 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Handcrafted candles inspired by Japanese minimalism. Bringing gentle flutters of happiness into your everyday life.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-serif text-lg text-maroon mb-4">Explore</h3>
          <ul className="space-y-3 text-sm text-charcoal/70">
            <li><Link href="/shop" className="hover:text-maroon transition-colors">Shop All</Link></li>
            <li><Link href="/about" className="hover:text-maroon transition-colors">Our Story</Link></li>
            <li><Link href="/contact" className="hover:text-maroon transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-serif text-lg text-maroon mb-4">Connect</h3>
          <ul className="space-y-3 text-sm text-charcoal/70">
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-maroon transition-colors">Instagram</a></li>
            <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-maroon transition-colors">Pinterest</a></li>
            <li><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-maroon transition-colors">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-maroon/10 text-center text-xs text-charcoal/50 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Tokimeki Candle Studio. All rights reserved.
      </div>
    </footer>
  );
}