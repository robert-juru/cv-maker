import CvMaker from "./CvMaker";
import CvPreview from "./CvPreview";
import { useState } from "react";
import data from "./data";

function App() {
  const [formData, setFormData] = useState(data);

  function handleData(updatedData) {
    setFormData(updatedData);
  }
  return (
    <div className="container">
      <CvMaker
      formData={formData}
      onFormDataChange={handleData}
      />
      <CvPreview
      formData={formData}
      />
    </div>
  );
}
export default App;
