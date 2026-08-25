const education = [
  {
    institution: "University of KwaZulu-Natal",
    qualification: "BSc Computer Science & Information Technology",
    period: "Completed",
    description:
      "Developed a strong foundation in computer science and information technology, including software development, algorithms, databases, networking, operating systems, and software engineering.",
  },
  {
    institution: "WeThinkCode_",
    qualification: "Software Engineering Programme",
    period: "2026",
    description:
      "Developing practical software engineering skills through hands-on projects, collaborative development, backend APIs, databases, testing, Git, and modern software development practices.",
  },
  {
    institution: "ORT South Africa",
    qualification: "Big Data Analytics",
    period: "Completed",
    description:
      "Developed practical skills in data analytics, SQL, Power BI, data visualization, and interpreting data to support data-driven decision-making.",
  },
];

function Education() {
  return (
    <section id="education" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Education
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            My Learning Journey
          </h2>

          <p className="text-lg leading-8 text-slate-400">
            My academic background and continued development in software
            engineering and data analytics.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-6">

          {education.map((item) => (
            <article
              key={item.institution}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:border-cyan-400"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">
                    {item.institution}
                  </h3>

                  <p className="mt-2 text-xl font-semibold text-white">
                    {item.qualification}
                  </p>
                </div>

                <span className="w-fit rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300">
                  {item.period}
                </span>

              </div>

              <p className="mt-6 leading-8 text-slate-300">
                {item.description}
              </p>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;