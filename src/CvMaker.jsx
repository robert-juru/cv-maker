import GeneralInformation from "./GeneralInformation.jsx";
import Education from "./Education.jsx";
import Employment from "./Employment.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import ResumeActions from "./ResumeActions.jsx";
import { useState, Fragment, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import clearedData from "./cleared_data.jsx";
import exampleData from "./data.jsx";

export default function CvMaker({ formData, onFormDataChange, handlePrint }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentItemIndex, setCurrentItemIndex] = useState({
    education: null,
    employment: null,
    projects: null,
  });

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

  function handleAddEntry(section, newEntry) {
    const updatedData = {
      ...formData,
      [section]: [...formData[section], newEntry],
    };
    onFormDataChange(updatedData);
  }

  function handleDeleteEntry(section, itemId) {
    const updatedData = {
      ...formData,
      [section]: formData[section].filter((item) => itemId !== item.id),
    };
    onFormDataChange(updatedData);
  }

  function handleDeleteAndClose(section, itemId) {
    handleDeleteEntry(section, itemId);
    handleSetCurrentItemIndex(section, null);
  }

  function handleSetCurrentItemIndex(section, index) {
    setCurrentItemIndex((prevState) => ({ ...prevState, [section]: index }));
  }

  function resetItemIndex(section, sectionIndex) {
    const isActive = activeIndex === sectionIndex;
    !isActive && currentItemIndex[section] !== null
      ? handleSetCurrentItemIndex(section, null)
      : null;
  }

  const newEntry = {
    employment: {
      companyName: `New Job`,
      id: uuidv4(),
    },
    projects: {
      projectName: `New Project`,
      id: uuidv4(),
    },
    education: {
      school: `New Institute`,
      id: uuidv4(),
    },
  };

  function renderSection(section, sectionTitle, sectionIndex, renderFunction) {
    const isActive = activeIndex === sectionIndex;
    resetItemIndex(section, sectionIndex);
    return isActive ? (
      <>
        {formData[section].map((item, index) => (
          <Fragment key={item.id}>
            <h3
              onClick={() =>
                handleSetCurrentItemIndex(
                  section,
                  currentItemIndex[section] === index ? null : index
                )
              }
            >
              {currentItemIndex[section] == null && item[sectionTitle]}
            </h3>
            {currentItemIndex[section] === index && (
              <>
                {renderFunction(index)}
                <div className="btn-container">
                  <button
                    type="button"
                    className="secondary-btn"
                    onClick={() => handleSetCurrentItemIndex(section, null)}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="primary-btn"
                    onClick={() => handleDeleteAndClose(section, item.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </Fragment>
        ))}
        {currentItemIndex[section] == null && (
          <div className="add-entry-container">
            <button
              type="button"
              className="primary-btn"
              onClick={() => handleAddEntry(section, newEntry[section])}
            >
              + Add
            </button>
          </div>
        )}
      </>
    ) : null;
  }
  return (
    <main className="cv-maker-container">
      <form className="cv-maker">
        <ResumeActions
          onLoadExample={() => onFormDataChange(exampleData)}
          onClearResume={() => onFormDataChange(clearedData)}
          onDownloadButton={() => handlePrint()}
        />
        <GeneralInformation
          formData={formData}
          onInputChange={(e) =>
            handleSingleInputChange("generalInformation", e)
          }
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
          renderSection={renderSection}
        />
        <Employment
          formData={formData}
          onInputChange={(index, e) =>
            handleMultiInputChange("employment", index, e)
          }
          isActive={activeIndex === 2}
          onShow={() => setActiveIndex(2)}
          onHide={() => setActiveIndex(null)}
          renderSection={renderSection}
        />
        <Projects
          formData={formData}
          onInputChange={(index, e) =>
            handleMultiInputChange("projects", index, e)
          }
          isActive={activeIndex === 3}
          onShow={() => setActiveIndex(3)}
          onHide={() => setActiveIndex(null)}
          renderSection={renderSection}
        />
        <Skills
          formData={formData}
          onInputChange={(e) => handleSingleInputChange("skills", e)}
          isActive={activeIndex === 4}
          onShow={() => setActiveIndex(4)}
          onHide={() => setActiveIndex(null)}
        />
      </form>
    </main>
  );
}
