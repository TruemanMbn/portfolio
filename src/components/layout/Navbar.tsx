import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-6">

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-lg font-bold tracking-tight text-white transition hover:text-cyan-400 sm:text-xl"
          >
            Mpumelelo
            <span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">

            <ul className="flex items-center gap-7 text-sm text-slate-400">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative py-2 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CV */}
            <a
              href="/Mpumelelo%20Mbonambi.pdf"
              download
              className="rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400"
            >
              Download CV
            </a>

          </div>

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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-slate-800 py-4 md:hidden">

            <ul className="flex flex-col gap-1">

              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <li className="pt-3">
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