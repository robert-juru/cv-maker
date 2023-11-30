export default function SectionHeader({ isActive, onHide, onShow, title }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {isActive ? (
        <img className="hide-btn" src="src\assets\expand_less.svg" onClick={onHide}></img>
      ) : (
        <img className="show-btn"src="src\assets\expand_more.svg" onClick={onShow}></img>
      )}
    </div>
  );
}
