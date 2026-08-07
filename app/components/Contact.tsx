"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const contacts = [
  {
    title: "Email",
    value: "ladabogdanovich@gmail.com",
    icon: Mail,
    link: "mailto:ladabogdanovich@gmail.com",
  },

  {
    title: "GitHub",
    value: "github.com/lllda06",
    icon: FaGithub,
    link: "https://github.com/lllda06",
  },

  {
    title: "LinkedIn",
    value: "linkedin.com",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/lllda/",
  },
];



export default function Contact() {


return (

<section
id="contact"
className="
px-6
py-24
"
>


<div
className="
mx-auto
max-w-6xl
"
>


<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-10
text-center
backdrop-blur-xl
"

>


<h2
className="
text-4xl
font-bold
text-white
md:text-5xl
"
>

Let's build{" "}

<span
  className="
    text-cyan-400
  "
>
  something
</span>

{" "}together

</h2>



<p
className="
mx-auto
mt-6
max-w-2xl
text-lg
text-slate-400
"
>

Interested in Machine Learning,
Data Science or AI projects?
Let's connect and create intelligent solutions.

</p>





<div
className="
mt-10
grid
gap-6
md:grid-cols-3
"
>


{
contacts.map((contact,index)=>{


const Icon = contact.icon;


return(

<motion.a

key={contact.title}

href={contact.link}

target="_blank"

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

transition={{
delay:index*0.15
}}

whileHover={{
y:-8
}}

className="
rounded-2xl
border
border-white/10
bg-black/20
p-6
transition
hover:border-cyan-400/50
"

>


<Icon
size={32}
className="
mx-auto
text-cyan-400
"
/>


<h3
className="
mt-4
font-semibold
text-white
"
>

{contact.title}

</h3>


<p
className="
mt-2
text-sm
text-slate-400
"
>

{contact.value}

</p>


</motion.a>


)


})
}


</div>




<a

href="mailto:your.email@example.com"

className="
mt-10
inline-flex
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

Contact Me

<ArrowRight size={18}/>

</a>



</motion.div>


</div>


</section>

)

}