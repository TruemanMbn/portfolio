function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          Mpumelelo Mbonambi
        </h1>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 text-slate-300">
          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
          </li>
          
          <li>
            <a href="#education" className="hover:text-cyan-400 transition">
              Education
            </a>
          </li>

        </ul>

        {/* CV Button */}
        <button className="hidden md:block rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-slate-950 hover:bg-cyan-400 transition">
          Download CV
        </button>
      </nav>
    </header>
  );
}

export default Navbar;