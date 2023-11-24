import GeneralInformation from "./GeneralInformation.jsx";
import Education from "./Education.jsx";
import Employment from "./Employment.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";

export default function CvMaker() {
  return (
    <main className="cv-maker-container">
      <GeneralInformation />
      <Education />
      <Employment />
      <Projects />
      <Skills />
    </main>
  );
}
