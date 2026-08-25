import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight text-white transition hover:text-cyan-400"
          >
            Mpumelelo<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-7 text-sm text-slate-400 md:flex">

            <li>
              <a href="#home" className="transition hover:text-cyan-400">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="transition hover:text-cyan-400">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="transition hover:text-cyan-400">
                Skills
              </a>
            </li>

            <li>
              <a href="#education" className="transition hover:text-cyan-400">
                Education
              </a>
            </li>

            <li>
              <a href="#projects" className="transition hover:text-cyan-400">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="transition hover:text-cyan-400">
                Contact
              </a>
            </li>

          </ul>

          {/* Desktop CV */}
          <a
            href="/Mpumelelo Mbonambi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 md:block"
          >
            View CV
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-slate-800 pt-5 md:hidden">

            <ul className="flex flex-col gap-1">

              <li>
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#education"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  Education
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  Contact
                </a>
              </li>

              <li className="pt-3">
                <a
                  href="/Mpumelelo Mbonambi.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="block rounded-lg bg-cyan-500 px-4 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  View CV
                </a>
              </li>

            </ul>

          </div>
        )}

      </nav>
    </header>
  );
}

export default Navbar;