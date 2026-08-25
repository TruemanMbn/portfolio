function About() {
  return (
    <section id="about" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            A Software Engineer in the Making
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          {/* About Text */}
          <div>
            <p className="text-lg leading-8 text-slate-300">
              I'm a Computer Science and Information Technology graduate
              from the University of KwaZulu-Natal with a strong interest
              in software engineering and building practical solutions
              to real-world problems.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Through my studies, software engineering training, and
              personal projects, I've developed experience working across
              frontend development, backend APIs, databases, testing,
              and data analytics.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              I enjoy learning new technologies, solving technical
              problems, and turning ideas into functional software.
              I'm currently focused on strengthening my engineering
              skills and gaining professional industry experience.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid gap-5 sm:grid-cols-2">

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400">
              <h3 className="text-lg font-semibold text-cyan-400">
                Software Development
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Building applications and APIs using modern programming
                languages and frameworks.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400">
              <h3 className="text-lg font-semibold text-cyan-400">
                Backend Development
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Working with REST APIs, databases, authentication,
                and server-side application development.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400">
              <h3 className="text-lg font-semibold text-cyan-400">
                Testing
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Experience with unit testing, acceptance testing,
                and automated browser testing.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400">
              <h3 className="text-lg font-semibold text-cyan-400">
                Data & Analytics
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Applying SQL, data analysis, visualization, and
                business intelligence to understand data.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;