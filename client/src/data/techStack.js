import {
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaLaptopCode,
  FaNodeJs,
  FaReact,
  FaServer,
  FaCode as FaVsCode,
} from "react-icons/fa";
import {
  SiAxios,
  SiExpress,
  SiGit,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscCopilot } from "react-icons/vsc";

const publicAsset = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

export const skillIcons = {
  API: { icon: FaCode, color: "#22d3ee" },
  Axios: { icon: SiAxios, color: "#5a29e4" },
  CODEX: { icon: FaCode, color: "#22d3ee" },
  Copilot: { icon: VscCopilot, color: "#a78bfa" },
  CSS: { icon: FaCss3Alt, color: "#1572b6" },
  CSS3: { icon: FaCss3Alt, color: "#1572b6" },
  "CI/CD": { icon: SiGit, color: "#f05032" },
  Express: { icon: SiExpress, color: "#ffffff" },
  "Express.js": { icon: SiExpress, color: "#ffffff" },
  Git: { icon: SiGit, color: "#f05032" },
  GitHub: { icon: FaGithub, color: "#ffffff" },
  HTML: { icon: FaHtml5, color: "#e34f26" },
  HTML5: { icon: FaHtml5, color: "#e34f26" },
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  "JavaScript (ES6+)": { icon: SiJavascript, color: "#f7df1e" },
  MySQL: { icon: SiMysql, color: "#4479a1" },
  Neon: { icon: FaDatabase, color: "#00e599" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "Node.js": { icon: FaNodeJs, color: "#5fa04e" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169e1" },
  Postman: { icon: SiPostman, color: "#ff6c37" },
  React: { icon: FaReact, color: "#61dafb" },
  "React.js": { icon: FaReact, color: "#61dafb" },
  Redux: { icon: SiRedux, color: "#764abc" },
  "REST API Development": { icon: FaCode, color: "#22d3ee" },
  SASS: { icon: SiSass, color: "#cc6699" },
  "Schema Design": { icon: FaDatabase, color: "#22d3ee" },
  Tailwind: { icon: SiTailwindcss, color: "#38bdf8" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38bdf8" },
  tailwindcss: { icon: SiTailwindcss, color: "#38bdf8" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  "Query Optimization": { icon: FaCode, color: "#f59e0b" },
  Vercel: { icon: SiVercel, color: "#ffffff" },
  "VS Code": { icon: FaVsCode, color: "#007acc" },
};

const techStack = [
  {
    category: "Frontend",
    icon: FaLaptopCode,
    skills: [
      { name: "React.js", ...skillIcons["React.js"] },
      { name: "Next.js", ...skillIcons["Next.js"] },
      { name: "TypeScript", ...skillIcons.TypeScript },
      { name: "JavaScript (ES6+)", ...skillIcons["JavaScript (ES6+)"] },
      { name: "HTML5", ...skillIcons.HTML5 },
      { name: "CSS3", ...skillIcons.CSS3 },
      { name: "SASS", ...skillIcons.SASS },
      { name: "Tailwind CSS", ...skillIcons["Tailwind CSS"] },
      { name: "Redux", ...skillIcons.Redux },
    ],
  },
  {
    category: "Backend",
    icon: FaServer,
    skills: [
      { name: "Node.js", ...skillIcons["Node.js"] },
      { name: "Express.js", ...skillIcons["Express.js"] },
      { name: "REST API Development", ...skillIcons["REST API Development"] },
    ],
  },
  {
    category: "Database",
    icon: FaDatabase,
    skills: [
      { name: "PostgreSQL", ...skillIcons.PostgreSQL },
      { name: "MySQL", ...skillIcons.MySQL },
      { name: "Schema Design", ...skillIcons["Schema Design"] },
      { name: "Query Optimization", ...skillIcons["Query Optimization"] },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: FaGithub,
    skills: [
      { name: "Git", ...skillIcons.Git },
      { name: "GitHub", ...skillIcons.GitHub },
      { name: "Postman", ...skillIcons.Postman },
      { name: "Axios", ...skillIcons.Axios },
      { name: "VS Code", ...skillIcons["VS Code"] },
      { name: "Vercel", ...skillIcons.Vercel },
      { name: "Neon", ...skillIcons.Neon },
      { name: "CODEX", ...skillIcons.CODEX },
      { name: "Copilot", ...skillIcons.Copilot },
    ],
  },
];

export const education = [
  {
    school: "ALX Africa",
    program: "Software Engineering",
    period: "2023 - 2024",
    credential: "Certificate",
    certificateUrl:
      "https://drive.google.com/file/d/1BR8bsVK33j-f_OVJel8-Uxojqr_FLo06/view?usp=sharing",
    logo: publicAsset("ALX-promotion.jpeg"),
  },
  {
    school: "Richard Varha High",
    program: "School",
    period: "2015 - 2020",
    logo: publicAsset("School.svg"),
  },
];

export default techStack;
