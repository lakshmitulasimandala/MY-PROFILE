import { useEffect, useRef } from "react";

function ProjectShowcase({ project, reverse }) {
  const ref = useRef(null);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        ref.current.classList.add("show");
      } else {
        ref.current.classList.remove("show");
      }
    },
    { threshold: 0.25 }
  );

  observer.observe(ref.current);
  return () => observer.disconnect();
}, []);


  return (
    <div
      ref={ref}
      className={`project-row ${reverse ? "reverse" : ""}`}
    >
      {project.link ? (
        <a
          className="project-card project-card-link"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          <h3>{project.title}</h3>
        </a>
      ) : (
        <div className="project-card project-card-static">
          <h3>{project.title}</h3>
        </div>
      )}

      <div className="project-info">
        {project.organization && (
          <p className="project-meta">
            {project.organization} · {project.period}
          </p>
        )}
        <p>{project.description}</p>
        {project.technologies && (
          <ul className="project-technologies" aria-label="Technologies used">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ProjectShowcase;
