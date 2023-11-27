import GeneralInformation from "./GeneralInformation.jsx";
import Education from "./Education.jsx";
import Employment from "./Employment.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";

export default function CvMaker({ formData, onFormDataChange }) {
  function handleInputChange(section, index, e) {
    const { name, value } = e.target;
    const updatedInfo = {
      ...formData,
      [section]: formData[section].map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      ),
    };
    onFormDataChange(updatedInfo);
  }
  return (
    <main className="cv-maker-container">
      <GeneralInformation
        formData={formData}
        onInputChange={(e) => handleInputChange("generalInformation", e)}
      />
      <Education
        formData={formData}
        onInputChange={(index, e) => handleInputChange("education", index, e)}
      />
      <Employment
        formData={formData}
        onInputChange={(e) => handleInputChange("employment", e)}
      />
      <Projects
        formData={formData}
        onInputChange={(e) => handleInputChange("projects", e)}
      />
      <Skills
        formData={formData}
        onInputChange={(e) => handleInputChange("skills", e)}
      />
    </main>
  );
}
