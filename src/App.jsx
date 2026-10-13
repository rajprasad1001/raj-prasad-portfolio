import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="noise" />
      <Navbar />

      <Hero />

      <About />

      <TechStack />

      <Projects />

      <Experience />

      <Contact />

    </div>
    
  );
}

export default App;