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
        {project.projectDescription.map((projectDetail) => (
          <Fragment
            key={project.projectName + projectIdCounter + projectDetail}
          >
            <li>{projectDetail}</li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectsPreview({ formData }) {
  return (
    <article className="projects">
      <h2>Projects</h2>
      <hr />
      {formData.projects.map((project, index) => (
        <div key={project.projectName + index}>{renderProjects(project)}</div>
      ))}
    </article>
  );
}
