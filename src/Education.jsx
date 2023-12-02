import SectionHeader from "./SectionHeader";
import { Fragment, useState } from "react";

export default function Education({
  formData,
  onInputChange,
  isActive,
  onShow,
  onHide,
  onAddEntry,
  onDeleteEntry,
}) {
  const [currentItemIndex, setCurrentItemIndex] = useState(null);

  function renderEducation(index) {
    const institution = formData.education[index];
    return (
      <div key={institution + index} className="education">
        <label htmlFor="school">School</label>
        <input
          value={formData.education[index].school}
          onChange={(e) => onInputChange(index, e)}
          name="school"
          type="text"
          id="school"
          placeholder="Enter the name of the school/university you attended"
        />
        <label htmlFor="degree">Degree</label>
        <input
          value={formData.education[index].degree}
          onChange={(e) => onInputChange(index, e)}
          name="degree"
          type="text"
          id="degree"
          placeholder="Enter the degree / field of study"
        />
        <label htmlFor="coursework">Relevant Coursework</label>
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
            <label htmlFor="start-date">Start Date</label>
            <input
              value={formData.education[index].startDate}
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
              value={formData.education[index].endDate}
              onChange={(e) => onInputChange(index, e)}
              name="endDate"
              type="text"
              id="end-date"
              placeholder="MM/YYYY or Present"
            />
          </div>
        </div>
        <label htmlFor="location">Location</label>
        <input
          value={formData.education[index].location}
          onChange={(e) => onInputChange(index, e)}
          name="location"
          type="text"
          id="location"
          placeholder="City, Country"
        />
      </div>
    );
  }

  {
    !isActive && currentItemIndex !== null ? setCurrentItemIndex(null) : null;
  }

  function handleDeleteAndClose(itemId) {
    onDeleteEntry("education", itemId);
    setCurrentItemIndex(null);
  }
  return (
    <form className="education">
      <SectionHeader
        title="Education"
        isActive={isActive}
        onHide={onHide}
        onShow={onShow}
      />
      {isActive ? (
        <>
          {formData.education.map((institution, index) => (
            <Fragment key={institution + index}>
              <h3
                onClick={() =>
                  setCurrentItemIndex(currentItemIndex === index ? null : index)
                }
              >
                {currentItemIndex == null && institution.school}
              </h3>
              {currentItemIndex === index && (
                <>
                  {renderEducation(index)}
                  <div className="btn-container">
                    <button
                      type="button"
                      onClick={() => setCurrentItemIndex(null)}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteAndClose(institution.id)}
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
              +Institution
            </button>
          )}
        </>
      ) : null}
    </form>
  );
}
