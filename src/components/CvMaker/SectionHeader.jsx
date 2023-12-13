export default function SectionHeader({ isActive, onHide, onShow, title }) {
  return (
    <div className="section-header">
      <div className="section-name">
        <img
          className="section-icon"
          src={"/" + title + ".svg"}
          alt={`${title} icon`}
        />
        <h2>{title}</h2>
      </div>
      <img
        className={isActive ? "hide-btn rotated" : "show-btn"}
        src="/expand_less.svg"
        alt="Expand Icon"
        onClick={isActive ? onHide : onShow}
      />
    </div>
  );
}
