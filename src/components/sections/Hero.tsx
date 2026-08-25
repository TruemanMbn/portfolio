function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-slate-950 text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-4xl">

          <p className="mb-4 text-lg font-semibold text-cyan-400">
            Software Engineer
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Hi, I'm{" "}
            <span className="text-cyan-400">
              Mpumelelo Mbonambi
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Computer Science and IT graduate passionate about building
            reliable software, backend systems, APIs, and practical
            full-stack applications.
          </p>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Currently developing my software engineering skills through
            hands-on projects involving React, TypeScript, C#, ASP.NET Core,
            Java, Python, SQL, Docker, and automated testing.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Get In Touch
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;