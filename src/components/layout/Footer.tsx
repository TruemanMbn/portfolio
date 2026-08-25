function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">

        <p className="text-sm">
          © {new Date().getFullYear()} Mpumelelo Mbonambi. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">

          <a
            href="https://github.com/TruemanMbn"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/trueman-mpumelelo-mbonambi-9b732323b"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-400"
          >
            LinkedIn
          </a>

          <a
            href="mailto:truemanmbn@gmail.com"
            className="transition hover:text-cyan-400"
          >
            Email
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;