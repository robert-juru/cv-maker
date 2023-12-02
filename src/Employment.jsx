import SectionHeader from "./SectionHeader";
import { useState, Fragment } from "react";
export default function Employment({
  formData,
  onInputChange,
  isActive,
  onShow,
  onHide,
  onAddEntry,
  onDeleteEntry,
}) {
  const [currentItemIndex, setCurrentItemIndex] = useState(null);
  function renderJob(index) {
    const job = formData.employment[index];
    return (
      <div key={job + index} className="employment">
        <label htmlFor="job-title">Job Title</label>
        <input
          value={formData.employment[index].jobTitle}
          onChange={(e) => onInputChange(index, e)}
          name="jobTitle"
          type="text"
          id="job-title"
          placeholder="Enter job title"
        />
        <label htmlFor="company-name">Company Name</label>
        <input
          value={formData.employment[index].companyName}
          onChange={(e) => onInputChange(index, e)}
          name="companyName"
          type="text"
          id="company-name"
          placeholder="Enter company name"
        />
        <label htmlFor="company-location">Company Location</label>
        <input
          value={formData.employment[index].companyLocation}
          onChange={(e) => onInputChange(index, e)}
          name="companyLocation"
          type="text"
          id="company-location"
          placeholder="Enter the location of the company"
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
            />
          </div>
        </div>
        <label htmlFor="description"> Job Description</label>
        <textarea
          rows={3}
          value={
            formData.employment[index].jobDescription &&
            formData.employment[index].jobDescription
              .split("\n")
              .map((line, i) => (i === 0 ? line.trim() : line.trimStart()))
              .join("\n")
          }
          onChange={(e) => onInputChange(index, e)}
          name="jobDescription"
          id="job-description"
          placeholder="Describe the main activities and responsabilities for this job"
        />
      </div>
    );
  }

  {
    !isActive && currentItemIndex !== null ? setCurrentItemIndex(null) : null;
  }

  function handleDeleteAndClose(itemId) {
    onDeleteEntry("employment", itemId);
    setCurrentItemIndex(null);
  }

  return (
    <form className="employment">
      <SectionHeader
        title="Employment"
        isActive={isActive}
        onHide={onHide}
        onShow={onShow}
      />
      {isActive ? (
        <>
          {formData.employment.map((job, index) => (
            <Fragment key={job + index}>
              <h3
                onClick={() =>
                  setCurrentItemIndex(currentItemIndex === index ? null : index)
                }
              >
                {currentItemIndex == null && job.companyName}
              </h3>
              {currentItemIndex === index && (
                <>
                  {renderJob(index)}
                  <div className="btn-container">
                    <button
                      type="button"
                      onClick={() => setCurrentItemIndex(null)}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteAndClose(job.id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </Fragment>
          ))}
          {currentItemIndex == null && (
            <button type="button" onClick={onAddEntry}>
              +Project
            </button>
          )}
        </>
      ) : null}
    </form>
  );
}
