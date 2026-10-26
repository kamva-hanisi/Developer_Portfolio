import { motion } from "framer-motion";

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Innosoft Ventures",
    period: "Dec 2023 - Present",
    highlights: [
      "Develop and maintain SmartData features across responsive React and TypeScript interfaces, RESTful APIs, backend services, and relational databases.",
      "Build backend functionality with Node.js, Express.js, PHP, and Laravel, including validation, application logic, and PostgreSQL and MySQL operations.",
      "Contribute across the software development lifecycle through API testing, debugging, troubleshooting, code reviews, and continuous improvements.",
      "Support SmartData modules such as File Manager workflows for secure uploads, file organization, and workflow-based processing.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Enrooting Technologies",
    period: "Mar 2022 - Nov 2023",
    highlights: [
      "Developed and maintained backend applications and RESTful APIs using Node.js, Express.js, TypeScript, PostgreSQL, and SQL.",
      "Implemented JWT authentication and authorization, request validation, structured error handling, and secure API functionality.",
      "Designed relational database schemas, optimized SQL queries, and tested and debugged APIs with Postman.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            Professional Experience
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Building and maintaining production applications since 2022.
          </p>
        </motion.div>

        <div className="relative space-y-8 before:absolute before:bottom-0 before:left-3 before:top-0 before:w-px before:bg-cyan-400/30 md:before:left-1/2">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.period}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`relative ml-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-colors hover:border-cyan-400 md:ml-0 md:w-[calc(50%-2rem)] md:p-8 ${
                index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              }`}
            >
              <span
                className={`absolute -left-[2.05rem] top-8 size-3 rounded-full bg-cyan-400 ring-4 ring-slate-950 ${
                  index % 2 === 0
                    ? "md:left-auto md:right-[-2.45rem]"
                    : "md:left-[-2.45rem]"
                }`}
              />

              <p className="font-semibold text-cyan-300">{item.period}</p>
              <h3 className="mt-2 text-2xl font-bold">{item.role}</h3>
              <p className="mt-1 text-lg text-gray-400">{item.company}</p>

              <ul className="mt-6 space-y-3 text-gray-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 leading-relaxed">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
