function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          About Me
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-cyan-400">
              Who I Am
            </h3>

            <p className="leading-8 text-slate-300">
              I'm a Software Engineer passionate about building reliable,
              scalable, and user-friendly applications. I enjoy transforming
              ideas into practical software solutions and continuously learning
              new technologies to improve my craft.
            </p>

            <p className="mt-6 leading-8 text-slate-300">
              My interests include full-stack web development, backend systems,
              cloud technologies, and creating software that solves real-world
              problems.
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-800 p-8">
            <h3 className="mb-6 text-2xl font-semibold text-cyan-400">
              Quick Facts
            </h3>

            <ul className="space-y-4 text-slate-300">
              <li>🎓 BSc Computer Science & Information Technology</li>
              <li>🏫 WeThinkCode_ Software Engineering Programme</li>
              <li>💼 Aspiring Full Stack Software Engineer</li>
              <li>🌍 Durban, South Africa</li>
              <li>💻 Passionate about building impactful software</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;