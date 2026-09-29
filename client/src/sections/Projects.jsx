import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight, FiExternalLink, FiX } from "react-icons/fi";

import projects from "../data/projects";
import { skillIcons } from "../data/techStack";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <>
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

        <div className="grid auto-rows-fr items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                h-full
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

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cyan-400 transition"
                      aria-label={`${project.title} live project`}
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-400 leading-relaxed line-clamp-3 min-h-[4.5rem]">
                  {project.description}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  Learn more
                  <FiArrowRight aria-hidden="true" />
                </button>
              </div>

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

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 px-6 py-10 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-details-title"
              className="relative w-full max-w-2xl rounded-lg border border-white/10 bg-slate-900 p-6 shadow-2xl md:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 grid size-10 place-items-center rounded-full text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close project details"
              >
                <FiX className="text-xl" />
              </button>

              <h3
                id="project-details-title"
                className="pr-12 text-2xl font-bold md:text-3xl"
              >
                {selectedProject.title}
              </h3>

              <p className="mt-5 leading-relaxed text-gray-300">
                {selectedProject.description}
              </p>

              <div className="mt-7 flex gap-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 font-semibold transition-colors hover:border-cyan-400 hover:text-cyan-300"
                >
                  <FaGithub />
                  GitHub
                </a>
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
                  >
                    <FiExternalLink />
                    Live project
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Projects;
