"use client";

import { motion } from "framer-motion"


export default function GlassCard({title,value}){


return(

<motion.div

whileHover={{
scale:1.05
}}

className="
w-48
backdrop-blur-xl
bg-white/10
border
border-white/20
rounded-3xl
p-6
text-white
"

>

<p className="
text-gray-400
">

{title}

</p>


<h2 className="
text-3xl
font-bold
mt-3
">

{value}

</h2>


</motion.div>

)

}
