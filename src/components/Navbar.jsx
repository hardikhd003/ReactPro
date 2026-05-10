const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-white">
          HackPage
        </h1>

        <div className="flex gap-4 md:gap-8 text-sm md:text-lg font-medium">

          <a
            href="#home"
            className="hover:text-purple-400 transition duration-300"
          >
            Home
          </a>

          <a
            href="#timeline"
            className="hover:text-purple-400 transition duration-300"
          >
            Timeline
          </a>

          <a
            href="#gallery"
            className="hover:text-purple-400 transition duration-300"
          >
            Gallery
          </a>

        </div>

      </div>

    </nav>
  )
}

export default Navbar