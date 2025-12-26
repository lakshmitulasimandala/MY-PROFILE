function EndSection() {
  return (
    <section className="end-section" id="endsection">
      <div className="end-content">
        <h1 className="end-title">
          That’s all from me<span className="end-dot">.</span>
        </h1>

        <p className="end-subtitle">
          Still building. Still learning.
        </p>

        <div className="end-socials">
          <a
            href="https://www.linkedin.com/in/lakshmitulasimandala/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          <a
            href="https://github.com/lakshmitulasimandala"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.instagram.com/i_m.lakshmi_tulasi/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a
            href="mailto:lakshmitulasimandala@gmail.com"
            aria-label="Email"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Tulasi. Built with React.
        </p>
      </div>
    </section>
  );
}

export default EndSection;
