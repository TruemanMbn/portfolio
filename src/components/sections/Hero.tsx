function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950 text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 md:flex-row">
        {/* Left Side */}
        <div className="max-w-2xl">
          <p className="mb-4 text-cyan-400 text-lg">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            Mpumelelo
            <br />
            Mbonambi
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-slate-300">
            Software Engineer & Full Stack Developer
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Passionate about building scalable software, creating intuitive user
            experiences, and solving real-world problems with modern
            technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-cyan-500 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-slate-950"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/350"
            alt="Mpumelelo Mbonambi"
            className="h-80 w-80 rounded-full border-4 border-cyan-500 object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;