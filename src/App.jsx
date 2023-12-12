import CvMaker from "./components/CvMaker/CvMaker.jsx"
import CvPreview from "./components/CvPreview/CvPreview.jsx";
import { useState, useRef } from "react";
import data from "./data";
import { useReactToPrint } from "react-to-print";
import ResumeActions from "./components/CvMaker/ResumeActions.jsx";
import clearedData from "./cleared_data.jsx";
import exampleData from "./data.jsx";

function App() {
  const [formData, setFormData] = useState(data);
  const componentRef = useRef();

  function handleData(updatedData) {
    setFormData(updatedData);
  }

  const handlePrint = useReactToPrint({
    content: () => {
      return componentRef.current;
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
        <CvMaker formData={formData} onFormDataChange={handleData} />
        <CvPreview formData={formData} reference={componentRef} />
      </div>
    </div>
  );
}
export default App;
