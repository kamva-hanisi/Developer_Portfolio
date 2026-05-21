import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import TechStack from "./sections/TechStack";

function App() {
  return (
    <div>
      <Navbar />

      <Hero />

      <About />

      <TechStack />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
