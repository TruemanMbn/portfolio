const projects = [
  {
    title: "Plan4Salary",
    description:
      "A personal budgeting application designed to help users plan their salary, manage expenses, and understand their monthly finances.",
    tech: [
      "React",
      "TypeScript",
      "ASP.NET Core",
      "PostgreSQL",
      "Docker",
    ],
    github: "https://github.com/TruemanMbn/plan4salary",
    demo: null,
  },
  {
    title: "Password Generator",
    description:
      "A secure password generator that creates strong, customizable passwords using the browser's cryptographically secure random API, with automated tests.",
    tech: [
      "TypeScript",
      "Vite",
      "Web Crypto API",
      "HTML",
      "CSS",
      "Vitest",
    ],
    github: "https://github.com/TruemanMbn/Password-Generator",
    demo: "https://password-generator-sepia-two.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Projects
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Things I've Built
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Practical projects where I've applied software engineering
            concepts, modern technologies, and problem-solving skills.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/70 hover:shadow-2xl hover:shadow-cyan-500/5"
            >

              {/* Project Preview */}
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">

                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="h-full w-full bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:32px_32px]" />
                </div>

                {/* Number */}
                <div className="relative">
                  <span className="text-7xl font-black text-slate-800 transition duration-500 group-hover:text-cyan-500/20">
                    0{index + 1}
                  </span>
                </div>

                {/* Project label */}
                <div className="absolute bottom-5 left-6">
                  <span className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    Featured Project
                  </span>
                </div>

              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-7">

                <h3 className="text-2xl font-bold transition group-hover:text-cyan-400">
                  {project.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex gap-3 pt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-cyan-500 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-700 px-5 py-2.5 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                    >
                      Live Demo
                    </a>
                  )}

                </div>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;