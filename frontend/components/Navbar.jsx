export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-6">

      <h1 className="text-xl font-bold text-white">
        AI Business Copilot
      </h1>

      <div className="flex gap-6 text-gray-300">
        <a href="#">Product</a>
        <a href="#">Solutions</a>
        <a href="#">About</a>

        <button className="px-5 py-2 rounded-full bg-white text-black">
          Get Started
        </button>
      </div>

    </nav>
  )
}
