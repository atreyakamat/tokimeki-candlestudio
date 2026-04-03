"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SakuraPetals() {
  const [petals, setPetals] = useState<{ id: number; left: string; duration: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate a fixed number of petals to animate continuously
    const newPetals = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * 10,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute top-[-5%] w-2 h-2 md:w-3 md:h-3 rounded-full bg-blush/20 blur-[1px]"
          animate={{
            y: ["0vh", "110vh"],
            x: ["0vw", `${Math.random() * 10 - 5}vw`, `${Math.random() * 20 - 10}vw`],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}