import { motion } from "framer-motion";

import techStack, { education } from "../data/techStack";

function TechStack() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Tech Stack</h2>

          <p className="text-gray-400 mt-4 text-lg">
            Technologies and tools I use to build modern web applications.
          </p>
        </motion.div>

        {/* Stack Rows */}
        <div className="space-y-5">
          {techStack.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="
                bg-white/5
                backdrop-blur-lg
                border border-white/10
                rounded-3xl
                p-5
                md:p-6
                hover:border-cyan-400
                transition-all
                duration-300
              "
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <group.icon className="text-2xl text-cyan-400" />

                  <h3 className="text-xl md:text-2xl font-bold text-cyan-400">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="
                        bg-cyan-500/10
                        text-cyan-300
                        border border-cyan-500/20
                        px-3
                        py-1.5
                        rounded-xl
                        text-sm
                        inline-flex
                        items-center
                        gap-2
                      "
                    >
                      <skill.icon
                        className="text-base shrink-0"
                        style={{ color: skill.color }}
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {education.map((item, index) => (
              <motion.div
                key={`${item.school}-${item.period}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="
                  bg-white/5
                  backdrop-blur-lg
                  border border-white/10
                  rounded-3xl
                  p-6
                  md:p-8
                  hover:border-cyan-400
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    w-full
                    flex
                    flex-col
                    items-center
                    text-center
                    gap-4
                    py-2
                  "
                >
                  <img
                    src={item.logo}
                    alt={`${item.school} logo`}
                    className="w-14 h-14 rounded-full object-contain p-1 border border-cyan-400/30 bg-slate-800"
                  />

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">
                      {item.program}
                    </h3>
                    <p className="text-gray-400 mt-1 text-sm md:text-base">
                      {item.school} | {item.period}
                    </p>
                  </div>

                  {item.certificateUrl && (
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        bg-cyan-500
                        hover:bg-cyan-600
                        px-5
                        py-2
                        rounded-2xl
                        font-semibold
                        text-sm
                        transition
                        shadow-lg
                        shadow-cyan-500/20
                        mt-1
                      "
                    >
                      {item.credential}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
