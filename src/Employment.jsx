export default function Employment() {
  return (
    <form className="employment">
      <h2>Employment</h2>
      <label htmlFor="job-title">Job Title</label>
      <input type="text" id="job-title" placeholder="Enter job title" />
      <label htmlFor="company-name">Company Name</label>
      <input type="text" id="company-name" placeholder="Enter company name" />
      <div id="employment-date-inputs" className="date-inputs">
        <div className="start-date-container">
          <label htmlFor="start-date">Start Date</label>
          <input type="text" id="start-date" placeholder="MM/YYYY" />
        </div>
        <div className="end-date-container">
          <label htmlFor="end-date">End Date</label>
          <input type="text" id="end-date" placeholder="MM/YYYY or Present" />
        </div>
      </div>
      <label htmlFor="description"> Job Description</label>
      <textarea
        rows={3}
        id="job-description"
        placeholder="Describe the main activities and responsabilities for this job"
        defaultValue={""}
      />
    </form>
  );
}
