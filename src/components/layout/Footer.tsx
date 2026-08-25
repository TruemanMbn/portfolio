function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-lg font-bold transition hover:text-cyan-400"
            >
              Mpumelelo<span className="text-cyan-400">.</span>
            </a>

            <p className="mt-2 text-sm text-slate-500">
              Software Engineer
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">

            <a
              href="#about"
              className="transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="transition hover:text-cyan-400"
            >
              Skills
            </a>

            <a
              href="#education"
              className="transition hover:text-cyan-400"
            >
              Education
            </a>

            <a
              href="#projects"
              className="transition hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition hover:text-cyan-400"
            >
              Contact
            </a>

          </div>

          {/* Social Links */}
          <div className="flex gap-5 text-sm">

            <a
              href="https://github.com/TruemanMbn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/trueman-mpumelelo-mbonambi-9b732323b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition hover:text-cyan-400"
            >
              LinkedIn
            </a>

            <a
              href="mailto:truemanmbn@gmail.com"
              className="text-slate-500 transition hover:text-cyan-400"
            >
              Email
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-slate-800 pt-6 text-center">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Mpumelelo Mbonambi. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;