export default function Education() {
  return (
    <form className="education">
      <h2>Education</h2>
      <label htmlFor="school">School</label>
      <input
        type="text"
        id="school"
        placeholder="Enter the name of the school/university you attended"
      />
      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        id="degree"
        placeholder="Enter the degree / field of study"
      />
      <label htmlFor="coursework">Relevant Coursework</label>
      <input
        type="text"
        id="degree"
        placeholder="List relevant courses (e.g. Algorithms, Web Development)"
      />
      <div id="education-date-inputs" className="date-inputs">
        <div className="start-date-container">
          <label htmlFor="start-date">Start Date</label>
          <input type="text" id="start-date" placeholder="MM/YYYY" />
        </div>
        <div className="end-date-container">
          <label htmlFor="end-date">End Date</label>
          <input type="text" id="end-date" placeholder="MM/YYYY or Present" />
        </div>
      </div>
      <label htmlFor="location">Location</label>
      <input type="text" id="location" placeholder="City, Country" />
    </form>
  );
}
