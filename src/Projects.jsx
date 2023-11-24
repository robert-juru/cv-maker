export default function Projects() {
    return (<form className="projects">
    <h2>Projects</h2>
    <label htmlFor="project-name">Project Name</label>
    <input
      type="project-name"
      id="project-name"
      placeholder="Enter the name of the project"
    />
    <label htmlFor="project-link">Project Link</label>
    <input
      type="project-name"
      id="project-name"
      placeholder="Add project link or repository URL (e.g. GitHub, GitLab, Bitbucket etc)"
    />
    <label htmlFor="project-description">Project Description</label>
    <textarea
      rows={3}
      id="description"
      placeholder="Describe the project's purpose, technologies used and notable features"
      defaultValue={""}
    />
  </form>)
}