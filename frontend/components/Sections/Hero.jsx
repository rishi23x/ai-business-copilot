'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import dynamic from 'next/dynamic'
import { Shield, AlertTriangle, TrendingUp, Brain } from 'lucide-react'
import PillButton from '../Ui/PillButton'

const AIOrb = dynamic(() => import('../three/AIOrb'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="w-[500px] h-[500px] rounded-full animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, rgba(61,214,208,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </div>
  ),
})

// ───── Floating Metric Card ─────
function FloatingMetricCard({
  icon: Icon,
  label,
  value,
  trend,
  trendColor,
  position,
  delay,
  duration,
  variant = 'default',
}) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    cardRef.current.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)'
  }

  const borderColor =
    variant === 'cyan'
      ? 'rgba(61,214,208,0.15)'
      : variant === 'electric'
      ? 'rgba(92,122,255,0.15)'
      : 'rgba(255,255,255,0.06)'

  return (
    <div
      ref={cardRef}
      className={`metric-card absolute hidden lg:block ${position} w-[180px] p-4 rounded-2xl cursor-default transition-all duration-300 opacity-0`}
      style={{
        background: 'rgba(17,17,20,0.55)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${borderColor}`,
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
        animation: `float ${duration}s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite`,
        animationDelay: `${delay}s`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon size={16} className="text-cyan" />
        <span className="font-label text-[10px] text-cyan">{label}</span>
      </div>
      <div className="font-mono-metric text-[28px] text-ai-white">{value}</div>
      <div className={`font-body-small text-[12px] ${trendColor}`}>{trend}</div>
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const cardsRef = useRef(null)
  const canvasWrapRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline()

      tl.fromTo(
        canvasWrapRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' },
        0.3
      )

      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word')
        tl.fromTo(
          words,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
          1.0
        )
      }

      tl.fromTo(subRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, 1.5)
      tl.fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 1.8)

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.metric-card')
        tl.fromTo(
          cards,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
          2.1
        )
      }
    },
    { scope: sectionRef }
  )

  const headlineWords = 'The Intelligence Layer For The Real World Economy'.split(' ')

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 ambient-glow pointer-events-none" />

      {/* 3D Canvas */}
      <div ref={canvasWrapRef} className="absolute inset-0 z-[1] opacity-0">
        <AIOrb />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[900px] mx-auto">
        <h1
          ref={headlineRef}
          className="font-h1 text-ai-white mb-6"
          style={{ textShadow: '0 0 60px rgba(61, 214, 208, 0.15)' }}
        >
          {headlineWords.map((word, i) => (
            <span key={i} className="word inline-block mr-[0.3em] opacity-0">
              {word}
            </span>
          ))}
        </h1>

        <p
          ref={subRef}
          className="font-body text-[18px] text-ai-muted max-w-[560px] opacity-0"
        >
          AI that connects business data, operations, machines, and decisions into one intelligent system.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 mt-10 opacity-0">
          <PillButton variant="primary">Connect Your Data</PillButton>
          <PillButton variant="secondary">Explore AI Platform</PillButton>
        </div>

        {/* Desktop floating cards */}
        {/* Desktop floating cards */}
<div ref={cardsRef} className="hidden lg:block">
  <FloatingMetricCard
    icon={Shield}
    label="AI OPERATIONS SCORE"
    value="94%"
    trend="↑ 3.2% this month"
    trendColor="text-success"
    position="top-[18%] left-[6%]"
    delay={0}
    duration={12}
    variant="cyan"
  />
  <FloatingMetricCard
    icon={AlertTriangle}
    label="PROBLEMS DETECTED"
    value="12"
    trend="↓ 8 from last week"
    trendColor="text-success"
    position="top-[18%] right-[6%]"
    delay={3}
    duration={14}
  />
  <FloatingMetricCard
    icon={TrendingUp}
    label="EFFICIENCY GAIN"
    value="+31%"
    trend="vs. Q1 baseline"
    trendColor="text-ai-muted"
    position="top-[55%] left-[4%]"
    delay={6}
    duration={11}
    variant="electric"
  />
  <FloatingMetricCard
    icon={Brain}
    label="PREDICTIVE INSIGHTS"
    value="2,847"
    trend="Generated this quarter"
    trendColor="text-ai-muted"
    position="top-[55%] right-[4%]"
    delay={9}
    duration={13}
  />
</div>

        {/* Mobile cards */}
        <div className="grid grid-cols-2 gap-3 mt-10 lg:hidden w-full max-w-[360px]">
          {[
            { icon: Shield, label: 'AI OPS SCORE', value: '94%', trend: '↑ 3.2%', color: 'text-success' },
            { icon: AlertTriangle, label: 'PROBLEMS', value: '12', trend: '↓ 8', color: 'text-success' },
            { icon: TrendingUp, label: 'EFFICIENCY', value: '+31%', trend: 'vs Q1', color: 'text-ai-muted' },
            { icon: Brain, label: 'INSIGHTS', value: '2,847', trend: 'this quarter', color: 'text-ai-muted' },
          ].map((card, i) => {
            const CardIcon = card.icon
            return (
              <div key={i} className="metric-card liquid-glass p-3 rounded-xl">
                <div className="flex items-center gap-1.5 mb-1">
                  <CardIcon size={14} className="text-cyan" />
                  <span className="font-label text-[9px] text-cyan">{card.label}</span>
                </div>
                <div className="font-mono text-[20px] text-ai-white font-medium">{card.value}</div>
                <div className={`font-body-small text-[11px] ${card.color}`}>{card.trend}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
