'use client'

export default function PillButton({ children, variant = 'primary', href = '#', onClick }) {
  const baseClasses =
    'px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 inline-block'

  const variantStyles =
    variant === 'primary'
      ? {
          background: 'linear-gradient(135deg, #22D3EE 0%, #06B6D4 100%)',
          color: '#05060A',
          boxShadow: '0 0 32px rgba(34,211,238,0.40)',
        }
      : {
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.12)',
          color: '#F5F7FA',
        }

  return (
    <a href={href} onClick={onClick} className={baseClasses} style={variantStyles}>
      {children}
    </a>
  )
}
