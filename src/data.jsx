const data = {
  generalInformation: {
    fullName: "ROBERT SURUBARIU",
    email: "juru0188@gmail.com",
    phoneNumber: "0722222222",
    linkedIn: "https://www.linkedin.com/in/%C8%99urubariu-robert/",
    gitHub: "robert-juru",
    summary:
      "Interested in technology and eager to learn new things every day. Passionate about programming, especially front-end development for web applications.",
  },
  education: [
    {
      id: 0,
      school: "Academia de Studii Economice",
      degree: "Bachelor's Degree in Computer Science",
      relevantCoursework:
        "Object-Oriented Programming, Database, Web Development, Algorithms.",
      startDate: "Oct, 2020",
      endDate: "June, 2023",
      location: "Bucharest, Romania",
    },
    {
      id: 1,
      school: `Colegiul National "Vasile Alecsandri"`,
      degree: "High School Diploma (9.73 GPA)",
      startDate: "Sep, 2016",
      endDate: "June, 2020",
      location: "Galati, Romania",
    },
  ],
  employment: [
    {
      id:0,
      jobTitle: "Junior Frontend Developer",
      companyName: "StellarTech Solutions",
      companyLocation: "Bucharest, Romania",
      startDate: "July, 2021",
      endDate: "Present",
      jobDescription: `Collaborated with cross-functional teams to develop and implement user-facing features using modern web technologies.
      Designed and maintained responsive web applications, ensuring seamless user experiences across various devices.
      Contributed to the development and enhancement of the front-end architecture to improve performance and scalability.`,
    },
  ],
  projects: [
    {
      id:0,
      projectName: "E-commerce Website Redesign",
      projectLink: "https://github.com/username/project-name",
      projectDescription: `Revamped the UI/UX of an existing e-commerce platform, enhancing user engagement and increasing conversion rates.
      Utilized React.js and Redux for state management to create a dynamic and interactive shopping experience.`,
    },
    {
      id:1,
      projectName: "Weather Dashboard with Chart Visualization",
      projectLink: "https://github.com/username/project-name",
      projectDescription: `Created a weather dashboard using Vue.js and Chart.js to visualize historical weather data. 
      Fetched and displayed weather trends and forecasts for multiple locations using asynchronous API calls.`,
    },
  ],
  skills: {
    languages: "Romanian (Native), English (Advanced), French (Beginner).",
    programmingLanguages: "HTML, CSS, JavaScript.",
    frameworksAndLibraries: "React, Tailwind, Redux, Lodash.",
    tools: "Git, VS Code, GitHub Actions, Figma.",
    softSkills:
      "Problem-solving, time management, creativity, attention to detail.",
  },
};

export default data;
