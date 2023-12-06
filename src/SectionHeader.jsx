export default function SectionHeader({ isActive, onHide, onShow, title }) {
  const iconLocation = "src/assets/";
  return (
    <div className="section-header">
      <div className="section-name">
        <img
          className="section-icon"
          src={iconLocation + title + ".svg"}
          alt={`${title} icon`}
        />
        <h2>{title}</h2>
      </div>
      <img
        className={isActive ? "hide-btn rotated" : "show-btn"}
        src="src/assets/expand_less.svg"
        alt="Expand Icon"
        onClick={isActive ? onHide : onShow}
      />
    </div>
  );
}
