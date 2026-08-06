"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Brain, Database, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";


const projects = [

  {
    title: "AIRFLOW ML PIPELINE",
    description:
      "End-to-end Machine Learning pipeline orchestration using Apache Airflow, Docker and Scikit-learn. Automated model training and prediction workflow.",
    image:
      "/projects/airflow.png",
    tags:[
      "Python",
      "Airflow",
      "Docker",
      "Scikit-learn"
    ],
    github:
      "https://github.com/lllda06/AIRFLOW-ML-PIPELINE",
    featured:true,
    icon:Brain
  },


  {
    title:"Data Analysis - Used Cars",
    description:
      "Exploratory Data Analysis, data cleaning and visualization of vehicle datasets. Finding patterns affecting car prices.",
    image:
      "/projects/data-analysis.png",
    tags:[
      "Python",
      "Pandas",
      "EDA",
      "Visualization"
    ],
    github:
      "https://github.com/lllda06/DATA-ANALYSIS",
    icon:Database
  },


  {
    title:"FastAPI ML Service",
    description:
      "Backend API project with FastAPI, SQLAlchemy and SQLite. Demonstrates REST architecture and data management.",
    image:
      "/projects/fastapi.png",
    tags:[
      "FastAPI",
      "Python",
      "SQLAlchemy"
    ],
    github:
      "https://github.com/lllda06/FASTAPI-PROJECT",
    icon:Code2
  },


  {
    title:"FlatmateFlow",
    description:
      "Django REST application for managing household tasks with authentication and PostgreSQL.",
    image:
      "/projects/flatmate.png",
    tags:[
      "Django",
      "DRF",
      "PostgreSQL"
    ],
    github:
      "https://github.com/lllda06/FLATMATEFLOW",
    icon:Code2
  },


  {
    title:"CodeVerse",
    description:
      ".NET MAUI mobile application for digital learning platforms.",
    image:
      "/projects/codeverse.png",
    tags:[
      "C#",
      ".NET MAUI"
    ],
    github:
      "https://github.com/lllda06/CodeVerse",
    icon:Code2
  },


];




export default function Projects(){


return(

<section
id="projects"
className="
px-6
py-24
"
>


<div
className="
mx-auto
max-w-7xl
"
>


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

My
<span
className="
text-cyan-400
"
>
Projects
</span>

</motion.h2>



<p
className="
mt-5
max-w-2xl
text-slate-400
"
>
A collection of Machine Learning,
Data Science and Software Engineering projects.
</p>





<div
className="
mt-14
grid
gap-8
md:grid-cols-2
"
>


{
projects.map((project,index)=>{


const Icon = project.icon;


return(


<motion.article


key={project.title}


initial={{
opacity:0,
y:50
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
delay:index*0.1
}}


whileHover={{
y:-10
}}


className={`
group
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
${project.featured ? "md:col-span-2" : ""}
`}



>



<div
className="
grid
md:grid-cols-2
"
>


<div
className="
relative
h-64
overflow-hidden
"
>


<Image

src={project.image}

alt={project.title}

fill

className="
object-cover
transition
duration-700
group-hover:scale-110
"

/>


<div
className="
absolute
inset-0
bg-gradient-to-t
from-black/70
to-transparent
"
/>


</div>





<div
className="
p-8
"
>


<div
className="
flex
items-center
gap-3
text-cyan-400
"
>

<Icon size={25}/>

<h3
className="
text-2xl
font-bold
text-white
"
>

{project.title}

</h3>


</div>




<p
className="
mt-5
text-slate-400
leading-relaxed
"
>

{project.description}

</p>





<div
className="
mt-6
flex
flex-wrap
gap-2
"
>

{
project.tags.map(tag=>(


<span

key={tag}

className="
rounded-full
border
border-white/10
bg-black/20
px-3
py-1
text-sm
text-slate-300
"

>

{tag}

</span>


))
}


</div>




<a

href={project.github}

target="_blank"

className="
mt-8
inline-flex
items-center
gap-2
rounded-full
bg-cyan-400
px-5
py-2
font-semibold
text-black
transition
hover:scale-105
"

>

<FaGithub size={18}/>

GitHub

<ExternalLink size={16}/>

</a>




</div>


</div>



</motion.article>


)


})
}



</div>




</div>


</section>


)


}