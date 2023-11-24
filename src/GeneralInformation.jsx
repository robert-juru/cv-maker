export default function GeneralInformation() {
  return (
    <form className="general-information">
      <h2>General Information</h2>
      <label htmlFor="full-name">Full name</label>
      <input type="text" id="full-name" placeholder="First and last name" />
      <label htmlFor="email">Email</label>
      <input type="email" id="full-name" placeholder="Enter your email" />
      <label htmlFor="phone-number">Phone number</label>
      <input type="tel" id="full-name" placeholder="Enter your phone number" />
      <div id="employment-date-inputs" className="date-inputs">
        <div className="start-date-container">
          <label htmlFor="start-date">LinkedIn</label>
          <input
            type="text"
            id="start-date"
            placeholder="Enter your LinkedIn profile"
          />
        </div>
        <div className="end-date-container">
          <label htmlFor="end-date">GitHub</label>
          <input
            type="text"
            id="end-date"
            placeholder="Enter your GitHub profile"
          />
        </div>
      </div>
      <label htmlFor="address">Address</label>
      <input type="text" id="address" placeholder="City, Country" />
      <label htmlFor="summary">Summary</label>
      <textarea
        id="summary"
        placeholder="Briefly describe yourself, your aspirations and interests"
        defaultValue={""}
      />
    </form>
  );
}
