const experiences = [
  {
    period: "2025 – Present",
    title: "Software Engineering Programme",
    company: "WeThinkCode_",
    description:
      "Building production-quality software while working with modern development practices, Git, Agile workflows, backend APIs, databases, testing, and full-stack application development.",
  },
  {
    period: "2024",
    title: "Big Data Analytics Bootcamp",
    company: "ORTSA",
    description:
      "Completed training in big data analytics, covering data collection, cleaning, analysis, visualization, and interpretation using modern analytical techniques to support data-driven decision-making.",
  },
  {
    period: "2018 – 2022",
    title: "BSc Computer Science & Information Technology",
    company: "University of KwaZulu-Natal",
    description:
      "Studied software engineering, algorithms, databases, operating systems, networking, object-oriented programming, and software development principles while completing practical software projects.",
  },
  {
    period: "Personal Projects",
    title: "Independent Software Developer",
    company: "Portfolio Projects",
    description:
      "Designed and developed full-stack applications, REST APIs, games, and data engineering solutions using modern technologies including ASP.NET Core, React, Java, Python, PostgreSQL, Docker, and Git.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold">
          Experience
        </h2>

        <p className="mb-16 text-center text-slate-400">
          My software engineering journey so far.
        </p>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
            >
              <p className="text-cyan-400 font-semibold">
                {experience.period}
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {experience.title}
              </h3>

              <h4 className="mb-4 text-slate-400">
                {experience.company}
              </h4>

              <p className="leading-8 text-slate-300">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;