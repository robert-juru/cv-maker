import GeneralInformationPreview from "./GeneralInformationPreview.jsx";
import EducationPreview from "./EducationPreview.jsx";
import EmploymentPreview from "./EmploymentPreview.jsx";
import ProjectsPreview from "./ProjectsPreview.jsx";
import SkillsPreview from "./SkillsPreview.jsx";

export default function CvPreview({
  //  generalInfo 
  formData
  }) {
  return (
    <section className="cv-preview">
      <GeneralInformationPreview
      //  generalInfo={generalInfo}
      formData={formData}
        />
      <EducationPreview />
      <EmploymentPreview />
      <ProjectsPreview />
      <SkillsPreview />
    </section>
  );
}
