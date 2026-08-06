"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Rocket,
  Database,
  Code2,
} from "lucide-react";


const timeline = [
  {
    year: "2026",
    title: "Machine Learning Engineering",
    description:
      "Building end-to-end machine learning solutions with Python, FastAPI, Docker and Apache Airflow.",
    icon: Rocket,
  },

  {
    year: "2025",
    title: "Data Science & Backend Development",
    description:
      "Working with machine learning, data analysis, SQL databases, Django and REST APIs.",
    icon: Database,
  },

  {
    year: "2024",
    title: "Software Development",
    description:
      "Developing applications and strengthening programming fundamentals with Python, C++, PHP and web technologies.",
    icon: Code2,
  },

  {
    year: "2023",
    title: "Programming Foundation",
    description:
      "Started programming journey with HTML, CSS, JavaScript and basic software development concepts.",
    icon: GraduationCap,
  },
];


export default function Experience() {

  return (
    <section
      id="experience"
      className="
        px-6
        py-24
      "
    >

      <div className="mx-auto max-w-5xl">


        <motion.h2
          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
          "
        >
          My <span className="text-cyan-400">
            Journey
          </span>
        </motion.h2>


        <div className="
          relative
          mt-12
        ">


          <div
            className="
              absolute
              left-5
              top-0
              h-full
              w-px
              bg-white/10
            "
          />


          <div className="space-y-10">


          {timeline.map((item,index)=>{

            const Icon=item.icon;

            return (

              <motion.div

                key={item.year}

                initial={{
                  opacity:0,
                  x:-30
                }}

                whileInView={{
                  opacity:1,
                  x:0
                }}

                viewport={{
                  once:true
                }}

                transition={{
                  delay:index*0.15
                }}

                className="
                  relative
                  flex
                  gap-6
                "
              >

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-cyan-400/50
                    bg-[#050816]
                  "
                >
                  <Icon
                    size={18}
                    className="text-cyan-400"
                  />
                </div>


                <div
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-6
                    backdrop-blur-xl
                    flex-1
                  "
                >

                  <div
                    className="
                      text-sm
                      font-mono
                      text-cyan-400
                    "
                  >
                    {item.year}
                  </div>


                  <h3
                    className="
                      mt-2
                      text-xl
                      font-semibold
                      text-white
                    "
                  >
                    {item.title}
                  </h3>


                  <p
                    className="
                      mt-3
                      text-slate-400
                    "
                  >
                    {item.description}
                  </p>


                </div>


              </motion.div>

            );

          })}


          </div>

        </div>


      </div>


    </section>
  );
}