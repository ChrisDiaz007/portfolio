import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmerica,
} from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
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
      livedemoUrl: "https://www.reacquaint.online/",
    },
    {
      name: "Hero Trainer",
      des: "A Trainer website serves as a comprehensive resource for fitness guidance, class schedules, membership options, and tools to help users achieve their fitness goals.",
      mission: "Back-end Developer + System Analysis + Design",
      language: "Ruby on Rails, HTML5, CSS, PostgreSQL, Figma",
      images: project2,
      githubURL: "https://github.com/ChrisDiaz007/hero-trainer-solo",
      livedemoUrl: "https://www.reacquaint.online/",
    },
    {
      name: "Restaurant App",
      des: "Build a full-stack restaurant review app, featuring user Authentication, Authorization (Devise & Pundit), and role-based access for users, owners, and admins. The app includes features like user reviews, restaurant ratings, and a search functionality to help users find the best dining options in Tokyo.",
      mission: "Back-end Developer + System Analysis + Design",
      language: "Ruby on Rails, HTML5, CSS, PostgreSQL, Figma",
      images: "project3.png",
    },
    {
      name: "Cafe API",
      des: "Built a responsive React app to list and search developer-friendly cafes in Tokyo, integrating with a custom Rails API for real-time data.",
      mission: "Back-end Developer + System Analysis + Design",
      language: "Rails, React",
      images: "project4.png",
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
                    href={value.livedemoUrl}
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
