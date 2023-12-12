let institutionIdCounter = 0;

function renderEducation(institution) {
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
        {institution.degree && <li className="degree">{institution.degree}</li>}
        {(institution.startDate || institution.endDate) && (
          <span className="study-duration">
            {institution.startDate} - {institution.endDate}
          </span>
        )}
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
}

export default function EducationPreview({ formData }) {
  const isNonEmpty =
  formData.education.filter(
    (item) => Object.values(item).filter((value) => value !== "").length >= 2
  ).length > 0;
  return (
    <article className="education-container">
      {isNonEmpty && (
        <>
          <h2>Education</h2>
          <hr />
        </>
      )}
      {formData.education.map((institution, index) => (
        <div key={institution.school + index}>
          {renderEducation(institution)}
        </div>
      ))}
    </article>
  );
}
