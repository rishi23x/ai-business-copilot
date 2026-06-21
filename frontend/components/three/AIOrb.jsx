'use client'

import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useReducedMotion } from '../../hooks/useReducedMotion'

// ───── Energy Shader (the "textured" look) ─────
const energyVertexShader = `
  varying vec3 vPosition;
  varying vec3 vNormal;
  void main() {
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const energyFragmentShader = `
  uniform float uTime;
  varying vec3 vPosition;
  varying vec3 vNormal;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main() {
    float noise = snoise(vPosition * 2.0 + uTime * 0.3);
    float noise2 = snoise(vPosition * 3.0 - uTime * 0.2);
    float combined = (noise + noise2) * 0.5;

    vec3 cyan = vec3(0.24, 0.84, 0.82);
    vec3 electric = vec3(0.36, 0.48, 1.0);
    vec3 color = mix(cyan, electric, combined * 0.5 + 0.5);

    float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
    color += fresnel * 0.5;

    float alpha = smoothstep(-0.3, 0.5, combined) * 0.7 + fresnel * 0.3;

    gl_FragColor = vec4(color * (1.0 + fresnel), alpha);
  }
`

function EnergyCore() {
  const meshRef = useRef(null)
  const materialRef = useRef(null)
  const reduced = useReducedMotion()

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
    }
    if (meshRef.current && !reduced) {
      meshRef.current.rotation.y += 0.003
    }
  })

  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), [])

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.3, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={energyVertexShader}
        fragmentShader={energyFragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  )
}

// ───── Glass Sphere ─────
function GlassSphere() {
  const meshRef = useRef(null)
  const reduced = useReducedMotion()

  useFrame(() => {
    if (meshRef.current && !reduced) {
      meshRef.current.rotation.y += 0.001
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <MeshDistortMaterial
          color="#3DD6D0"
          transparent
          opacity={0.15}
          roughness={0.05}
          metalness={0.9}
          distort={0.1}
          speed={1.5}
          emissive="#3DD6D0"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  )
}

// ───── Orbiting Particles ─────
const particleShells = [
  { count: 60, innerRadius: 3.5, outerRadius: 4.5, color: '#3DD6D0', speed: 0.8 },
  { count: 80, innerRadius: 4.5, outerRadius: 6.0, color: '#5C7AFF', speed: 0.5 },
  { count: 60, innerRadius: 6.0, outerRadius: 8.0, color: '#8B5CF6', speed: 0.3 },
]

function OrbitingParticles() {
  const reduced = useReducedMotion()
  const groupRef = useRef(null)

  const particles = useMemo(() => {
    const result = []
    particleShells.forEach((shell, shellIdx) => {
      for (let i = 0; i < shell.count; i++) {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const radius = shell.innerRadius + Math.random() * (shell.outerRadius - shell.innerRadius)
        result.push({
          position: new THREE.Vector3(
            radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.sin(phi) * Math.sin(theta),
            radius * Math.cos(phi)
          ),
          speed: shell.speed * (0.7 + Math.random() * 0.6),
          phase: Math.random() * Math.PI * 2,
          opacity: 0.4 + Math.random() * 0.4,
          radius,
          shellIndex: shellIdx,
        })
      }
    })
    return result
  }, [])

  useFrame((state) => {
    if (reduced) return
    const t = state.clock.elapsedTime
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const p = particles[i]
        if (!p) return
        const angle = t * p.speed * 0.2 + p.phase
        const tilt = Math.sin(p.phase) * 0.25
        child.position.x = p.radius * Math.cos(angle)
        child.position.y = p.radius * Math.sin(angle) * Math.cos(tilt)
        child.position.z = p.radius * Math.sin(angle) * Math.sin(tilt)
        const mat = child.material
        if (mat) {
          mat.opacity = p.opacity + Math.sin(t * 2 + p.phase) * 0.15
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={[p.position.x, p.position.y, p.position.z]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial
            color={particleShells[p.shellIndex].color}
            transparent
            opacity={p.opacity}
          />
        </mesh>
      ))}
    </group>
  )
}

// ───── Satellites ─────
function Satellites() {
  const reduced = useReducedMotion()
  const sat1Ref = useRef(null)
  const sat2Ref = useRef(null)

  useFrame((state) => {
    if (reduced) return
    const t = state.clock.elapsedTime
    if (sat1Ref.current) {
      const angle = t * 1.2
      sat1Ref.current.position.set(7 * Math.cos(angle), 7 * Math.sin(angle) * 0.5, 7 * Math.sin(angle))
    }
    if (sat2Ref.current) {
      const angle = t * 0.8 + Math.PI
      sat2Ref.current.position.set(7 * Math.cos(angle), 7 * Math.sin(angle) * 0.3, 7 * Math.sin(angle))
    }
  })

  return (
    <>
      <mesh ref={sat1Ref}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#3DD6D0" transparent opacity={0.8} />
      </mesh>
      <mesh ref={sat2Ref}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#5C7AFF" transparent opacity={0.8} />
      </mesh>
    </>
  )
}

// ───── 3D Scene ─────
function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#3DD6D0" intensity={1.5} />
      <pointLight position={[-5, -3, 4]} color="#5C7AFF" intensity={1.0} />
      <pointLight position={[0, -5, 3]} color="#8B5CF6" intensity={0.6} />
      <EnergyCore />
      <GlassSphere />
      <OrbitingParticles />
      <Satellites />
      <Environment preset="city" />
    </>
  )
}

// ───── Main Export ─────
export default function AIOrb() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </Canvas>
    </div>
  )
}
