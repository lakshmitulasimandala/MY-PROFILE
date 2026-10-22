function Hero() {
  return (
    <section className="hero-section" id="home">
      <h1 className="animated-banner">
        Lakshmi Tulasi Mandala
      </h1>

      <div className="image_container d-flex justify-content-center">
        <div className="card">
          <div className="card-body d-flex justify-content-center">
            <img
              src="/images/tulasi_pic2.png"
              alt="Lakshmi Tulasi"
              className="my_image"
            />

            <div className="hero-copy">
              <h5>
                Hello I'm <br />
                <span className="hero-name">
                  Lakshmi Tulasi
                </span>
                <br />
                <span className="hero-role">
                  A Full Stack Developer.
                </span>
              </h5>

              <div className="hero-actions">
                <button
                  className="know-more-btn"
                  onClick={() => {
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Know more
                </button>

                <a
                  href="/resume/MLT_FullStack_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-btn"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
