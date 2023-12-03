import { v4 as uuidv4 } from "uuid";

const clearedData = {
  generalInformation: {
    fullName: "",
    email: "",
    phoneNumber: "",
    linkedIn: "",
    gitHub: "",
    summary: "",
  },
  education: [
    {
      id: uuidv4(),
      school: "",
      degree: "",
      relevantCoursework: "",
      startDate: "",
      endDate: "",
      location: "",
    },
  ],
  employment: [
    {
      id: uuidv4(),
      jobTitle: "",
      companyName: "",
      companyLocation: "",
      startDate: "",
      endDate: "",
      jobDescription: ``,
    },
  ],
  projects: [
    {
      id: uuidv4(),
      projectName: "",
      projectLink: "",
      projectDescription: ``,
    },
  ],
  skills: {
    languages: "",
    programmingLanguages: "",
    frameworksAndLibraries: "",
    tools: "",
    softSkills: "",
  },
};

export default clearedData;
