import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 bg-slate-950"
    >
      <div className="max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Hi, I'm <span className="text-cyan-400">Lucas</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-gray-400 text-lg md:text-xl leading-relaxed"
        >
          Full-Stack Developer specializing in React, Node.js, Express.js, and
          PostgreSQL.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-semibold transition">
            View Projects
          </button>

          <button className="border border-slate-700 hover:border-cyan-400 px-8 py-3 rounded-xl font-semibold transition">
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
