import React, { useRef } from "react";
import CustomHook from "./CustomHook";
import demoDay from "../assets/demoday.jpg";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.png";
import logo9 from "../assets/logo9.png";
import logo10 from "../assets/logo10.png";

const Home = () => {
  const techStack = [
    { src: logo1, alt: "Tech 1" },
    { src: logo2, alt: "Tech 2" },
    { src: logo3, alt: "Tech 3" },
    { src: logo4, alt: "Tech 4" },
    { src: logo5, alt: "Tech 5" },
    { src: logo6, alt: "Tech 6" },
    { src: logo7, alt: "Tech 7" },
    { src: logo8, alt: "Tech 8" },
    { src: logo9, alt: "Tech 9" },
    { src: logo10, alt: "Tech 10" },
  ];

  const refTab = useRef();
  CustomHook(refTab);
  return (
    <section className="home" ref={refTab}>
      <div className="content">
        <div className="name">
          Full-Stack Engineer 👋 <span></span>
        </div>
        <div className="des">
          Hi, I'm Christopher Diaz. A passionated Full-Stack Engineer based in
          the Florida, United Stated. 📍
        </div>
        <div className="logo-icons">
          FIND ME HERE:
          <a
            href="https://github.com/ChrisDiaz007"
            target="_blank"
            rel="noreferrer"
            className="no-border"
          >
            <img src="github.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/christopher-diaz-2162a9196/"
            target="_blank"
            rel="noreferrer"
            className="no-border"
          >
            <img src="linkedin.png" alt="" />
          </a>
          <a
            href="https://ChrisDiaz007.github.io/portfolio/democv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="animation active "
          >
            Download My CV
          </a>
        </div>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <img
              key={index}
              src={tech.src}
              alt={tech.alt}
              className="tech-logo"
            />
          ))}
        </div>
      </div>
      <div className="avatar">
        <div className="card">
          <img src={demoDay} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
