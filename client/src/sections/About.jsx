import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            I'm a Full-Stack Developer passionate about building modern web
            applications using React, Node.js, Express.js, and PostgreSQL. I
            enjoy creating scalable backend systems, responsive frontend
            interfaces, and clean UI/UX experiences.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mt-6">
            I've built projects including task management systems, expense
            trackers, weather apps, property platforms, and driving school
            systems.
          </p>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="text-cyan-400 text-3xl font-bold">5+</h3>

            <p className="text-gray-400 mt-2">Projects Built</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="text-cyan-400 text-3xl font-bold">React</h3>

            <p className="text-gray-400 mt-2">Frontend Development</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="text-cyan-400 text-3xl font-bold">Node.js</h3>

            <p className="text-gray-400 mt-2">Backend APIs</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="text-cyan-400 text-2xl sm:text-3xl font-bold">
              PostgreSQL
            </h3>

            <p className="text-gray-400 mt-2">Database Systems</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
