import SectionHeader from "./SectionHeader";

export default function Education({ formData, onInputChange, isActive, onShow, onHide }) {
  return (
    <form className="education">
       <SectionHeader
        title="Education"
        isActive={isActive}
        onHide={onHide}
        onShow={onShow}
      />
      {isActive
        ? formData.education.map((institution, index) => (
            <div key={institution + index} className="education">
              <h3>Education {index + 1}</h3>
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
          ))
        :  null}
    </form>
  );
}
