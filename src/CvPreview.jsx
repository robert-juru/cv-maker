import GeneralInformationPreview from "./GeneralInformationPreview.jsx";
import EducationPreview from "./EducationPreview.jsx";
import EmploymentPreview from "./EmploymentPreview.jsx";
import ProjectsPreview from "./ProjectsPreview.jsx";
import SkillsPreview from "./SkillsPreview.jsx";

export default function CvPreview({ formData, reference }) {
  return (
    <section className="cv-preview" ref={reference}  >
      <GeneralInformationPreview formData={formData} />
      <EducationPreview formData={formData} />
      <EmploymentPreview formData={formData} />
      <ProjectsPreview formData={formData} />
      <SkillsPreview formData={formData} />
    </section>
  );
}
