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
    demo: "#",
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
      "Testing",
    ],
    github: "https://github.com/TruemanMbn/Password-Generator",
    demo: "https://password-generator-sepia-two.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Projects
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Things I've Built
          </h2>

          <p className="text-lg leading-8 text-slate-400">
            A selection of projects that demonstrate my software development,
            problem-solving, testing, and engineering skills.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >
              <div className="mb-6">
                <span className="text-sm font-semibold text-cyan-400">
                  Featured Project
                </span>

                <h3 className="mt-2 text-3xl font-bold">
                  {project.title}
                </h3>
              </div>

              <p className="mb-6 flex-grow leading-8 text-slate-300">
                {project.description}
              </p>

              <div className="mb-8 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-3 py-2 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-cyan-500 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  View GitHub
                </a>

                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-slate-700 px-5 py-2.5 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    Live Demo
                  </a>
                )}

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;