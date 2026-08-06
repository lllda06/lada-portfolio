"use client";

import { motion } from "framer-motion";


const particles = [
  { id: 1, left: "10%", top: "20%", duration: 5, delay: 1 },
  { id: 2, left: "25%", top: "70%", duration: 7, delay: 2 },
  { id: 3, left: "40%", top: "35%", duration: 6, delay: 0 },
  { id: 4, left: "55%", top: "80%", duration: 8, delay: 3 },
  { id: 5, left: "70%", top: "15%", duration: 5, delay: 1 },
  { id: 6, left: "85%", top: "60%", duration: 9, delay: 4 },
  { id: 7, left: "15%", top: "90%", duration: 6, delay: 2 },
  { id: 8, left: "35%", top: "10%", duration: 7, delay: 5 },
  { id: 9, left: "60%", top: "45%", duration: 5, delay: 3 },
  { id: 10, left: "90%", top: "30%", duration: 8, delay: 1 },
  { id: 11, left: "5%", top: "55%", duration: 6, delay: 4 },
  { id: 12, left: "45%", top: "65%", duration: 7, delay: 2 },
  { id: 13, left: "75%", top: "85%", duration: 5, delay: 0 },
  { id: 14, left: "30%", top: "50%", duration: 9, delay: 3 },
  { id: 15, left: "95%", top: "75%", duration: 6, delay: 1 },
];


export default function Background() {

  return (

    <div
      className="
        fixed
        inset-0
        -z-10
        overflow-hidden
        bg-[#020617]
      "
    >

      <div
        className="
          absolute
          inset-0
          opacity-[0.15]
        "

        style={{

          backgroundImage:
          `
          linear-gradient(
            rgba(56,189,248,0.15) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(56,189,248,0.15) 1px,
            transparent 1px
          )
          `,

          backgroundSize: "50px 50px",

        }}

      />



      <motion.div

        animate={{
          x: [0, 120, 0],
          y: [0, 80, 0],
        }}

        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
          absolute
          -left-52
          -top-52
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/10
          blur-[90px]
        "

      />



      <motion.div

        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}

        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
          absolute
          right-[-200px]
          top-[30%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-purple-500/10
          blur-[100px]
        "

      />




      {
        particles.map((particle)=>(

          <motion.div

            key={particle.id}

            animate={{

              y: [
                0,
                -80,
                0
              ],

              opacity:[
                0.2,
                0.8,
                0.2
              ]

            }}

            transition={{

              duration: particle.duration,

              delay: particle.delay,

              repeat: Infinity,

              ease:"easeInOut"

            }}

            className="
              absolute
              h-1
              w-1
              rounded-full
              bg-cyan-300
            "

            style={{

              left: particle.left,

              top: particle.top,

            }}

          />

        ))
      }





      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-[#020617]/40
          to-[#020617]
        "
      />


    </div>

  );

}