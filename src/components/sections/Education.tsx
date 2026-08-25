const education = [
  {
    institution: "University of KwaZulu-Natal",
    qualification: "BSc Computer Science & Information Technology",
    period: "Completed",
    description:
      "Built a strong foundation in computer science and information technology, including software development, algorithms, databases, networking, operating systems, and software engineering.",
  },
  {
    institution: "WeThinkCode_",
    qualification: "Software Engineering Programme",
    period: "2026",
    description:
      "Developing practical software engineering skills through project-based learning, collaborative development, backend development, testing, databases, Git, and modern software engineering practices.",
  },
  {
    institution: "ORT South Africa",
    qualification: "Big Data Analytics",
    period: "Completed",
    description:
      "Developed practical skills in data analytics, SQL, Power BI, data visualization, data interpretation, and data-driven decision-making.",
  },
];

function Education() {
  return (
    <section id="education" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Education
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My Learning Journey
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            My academic background and professional training have given me
            a foundation for building practical software solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">

          {/* Timeline Line */}
          <div className="absolute left-3 top-0 hidden h-full w-px bg-slate-800 md:block" />

          <div className="space-y-10">

            {education.map((item) => (
              <div
                key={item.institution}
                className="relative md:pl-12"
              >

                {/* Timeline Dot */}
                <div className="absolute left-0 top-8 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-slate-900 bg-cyan-500 md:flex" />

                {/* Card */}
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 md:p-8">

                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                        {item.institution}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold">
                        {item.qualification}
                      </h3>
                    </div>

                    <span className="w-fit rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-sm font-medium text-slate-400">
                      {item.period}
                    </span>

                  </div>

                  <p className="mt-5 leading-8 text-slate-400">
                    {item.description}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;