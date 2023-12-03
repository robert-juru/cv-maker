export default function ResumeActions({onLoadExample, onClearResume}) {
  return (
    <section className="resume-actions-container">
      <div className="clear-load-btns">
        <button onClick={onClearResume} className="primary-btn">Clear Resume</button>
        <button onClick={onLoadExample} className="secondary-btn">Load Example</button>
      </div>
      <button className="download-btn">
        <img src="src/assets/download-icon.svg"></img>Download
      </button>
    </section>
  );
}
