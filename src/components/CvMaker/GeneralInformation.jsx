import SectionHeader from "./SectionHeader";
import { OptionalField, RecommendedField } from "./FieldType";
import PropTypes from "prop-types";
import { formDataPropTypes } from "../PropTypesDefinitions";

function GeneralInformation({
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
          <label htmlFor="full-name">Full Name</label>

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
            id="email"
            name="email"
            placeholder="Enter your email"
            maxLength={50}
          />
          <label htmlFor="phone-number">
            Phone number <RecommendedField />
          </label>
          <input
            value={formData.generalInformation.phoneNumber}
            onChange={(e) => onInputChange(e)}
            type="tel"
            id="phone-number"
            name="phoneNumber"
            placeholder="Enter your phone number"
            maxLength={15}
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
                id="github"
                placeholder="GitHub username"
                maxLength={39} // maximum length allowed by GitHub
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

GeneralInformation.propTypes = {
  formData: formDataPropTypes,
  onInputChange: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default GeneralInformation;
