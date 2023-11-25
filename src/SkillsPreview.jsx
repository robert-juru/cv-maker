import data from "./data";

let skills = data.skills;
export default function SkillsPreview() {
  return (
    <article className="skills">
      <h2>Skills</h2>
      <hr />
      <li className="languages">
        <strong>Languages: </strong>
        {skills.languages}
      </li>
      <li className="programming-languages">
        <strong>Programming Languages: </strong>
        {skills.programmingLanguages}
      </li>
      {skills.frameworksAndLibraries && (
        <li className="frameworks-libraries">
          <strong>Frameworks and libraries: </strong>
          {skills.frameworksAndLibraries}
        </li>
      )}
      {skills.tools && (
        <li className="frameworks-libraries">
          <strong>Tools: </strong>
          {skills.tools}
        </li>
      )}
       {skills.softSkills && (
        <li className="frameworks-libraries">
          <strong>Soft skills: </strong>
          {skills.softSkills}
        </li>
      )}
    </article>
  );
}
