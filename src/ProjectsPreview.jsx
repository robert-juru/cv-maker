import { Fragment } from "react";
let projectIdCounter = 0;

function renderProjects(project) {
  projectIdCounter++;
  return (
    <div key={project.projectName + projectIdCounter} className="project-info">
      <h3 className="project-name-cv">{project.projectName}</h3>
      <a href={project.projectLink} className="project-link">
        <em>{project.projectLink}</em>
      </a>
      <ul className="project-details">
        {project.projectDescription &&
          project.projectDescription
            .trim() // Remove leading/trailing whitespace
            .split("\n") // Split the string by newline characters
            .map((detail, detailIndex) => (
              <li key={detailIndex}>{detail.trim()}</li>
            ))}
      </ul>
    </div>
  );
}

export default function ProjectsPreview({ formData }) {
  return (
    <article className="projects">
      {formData.projects.length > 1 && (
        <>
          <h2>Projects</h2>
          <hr />
        </>
      )}

      {formData.projects.map((project, index) => (
        <div key={project.projectName + index}>{renderProjects(project)}</div>
      ))}
    </article>
  );
}
