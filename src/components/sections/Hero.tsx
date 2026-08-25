function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-slate-950 pt-24 text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="max-w-4xl">

          {/* Introduction */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Software Engineer
          </p>

          {/* Name */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Mpumelelo
            <span className="block text-cyan-400">
              Mbonambi
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
            Computer Science and Information Technology graduate with a
            growing focus on software engineering, backend development,
            full-stack applications, and data-driven solutions.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="#projects"
              className="rounded-lg bg-cyan-500 px-7 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-7 py-3 text-center font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Get In Touch
            </a>

          </div>

          {/* Quick Links */}
          <div className="mt-12 flex gap-6 text-sm text-slate-500">

            <a
              href="https://github.com/TruemanMbn"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/trueman-mpumelelo-mbonambi-9b732323b"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-400"
            >
              LinkedIn
            </a>

            <a
              href="mailto:truemanmbn@gmail.com"
              className="transition hover:text-cyan-400"
            >
              Email
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;