import Navbar from '../components/Layout/Navbar'
import Hero from '../components/Sections/Hero'

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-void">
      <Navbar />
      <Hero />

      <div className="h-screen flex items-center justify-center">
        <div className="liquid-glass-featured p-8 max-w-md text-center">
          <p className="font-label text-cyan mb-2">NEXT</p>
          <p className="font-h3 text-ai-white">How It Works section 🛠</p>
        </div>
      </div>
    </main>
  )
}
