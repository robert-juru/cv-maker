export default function EducationPreview() {
  return (
    <article className="education-container">
      <h2>Education</h2>
      <hr />
      <div className="institution-info">
        <div className="institution-general">
          <h3 className="institution-name">
            <strong>Academia de Studii Economice</strong>
          </h3>
          <span className="institution-location">Bucuresti, Romania</span>
        </div>
        <div className="institution-details">
          <li className="degree">Bachelor&apos;s Degree in Computer Science</li>
          <span className="study-duration">Oct. 2020 - June 2023</span>
        </div>
        <div className="institution-coursework">
          <p className="relevant-coursework">
            <strong>Relevant Coursework:</strong> Object-Oriented Programming,
            Database, Web Development, Algorithms.
          </p>
        </div>
      </div>
      <div className="institution-info">
        <div className="institution-general">
          <h3 className="institution-name">
            <strong>Liceul de Informaticieni Galactici</strong>
          </h3>
          <span className="institution-location">Bucuresti, Romania</span>
        </div>
        <div className="institution-details">
          <li className="degree">Bacalaureat intergalactic (9.83)</li>
          <span className="study-duration">Oct. 2020 - June 2023</span>
        </div>
        <div className="institution-coursework">
          <p className="relevant-coursework">
            <strong>Relevant Coursework:</strong> Sport, TIC, Educatie Plastica.
          </p>
        </div>
      </div>
    </article>
  );
}
