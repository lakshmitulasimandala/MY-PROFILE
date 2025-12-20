function ProjectCard({ title, children }) {
  return (
    <div className="col-4">
      <div className="card-container">
        <h1 className="text-center shadow">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}

export default ProjectCard;
