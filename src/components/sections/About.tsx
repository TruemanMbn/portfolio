function About() {
  return (
    <section id="about" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            About Me
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            Building software with purpose
          </h2>

          <p className="mb-6 text-lg leading-8 text-slate-300">
            I'm a Computer Science and Information Technology graduate with
            a strong interest in software engineering and application
            development. I enjoy turning ideas into practical software
            solutions and continuously improving my development skills
            through hands-on projects.
          </p>

          <p className="mb-6 text-lg leading-8 text-slate-300">
            My experience spans frontend and backend development, REST APIs,
            databases, data analytics, testing, and containerized
            applications. I've worked with technologies including React,
            TypeScript, C#, ASP.NET Core, Java, Python, PostgreSQL, Docker,
            and Git.
          </p>

          <p className="text-lg leading-8 text-slate-300">
            I'm particularly interested in writing clean, maintainable code,
            understanding how systems work, and building reliable software
            that solves real problems.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center">
            <h3 className="mb-2 text-xl font-semibold text-cyan-400">
              Software Development
            </h3>

            <p className="leading-7 text-slate-400">
              Building full-stack applications, backend services, and REST
              APIs using modern development technologies.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center">
            <h3 className="mb-2 text-xl font-semibold text-cyan-400">
              Data & Databases
            </h3>

            <p className="leading-7 text-slate-400">
              Working with SQL, PostgreSQL, data analysis, visualization,
              and database-driven applications.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center">
            <h3 className="mb-2 text-xl font-semibold text-cyan-400">
              Testing & Quality
            </h3>

            <p className="leading-7 text-slate-400">
              Applying unit testing, acceptance testing, and automated
              browser testing to improve software quality.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;