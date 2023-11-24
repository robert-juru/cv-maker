import data from "./data";
let generalInformation = data.generalInformation;

export default function GeneralInformationPreview() {
  return (
    <article className="general-information">
      <div className="name-container">
        <h1 className="full-name">{generalInformation.fullName}</h1>
      </div>
      <div className="contact-container">
        <a href="mailto:juru0188@gmail.com" className="mail">
          <img
            className="contact-icon"
            src="src\assets\mail2.svg"
            alt="mail icon"
          />
          <span className="underlined">{generalInformation.email}</span>&nbsp;|
        </a>

        <a href={generalInformation.linkedIn} className="linkedin">
          <img
            className="contact-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
            alt="linkedin icon"
          />
          <span className="underlined">LinkedIn Profile </span>&nbsp;|
        </a>

        <a
          href={"https://github.com/" + generalInformation.gitHub}
          className="github"
        >
          <img
            className="contact-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="github-icon"
          />
          <span className="underlined">{generalInformation.gitHub}</span>&nbsp;|
        </a>

        <span className="phone-number">
          <img
            className="contact-icon"
            src="src\assets\phone.svg"
            alt="phone icon"
          />
          <span>{generalInformation.phoneNumber}</span>
        </span>
      </div>
      <p className="summary">{generalInformation.summary}</p>
    </article>
  );
}
