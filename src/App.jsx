import CvMaker from "./CvMaker";
import CvPreview from "./CvPreview";
import { useState, useRef } from "react";
import data from "./data";
import { useReactToPrint } from "react-to-print";

function App() {
  const [formData, setFormData] = useState(data);

  function handleData(updatedData) {
    setFormData(updatedData);
  }

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${formData.generalInformation.fullName}'s Resume`,
  });
  return (
    <div className="container">
      <CvMaker
        formData={formData}
        onFormDataChange={handleData}
        handlePrint={handlePrint}
      />
      <CvPreview formData={formData} reference={componentRef} />
    </div>
  );
}
export default App;
