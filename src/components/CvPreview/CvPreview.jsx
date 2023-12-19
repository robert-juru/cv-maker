import GeneralInformationPreview from "./GeneralInformationPreview.jsx";
import EducationPreview from "./EducationPreview.jsx";
import EmploymentPreview from "./EmploymentPreview.jsx";
import ProjectsPreview from "./ProjectsPreview.jsx";
import SkillsPreview from "./SkillsPreview.jsx";
import PropTypes from "prop-types";
import { formDataPropTypes } from "../PropTypesDefinitions.jsx";

function CvPreview({ formData, reference }) {
  return (
    <section className="cv-preview" ref={reference}>
      <GeneralInformationPreview formData={formData} />
      <EducationPreview formData={formData} />
      <EmploymentPreview formData={formData} />
      <ProjectsPreview formData={formData} />
      <SkillsPreview formData={formData} />
    </section>
  );
}

CvPreview.propTypes = {
  formData: formDataPropTypes,
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
export default CvPreview;
