"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  Globe,
  Brain,
  X,
} from "lucide-react";


const certificates = [
  {
    title: "Python Developer Course",
    image: "/certificates/python.png",
    description:
      "Completed Python development course focused on programming, backend fundamentals and software development.",
    icon: Brain,
  },

  {
    title: "English Language Certificate",
    image: "/certificates/english.png",
    description:
      "Completed English language course focused on communication skills and technical vocabulary.",
    icon: Globe,
  },

  {
    title: "Erasmus+ Professional Practice",
    image: "/certificates/erasmus.png",
    description:
      "International professional practice experience in Thessaloniki, Greece.",
    icon: Award,
  },
];


const achievements = [
  {
    title: "Machine Learning Journey",
    text:
      "Building ML projects with Python, data analysis and model deployment.",
  },

  {
    title: "International Experience",
    text:
      "Completed Erasmus+ professional practice in Greece.",
  },

  {
    title: "Software Engineering Background",
    text:
      "Experience with backend, databases and application development.",
  },
];


export default function Certificates() {

  const [selectedCertificate, setSelectedCertificate] =
    useState<(typeof certificates)[0] | null>(null);


  return (
    <section
      id="certificates"
      className="px-6 py-24"
    >

      <div className="mx-auto max-w-6xl">


        <motion.h2
          initial={{
            opacity:0,
            y:30,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          viewport={{
            once:true,
          }}

          className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
          "
        >
          Certificates &
          <span className="text-cyan-400">
            {" "}Achievements
          </span>
        </motion.h2>



        {/* Education */}

        <motion.div

          initial={{
            opacity:0,
            y:30,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          viewport={{
            once:true,
          }}

          className="
            mt-12
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
          "

        >

          <div className="flex items-center gap-4">

            <GraduationCap
              size={35}
              className="text-cyan-400"
            />

            <h3
              className="
                text-2xl
                font-semibold
                text-white
              "
            >
              Technik Programista
            </h3>

          </div>


          <p
            className="
              mt-4
              text-slate-400
            "
          >
            Zespół Szkół Mechanicznych Nr 3,
            Kraków, Poland.
            Education focused on programming,
            software engineering and computer science.
          </p>


        </motion.div>



        {/* Certificates cards */}


        <div
          className="
            mt-12
            grid
            gap-8
            md:grid-cols-3
          "
        >

          {certificates.map((certificate,index)=>{

            const Icon = certificate.icon;


            return (

              <motion.div

                key={certificate.title}

                initial={{
                  opacity:0,
                  y:40,
                }}

                whileInView={{
                  opacity:1,
                  y:0,
                }}

                viewport={{
                  once:true,
                }}

                transition={{
                  delay:index * 0.15,
                }}

                onClick={() =>
                  setSelectedCertificate(certificate)
                }

                className="
                  group
                  cursor-pointer
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  transition
                  hover:-translate-y-3
                  hover:border-cyan-400/50
                "

              >


                <div
                  className="
                    relative
                    h-56
                    overflow-hidden
                  "
                >

                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    className="
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-110
                    "
                  />

                </div>



                <div className="p-6">


                  <Icon
                    size={30}
                    className="text-cyan-400"
                  />


                  <h3
                    className="
                      mt-4
                      text-xl
                      font-semibold
                      text-white
                    "
                  >
                    {certificate.title}
                  </h3>


                  <p
                    className="
                      mt-3
                      text-sm
                      text-slate-400
                    "
                  >
                    {certificate.description}
                  </p>


                  <p
                    className="
                      mt-4
                      text-sm
                      text-cyan-400
                    "
                  >
                    Click to view →
                  </p>


                </div>


              </motion.div>

            );

          })}


        </div>




        {/* Highlights */}


        <h3
          className="
            mt-20
            text-3xl
            font-bold
            text-white
          "
        >
          ⭐ Highlights
        </h3>



        <div
          className="
            mt-8
            grid
            gap-6
            md:grid-cols-3
          "
        >

          {achievements.map((item)=>(

            <motion.div

              key={item.title}

              whileHover={{
                y:-8,
              }}

              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
              "

            >

              <h4
                className="
                  text-xl
                  font-semibold
                  text-white
                "
              >
                {item.title}
              </h4>


              <p
                className="
                  mt-3
                  text-slate-400
                "
              >
                {item.text}
              </p>


            </motion.div>

          ))}


        </div>



      </div>




      {/* MODAL */}


      {selectedCertificate && (

        <motion.div

          initial={{
            opacity:0,
          }}

          animate={{
            opacity:1,
          }}

          onClick={() =>
            setSelectedCertificate(null)
          }

          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/80
            p-6
          "

        >


          <motion.div

            initial={{
              scale:0.8,
            }}

            animate={{
              scale:1,
            }}

            onClick={(e)=>
              e.stopPropagation()
            }

            className="
              relative
              max-h-[90vh]
              max-w-5xl
              overflow-hidden
              rounded-3xl
              border
              border-white/20
              bg-black
              p-4
            "

          >


            <button

              onClick={() =>
                setSelectedCertificate(null)
              }

              className="
                absolute
                right-4
                top-4
                z-10
                rounded-full
                bg-black/70
                p-2
                text-white
                hover:text-cyan-400
              "

            >

              <X size={24}/>

            </button>



            <Image

              src={selectedCertificate.image}

              alt={selectedCertificate.title}

              width={1200}

              height={900}

              className="
                max-h-[85vh]
                w-auto
                rounded-2xl
                object-contain
              "

            />


          </motion.div>


        </motion.div>

      )}



    </section>
  );
}