let jobIdCounter = 0;

function renderEmployment(job) {
  jobIdCounter++;
  return (
    <div key={job.companyName + jobIdCounter} className="employment-info">
      <div className="company-info">
        <h3 className="company-name-cv">{job.companyName}</h3>
        <span className="company-location">{job.companyLocation}</span>
      </div>
      <div className="job-info">
        <span className="job-position">{job.jobTitle}</span>
        {job.startDate && (
          <span className="job-duration">
            {job.startDate} - {job.endDate}
          </span>
        )}
      </div>
      <div className="job-description">
        {job.jobDescription &&
          job.jobDescription
            .trim()
            .split("\n")
            .map((detail, detailIndex) => (
              <li key={detail + detailIndex}>{detail.trim()}</li>
            ))}
      </div>
    </div>
  );
  // });
}

export default function EmploymentPreview({ formData }) {
  const isNonEmpty =
    formData.employment.filter(
      (item) => Object.values(item).filter((value) => value !== "").length >= 2
    ).length > 0;

  return (
    <article className="job-experience-container">
      {isNonEmpty && (
        <>
          <h2>Employment</h2>
          <hr />
        </>
      )}

      {formData.employment.map((job, index) => (
        <div key={job.jobName + index}>{renderEmployment(job)}</div>
      ))}
    </article>
  );
}
