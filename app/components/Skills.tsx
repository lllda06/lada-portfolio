"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Code2,
  Server,
} from "lucide-react";


const skillGroups = [
  {
    title: "Machine Learning & Data Science",
    icon: Brain,
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
      "EDA",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },

  {
    title: "ML Engineering",
    icon: Server,
    skills: [
      "FastAPI",
      "Docker",
      "Apache Airflow",
      "REST API",
      "Git",
      "Linux",
    ],
  },

  {
    title: "Data & Databases",
    icon: Database,
    skills: [
      "SQL",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Data Cleaning",
      "Data Analysis",
    ],
  },

  {
    title: "Software Development",
    icon: Code2,
    skills: [
      "Django",
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "C++",
      "C#",
      ".NET MAUI",
    ],
  },
];


export default function Skills() {
  return (
    <section
      id="skills"
      className="
        min-h-screen
        px-6
        py-24
      "
    >

      <div className="mx-auto max-w-6xl">

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
          "
        >
          Tech <span className="text-cyan-400">Stack</span>
        </motion.h2>


        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-5
            max-w-3xl
            text-slate-400
          "
        >
          Technologies and tools I use to build
          machine learning systems, data solutions
          and production-ready applications.
        </motion.p>


        <div
          className="
            mt-12
            grid
            gap-6
            md:grid-cols-2
          "
        >

          {skillGroups.map((group, index) => {

            const Icon = group.icon;

            return (

              <motion.div
                key={group.title}

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: index * 0.1,
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

                <div className="flex items-center gap-3">

                  <Icon
                    size={30}
                    className="text-cyan-400"
                  />

                  <h3
                    className="
                      text-xl
                      font-semibold
                      text-white
                    "
                  >
                    {group.title}
                  </h3>

                </div>


                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-3
                  "
                >

                  {group.skills.map((skill)=>(
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-black/20
                        px-4
                        py-2
                        text-sm
                        text-slate-300
                        transition
                        hover:border-cyan-400
                        hover:text-cyan-400
                      "
                    >
                      {skill}
                    </span>
                  ))}

                </div>


              </motion.div>

            );
          })}


        </div>

      </div>

    </section>
  );
}