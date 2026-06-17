"use client";

import { motion } from "framer-motion";
import AIOrb from "./AIOrb";
import GlassCard from "./GlassCard";


export default function Hero(){

return(

<section className="
min-h-screen
relative
overflow-hidden
bg-black
text-white
flex
items-center
justify-center
">


<div className="
absolute
top-0
left-0
w-full
h-full
bg-gradient-to-b
from-blue-900/20
via-black
to-black
">


</div>



<div className="
z-10
text-center
flex
flex-col
items-center
">


<motion.h1

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

className="
text-6xl
font-bold
tracking-tight
max-w-5xl
"

>

The Intelligence Layer
<br/>

For The Real World Economy

</motion.h1>



<motion.p

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
mt-6
text-xl
text-gray-400
max-w-2xl
"

>

AI that connects data,
operations and decisions into one
business intelligence system.

</motion.p>



<div className="mt-12">

<AIOrb/>

</div>



<div className="
mt-12
flex
gap-5
">


<GlassCard
title="AI Operations Score"
value="94%"
/>


<GlassCard
title="Problems Detected"
value="12"
/>


<GlassCard
title="Efficiency Gain"
value="+31%"
/>


</div>



</div>



</section>

)

}
