import BackgroundFX from '../components/Layout/BackgroundFX'
import Navbar from '../components/Layout/Navbar'
import Hero from '../components/Sections/Hero'

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <BackgroundFX />
      <Navbar />
      <Hero />

      {/* Spacer for upcoming sections */}
      <div className="h-screen flex items-center justify-center">
        <div className="glass-card rounded-2xl p-8 max-w-md">
          <p className="text-cyan-400 text-sm font-mono mb-2">NEXT</p>
          <p className="text-white text-xl">How It Works section 🛠</p>
        </div>
      </div>
    </main>
  )
}
