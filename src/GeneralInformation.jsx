export default function GeneralInformation({
  // generalInfo,
  // onGeneralInfoChange,
  formData,
  onFormDataChange,
}) {
  function handleInputChange(e) {
    const { name, value } = e.target;
    const updatedInfo = {
      ...formData,
      generalInformation: {
        ...formData.generalInformation,
        [name]: value,
      },
    };
    onFormDataChange(updatedInfo);
  }

  return (
    <form className="general-information">
      <h2>General Information</h2>
      <label htmlFor="full-name">Full name</label>
      <input
        value={formData.generalInformation.fullName}
        onChange={handleInputChange}
        type="text"
        id="full-name"
        name="fullName"
        placeholder="First and last name"
      />
      <label htmlFor="email">Email</label>
      <input
        value={formData.generalInformation.email}
        onChange={handleInputChange}
        type="email"
        id="full-name"
        name="email"
        placeholder="Enter your email"
      />
      <label htmlFor="phone-number">Phone number</label>
      <input
        value={formData.generalInformation.phoneNumber}
        onChange={handleInputChange}
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
            onChange={handleInputChange}
            type="text"
            id="linkedin"
            placeholder="LinkedIn profile URL"
          />
        </div>
        <div className="github-container">
          <label htmlFor="github">GitHub</label>
          <input
            value={formData.generalInformation.gitHub}
            onChange={handleInputChange}
            name="gitHub"
            type="text"
            id="end-date"
            placeholder="GitHub username"
          />
        </div>
      </div>
      <label htmlFor="address">Address</label>
      <input
        value={formData.generalInformation.address}
        onChange={handleInputChange}
        name="address"
        type="text"
        id="address"
        placeholder="City, Country"
      />
      <label htmlFor="summary">Summary</label>
      <textarea
        value={formData.generalInformation.summary}
        onChange={handleInputChange}
        name="summary"
        id="summary"
        placeholder="Briefly describe yourself, your aspirations and interests"
        defaultValue={""}
      />
    </form>
  );
}
