import GeneralInformation from "./GeneralInformation.jsx";
import Education from "./Education.jsx";
import Employment from "./Employment.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";

export default function CvMaker({
  // generalInfo, onGeneralInfoChange
  formData,
  onFormDataChange,
}) {
  return (
    <main className="cv-maker-container">
      <GeneralInformation
        formData={formData}
        onFormDataChange={onFormDataChange}
      />
      <Education formData={formData} onFormDataChange={onFormDataChange} />
      <Employment formData={formData} onFormDataChange={onFormDataChange} />
      <Projects formData={formData} onFormDataChange={onFormDataChange} />
      <Skills formData={formData} onFormDataChange={onFormDataChange} />
    </main>
  );
}
