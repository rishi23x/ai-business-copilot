import BackgroundFX from '@/components/layout/BackgroundFX'
import Logo from '@/components/ui/Logo'

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <BackgroundFX />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <Logo size={48} />

        <h1 className="font-display text-6xl md:text-8xl text-white mt-12 mb-6">
          AI Business Copilot
        </h1>

        <p className="font-sans text-lg text-white/60 max-w-xl mb-8">
          Foundation is working! ✅<br />
          Glass, gradients, fonts, and background FX all loaded.
        </p>

        <div className="glass-card rounded-2xl p-8 max-w-md">
          <p className="text-cyan-400 text-sm font-mono mb-2">STATUS</p>
          <p className="text-white text-xl">Ready to build sections 🚀</p>
        </div>
      </div>
    </main>
  )
}
