"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 font-mono text-sm text-cyan-400"
        >
          👋 Hello, I am
        </motion.p>


        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-5xl
            md:text-7xl
            font-bold
            tracking-tight
            text-white
          "
        >
          LADA
          <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            BAHDANOVICH
          </span>
        </motion.h1>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
            mt-8
            text-2xl
            md:text-4xl
            font-semibold
            text-slate-200
          "
        >
          <TypeAnimation
            sequence={[
              "Machine Learning Engineer",
              2000,
              "Python Developer",
              2000,
              "Data Science Enthusiast",
              2000,
              "AI Builder",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-relaxed
            text-slate-400
          "
        >
          Building intelligent systems from data to production.
          Specialized in Python, Machine Learning and AI solutions.
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >

          <button
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-cyan-400
              px-6
              py-3
              font-semibold
              text-black
              transition
              hover:scale-105
            "
          >
            View Projects
            <ArrowRight size={18}/>
          </button>


          <button
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-700
              px-6
              py-3
              text-white
              transition
              hover:border-cyan-400
              hover:text-cyan-400
            "
          >
            <FaGithub size={18}/>
            GitHub
          </button>

        </motion.div>


        <div className="mt-12 flex justify-center gap-6 text-slate-400">

          <div className="flex items-center gap-2">
            <Brain size={18}/>
            AI
          </div>

          <div className="flex items-center gap-2">
            <Code2 size={18}/>
            Python
          </div>

        </div>


      </div>
    </section>
  );
}