import SectionHeader from "./SectionHeader";
import { useState, Fragment } from "react";

export default function Projects({
  formData,
  onInputChange,
  isActive,
  onShow,
  onHide,
  onAddEntry,
  onDeleteEntry, onFormDataChange,
}) {
  const [currentItemIndex, setCurrentItemIndex] = useState(null);

  function renderProject(index) {
    const project = formData.projects[index];
    return (
      <div key={project + index} className="projects">
        <label htmlFor="project-name">Project Name</label>
        <input
          value={formData.projects[index].projectName}
          onChange={(e) => onInputChange(index, e)}
          name="projectName"
          type="project-name"
          id="project-name"
          placeholder="Enter the name of the project"
        />
        <label htmlFor="project-link">Project Link</label>
        <input
          value={formData.projects[index].projectLink}
          onChange={(e) => onInputChange(index, e)}
          name="projectLink"
          type="project-link"
          id="project-link"
          placeholder="Add project link or repository URL (e.g. GitHub, GitLab, Bitbucket etc)"
        />
        <label htmlFor="project-description">Project Description</label>
        <textarea
          rows={3}
          value={
            formData.projects[index].projectDescription &&
            formData.projects[index].projectDescription
              .split("\n")
              .map((line, i) => line.trimStart())
              .join("\n")
          }
          onChange={(e) => onInputChange(index, e)}
          name="projectDescription"
          id="description"
          placeholder="Describe project details and use Enter to create new bullet points"
        />
      </div>
    );
  }
 
  if (!isActive && currentItemIndex !== null) {
    setCurrentItemIndex(null);
  }

  const handleDeleteAndClose = (projectId) => {
    onDeleteEntry(projectId);
    setCurrentItemIndex(null);
  };
  return (
    <form className="projects">
      <SectionHeader
        title="Projects"
        isActive={isActive}
        onHide={onHide}
        onShow={onShow}
      />
      {isActive ? (
        <>
          {formData.projects.map((project, index) => (
            <Fragment key={project + index}>
              <h3
                onClick={() =>
                  setCurrentItemIndex(currentItemIndex === index ? null : index)
                }
              >
                {currentItemIndex == null && project.projectName}
              </h3>
              {currentItemIndex === index && (
                <>
                  {renderProject(index)}
                  <div className="btn-container">
                    <button type="button" onClick={() => setCurrentItemIndex(null)}>
                      Close
                    </button>
                    <button type="button" onClick={() =>handleDeleteAndClose(project.id)}>
                      Delete
                    </button>
                  </div>
                </>
              )}
            </Fragment>
          ))}
          {currentItemIndex == null && (
            <button type="button" onClick={onAddEntry}>
              +Project
            </button>
          )}
        </>
      ) : null}
    </form>
  );
}
