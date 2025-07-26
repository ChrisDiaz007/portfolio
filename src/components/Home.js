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
          FULL STACK DEVELOPER <br />
          HAVING 2 YEARS OF EXPERIENCE IN IT, I DEVELOPED STRONG TEAMWORK
          SKILLS AND BECAME RESULT ORIENTED. <br />
          MY SKILLS GO FROM FRONTEND - HTML/CSS, REACT, STIMULUS, TAILWIND <br />
          TO BACKEND - RUBY ON RAILs, POSTGRESQL, HEROKU.
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
          <a href="/democv.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>

        </div>
        <div className="logo-image">
          <img src="logo1.png" alt="" />
          <img src="logo2.png" alt="" />
          <img src="logo3.png" alt="" />
          <img src="logo4.png" alt="" />
          <img src="logo5.png" alt="" />
          <img src="logo6.png" alt="" />
          <img src="logo7.png" alt="" />
          <img src="logo8.png" alt="" />
          <img src="logo9.png" alt="" />
        </div>
      </div>
      <div className="avatar">
        <div className="card">
          <img src="demoday.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
