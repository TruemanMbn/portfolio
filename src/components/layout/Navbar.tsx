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
            className="text-xl font-bold text-cyan-400 transition hover:text-cyan-300 md:text-2xl"
          >
            Mpumelelo Mbonambi
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <li>
              <a
                href="#home"
                className="transition hover:text-cyan-400"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="transition hover:text-cyan-400"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="transition hover:text-cyan-400"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#education"
                className="transition hover:text-cyan-400"
              >
                Education
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="transition hover:text-cyan-400"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="transition hover:text-cyan-400"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Desktop CV */}
          <a
            href="/Mpumelelo-Mbonambi-CV.pdf"
            download
            className="hidden rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400 md:block"
          >
            Download CV
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mt-4 border-t border-slate-800 pt-4 md:hidden">

            <ul className="flex flex-col gap-2 text-slate-300">

              <li>
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#education"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  Education
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  Contact
                </a>
              </li>

              <li className="pt-2">
                <a
                  href="/Mpumelelo%20Mbonambi.pdf"
                  download
                  onClick={closeMenu}
                  className="block rounded-lg bg-cyan-500 px-4 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Download CV
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