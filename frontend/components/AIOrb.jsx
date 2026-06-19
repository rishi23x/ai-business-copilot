"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
  Sparkles
} from "@react-three/drei";

import { useRef } from "react";


function Orb() {

  const mesh = useRef()


  useFrame((state, delta)=>{

    if(mesh.current){

      mesh.current.rotation.y += delta * 0.35
      mesh.current.rotation.x += delta * 0.15

    }

  })


  return (

    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={1}
    >

      <mesh ref={mesh}>

        <sphereGeometry
          args={[1.4,128,128]}
        />

        <MeshTransmissionMaterial

          thickness={1.8}
          roughness={0.05}
          transmission={1}
          chromaticAberration={0.08}
          distortion={0.3}
          distortionScale={0.4}

        />

      </mesh>


    </Float>

  )

}



export default function AIOrb(){

return (

<div
className="
w-full
h-[500px]
"
>


<Canvas
camera={{
position:[0,0,4],
fov:45
}}
>


<ambientLight intensity={0.5}/>


<pointLight
position={[3,3,3]}
intensity={3}
/>


<pointLight
position={[-3,-2,-3]}
color="#00ffff"
intensity={2}
/>


<Orb/>


<Sparkles

count={200}

scale={5}

size={2}

speed={0.4}

/>


<Environment preset="city"/>


</Canvas>


</div>

)

}
