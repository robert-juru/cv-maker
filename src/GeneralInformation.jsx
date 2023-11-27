export default function GeneralInformation({
  formData,
  onFormDataChange,
  onInputChange,
}) {
  return (
    <form className="general-information">
      <h2>General Information</h2>
      <label htmlFor="full-name">Full name</label>
      <input
        value={formData.generalInformation.fullName}
        onChange={(e) => onInputChange(e)}
        type="text"
        id="full-name"
        name="fullName"
        placeholder="First and last name"
      />
      <label htmlFor="email">Email</label>
      <input
        value={formData.generalInformation.email}
        onChange={(e) => onInputChange(e)}
        type="email"
        id="full-name"
        name="email"
        placeholder="Enter your email"
      />
      <label htmlFor="phone-number">Phone number</label>
      <input
        value={formData.generalInformation.phoneNumber}
        onChange={(e) => onInputChange(e)}
        type="tel"
        id="full-name"
        name="phoneNumber"
        placeholder="Enter your phone number"
      />
      <div id="employment-date-inputs" className="date-inputs">
        <div className="linkedin-container">
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            value={formData.generalInformation.linkedIn}
            onChange={(e) => onInputChange(e)}
            type="text"
            id="linkedin"
            name="linkedIn"
            placeholder="LinkedIn profile URL"
          />
        </div>
        <div className="github-container">
          <label htmlFor="github">GitHub</label>
          <input
            value={formData.generalInformation.gitHub}
            onChange={(e) => onInputChange(e)}
            name="gitHub"
            type="text"
            id="end-date"
            placeholder="GitHub username"
          />
        </div>
      </div>
      <label htmlFor="summary">Summary</label>
      <textarea
        value={formData.generalInformation.summary}
        onChange={(e) => onInputChange(e)}
        name="summary"
        id="summary"
        placeholder="Briefly describe yourself, your aspirations and interests"
        defaultValue={""}
      />
    </form>
  );
}
