import GeneralInformation from "./GeneralInformation.jsx";
import Education from "./Education.jsx";
import Employment from "./Employment.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import { useState } from "react";

export default function CvMaker({ formData, onFormDataChange }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleMultiInputChange(section, index, e) {
    //used for handling sections with more than one instance like Education
    const { name, value } = e.target;
    const updatedInfo = {
      ...formData,
      [section]: formData[section].map((item, i) =>
        i === index ? { ...item, [name]: value } : item
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
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
        onHide={() => setActiveIndex(null)}
      />
      <Education
        formData={formData}
        onInputChange={(index, e) =>
          handleMultiInputChange("education", index, e)
        }
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
        onHide={() => setActiveIndex(null)}
      />
      <Employment
        formData={formData}
        onInputChange={(index, e) =>
          handleMultiInputChange("employment", index, e)
        }
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
        onHide={() => setActiveIndex(null)}
      />
      <Projects
        formData={formData}
        onInputChange={(index, e) =>
          handleMultiInputChange("projects", index, e)
        }
        isActive={activeIndex === 3}
        onShow={() => setActiveIndex(3)}
        onHide={() => setActiveIndex(null)}
      />
      <Skills
        formData={formData}
        onInputChange={(e) => handleSingleInputChange("skills", e)}
        isActive={activeIndex === 4}
        onShow={() => setActiveIndex(4)}
        onHide={() => setActiveIndex(null)}
      />
    </main>
  );
}
