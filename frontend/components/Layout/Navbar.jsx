'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from '../Ui/Logo'

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Enterprise', href: '#enterprise' },
  { label: 'Research', href: '#research' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(5, 6, 10, 0.7)'
            : 'rgba(5, 6, 10, 0.3)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.06)'
            : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* ───── Logo ───── */}
            <a href="/" className="flex items-center">
              <Logo size={28} />
            </a>

            {/* ───── Desktop Nav Links ───── */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* ───── Desktop Right Side ───── */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href="/login"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Sign In
              </a>
              <a
                href="#connect"
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #22D3EE 0%, #06B6D4 100%)',
                  color: '#05060A',
                  boxShadow: '0 0 24px rgba(34,211,238,0.30)',
                }}
              >
                Connect Your Data
              </a>
            </div>

            {/* ───── Mobile Hamburger ───── */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ───── Mobile Menu Drawer ───── */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed top-16 left-0 right-0 z-40 md:hidden"
          style={{
            background: 'rgba(5, 6, 10, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-white/70 hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}

            <div className="h-px bg-white/10 my-2" />

            <a
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-white/80 hover:text-white transition-colors py-2"
            >
              Sign In
            </a>

            <a
              href="#connect"
              onClick={() => setMobileOpen(false)}
              className="px-5 py-3 rounded-full text-sm font-semibold text-center transition-all"
              style={{
                background: 'linear-gradient(135deg, #22D3EE 0%, #06B6D4 100%)',
                color: '#05060A',
                boxShadow: '0 0 24px rgba(34,211,238,0.30)',
              }}
            >
              Connect Your Data
            </a>
          </div>
        </motion.div>
      )}
    </>
  )
}
