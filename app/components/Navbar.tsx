"use client";

import { motion } from "framer-motion";

const links = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Certificates",
  "Contact",
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        flex
        justify-center
        px-6
        py-5
      "
    >
      <div
        className="
          flex
          w-full
          max-w-6xl
          items-center
          justify-between
          rounded-full
          border
          border-white/10
          bg-white/5
          px-6
          py-3
          backdrop-blur-xl
        "
      >

        <div
          className="
            text-xl
            font-bold
            text-white
          "
        >
          LLLDA06<span className="text-cyan-400">.</span>
        </div>


        <div className="hidden md:flex gap-8 text-sm text-slate-300">

          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="
                transition
                hover:text-cyan-400
              "
            >
              {link}
            </a>
          ))}

        </div>

      </div>
    </motion.nav>
  );
}