// import taskManager from "../assets/projects/task-manager.png";

import taskManager from "../assets/Task_Manager.svg";
import expenseTracker from "./../assets/Expense_Tracker.png";
import weatherApp from "../assets/Weather_App.svg";
import drivingSchool from "../assets/Driving_School.svg";
import nestwise from "../assets/NestWise_Properties.svg";

const projects = [
  {
    title: "Task Manager",

    description:
      "Task management application with authentication, dashboards, and task tracking.",

    image: taskManager,

    tech: ["React", "Node.js", "Express", "PostgreSQL"],

    github: "#",

    live: "#",
  },

  {
    title: "Expense Tracker",

    description:
      "Track income and expenses with analytics and financial dashboards.",

    image: expenseTracker,

    tech: ["React", "Redux", "PostgreSQL"],

    github: "#",

    live: "#",
  },

  {
    title: "Weather App",

    description:
      "Modern weather forecasting app using real-time API integration.",

    image: weatherApp,

    tech: ["React", "Tailwind", "API"],

    github: "#",

    live: "#",
  },

  {
    title: "Driving School App",

    description: "Driving lesson booking and student management platform.",

    image: drivingSchool,

    tech: ["React", "Express", "PostgreSQL"],

    github: "#",

    live: "#",
  },

  {
    title: "NestWise Properties",

    description:
      "Property listing platform with responsive modern UI and authentication.",

    image: nestwise,

    tech: ["React", "Node.js", "PostgreSQL"],

    github: "#",

    live: "#",
  },
];

export default projects;
