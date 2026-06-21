import BackgroundFX from '../components/Layout/BackgroundFX'
import Navbar from '../components/Layout/Navbar'

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <BackgroundFX />
      <Navbar />

      {/* Temporary spacer to test navbar */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-16">
        <h1 className="font-display text-6xl md:text-8xl text-white mb-6">
          Navbar Done ✅
        </h1>
        <p className="font-sans text-lg text-white/60 max-w-xl mb-8">
          Scroll up and down — navbar should change opacity smoothly.
        </p>
        <div className="glass-card rounded-2xl p-8 max-w-md">
          <p className="text-cyan-400 text-sm font-mono mb-2">NEXT</p>
          <p className="text-white text-xl">Hero section with 3D Orb 🌌</p>
        </div>
      </div>

      {/* Extra space to test scroll */}
      <div className="h-screen" />
    </main>
  )
}
