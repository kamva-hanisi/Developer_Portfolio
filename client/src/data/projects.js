import taskManager from "../assets/Task-Manager.png";
import expenseTracker from "./../assets/Expense_Tracker.png";
import weatherApp from "../assets/weather.png";
import drivingSchool from "../assets/Driving.png";
import nestwise from "../assets/NestWise.png";

const projects = [
  {
    title: "Task Manager",

    description:
      "Task management application with authentication, dashboards, and task tracking.",

    image: taskManager,

    tech: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "SASS",
      "PostgreSQL",
      "CI/CD",
    ],

    github: "https://github.com/kamva-hanisi/Task-Mananger.git",

    live: "https://kamva-hanisi.github.io/Task-Mananger/",
  },

  {
    title: "Expense Tracker",

    description:
      "Track income and expenses with analytics and financial dashboards.",

    image: expenseTracker,

    tech: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "tailwindcss",
      "Redux",
      "PostgreSQL",
      "CI/CD",
    ],

    github: "https://github.com/kamva-hanisi/Expense-Tracker-App.git",

    live: "https://kamva-hanisi.github.io/Expense-Tracker-App/",
  },

  {
    title: "Driving School App",

    description: "Driving lesson booking and student management platform.",

    image: drivingSchool,

    tech: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "SASS",
      "PostgreSQL",
      "CI/CD",
    ],

    github: "https://github.com/kamva-hanisi/driving-school-app.git",

    live: "https://kamva-hanisi.github.io/driving-school-app/",
  },

  {
    title: "Weather App",

    description:
      "Modern weather forecasting app using real-time API integration.",

    image: weatherApp,

    tech: ["React", "HTML", "CSS", "JavaScript", "API"],

    github: "https://github.com/kamva-hanisi/weather.git",

    live: "https://kamva-hanisi.github.io/weather/",
  },

  {
    title: "NestWise Properties",

    description:
      "Property listing platform with responsive modern UI and authentication.",

    image: nestwise,

    tech: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "SASS",
      "MySQL",
      "CI/CD",
    ],

    github: "https://github.com/kamva-hanisi/NestWise-Properties.git",

    live: "#",
  },
];

export default projects;
