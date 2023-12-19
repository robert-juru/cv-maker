import PropTypes from "prop-types";

export const formDataPropTypes = PropTypes.shape({
  generalInformation: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    linkedIn: PropTypes.string.isRequired,
    gitHub: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }).isRequired,
  education: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      school: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      relevantCoursework: PropTypes.string,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
  employment: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      companyName: PropTypes.string.isRequired,
      companyLocation: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      jobDescription: PropTypes.string.isRequired,
    })
  ).isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      projectName: PropTypes.string.isRequired,
      projectLink: PropTypes.string.isRequired,
      projectDescription: PropTypes.string.isRequired,
    })
  ).isRequired,
  skills: PropTypes.shape({
    languages: PropTypes.string.isRequired,
    programmingLanguages: PropTypes.string.isRequired,
    frameworksAndLibraries: PropTypes.string.isRequired,
    tools: PropTypes.string.isRequired,
    softSkills: PropTypes.string.isRequired,
  }).isRequired,
}).isRequired;
