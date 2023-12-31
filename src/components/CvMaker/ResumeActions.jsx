import PropTypes from "prop-types";

function ResumeActions({ onLoadExample, onClearResume, onDownloadButton }) {
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
      <button type="submit" onClick={onDownloadButton} className="download-btn">
        <img className="download-icon" src="/download-icon.svg"></img>
        Download
      </button>
    </div>
  );
}

ResumeActions.propTypes = {
  onDownloadButton: PropTypes.func.isRequired,
  onClearResume: PropTypes.func.isRequired,
  onLoadExample: PropTypes.func.isRequired,
};
export default ResumeActions;
