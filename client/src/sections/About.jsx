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
            I'm a Full-Stack Developer based in Johannesburg who enjoys turning
            practical ideas into complete web applications. I'm open to remote
            opportunities worldwide, hybrid or on-site roles across South
            Africa, and relocation for the right opportunity.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mt-6">
            I work across the stack, creating clear interfaces, secure REST
            APIs, and well-structured relational databases. My projects include
            financial dashboards, booking platforms, inventory systems, and
            employee-management tools with authentication, validation, search,
            reporting, and cloud deployment.
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
            <h3 className="text-cyan-400 text-3xl font-bold">8</h3>

            <p className="text-gray-400 mt-2">Projects Built</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="text-cyan-400 text-3xl font-bold">Full Stack</h3>

            <p className="text-gray-400 mt-2">Frontend + Backend</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="text-cyan-400 text-3xl font-bold">REST APIs</h3>

            <p className="text-gray-400 mt-2">Secure API Design</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="text-cyan-400 text-2xl sm:text-3xl font-bold">
              SQL
            </h3>

            <p className="text-gray-400 mt-2">PostgreSQL + MySQL</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
