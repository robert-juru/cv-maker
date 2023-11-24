export default function ExperiencePreview() {
  return (
    <article className="job-experience-container">
      <h2>Employment</h2>
      <hr />
      <div className="company-info">
        <h3 className="company-name-cv">
          <strong>Compania Smechera</strong>
        </h3>
        <span className="company-location">Bucuresti, Romania</span>
      </div>
      <div className="job-info">
        <span className="job-position">Junior Frontend Developer</span>
        <span className="job-duration">July, 2021- Present</span>
      </div>
      <div className="job-description">
        <li>
          Collaborated with cross-functional teams to develop and implement
          user-facing features using modern web technologies.
        </li>
        <li>
          Designed and maintained responsive web applications, ensuring seamless
          user experiences across various devices.
        </li>
        <li>
          Contributed to the development and enhancement of the front-end
          architecture to improve performance and scalability.
        </li>
      </div>
    </article>
  );
}
