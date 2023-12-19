import { formDataPropTypes } from "../PropTypesDefinitions";

function renderEducation(institution) {
  return (
    <div key={institution.id} className="institution-info">
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

function EducationPreview({ formData }) {
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
      {formData.education.map((institution) => (
        <div key={institution.id}>{renderEducation(institution)}</div>
      ))}
    </article>
  );
}

EducationPreview.propTypes = {
  formData: formDataPropTypes,
};

export default EducationPreview;
