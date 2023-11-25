import data from "./data";
import { Fragment } from "react";

let employment = data.employment;
let jobIdCounter = 0;

function renderEmployment() {
  return employment.map((job) => {
    jobIdCounter++;
    return (
      <Fragment key={job.companyName + jobIdCounter}>
        <div className="company-info">
          <h3 className="company-name-cv">{job.companyName}</h3>
          <span className="company-location">{job.companyLocation}</span>
        </div>
        <div className="job-info">
          <span className="job-position">{job.jobTitle}</span>
          <span className="job-duration">
            {job.startDate} - {job.endDate}
          </span>
        </div>
        <div className="job-description">
          {job.jobDescription.map((jobDetail) => (
            <Fragment key={job.companyName + jobIdCounter + jobDetail}>
              <li>{jobDetail}</li>
            </Fragment>
          ))}
        </div>
      </Fragment>
    );
  });
}

export default function EmploymentPreview() {
  return (
    <article className="job-experience-container">
      <h2>Employment</h2>
      <hr />
      {renderEmployment()}
    </article>
  );
}
