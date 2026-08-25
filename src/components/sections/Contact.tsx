function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Let's Connect
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            I'm open to software engineering opportunities, collaborations,
            and interesting projects. Feel free to reach out.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {/* Email */}
          <a
            href="mailto:truemanmbn@gmail.com"
            className="group rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-cyan-400 transition group-hover:bg-cyan-500 group-hover:text-slate-950">
              @
            </div>

            <h3 className="text-lg font-semibold">
              Email
            </h3>

            <p className="mt-2 break-all text-sm text-slate-400">
              truemanmbn@gmail.com
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/TruemanMbn"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-cyan-400 transition group-hover:bg-cyan-500 group-hover:text-slate-950">
              GH
            </div>

            <h3 className="text-lg font-semibold">
              GitHub
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              TruemanMbn
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/trueman-mpumelelo-mbonambi-9b732323b"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-cyan-400 transition group-hover:bg-cyan-500 group-hover:text-slate-950">
              in
            </div>

            <h3 className="text-lg font-semibold">
              LinkedIn
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Mpumelelo Mbonambi
            </p>
          </a>

        </div>

        {/* Location */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-7 text-center">
          <p className="text-sm text-slate-500">
            Based in
          </p>

          <p className="mt-2 font-medium text-slate-300">
            Durban, South Africa
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;