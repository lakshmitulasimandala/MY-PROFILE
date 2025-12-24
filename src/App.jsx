import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import EndSection from "./components/EndSection";
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <EndSection />
    </>
  );
}

export default App;
