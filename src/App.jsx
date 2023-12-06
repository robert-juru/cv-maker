import CvMaker from "./CvMaker";
import CvPreview from "./CvPreview";
import { useState, useRef } from "react";
import data from "./data";
import { useReactToPrint } from "react-to-print";
import ResumeActions from "./ResumeActions";
import clearedData from "./cleared_data.jsx";
import exampleData from "./data.jsx";

function App() {
  const [formData, setFormData] = useState(data);
  const formRef = useRef(null);
  const componentRef = useRef();

  function handleData(updatedData) {
    setFormData(updatedData);
  }

  const handlePrint = useReactToPrint({
    content: () => {
      const form = formRef.current; // Access the form reference
      if (form) {
        const isValid = form.checkValidity(); // Check form validity

        if (isValid) {
          return componentRef.current;
        } else {
          console.log("Form is not valid. Cannot print.");
          return null;
        }
      } else {
        console.log("Form reference not found.");
        return null;
      }
    },
    documentTitle: `${formData.generalInformation.fullName}'s Resume`,
  });

  return (
    <div className="app-container">
      <ResumeActions
        onLoadExample={() => handleData(exampleData)}
        onClearResume={() => handleData(clearedData)}
        onDownloadButton={() => handlePrint()}
      />
      <div className="container">
        <CvMaker
          formData={formData}
          onFormDataChange={handleData}
          handlePrint={handlePrint}
          formRef={formRef}
        />
        <CvPreview formData={formData} reference={componentRef} />
      </div>
    </div>
  );
}
export default App;
