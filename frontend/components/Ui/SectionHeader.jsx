'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function SectionHeader({ badge, headline, description }) {
  const headerRef = useRef(null)

  useGSAP(
    () => {
      if (!headerRef.current) return
      const elements = headerRef.current.querySelectorAll('.header-item')
      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: '85% bottom',
            toggleActions: 'play none none none',
          },
        }
      )
    },
    { scope: headerRef }
  )

  return (
    <div ref={headerRef} className="text-center mb-16 md:mb-20">
      {/* Badge */}
      {badge && (
        <div className="header-item inline-block opacity-0 mb-6">
          <span
            className="font-label text-cyan px-4 py-1.5 rounded-full inline-block"
            style={{
              background: 'rgba(61, 214, 208, 0.08)',
              border: '1px solid rgba(61, 214, 208, 0.2)',
            }}
          >
            {badge}
          </span>
        </div>
      )}

      {/* Headline */}
      <h2 className="header-item font-h2 text-ai-white mb-5 opacity-0">
        {headline}
      </h2>

      {/* Description */}
      {description && (
        <p className="header-item font-body text-[18px] text-ai-muted max-w-[600px] mx-auto opacity-0">
          {description}
        </p>
      )}
    </div>
  )
}
