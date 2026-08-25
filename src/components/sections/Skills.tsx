const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "C#", "Python", "TypeScript", "C++", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    skills: [
      "ASP.NET Core",
      "REST APIs",
      "Spring Boot",
      "Entity Framework Core",
      "Javalin",
    ],
  },
  {
    title: "Databases & Data",
    skills: [
      "PostgreSQL",
      "SQLite",
      "SQL",
      "Power BI",
      "Big Data Analytics",
      "Data Visualization",
    ],
  },
  {
    title: "Testing",
    skills: [
      "Unit Testing",
      "Acceptance Testing",
      "JUnit",
      "Vitest",
      "Selenium",
      "WebDriverManager",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Docker Compose",
      "Maven",
      "Linux",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Technical Skills
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="text-lg leading-8 text-slate-400">
            A growing set of technologies and engineering practices I've
            developed through coursework, training, and hands-on projects.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
            >
              <h3 className="mb-5 text-xl font-semibold text-cyan-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-800 px-3 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;