function About() {
  return (
    <section id="about" className="about-section">
      <h6>Get to know more</h6>
      <h1>About Me</h1>

      <p className="about-text">
        Hey there! 👋 I’m Lakshmi Tulasi, a frontend-focused MERN stack
        developer who enjoys turning ideas into clean, functional, and
        visually calm web experiences.
        <br /><br />
        I work comfortably with HTML, CSS, JavaScript, React, and backend
        basics, and I care deeply about structure, user experience, and
        the small details that make interfaces feel intuitive.
        <br /><br />
        I’ve built projects ranging from UI-focused applications to
        AI-assisted tools, and I’m continuously learning by building
        things end-to-end.
      </p>

      <button
        className="know-more-btn"
        onClick={() =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        View My Work
      </button>
    </section>
  );
}

export default About;
