'use client'

import { motion } from 'framer-motion'
import { Shield, TrendingUp, AlertTriangle, Sparkles } from 'lucide-react'
import dynamic from 'next/dynamic'
import StatCard from '../Ui/StatCard'

// Load 3D orb only on client (avoid SSR issues)
const AIOrb = dynamic(() => import('../three/AIOrb'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="w-[400px] h-[400px] rounded-full animate-pulse-glow"
        style={{
          background:
            'radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </div>
  ),
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      
      {/* ───── 3D Orb Background ───── */}
      <div className="absolute inset-0 z-0">
        <AIOrb />
      </div>

      {/* ───── Subtle radial glow behind orb ───── */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '700px',
          height: '700px',
          background:
            'radial-gradient(circle, rgba(34,211,238,0.10) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
      />

      {/* ───── Floating Stat Cards (4 around orb) ───── */}
      <div className="relative w-full max-w-7xl mx-auto h-full">
        
        {/* Top Left */}
        <StatCard
          label="AI Operations Score"
          value="94%"
          sub="↑ 3.2% this month"
          icon={Shield}
          delay={0.6}
          position={{ top: '18%', left: '8%' }}
          floatDirection="up"
        />

        {/* Bottom Left */}
        <StatCard
          label="Efficiency Gain"
          value="+31%"
          sub="vs. Q1 baseline"
          icon={TrendingUp}
          delay={0.8}
          position={{ top: '55%', left: '6%' }}
          floatDirection="down"
        />

        {/* Top Right */}
        <StatCard
          label="Problems Detected"
          value="12"
          sub="↓ 8 from last week"
          icon={AlertTriangle}
          delay={0.7}
          position={{ top: '18%', right: '8%' }}
          floatDirection="up"
        />

        {/* Bottom Right */}
        <StatCard
          label="Predictive Insights"
          value="2,847"
          sub="Generated this quarter"
          icon={Sparkles}
          delay={0.9}
          position={{ top: '55%', right: '6%' }}
          floatDirection="down"
        />
      </div>

      {/* ───── Center Content ───── */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.05] mb-6"
          style={{
            textShadow: '0 0 60px rgba(0,0,0,0.5)',
          }}
        >
          The Intelligence Layer
          <br />
          For The Real World Economy
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg text-white/55 max-w-2xl mx-auto mb-10 font-sans"
        >
          AI that connects business data, operations, machines, and decisions
          into one intelligent system.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <a
            href="#connect"
            className="group relative px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #22D3EE 0%, #06B6D4 100%)',
              color: '#05060A',
              boxShadow: '0 0 32px rgba(34,211,238,0.40)',
            }}
          >
            Connect Your Data
          </a>

          {/* Secondary CTA */}
          <a
            href="#platform"
            className="group px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            Explore AI Platform
          </a>
        </motion.div>
      </div>
    </section>
  )
}
