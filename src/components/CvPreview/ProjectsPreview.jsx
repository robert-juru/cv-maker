import { formDataPropTypes } from "../PropTypesDefinitions";

function renderProjects(project) {
  return (
    <div key={project.id} className="project-info">
      <h3 className="project-name-cv">{project.projectName}</h3>
      <a href={project.projectLink} className="project-link">
        <em>{project.projectLink}</em>
      </a>
      <ul className="project-details">
        {project.projectDescription &&
          project.projectDescription
            .trim()
            .split("\n")
            .map((detail, detailIndex) => (
              <li key={detailIndex}>{detail.trim()}</li>
            ))}
      </ul>
    </div>
  );
}

function ProjectsPreview({ formData }) {
  const isNonEmpty =
    formData.projects.filter(
      (item) => Object.values(item).filter((value) => value !== "").length >= 2
    ).length > 0;
  return (
    <article className="projects">
      {isNonEmpty && (
        <>
          <h2>Projects</h2>
          <hr />
        </>
      )}

      {formData.projects.map((project) => (
        <div key={project.id}>{renderProjects(project)}</div>
      ))}
    </article>
  );
}

ProjectsPreview.propTypes = {
  formData: formDataPropTypes,
};

export default ProjectsPreview;
