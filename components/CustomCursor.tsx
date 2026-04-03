"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.tagName.toLowerCase() === "A" || 
                     target.tagName.toLowerCase() === "BUTTON" || 
                     target.closest("a") || 
                     target.closest("button") || 
                     target.classList.contains("cursor-hover");
      setIsHovering(!!isLink);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants: any = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: "transparent",
      border: "1px solid rgba(139, 90, 90, 0.5)",
      transition: { type: "tween", ease: "backOut", duration: 0.15 }
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(139, 90, 90, 0.1)",
      border: "1px solid rgba(139, 90, 90, 0.2)",
      backdropFilter: "blur(2px)",
      transition: { type: "spring", stiffness: 150, damping: 15, mass: 1 }
    }
  };

  return (
    <>
      <style>{`
        body, a, button {
          cursor: none !important;
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] flex items-center justify-center mix-blend-multiply"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
      >
        <motion.div 
          className="w-1 h-1 bg-maroon rounded-full absolute"
          animate={{ opacity: isHovering ? 0 : 1 }}
        />
      </motion.div>
    </>
  );
}