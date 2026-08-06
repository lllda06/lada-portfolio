"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";


const links = [
"About",
"Skills",
"Pipeline",
"Projects",
"Experience",
"Certificates",
"Contact",
];


export default function Navbar() {


  const [open, setOpen] = useState(false);



  return (

    <motion.nav

      initial={{
        y:-50,
        opacity:0
      }}

      animate={{
        y:0,
        opacity:1
      }}

      transition={{
        duration:0.6
      }}


      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        px-6
        py-5
      "

    >


      <div

        className="
          mx-auto
          flex
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



        {/* LOGO */}

        <a

          href="#"

          className="
            text-xl
            font-bold
            text-white
          "

        >

          LLLDA06
          <span
            className="text-cyan-400"
          >
            .
          </span>

        </a>






        {/* DESKTOP MENU */}


        <div

          className="
            hidden
            md:flex
            items-center
            gap-7
            text-sm
            text-slate-300
          "

        >

          {
            links.map((link)=>(

              <a

                key={link}

                href={`#${link.toLowerCase()}`}

                className="
                  relative
                  transition
                  hover:text-cyan-400
                  group
                "

              >

                {link}


                <span

                  className="
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    w-0
                    bg-cyan-400
                    transition-all
                    duration-300
                    group-hover:w-full
                  "

                />


              </a>

            ))
          }


        </div>






        {/* ACTIONS */}


        <div

          className="
            hidden
            md:flex
            items-center
            gap-3
          "

        >


          <a

            href="https://github.com/lllda06"

            target="_blank"

            rel="noopener noreferrer"

            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              px-4
              py-2
              text-sm
              text-white
              transition
              hover:border-cyan-400
              hover:text-cyan-400
            "

          >

            <FaGithub/>

            GitHub


          </a>




          <a

            href="/cv.pdf"

            download

            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-cyan-400
              px-4
              py-2
              text-sm
              font-semibold
              text-black
              transition
              hover:scale-105
            "

          >

            <Download size={16}/>

            CV


          </a>



        </div>






        {/* MOBILE BUTTON */}


        <button

          onClick={()=>setOpen(!open)}

          className="
            md:hidden
            text-white
          "

        >

          {
            open
            ?
            <X/>
            :
            <Menu/>
          }


        </button>




      </div>







      {/* MOBILE MENU */}


      {
        open && (

          <motion.div

            initial={{
              opacity:0,
              y:-20
            }}

            animate={{
              opacity:1,
              y:0
            }}


            className="
              mt-3
              rounded-3xl
              border
              border-white/10
              bg-[#020617]/90
              p-6
              backdrop-blur-xl
              md:hidden
            "

          >


            <div className="flex flex-col gap-5">


            {
              links.map((link)=>(

                <a

                  key={link}

                  href={`#${link.toLowerCase()}`}

                  onClick={()=>setOpen(false)}

                  className="
                    text-slate-300
                    hover:text-cyan-400
                  "

                >

                  {link}

                </a>

              ))
            }


            </div>


          </motion.div>

        )
      }



    </motion.nav>


  );
}