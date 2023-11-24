export default function Skills() {
  return (
    <form className="skills">
      <h2>Skills</h2>
      <label htmlFor="languages">Languages</label>
      <input id="languages" placeholder="Language (Proficiency Level)" />
      <label htmlFor="programming-languages">Programming languages</label>
      <input
        id="languages"
        placeholder="List the programming languages you know"
      />
      <label htmlFor="languages">Frameworks and libraries</label>
      <input
        id="languages"
        placeholder="Share frameworks or libraries you're familiar with"
      />
      <label htmlFor="languages">Tools</label>
      <input
        id="languages"
        placeholder="Enter other relevant tools or technologies"
      />
    </form>
  );
}
