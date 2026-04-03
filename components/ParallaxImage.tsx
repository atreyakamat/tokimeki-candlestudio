"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[130%] -top-[15%]">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
}