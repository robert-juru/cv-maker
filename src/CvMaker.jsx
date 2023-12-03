import GeneralInformation from "./GeneralInformation.jsx";
import Education from "./Education.jsx";
import Employment from "./Employment.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import { useState, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CvMaker({ formData, onFormDataChange }) {
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
    console.log(updatedData);
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
    console.log(isActive);
    console.log("current item index" + currentItemIndex);
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
              {console.log(item)}
            </h3>
            {currentItemIndex[section] === index && (
              <>
                {renderFunction(index)}
                <div className="btn-container">
                  <button
                    type="button"
                    onClick={() => handleSetCurrentItemIndex(section, null)}
                  >
                    Close
                  </button>
                  <button
                    type="button"
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
          <button
            type="button"
            onClick={() => handleAddEntry(section, newEntry[section])}
          >
            + Add
          </button>
        )}
      </>
    ) : null;
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
        onAddEntry={() => handleAddEntry("education", newInstitute)}
        onDeleteEntry={handleDeleteEntry}
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
        onHide={() => setActiveIndex(null)}
        currentItemIndex={currentItemIndex.education}
        setCurrentItemIndex={(index) =>
          handleSetCurrentItemIndex("education", index)
        }
        renderSection={renderSection}
      />
      <Employment
        formData={formData}
        onInputChange={(index, e) =>
          handleMultiInputChange("employment", index, e)
        }
        onAddEntry={() => handleAddEntry("employment", newJob)}
        onDeleteEntry={handleDeleteEntry}
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
        onHide={() => setActiveIndex(null)}
        currentItemIndex={currentItemIndex.employment}
        setCurrentItemIndex={(index) =>
          handleSetCurrentItemIndex("employment", index)
        }
        renderSection={renderSection}
      />
      <Projects
        formData={formData}
        onInputChange={(index, e) =>
          handleMultiInputChange("projects", index, e)
        }
        onAddEntry={() => handleAddEntry("projects", newProject)}
        onDeleteEntry={handleDeleteEntry}
        isActive={activeIndex === 3}
        onShow={() => setActiveIndex(3)}
        onHide={() => setActiveIndex(null)}
        currentItemIndex={currentItemIndex.projects}
        setCurrentItemIndex={(index) =>
          handleSetCurrentItemIndex("projects", index)
        }
        renderSection={renderSection}
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
