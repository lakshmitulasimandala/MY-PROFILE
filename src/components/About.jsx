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
            I’m a frontend-focused developer who enjoys turning ideas into
            clean, functional, and thoughtful web experiences. I work with
            React and Next.js to build user-focused applications.
          </p>

          <p>
            From January to July 2026, I interned as a Frontend Developer at
            Quanta People (formerly TMI Groups), where I built a product from
            scratch with Next.js and React, using Server Actions, MongoDB, and
            AWS Lightsail. I also fixed bugs, supported production releases,
            and developed REST APIs for admin configuration.
          </p>

          <p>
            I’m currently working full-time and open to opportunities where I
            can keep learning, take on meaningful challenges, and grow my
            skills.
          </p>

          <div className="about-socials">
            <a href="https://github.com/lakshmitulasimandala" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>

            <a href="https://www.instagram.com/i_m.lakshmi_tulasi/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="mailto:lakshmitulasimandala@gmail.com">
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
