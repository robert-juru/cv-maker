import SectionHeader from "./SectionHeader";
import { OptionalField, RecommendedField } from "./FieldType";

export default function Employment({
  formData,
  onInputChange,
  isActive,
  onShow,
  onHide,
  renderSection,
}) {
  function renderJob(index) {
    const job = formData.employment[index];
    return (
      <div key={job + index} className="employment">
        <label htmlFor="company-name">Company Name</label>
        <input
          value={formData.employment[index].companyName}
          onChange={(e) => onInputChange(index, e)}
          name="companyName"
          type="text"
          id="company-name"
          placeholder="Enter company name"
          required
          maxLength={50}
        />
        <label htmlFor="job-title">Job Title</label>
        <input
          value={formData.employment[index].jobTitle}
          onChange={(e) => onInputChange(index, e)}
          name="jobTitle"
          type="text"
          id="job-title"
          placeholder="Enter job title"
          required
          maxLength={50}
        />
        <label htmlFor="company-location">
          Company Location
          <OptionalField />
        </label>
        <input
          value={formData.employment[index].companyLocation}
          onChange={(e) => onInputChange(index, e)}
          name="companyLocation"
          type="text"
          id="company-location"
          placeholder="Enter the location of the company"
          maxLength={30}
        />
        <div id="employment-date-inputs" className="date-inputs">
          <div className="start-date-container">
            <label htmlFor="start-date">Start Date</label>
            <input
              value={formData.employment[index].startDate}
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
            <label htmlFor="end-date">End Date</label>
            <input
              value={formData.employment[index].endDate}
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
        <label htmlFor="description">
          Job Description
          <RecommendedField />
        </label>
        <textarea
          rows={3}
          value={
            formData.employment[index].jobDescription &&
            formData.employment[index].jobDescription
              .split("\n")
              .map((line) => line.trimStart())
              .join("\n")
          }
          onChange={(e) => onInputChange(index, e)}
          name="jobDescription"
          id="description"
          placeholder="Describe the main activities and responsabilities for this job"
          maxLength={400}
        />
      </div>
    );
  }
  return (
    <section className="employment">
      <SectionHeader
        title="Employment"
        isActive={isActive}
        onHide={onHide}
        onShow={onShow}
      />
      {renderSection("employment", "companyName", 2, renderJob)}
    </section>
  );
}
