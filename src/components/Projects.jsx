import ProjectShowcase from "./ProjectShowcase";

const projects = [
  {
    title: "Full-Stack Product Development",
    organization: "Quanta People (formerly TMI Groups)",
    period: "Frontend Developer Intern · Jan 12 – Jul 13, 2026",
    description:
      "Built a complete product from scratch with Next.js and React, using Server Actions for backend functionality and MongoDB for data storage. Fixed bugs, delivered production releases, built REST APIs for admin configuration, and deployed the product to AWS Lightsail.",
    technologies: ["Next.js", "React", "Server Actions", "MongoDB", "AWS Lightsail"],
  },
  {
    title: "JavaScript Projects For Practice",
    description:
      "A collection of small JavaScript projects to enhance coding skills.",
    link: "https://github.com/lakshmitulasimandala/Javascript-Projects",
  },
  {
    title: "TMDB Movie Recommendation",
    description:
      "Movie recommendation system using collaborative filtering and TMDB dataset.",
    link: "https://github.com/lakshmitulasimandala/TMDB-Movie-Recommendation",
  },
  {
    title: "Budget App",
    description:
      "Deployed a simple budget tracking application built with JavaScript.",
    link: "https://budjet-w1zb.onrender.com/",
  },
  {
    title: "Minor Project",
    description:
      "Full-stack academic project built as part of my degree curriculum.",
    link: "https://github.com/lakshmitulasimandala/Minor-Project",
  },
  {
    title: "Youtube Clone",
    description:
      "A clone of YouTube's front-end using React and Tailwind CSS, with additional features.",
    link: "https://github.com/lakshmitulasimandala/youtube-clone",
  }
];


function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-inner">
        <h2 className="projects-title">Projects</h2>

        {projects.map((project, index) => (
          <ProjectShowcase
            key={project.title}
            project={project}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
