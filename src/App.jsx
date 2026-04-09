import "./App.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Roadmap from "./components/roadmap/Roadmap";

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <Projects />
      <Experience />
      <Contact />
      <Roadmap />
    </main>
  );
}

export default App;
