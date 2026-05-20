import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Lucas.dev</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-white transition cursor-pointer"
          >
            Home
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-white transition cursor-pointer"
          >
            About
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-white transition cursor-pointer"
          >
            Projects
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-white transition cursor-pointer"
          >
            Contact
          </Link>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
