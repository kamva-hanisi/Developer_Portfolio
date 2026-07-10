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
            I'm a Johannesburg-based Full-Stack Developer with experience
            building scalable, production-ready web applications from the ground
            up. I specialize in React.js, Angular, Vue.js, JavaScript, TypeScript, Node.js,
            Express.js, PHP, Laravel, Redux, Tailwind CSS, and PostgreSQL, with a strong focus
            on clean user interfaces, RESTful APIs, database design, and
            maintainable backend architecture.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mt-6">
            I have developed full-stack projects including a task management
            application, an expense tracker, and a driving school booking
            system. These projects include features such as authentication,
            category-based dashboards, booking availability logic, PostgreSQL
            data storage, API integration, and deployment on Vercel, Neon and
            Github.
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
