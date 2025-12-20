import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects">
      {/* FIRST ROW */}
      <div className="container">
        <div className="row">
          <ProjectCard title="CRACKATHON">
            <img
              src="/images/cerebro_logo.png"
              alt="CRACKATHON"
              className="w-50"
              style={{ borderRadius: "100px" }}
            />
            <p>
              This project is retired! Unfortunately, this project is no
              longer available. Don&apos;t worry, it may come back some
              day. In the meantime, why not check out some of my other
              projects?
            </p>
          </ProjectCard>

          <ProjectCard title="The Basic Calculator">
            <img
              src="/images/calculator_image.png"
              alt="Calculator"
              style={{
                width: "100px",
                marginBottom: "10px",
                marginTop: "20px",
              }}
            />
            <p>
              This is a basic calculator. Built using HTML, CSS, and
              JavaScript.
            </p>
          </ProjectCard>

          <ProjectCard title="Evexa">
            <ul style={{ textAlign: "center" }}>
              <li>Role: Creator & Developer</li>
              <li>Duration: April 2025</li>
            </ul>
            <p>
              Evexa is a conversational AI assistant built during the
              Google x Kaggle GenAI Capstone Challenge. It helps users
              plan events step-by-step and generates a downloadable PDF.
            </p>
          </ProjectCard>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="container">
        <div className="row">
          <ProjectCard title="YouTube Dashboard Clone">
            <img
              src="/images/youtube_logo_icon.png"
              alt="YouTube"
              style={{ borderRadius: "100px", width: "100px" }}
            />
            <p>Built for the Outlier Hackathon.</p>
          </ProjectCard>

          <ProjectCard title="Mobile Automation">
            <p>
              This is a Mobile Automation System built during my AICTE
              Microsoft Edunet Internship in AI NSI.
            </p>
          </ProjectCard>

          <ProjectCard title="Sign Language Detector">
            <ul style={{ textAlign: "center" }}>
              <li>Role: Creator & Developer</li>
              <li>Duration: April 2025</li>
            </ul>
            <p>Soon the launch happens.</p>
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}

export default Projects;
