import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 bg-slate-950 overflow-hidden"
    >
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-4xl text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-5 w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300"
        >
          Remote worldwide | Hybrid or on-site in South Africa | Open to
          relocation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Hi, I'm <span className="text-cyan-400">Kamva Hanisi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-gray-400 text-lg md:text-xl leading-relaxed"
        >
          Full-Stack Developer building secure, responsive web applications
          from polished frontend experiences to REST APIs and relational
          databases.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg"
        >
          I turn real workflows into reliable products that are practical,
          maintainable, and ready to use.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className="
              bg-cyan-500
              hover:bg-cyan-600
              px-8
              py-4
              rounded-2xl
              font-semibold
              transition
              shadow-lg
              shadow-cyan-500/20
              cursor-pointer
            "
          >
            View My Work
          </Link>

          <a
            href="https://github.com/kamva-hanisi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-slate-700 px-8 py-4 rounded-2xl font-semibold transition hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            <FaGithub aria-hidden="true" />
            GitHub
          </a>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="
              border
              border-slate-700
              hover:border-cyan-400
              hover:bg-cyan-500/10
              px-8
              py-4
              rounded-2xl
              font-semibold
              transition
              cursor-pointer
            "
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
