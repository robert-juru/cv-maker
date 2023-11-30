export default function SectionHeader({ isActive, onHide, onShow, title }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {isActive ? (
        <button type="button" onClick={onHide}>
          Hide
        </button>
      ) : (
        <button type="button" onClick={onShow}>
          Show
        </button>
      )}
    </div>
  );
}
