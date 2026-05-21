import { motion } from "framer-motion";

import techStack from "../data/techStack";

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

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                className="
                  bg-white/5
                  backdrop-blur-lg
                  border border-white/10
                  rounded-3xl
                  p-8
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-4
                  hover:border-cyan-400
                  transition-all
                  duration-300
                "
              >
                <Icon className="text-5xl text-cyan-400" />

                <h3 className="font-semibold text-lg">{tech.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
