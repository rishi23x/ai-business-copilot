/**
 * AI BUSINESS COPILOT — DESIGN TOKENS
 * Single source of truth for the entire platform.
 */

export const tokens = {
  // ───── Backgrounds ─────
  bg: {
    base: '#05060A',
    surface1: '#0B0D14',
    surface2: '#12141F',
    surface3: '#1A1D2B',
  },

  // ───── Borders ─────
  border: {
    subtle: 'rgba(255,255,255,0.06)',
    default: 'rgba(255,255,255,0.10)',
    strong: 'rgba(255,255,255,0.16)',
    glow: 'rgba(34,211,238,0.30)',
  },

  // ───── Text ─────
  text: {
    primary: '#F5F7FA',
    dim: 'rgba(245,247,250,0.65)',
    faint: 'rgba(245,247,250,0.40)',
    ghost: 'rgba(245,247,250,0.25)',
  },

  // ───── Accent Colors ─────
  accent: {
    cyan: '#22D3EE',
    cyanBright: '#06B6D4',
    cyanDim: 'rgba(34,211,238,0.15)',
    blue: '#3B82F6',
    purple: '#A78BFA',
    green: '#10B981',
    amber: '#FBBF24',
    red: '#F87171',
  },

  // ───── Gradients ─────
  gradient: {
    ai: 'linear-gradient(135deg, #22D3EE 0%, #06B6D4 50%, #0891B2 100%)',
    cyanGlow: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)',
    purpleGlow: 'radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)',
    glass: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
  },

  // ───── Spacing ─────
  spacing: {
    section: '6rem',
    container: '1280px',
  },

  // ───── Radius ─────
  radius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    full: '9999px',
  },

  // ───── Shadows / Glows ─────
  shadow: {
    glass: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
    glow: '0 0 40px rgba(34,211,238,0.15)',
    glowStrong: '0 0 60px rgba(34,211,238,0.30)',
    card: '0 4px 24px rgba(0,0,0,0.3)',
  },
}
