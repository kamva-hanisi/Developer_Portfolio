import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import projects from "../data/projects";
import { skillIcons } from "../data/techStack";

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center"
          >
            Featured Projects
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                bg-white/5
                backdrop-blur-lg
                border border-white/10
                rounded-3xl
                p-6
                hover:border-cyan-400
                transition-all
                duration-300
                shadow-lg
                flex
                flex-col
                overflow-hidden
              "
            >
              {project.image && (
                <div className="relative overflow-hidden rounded-2xl mb-6 bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-48
                      object-cover
                      hover:scale-110
                      transition-transform
                      duration-500
                    "
                  />
                </div>
              )}

              {/* Top */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="text-2xl font-bold leading-tight">
                  {project.title}
                </h3>

                <div className="flex gap-4 text-xl">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-400 transition"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-400 transition"
                    aria-label={`${project.title} live project`}
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((tech) => {
                  const skill = skillIcons[tech];
                  const Icon = skill?.icon;

                  return (
                    <span
                      key={tech}
                      className="
                        bg-cyan-500/10
                        text-cyan-300
                        border border-cyan-500/20
                        px-4 py-2
                        rounded-xl
                        text-sm
                        inline-flex
                        items-center
                        gap-2
                      "
                    >
                      {Icon && (
                        <Icon
                          className="text-base shrink-0"
                          style={{ color: skill.color }}
                        />
                      )}
                      {tech}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
