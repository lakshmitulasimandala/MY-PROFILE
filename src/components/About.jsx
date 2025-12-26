import { useEffect, useRef } from "react";

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("show");
        } else {
          sectionRef.current.classList.remove("show");
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);


  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-wrapper show">
        
        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src="/images/tulasi_pic3.png" alt="Tulasi" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <h2>ABOUT</h2>

          <p>
            I’m a frontend-focused MERN stack developer and a NxtWave student
            who enjoys turning ideas into clean, functional, and visually calm
            web experiences.
          </p>

          <p>
            I’m strongest in HTML, CSS, JavaScript, and React, Python, SQL's while steadily
            expanding my backend knowledge. Alongside web development, I’m an
            AI/ML enthusiast who loves exploring how intelligent systems can
            enhance user-centric products.
          </p>

          <div className="about-socials">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>

            <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="mailto:yourmail@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>

          <button
            className="about-arrow"
            aria-label="Scroll to projects"
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <i className="fa-solid fa-arrow-down"></i>
          </button>


        </div>

      </div>
    </section>
  );
}

export default About;
