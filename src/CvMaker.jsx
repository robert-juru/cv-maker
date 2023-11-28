import GeneralInformation from "./GeneralInformation.jsx";
import Education from "./Education.jsx";
import Employment from "./Employment.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";

export default function CvMaker({ formData, onFormDataChange }) {
  function handleMultiInputChange(section, index, e) {
    //used for handling sections with more than one instance like Education
    const { name, value } = e.target;
    const currentIndex = typeof index !== "undefined" ? index : 0;
    const updatedInfo = {
      ...formData,
      [section]: formData[section].map((item, i) =>
        i === currentIndex ? { ...item, [name]: value } : item
      ),
    };
    onFormDataChange(updatedInfo);
  }

  function handleSingleInputChange(section, e) {
    //used for handling sections with only one instance like General Information
    const { name, value } = e.target;
    const updatedInfo = {
      ...formData,
      [section]: { ...formData[section], [name]: value },
    };
    onFormDataChange(updatedInfo);
  }

  return (
    <main className="cv-maker-container">
      <GeneralInformation
        formData={formData}
        onInputChange={(e) => handleSingleInputChange("generalInformation", e)}
      />
      <Education
        formData={formData}
        onInputChange={(index, e) =>
          handleMultiInputChange("education", index, e)
        }
      />
      <Employment
        formData={formData}
        onInputChange={(index, e) =>
          handleMultiInputChange("employment", index, e)
        }
      />
      <Projects
        formData={formData}
        onInputChange={(e) => handleMultiInputChange("projects", e)}
      />
      <Skills
        formData={formData}
        onInputChange={(e) => handleSingleInputChange("skills", e)}
      />
    </main>
  );
}
