import SectionHeader from "./SectionHeader";

export default function Skills({ formData, onInputChange, isActive, onShow, onHide }) {
  return (
    <form className="skills">
         <SectionHeader
        title="Skills"
        isActive={isActive}
        onHide={onHide}
        onShow={onShow}
      />
      {isActive ? (
        <>
          <label htmlFor="languages">Languages</label>
          <input
            value={formData.skills.languages}
            onChange={(e) => onInputChange(e)}
            name="languages"
            id="languages"
            placeholder="Language (Proficiency Level)"
          />
          <label htmlFor="programming-languages">Programming languages</label>
          <input
            value={formData.skills.programmingLanguages}
            onChange={(e) => onInputChange(e)}
            name="programmingLanguages"
            id="programming-languages"
            placeholder="List the programming languages you know"
          />
          <label htmlFor="frameworks-and-libraries">
            Frameworks and libraries
          </label>
          <input
            value={formData.skills.frameworksAndLibraries}
            onChange={(e) => onInputChange(e)}
            name="frameworksAndLibraries"
            id="frameworks-and-libraries"
            placeholder="Share frameworks or libraries you're familiar with"
          />
          <label htmlFor="tools">Tools</label>
          <input
            value={formData.skills.tools}
            onChange={(e) => onInputChange(e)}
            name="tools"
            id="tools"
            placeholder="Enter other relevant tools or technologies"
          />
          <label htmlFor="soft-skills">Soft skills</label>
          <input
            value={formData.skills.softSkills}
            onChange={(e) => onInputChange(e)}
            name="softSkills"
            id="soft-skills"
            placeholder="Enter other relevant tools or technologies"
          />
        </>
      ) : null}
    </form>
  );
}
