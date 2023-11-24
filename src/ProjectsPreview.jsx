export default function ProjectsPreview() {
  return (
    <article className="projects">
      <h2>Projects</h2>
      <hr />
      <h3 className="project-name-cv">E-commerce Website Redesign</h3>
      <p className="project-link">
        <strong>
          <em>https://github.com/robert-juru/weather-forecast-app</em>
        </strong>
      </p>
      <ul className="project-details">
        <li>
          Revamped the UI/UX of an existing e-commerce platform, enhancing user
          engagement and increasing conversion rates.
        </li>
        <li>
          Utilized React.js and Redux for state management to create a dynamic
          and interactive shopping experience.
        </li>
      </ul>
      <h3 className="project-name-cv">
        Weather Dashboard with Chart Visualization
      </h3>
      <p className="project-link">
        <strong>
          <em>https://github.com/robert-juru/weather-forecast-app</em>
        </strong>
      </p>
      <ul className="project-details">
        <li>
          Created a weather dashboard using Vue.js and Chart.js to visualize
          historical weather data.
        </li>
        <li>
          Fetched and displayed weather trends and forecasts for multiple
          locations using asynchronous API calls.
        </li>
      </ul>
    </article>
  );
}
