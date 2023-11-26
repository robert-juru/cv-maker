import CvMaker from "./CvMaker";
import CvPreview from "./CvPreview";
import { useState } from "react";
import data from "./data";

function App() {
  //   const [generalInfo, setGeneralInfo] = useState(data.generalInformation);

  //   function handleGeneralInfoChange(updatedInfo) {
  // setGeneralInfo(updatedInfo);
  //   }
  const [formData, setFormData] = useState(data);

  function handleData(updatedData) {
    setFormData(updatedData);
  }
  return (
    <div className="container">
      <CvMaker
      formData={formData}
      onFormDataChange={handleData}
      // generalInfo={generalInfo}
      // onGeneralInfoChange={handleGeneralInfoChange}
      />
      <CvPreview
      //    generalInfo={generalInfo}
      formData={formData}
      />
    </div>
  );
}
export default App;
