'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Stars } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedOrb() {
  const meshRef = useRef()
  const innerRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.1
      meshRef.current.rotation.y = t * 0.15
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.2
      innerRef.current.rotation.y = -t * 0.1
    }
  })

  return (
    <>
      {/* Outer glow sphere */}
      <Sphere args={[2.2, 64, 64]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#22D3EE"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Main orb with distortion */}
      <Sphere ref={meshRef} args={[1.8, 128, 128]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#0E7490"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          emissive="#06B6D4"
          emissiveIntensity={0.3}
        />
      </Sphere>

      {/* Inner core */}
      <Sphere ref={innerRef} args={[1.4, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#22D3EE"
          attach="material"
          distort={0.6}
          speed={2}
          roughness={0}
          metalness={1}
          emissive="#22D3EE"
          emissiveIntensity={0.4}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </>
  )
}

export default function AIOrb() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#22D3EE" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#A78BFA" />
        <pointLight position={[0, 0, 5]} intensity={0.5} color="#ffffff" />

        {/* Background stars */}
        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />

        {/* The orb */}
        <AnimatedOrb />
      </Canvas>
    </div>
  )
}
