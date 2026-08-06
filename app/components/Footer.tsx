"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";


export default function Footer(){

return(

<footer

className="
border-t
border-white/10
px-6
py-12
"

>


<div

className="
mx-auto
max-w-6xl
flex
flex-col
items-center
gap-6
"

>


<h3

className="
text-2xl
font-bold
text-white
"

>

LADA
<span className="text-cyan-400">
.
</span>
BAHDANOVICH

</h3>



<p

className="
text-center
text-slate-400
"

>

Machine Learning Engineer
<br/>
Python · Data Science · Artificial Intelligence

</p>




<div

className="
flex
gap-5
"

>


<a

href="https://github.com/lllda06"

target="_blank"

className="
text-slate-400
transition
hover:text-cyan-400
"

>

<FaGithub size={25}/>

</a>




<a

href="https://www.linkedin.com/in/lllda/"

target="_blank"

className="
text-slate-400
transition
hover:text-cyan-400
"

>

<FaLinkedin size={25}/>

</a>




<a

href="mailto:ladabogdanovich@gmail.com"

className="
text-slate-400
transition
hover:text-cyan-400
"

>

<Mail size={25}/>

</a>


</div>




<p

className="
text-sm
text-slate-500
"

>

© 2026 Lada Bahdanovich · Built with Next.js

</p>


</div>


</footer>

)

}