"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">
      
      <motion.div
        className="
          absolute
          top-[-10%]
          left-[-10%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-cyan-400/20
          blur-[120px]
        "
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      <motion.div
        className="
          absolute
          bottom-[-10%]
          right-[-10%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-500/20
          blur-[140px]
        "
        animate={{
          x: [0, -120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,#050816_70%)]
        "
      />

    </div>
  );
}