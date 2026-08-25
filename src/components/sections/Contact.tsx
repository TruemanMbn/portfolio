function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Contact
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Let's Connect
          </h2>

          <p className="text-lg leading-8 text-slate-400">
            I'm open to software engineering opportunities, collaborations,
            and interesting projects. Feel free to get in touch.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">

          {/* Email */}
          <a
            href="mailto:truemanmbn@gmail.com"
            className="group rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
          >
            <h3 className="text-xl font-semibold text-cyan-400">
              Email
            </h3>

            <p className="mt-3 break-all text-slate-300 group-hover:text-white">
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
            <h3 className="text-xl font-semibold text-cyan-400">
              GitHub
            </h3>

            <p className="mt-3 text-slate-300 group-hover:text-white">
              github.com/TruemanMbn
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/trueman-mpumelelo-mbonambi-9b732323b"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
          >
            <h3 className="text-xl font-semibold text-cyan-400">
              LinkedIn
            </h3>

            <p className="mt-3 text-slate-300 group-hover:text-white">
              Mpumelelo Mbonambi
            </p>
          </a>

          {/* Location */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">
            <h3 className="text-xl font-semibold text-cyan-400">
              Location
            </h3>

            <p className="mt-3 text-slate-300">
              Durban, South Africa
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;