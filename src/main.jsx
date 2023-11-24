import React from "react";
import ReactDOM from "react-dom/client";
import CvMaker from "./CvMaker.jsx";
import CvPreview from "./CvPreview.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
      <CvMaker />
      <CvPreview />
    </div>
  </React.StrictMode>
);
