function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pt-24 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20">
        <div className="max-w-4xl">

          {/* Intro */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Software Engineer
          </p>

          {/* Name */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Mpumelelo
            <span className="block text-cyan-400">
              Mbonambi
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
            Computer Science and Information Technology graduate building
            practical software solutions with a focus on full-stack
            development, backend systems, testing, and data-driven
            applications.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="#projects"
              className="rounded-lg bg-cyan-500 px-7 py-3 text-center font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-7 py-3 text-center font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              Get In Touch
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-12 flex items-center gap-6 text-sm">

            <a
              href="https://github.com/TruemanMbn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition hover:text-cyan-400"
            >
              GitHub
            </a>

            <span className="h-1 w-1 rounded-full bg-slate-700" />

            <a
              href="https://linkedin.com/in/trueman-mpumelelo-mbonambi-9b732323b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition hover:text-cyan-400"
            >
              LinkedIn
            </a>

            <span className="h-1 w-1 rounded-full bg-slate-700" />

            <a
              href="mailto:truemanmbn@gmail.com"
              className="text-slate-500 transition hover:text-cyan-400"
            >
              Email
            </a>

          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-600 transition hover:text-cyan-400 md:block"
        aria-label="Scroll to About section"
      >
        <span className="text-xs uppercase tracking-[0.25em]">
          Scroll
        </span>
        <span className="mt-2 block text-center text-lg">
          ↓
        </span>
      </a>
    </section>
  );
}

export default Hero;