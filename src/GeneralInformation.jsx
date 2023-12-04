import SectionHeader from "./SectionHeader";
import { RequiredField, OptionalField, RecommendedField } from "./FieldType";

export default function GeneralInformation({
  formData,
  onInputChange,
  isActive,
  onShow,
  onHide,
}) {
  return (
    <section className="general-information">
      <SectionHeader
        title="General Information"
        isActive={isActive}
        onHide={onHide}
        onShow={onShow}
      />
      {isActive ? (
        <>
          <label htmlFor="full-name">
            Full Name
            <RequiredField />
          </label>

          <input
            value={formData.generalInformation.fullName}
            onChange={(e) => onInputChange(e)}
            type="text"
            id="full-name"
            name="fullName"
            placeholder="First and last name"
            required
            minLength={4}
            maxLength={30}
          />
          <label htmlFor="email">
            Email
            <RecommendedField />
          </label>
          <input
            value={formData.generalInformation.email}
            onChange={(e) => onInputChange(e)}
            type="email"
            id="full-name"
            name="email"
            placeholder="Enter your email"
          />
          <label htmlFor="phone-number">
            Phone number <RecommendedField />
          </label>
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
              <label htmlFor="linkedin">
                LinkedIn <OptionalField />
              </label>
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
              <label htmlFor="github">
                GitHub
                <OptionalField />
              </label>
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
          <label htmlFor="summary">
            Summary <OptionalField />
          </label>
          <textarea
            value={formData.generalInformation.summary}
            onChange={(e) => onInputChange(e)}
            name="summary"
            id="summary"
            placeholder="Briefly describe yourself, your aspirations and interests"
            maxLength={300}
          />
        </>
      ) : null}
    </section>
  );
}
