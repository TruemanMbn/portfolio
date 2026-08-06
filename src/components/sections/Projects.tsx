import { projects } from "../../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold">
          Featured Projects
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
          A selection of projects demonstrating my experience in software
          engineering, full-stack development, APIs, and data engineering.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:-translate-y-2 hover:border-cyan-500"
            >
              <h3 className="mb-4 text-2xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <p className="mb-6 text-slate-300">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-3 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-cyan-500 px-4 py-2 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-slate-950"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;