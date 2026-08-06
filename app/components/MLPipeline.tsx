"use client";

import { motion } from "framer-motion";
import {
  Database,
  Search,
  Settings,
  Brain,
  Rocket,
  Server,
  BarChart3
} from "lucide-react";


const steps = [

  {
    title:"Data Collection",
    text:"Gathering and preparing raw datasets.",
    icon:Database,
    tech:"SQL · Pandas"
  },

  {
    title:"Data Cleaning",
    text:"Handling missing values, outliers and inconsistencies.",
    icon:Settings,
    tech:"Python · Pandas"
  },

  {
    title:"EDA",
    text:"Finding patterns and insights from data.",
    icon:Search,
    tech:"Matplotlib · Seaborn"
  },

  {
    title:"Feature Engineering",
    text:"Creating meaningful features for ML models.",
    icon:BarChart3,
    tech:"Scikit-learn"
  },

  {
    title:"Model Training",
    text:"Training and optimizing machine learning models.",
    icon:Brain,
    tech:"Random Forest · ML"
  },

  {
    title:"Deployment",
    text:"Turning models into production services.",
    icon:Rocket,
    tech:"FastAPI · Docker"
  },

  {
    title:"API & Monitoring",
    text:"Building scalable ML solutions.",
    icon:Server,
    tech:"Airflow · PostgreSQL"
  }

];



export default function MLPipeline(){


return(

<section

id="pipeline"

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
font-bold
text-white
md:text-5xl
"

>

Machine Learning
<span className="text-cyan-400">
{" "}Workflow
</span>


</motion.h2>




<p

className="
mt-5
max-w-2xl
text-slate-400
"

>

From raw data to production-ready AI systems.
My workflow combines data analysis,
machine learning and backend engineering.

</p>






<div

className="
mt-14
grid
gap-6
md:grid-cols-2
lg:grid-cols-4
"

>


{
steps.map((step,index)=>{


const Icon = step.icon;


return(

<motion.div

key={step.title}


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


transition={{

delay:index*0.1

}}


whileHover={{

y:-8

}}


className="

relative

rounded-3xl

border

border-white/10

bg-white/5

p-6

backdrop-blur-xl

hover:border-cyan-400/50

transition

"


>


<div

className="
flex
items-center
justify-between
"

>


<div

className="
rounded-xl
bg-cyan-400/10
p-3
"

>

<Icon

size={26}

className="
text-cyan-400
"

/>


</div>


<span

className="
text-sm
text-slate-500
"

>

0{index+1}

</span>


</div>




<h3

className="
mt-5
text-lg
font-semibold
text-white
"

>

{step.title}

</h3>



<p

className="
mt-3
text-sm
text-slate-400
"

>

{step.text}

</p>



<div

className="
mt-5
rounded-full
bg-black/30
px-3
py-1
text-xs
text-cyan-300
inline-block
"

>

{step.tech}

</div>



</motion.div>


)

})
}



</div>


</div>


</section>


)

}