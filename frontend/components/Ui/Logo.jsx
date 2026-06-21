'use client'

import Image from 'next/image'

export default function Logo({ size = 28, showText = true }) {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/images/logo.png"
        alt="AI Business Copilot"
        width={size}
        height={size}
        priority
      />

      {showText && (
        <span className="font-sans text-[15px] font-semibold text-white tracking-tight">
          AI Business Copilot
        </span>
      )}
    </div>
  )
}
