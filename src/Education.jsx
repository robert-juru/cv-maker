import SectionHeader from "./SectionHeader";
import { RequiredField, OptionalField } from "./FieldType";

export default function Education({
  formData,
  onInputChange,
  isActive,
  onShow,
  onHide,
  renderSection,
}) {
  function renderEducation(index) {
    const institution = formData.education[index];
    return (
      <div key={institution + index} className="education">
        <label htmlFor="school">
          School
          <RequiredField />
        </label>
        <input
          value={formData.education[index].school}
          onChange={(e) => onInputChange(index, e)}
          name="school"
          type="text"
          id="school"
          placeholder="Enter the name of the school/university you attended"
          required
          maxLength={50}
        />
        <label htmlFor="degree">
          Degree <RequiredField />
        </label>
        <input
          value={formData.education[index].degree}
          onChange={(e) => onInputChange(index, e)}
          name="degree"
          type="text"
          id="degree"
          placeholder="Enter the degree / field of study"
          required
          maxLength={150}
        />
        <label htmlFor="coursework">
          Relevant Coursework
          <OptionalField />
        </label>
        <input
          value={formData.education[index].relevantCoursework}
          onChange={(e) => onInputChange(index, e)}
          name="relevantCoursework"
          type="text"
          id="degree"
          placeholder="List relevant courses (e.g. Algorithms, Web Development)"
        />
        <div id="education-date-inputs" className="date-inputs">
          <div className="start-date-container">
            <label htmlFor="start-date">
              Start Date <RequiredField />
            </label>
            <input
              value={formData.education[index].startDate}
              onChange={(e) => onInputChange(index, e)}
              name="startDate"
              type="text"
              id="start-date"
              placeholder="MM/YYYY"
              required
              minLength={7}
              maxLength={7}
            />
          </div>
          <div className="end-date-container">
            <label htmlFor="end-date">
              End Date <RequiredField />
            </label>
            <input
              value={formData.education[index].endDate}
              onChange={(e) => onInputChange(index, e)}
              name="endDate"
              type="text"
              id="end-date"
              placeholder="MM/YYYY or Present"
              required
              minLength={7}
              maxLength={7}
            />
          </div>
        </div>
        <label htmlFor="location">
          Location
          <OptionalField />
        </label>
        <input
          value={formData.education[index].location}
          onChange={(e) => onInputChange(index, e)}
          name="location"
          type="text"
          id="location"
          placeholder="City, Country"
          maxLength={30}
        />
      </div>
    );
  }
  return (
    <section className="education">
      <SectionHeader
        title="Education"
        isActive={isActive}
        onHide={onHide}
        onShow={onShow}
      />
      {renderSection("education", "school", 1, renderEducation)}
    </section>
  );
}
