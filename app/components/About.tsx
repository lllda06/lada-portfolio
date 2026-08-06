"use client";

import { motion } from "framer-motion";
import { Brain, Database, Code2, Rocket } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "Machine Learning",
    text: "Building and training ML models with Python and modern frameworks.",
  },
  {
    icon: Database,
    title: "Data Science",
    text: "Data analysis, feature engineering and extracting insights.",
  },
  {
    icon: Code2,
    title: "Backend Development",
    text: "Creating ML services with FastAPI, Django and REST APIs.",
  },
  {
    icon: Rocket,
    title: "Production ML",
    text: "Deploying models using Docker, Airflow and automation tools.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        min-h-screen
        px-6
        py-24
        flex
        items-center
      "
    >
      <div className="mx-auto max-w-6xl w-full">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
          "
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>


        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="
            mt-6
            max-w-3xl
            text-lg
            leading-relaxed
            text-slate-400
          "
        >
          I am a Machine Learning Engineer focused on building
          intelligent systems from data to production.
          My interests include Python development,
          machine learning, data science and creating
          scalable ML solutions.
        </motion.p>


        <div
          className="
            mt-12
            grid
            gap-6
            md:grid-cols-2
          "
        >

          {cards.map((card, index) => {

            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-xl
                  transition
                  hover:border-cyan-400/50
                "
              >

                <Icon
                  className="text-cyan-400"
                  size={32}
                />

                <h3
                  className="
                    mt-5
                    text-xl
                    font-semibold
                    text-white
                  "
                >
                  {card.title}
                </h3>


                <p
                  className="
                    mt-3
                    text-slate-400
                  "
                >
                  {card.text}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}