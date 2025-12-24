function Hero() {
  return (
    <div id="home">
      {/* Name Banner */}
      <div
        className="animated-banner"
        style={{
          color: "#473932",
          fontFamily: "age",
          fontSize: "133px",
          fontWeight: "bold",
        }}
      >
        Lakshmi Tulasi Mandala
      </div>

      {/* Card Section */}
      <div className="image_container d-flex justify-content-center">
        <div className="card">
          <div className="card-body d-flex justify-content-center">
            <img
              src="/images/tulasi_pic2.png"
              alt="Lakshmi Tulasi"
              className="my_image"
            />

            <div className="d-flex flex-column justify-content-start m-5 p-5">
              <h5>
                Hello I'm <br />
                <span style={{ fontWeight: "bold", fontSize: "30px" }}>
                  Lakshmi Tulasi
                </span>
                <br />
                <span style={{ color: "#755e52" }}>
                  A MERN Stack Developer.
                </span>
              </h5>

              <div className="d-flex justify-content-center mt-3">
                <button
                  className="know-more-btn mr-4"
                  onClick={() => {
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Know more
                </button>

                <a
                  href="/resume/MLT_Updated_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="cv-btn">
                    View Resume
                  </button>
                </a>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
