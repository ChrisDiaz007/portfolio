import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
// import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import About from "./components/about/About";
import Developer from "./components/Developer/Developer";

function App() {
  return (
    <main>
      <NavBar />
      <Developer />
      {/* <Home /> */}
      {/* <Skills /> */}
      <About />
      <Projects />
      <Contacts />
    </main>
  );
}

export default App;
