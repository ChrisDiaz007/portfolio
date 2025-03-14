import React, { useRef } from "react";
import CustomHook from "./CustomHook";

const Home = () => {
  const refTab = useRef();
  CustomHook(refTab);
  return (
    <section className="home" ref={refTab}>
      <div className="content">
        <div className="name">
          MY NAME IS <span>CHRISTOPHER DIAZ</span>
        </div>
        <div className="des">
          I AM A WEB DEVELOPER SKILLED IN RUBY ON RAILS AND JAVASCRIPT. I
          RECENTLY COMPLETED LE WAGON TOKYO'S WEB DEVELOPMENT BOOTCAMP, WHERE I
          BUILD DYNAMIC AND USER-FRIENDLY WEB APPLICATIONS. MY EXPERTISE INCLUDE
          FRONTEND DESIGN, BACKEND DEVELOPMENT, AND DATABASE MANAGEMENT.
          PASSIONATE ABOUT CRAFTING MODERN, SCALABLE SOLUTIONS, I AM EAGER TO
          CONTRIBUTE TO INNOVATIVE PROJECTS AND CONTINUE EXPANDING MY SKILLS.
        </div>
        <div className="icon">
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
        </div>
      </div>
      <div className="avatar">
        <div className="card">
          <img src="demoday.jpg" alt="" />
          <div className="info">
            <div>Developer</div>
            <div>Hispanic</div>
            <div>Male</div>
            <div>05/09</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
