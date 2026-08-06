const skillCategories = [
  {
    title: "Languages",
    skills: [
      "C#",
      "Java",
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "C++",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    title: "Backend",
    skills: [
      "ASP.NET Core",
      "Entity Framework Core",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "SQLite",
      "SQL Server",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Visual Studio",
      "VS Code",
      "IntelliJ IDEA",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold">
          Technical Skills
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
          Technologies and tools I use to design, build, test, and deploy
          modern software applications.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:-translate-y-2 hover:border-cyan-500"
            >
              <h3 className="mb-5 text-2xl font-semibold text-cyan-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-200"
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