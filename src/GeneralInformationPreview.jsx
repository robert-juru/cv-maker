export default function GeneralInformationPreview() {
  return (
    <article className="general-information">
      <div className="name-container">
        <h1 className="full-name">ROBERT SURUBARIU</h1>
      </div>
      <div className="contact-container">
        <span className="mail">
          <img
            className="contact-icon"
            src="src\assets\mail2.svg"
            alt="mail icon"
          />
          <span>juru0188@gmail.com |</span>
        </span>
        <span className="linkedin">
          <img
            className="contact-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
            alt="linkedin icon"
          />
            <span>LinkedIn Profile |</span>
        </span>
        <span className="github">
          <img
            className="contact-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="github-icon"
          />
          <u>
            <span>robert-juru |</span>
          </u>
        </span>
        <span className="phone-number">
          <img
            className="contact-icon"
            src="src\assets\phone.svg"
            alt="phone icon"
          />
          <span>0788271513</span>
        </span>
      </div>
      <p className="summary">
        Interested in technology and eager to learn new things every day.
        Passionate about programming, especially front-end development for web
        applications.
      </p>
    </article>
  );
}
