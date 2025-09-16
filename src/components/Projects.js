import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmerica,
} from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import GithubButton from "./buttons/GithubButton";
import DemoButton from "./buttons/DemoButton";

const Projects = () => {
  const [listProjects] = useState([
    {
      name: "Reacquaint",
      des: "A construction tender evaluation platform enabling bidders to upload tenders and receive AI-driven assessments and scores across key criterias such as Budget Control, Environment, Health & Safery, Qualification, and Quality.",
      mission: "Back-end Developer + System Analysis + Design",
      language: "Ruby on Rails, HTML5, CSS, PostgreSQL, OpenAI, Figma",
      images: project1,
      githubURL: "https://github.com/adi-kotian/reacquaint",
      liveDemoUrl: "https://www.reacquaint.online/",
    },
    {
      name: "Hero Trainer",
      des: "A Trainer website serves as a comprehensive resource for fitness guidance, class schedules, membership options, and tools to help users achieve their fitness goals.",
      mission: "Back-end Developer + System Analysis + Design",
      language: "Ruby on Rails, HTML5, CSS, PostgreSQL, Figma",
      images: project2,
      githubURL: "https://github.com/ChrisDiaz007/hero-trainer-solo",
      liveDemoUrl: "https://hero-trainers-3164fedf77da.herokuapp.com",
    },
    {
      name: "Cafe API",
      des: "Built a responsive React app to list and search developer-friendly cafes in Tokyo, integrating with a custom Rails API for real-time data.",
      mission: "Back-end Developer + System Analysis + Design",
      language: "Rails, React",
      images: project4,
      githubURL: "https://github.com/ChrisDiaz007/rails-cafe-api",
      liveDemoUrl: "https://rails-cafe-api-2025-3ad0102200c5.herokuapp.com/",
    },
    {
      name: "Watch List",
      des: "Built a responsive rails app that lets users create and manage movie watch lists, bookmark movies with comments, and styled with Bootstrap.",
      mission: "Back-end Developer + System Analysis + Design",
      language: "Ruby on Rails, HTML5, CSS, PostgreSQL",
      images: project5,
      githubURL: "https://github.com/ChrisDiaz007/rails-watch-list/tree/master",
      liveDemoUrl: "https://watch-list-chris-65a7ee686c2e.herokuapp.com/",
    },
  ]);

  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);
  return (
    <section className="projects" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        Portfolio
      </div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
        <h3>Each project is a unique piece of development 🧩</h3>
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div key={key} className="item">
            <div
              className="images"
              ref={(el) => el && refDivs.current.push(el)}
            >
              <img src={value.images} alt="" />
            </div>
            <div
              className="content"
              ref={(el) => el && refDivs.current.push(el)}
            >
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faEarthAmerica} />
                </div>
                <div>
                  <h4>Tech Stack</h4>
                  <div className="de">{value.language}</div>
                </div>
              </div>
              {/* <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Role</h4>
                  <div className="de">{value.mission}</div>
                </div>
              </div> */}
              <div className="actions">
                <div className="github-button">
                  <a
                    href={value.githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubButton />
                  </a>
                </div>
                <div className="demo-button">
                  <a
                    href={value.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DemoButton />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
