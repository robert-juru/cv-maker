import GeneralInformation from "./GeneralInformation.jsx";
import Education from "./Education.jsx";
import Employment from "./Employment.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";

export default function CvMaker({ formData, onFormDataChange }) {
  function handleInputChange(section, e) {
    const { name, value } = e.target;
    const updatedInfo = {
      ...formData,
      [section]: {
        ...formData[section],
        [name]: value,
      },
    };
    onFormDataChange(updatedInfo);
  }
  return (
    <main className="cv-maker-container">
      <GeneralInformation
        formData={formData}
        onFormDataChange={onFormDataChange}
        onInputChange={(e) => handleInputChange("generalInformation", e)}
      />
      <Education
        formData={formData}
        onFormDataChange={onFormDataChange}
        onInputChange={(e) => handleInputChange("education", e)}
      />
      <Employment
        formData={formData}
        onFormDataChange={onFormDataChange}
        onInputChange={(e) => handleInputChange("employment", e)}
      />
      <Projects
        formData={formData}
        onFormDataChange={onFormDataChange}
        onInputChange={(e) => handleInputChange("projects", e)}
      />
      <Skills
        formData={formData}
        onFormDataChange={onFormDataChange}
        onInputChange={(e) => handleInputChange("skills", e)}
      />
    </main>
  );
}
