export default function SkillsPreview({ formData }) {
  const hasNonEmptyValue = Object.values(formData.skills).some(
    (value) => value !== ""
  );
  return (
    <article className="skills">
      {hasNonEmptyValue && (
        <>
          <h2>Skills</h2>
          <hr />
        </>
      )}

      {formData.skills.languages && (
        <li className="languages">
          <strong>Languages: </strong>
          {formData.skills.languages}
        </li>
      )}
      {formData.skills.programmingLanguages && (
        <li className="programming-languages">
          <strong>Programming Languages: </strong>
          {formData.skills.programmingLanguages}
        </li>
      )}
      {formData.skills.frameworksAndLibraries && (
        <li className="frameworks-libraries">
          <strong>Frameworks and libraries: </strong>
          {formData.skills.frameworksAndLibraries}
        </li>
      )}
      {formData.skills.tools && (
        <li className="frameworks-libraries">
          <strong>Tools: </strong>
          {formData.skills.tools}
        </li>
      )}
      {formData.skills.softSkills && (
        <li className="frameworks-libraries">
          <strong>Soft skills: </strong>
          {formData.skills.softSkills}
        </li>
      )}
    </article>
  );
}
