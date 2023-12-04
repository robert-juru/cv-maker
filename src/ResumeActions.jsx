export default function ResumeActions({ onLoadExample, onClearResume }) {
  return (
    <div id="resume-actions-container">
      <div className="clear-load-btns">
        <button type="button" onClick={onClearResume} className="primary-btn">
          Clear Resume
        </button>
        <button type="button" onClick={onLoadExample} className="secondary-btn">
          Load Example
        </button>
      </div>
      <button type="button" className="download-btn">
        <img src="src/assets/download-icon.svg"></img>
        <span>Download</span>
      </button>
    </div>
  );
}
