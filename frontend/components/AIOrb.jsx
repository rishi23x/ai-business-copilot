"use client";

import { motion } from "framer-motion";

export default function AIOrb(){

return(

<motion.div

animate={{
  scale:[1,1.08,1],
  rotate:[0,180,360]
}}

transition={{
 duration:8,
 repeat:Infinity,
 ease:"linear"
}}

className="
relative
h-72
w-72
rounded-full
bg-gradient-to-r
from-blue-500
via-purple-500
to-cyan-400
blur-[1px]
shadow-[0_0_120px_rgba(80,120,255,0.7)]
"

>

<div className="
absolute
inset-6
rounded-full
bg-black/40
backdrop-blur-3xl
">

</div>


</motion.div>

)

}
