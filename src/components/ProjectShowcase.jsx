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
      <div
        className="project-card"
        onClick={() => window.open(project.link, "_blank")}
      >
        <h3>{project.title}</h3>
      </div>

      <div className="project-info">
        <p>{project.description}</p>      
      </div>
    </div>
  );
}

export default ProjectShowcase;
