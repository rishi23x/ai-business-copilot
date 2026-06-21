'use client'

import { motion } from 'framer-motion'

export default function BackgroundFX() {
  return (
    <>
      {/* ───── Film Grain ───── */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none z-[1]"
        style={{ opacity: 0.04, mixBlendMode: 'overlay' }}
      >
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* ───── Floating Gradient Orbs ───── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{
            width: '600px',
            height: '600px',
            background:
              'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)',
            top: '-100px',
            left: '-100px',
            filter: 'blur(60px)',
          }}
          animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            background:
              'radial-gradient(circle, rgba(167,139,250,0.10) 0%, transparent 70%)',
            top: '40%',
            right: '-100px',
            filter: 'blur(60px)',
          }}
          animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: '450px',
            height: '450px',
            background:
              'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)',
            bottom: '-100px',
            left: '40%',
            filter: 'blur(60px)',
          }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </>
  )
}
