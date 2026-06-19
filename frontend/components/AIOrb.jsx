"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
  Sparkles,
  Sphere
} from "@react-three/drei"

import { useRef } from "react"


function Core(){

const mesh = useRef()


useFrame((state,delta)=>{

if(mesh.current){

mesh.current.rotation.y += delta * 0.4
mesh.current.rotation.x += delta * 0.15

}

})


return (

<Float
speed={2}
rotationIntensity={0.8}
floatIntensity={1.2}
>


<Sphere
ref={mesh}
args={[1.3,128,128]}
scale={1}
>


<MeshTransmissionMaterial

thickness={2}

roughness={0.05}

transmission={1}

ior={1.5}

chromaticAberration={0.15}

distortion={0.35}

distortionScale={0.5}

color="#8fffff"

/>


</Sphere>


</Float>

)

}



export default function AIOrb(){


return(

<div className="w-full h-full">


<Canvas
camera={{
position:[0,0,4],
fov:45
}}
>


<ambientLight intensity={0.8}/>


<pointLight

position={[4,4,4]}

intensity={5}

color="#00ffff"

/>


<pointLight

position={[-4,-2,-4]}

intensity={3}

color="#8b5cf6"

/>


<Core/>


<Sparkles

count={250}

scale={5}

size={2}

speed={0.5}

/>


<Environment preset="city"/>


</Canvas>


</div>

)

}
