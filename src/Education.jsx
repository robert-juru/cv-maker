import SectionHeader from "./SectionHeader";
import { Fragment, useState } from "react";

export default function Education({
  formData,
  onInputChange,
  isActive,
  onShow,
  onHide,
  onChange
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  // function addNewEntry(section,index) {
  //   return (
  //     <button onClick={() => renderEducation(formData.education.length)}>
  //       +Education
  //     </button>
  //   );
  // }
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
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                {institution.school}
              </h3>
              {activeIndex === index && renderEducation(index)}
            </Fragment>
          ))}
          {/* {formData.education.map((institution, index) => renderEducation(index))} */}
          <button type="button" onClick={onChange}>
            +Education
          </button>
        </>
      ) : null}
    </form>
  );
}
