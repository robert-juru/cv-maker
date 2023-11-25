import data from "./data";
let education = data.education;
let institutionIdCounter = 0;

function renderEducation() {
  return education.map((institution) => {
    institutionIdCounter++;
    return (
      <div
        key={institution.school + institutionIdCounter}
        className="institution-info"
      >
        <div className="institution-general">
          <h3 className="institution-name">
            <strong>{institution.school}</strong>
          </h3>
          <span className="institution-location">{institution.location}</span>
        </div>
        <div className="institution-details">
          <li className="degree">{institution.degree}</li>
          <span className="study-duration">
            {institution.startDate} - {institution.endDate}
          </span>
        </div>
        <div className="institution-coursework">
          <p className="relevant-coursework">
            {institution.relevantCoursework && (
              <>
                <em>Relevant Coursework:</em> {institution.relevantCoursework}
              </>
            )}
          </p>
        </div>
      </div>
    );
  });
}

export default function EducationPreview() {
  return (
    <article className="education-container">
      <h2>Education</h2>
      <hr />
      {renderEducation()}
    </article>
  );
}
