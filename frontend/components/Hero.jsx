"use client";

import AIOrb from "./AIOrb"
import GlassCard from "./GlassCard"
import { motion } from "framer-motion"


export default function Hero(){

return(

<section className="
min-h-screen
flex
flex-col
items-center
justify-center
bg-black
text-white
relative
overflow-hidden
">


<div className="absolute opacity-40">
<AIOrb/>
</div>



<div className="z-10 text-center">


<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
className="
text-6xl
font-bold
max-w-4xl
"
>
Your Business.
<br/>
Powered By Intelligence.
</motion.h1>


<p className="
mt-6
text-xl
text-gray-400
">

AI that understands operations,
finds problems,
and creates decisions.

</p>


<button className="
mt-8
px-8
py-4
rounded-full
bg-white
text-black
font-semibold
">

Connect Your Data

</button>


</div>



<div className="
absolute
bottom-20
flex
gap-5
">


<GlassCard 
title="AI Health Score"
value="92%"
/>


<GlassCard
title="Problems Found"
value="12"
/>


<GlassCard
title="Revenue Growth"
value="+24%"
/>


</div>


</section>


)

}
