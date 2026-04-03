"use client";

import { motion } from "framer-motion";

export default function Contact() {
  const whatsappUrl = "https://wa.me/1234567890";

  return (
    <div className="py-12 md:py-24 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6 mb-16"
      >
        <h1 className="font-serif text-4xl md:text-5xl text-maroon mb-4">Connect with Us</h1>
        <p className="text-lg text-charcoal/80 font-light leading-relaxed max-w-xl mx-auto">
          Whether you have a question about our scents, need assistance with an order, or are 
          interested in wholesale, we're here to help.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white/50 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-warmNeutral"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-maroon mb-2">Direct Inquiries</h3>
              <p className="text-charcoal/70 font-light mb-4">
                The fastest way to reach us is through WhatsApp. We typically reply within a few hours.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-maroon text-cream px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-maroon/90 transition-all hover:shadow-lg"
              >
                Chat on WhatsApp
              </a>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl text-maroon mb-2">Email Us</h3>
              <p className="text-charcoal/70 font-light">
                hello@tokimekicandle.com
              </p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm uppercase tracking-widest text-maroon/80 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-cream/50 border border-maroon/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-maroon/30 transition-all"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm uppercase tracking-widest text-maroon/80 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-cream/50 border border-maroon/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-maroon/30 transition-all"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm uppercase tracking-widest text-maroon/80 mb-2">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-cream/50 border border-maroon/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-maroon/30 transition-all resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button className="w-full bg-charcoal text-cream px-8 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-charcoal/90 transition-all hover:shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}