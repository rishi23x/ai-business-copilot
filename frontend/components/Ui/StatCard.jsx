'use client'

import { motion } from 'framer-motion'

export default function StatCard({
  label,
  value,
  sub,
  icon: Icon,
  delay = 0,
  position = {},
  floatDirection = 'up',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      style={position}
      className="absolute hidden lg:block"
    >
      <motion.div
        animate={{
          y: floatDirection === 'up' ? [0, -8, 0] : [0, 8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div
          className="relative px-5 py-4 rounded-2xl min-w-[180px]"
          style={{
            background:
              'linear-gradient(135deg, rgba(18,20,31,0.85) 0%, rgba(11,13,20,0.85) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(34,211,238,0.15)',
            boxShadow:
              '0 8px 32px rgba(0,0,0,0.4), 0 0 24px rgba(34,211,238,0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          {/* Label with icon */}
          <div className="flex items-center gap-1.5 mb-1.5">
            {Icon && (
              <Icon size={11} className="text-cyan-400" strokeWidth={2.5} />
            )}
            <p className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              {label}
            </p>
          </div>

          {/* Big value */}
          <p className="text-2xl font-semibold text-white tracking-tight mb-1">
            {value}
          </p>

          {/* Subtext */}
          <p className="text-[11px] text-white/50 font-sans">{sub}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
