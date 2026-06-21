'use client'

export default function Logo({ size = 28, showText = true }) {
  return (
    <div className="flex items-center gap-2.5">
      {/* Hexagon Icon */}
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
            stroke="url(#hex-gradient)"
            strokeWidth="1.5"
            fill="rgba(34,211,238,0.05)"
          />
          <path
            d="M16 10L22 13.5V20.5L16 24L10 20.5V13.5L16 10Z"
            fill="url(#hex-gradient)"
            opacity="0.9"
          />
          <defs>
            <linearGradient id="hex-gradient" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Text */}
      {showText && (
        <span className="font-sans text-[15px] font-semibold text-white tracking-tight">
          AI Business Copilot
        </span>
      )}
    </div>
  )
}
