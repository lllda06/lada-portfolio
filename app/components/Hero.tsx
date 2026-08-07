"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Brain } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";


export default function Hero() {

  const tech = [
    "🐍 Python",
    "🤖 Machine Learning",
    "📊 Pandas",
    "⚡ FastAPI",
    "🌊 Airflow",
    "🐘 PostgreSQL"
  ];


  return (

    <section
      className="
        min-h-screen
        flex
        items-center
        px-6
        pt-20
      "
    >

      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-16
          lg:grid-cols-2
        "
      >


        {/* LEFT SIDE */}

        <div>


          <motion.p
            initial={{
              opacity:0,
              y:20
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:0.6
            }}

            className="
              mb-6
              font-mono
              text-sm
              text-cyan-400
            "
          >
            👋 Hello, I am
          </motion.p>




          <motion.h1

            initial={{
              opacity:0,
              y:30
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:0.8
            }}

            className="
              text-5xl
              font-bold
              text-white
              md:text-7xl
            "

          >

            LADA

            <span
              className="
                block
                bg-gradient-to-r
                from-cyan-400
                to-purple-500
                bg-clip-text
                text-transparent
              "
            >
              BAHDANOVICH
            </span>

          </motion.h1>




          <motion.div

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              delay:0.5
            }}

            className="
              mt-8
              text-2xl
              font-semibold
              text-slate-200
              md:text-4xl
            "

          >

            <TypeAnimation

              sequence={[
                "Machine Learning Engineer",
                2000,
                "Data Scientist",
                2000,
                "Python Developer",
                2000,
                "AI Builder",
                2000
              ]}

              speed={50}

              repeat={Infinity}

            />

          </motion.div>





          <p
            className="
              mt-8
              max-w-xl
              text-lg
              leading-relaxed
              text-slate-400
            "
          >

            Building intelligent systems from data to production.
            Specialized in Python, Machine Learning,
            Data Science and backend technologies.

          </p>





          <div
 className="
   mt-10
   flex
   flex-col
   gap-4
   sm:flex-row
 "
>


            <a
href="#projects"
className="
flex
items-center
gap-2
rounded-full
bg-cyan-400
px-7
py-3
font-semibold
text-black
transition
hover:scale-105
"
>
View Projects
<ArrowRight size={18}/>
</a>




            <a
  href="https://github.com/lllda06"
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex
    items-center
    justify-center
    gap-2
    rounded-full
    border
    border-white/20
    px-7
    py-3
    text-white
    transition
    hover:border-cyan-400
    hover:text-cyan-400
  "
>

  <FaGithub size={18}/>

  GitHub

</a>


          </div>





          {/* TECH CHIPS */}


          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-3
            "
          >

            {
              tech.map((item,index)=>(

                <motion.span

                  key={item}

                  initial={{
                    opacity:0,
                    y:20
                  }}

                  animate={{
                    opacity:1,
                    y:0
                  }}

                  transition={{
                    delay:0.8 + index * 0.1
                  }}

                  whileHover={{
                    scale:1.08,
                    y:-4
                  }}

                  className="
                    cursor-default
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-2
                    text-sm
                    text-slate-300
                    backdrop-blur
                  "

                >

                  {item}

                </motion.span>

              ))
            }


          </div>


        </div>






        {/* RIGHT SIDE */}



        <div
  className="
    relative
    flex
    justify-center
    lg:justify-end

    pb-32
    md:pb-0
  "
>




          {/* PHOTO */}


          <motion.div

  animate={{
    y:[0,-15,0]
  }}

  transition={{
    duration:5,
    repeat:Infinity
  }}

className="
  relative
  h-[260px]
  w-[260px]
  -translate-x-14
  sm:h-[300px]
  sm:w-[300px]
  sm:-translate-x-12
  md:h-[420px]
  md:w-[420px]
  md:translate-x-15
  lg:-translate-x-50
"

>



            <div

              className="
                absolute
                inset-0
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-purple-500
                opacity-40
                blur-xl
              "

            />




            <Image

 src="/profile/lada.png"

 alt="Lada Bahdanovich"

 fill

 priority

 className="
   rounded-full
   border
   border-white/20
   object-cover
 "

/>


          </motion.div>






{/* AI CARD */}

<motion.div
  initial={{
    opacity: 0,
    y: 40,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 1,
    duration: 0.7,
  }}
  whileHover={{
    y: -6,
    scale: 1.03,
  }}
  className="
    absolute

    left-1/2
    -translate-x-1/2
    -bottom-15

    w-[240px]

    rounded-3xl
    border
    border-white/10

    bg-slate-900/70
    backdrop-blur-xl

    p-5
    shadow-2xl
    z-20

    md:left-auto
    md:translate-x-0
    md:right-0
    md:bottom-0
    md:w-56
  "
>

  <div
    className="
      flex
      items-center
      gap-2
      text-cyan-400
      font-semibold
      text-base
    "
  >
    <Brain size={20} />

    AI PROFILE

  </div>

  <div
    className="
      mt-5
      space-y-3
      text-sm
      text-slate-200
    "
  >

    <div className="flex justify-between">
      <span>Python</span>
      <span>★★★★★</span>
    </div>

    <div className="flex justify-between">
      <span>Machine Learning</span>
      <span>★★★★★</span>
    </div>

    <div className="flex justify-between">
      <span>Data Science</span>
      <span>★★★★★</span>
    </div>

    <div className="flex justify-between">
      <span>Backend</span>
      <span>★★★★★</span>
    </div>

  </div>

  <div
    className="
      mt-5
      border-t
      border-white/10
      pt-4
      text-center
      text-xs
      text-green-400
      font-medium
    "
  >
    ● Open to AI & ML opportunities
  </div>

</motion.div>



        </div>



      </div>


    </section>

  );
}