const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C#", "C++", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["ASP.NET Core", "Spring Boot", "REST APIs", "Entity Framework"],
  },
  {
    title: "Databases & Data",
    skills: [
      "PostgreSQL",
      "SQL",
      "SQLite",
      "Power BI",
      "Data Analysis",
      "Data Visualization",
    ],
  },
  {
    title: "Testing",
    skills: [
      "Unit Testing",
      "Acceptance Testing",
      "Vitest",
      "JUnit",
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

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Technical Skills
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            A selection of the languages, frameworks, tools, and
            technologies I've worked with through my studies, training,
            and software projects.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

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
                    className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-white"
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