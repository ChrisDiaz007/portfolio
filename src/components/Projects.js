import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmerica,
} from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";

const Projects = () => {
  const [listProjects] = useState([
    {
      name: "Reacquaint",
      des: "A construction tender evaluation platform enabling bidders to upload tenders and receive AI-driven assessments. The platform integrates AI to evaluate company and employee suitability, generating numerical scores across key criteria such as Budget Control, Environment, Health & Safety, Qualifications, and Quality. Authentication and session management were implemented to ensure secure bidding. PostgreSQL was utilized for efficient data handling, with optimized queries to enable fast retrieval of tender analytics. ",
      mission: "Back-end Developer + System Analysis + Design",
      language: "Rails, Ruby, JavaScript, HTML5, CSS, PostgreSQL, OpenAI",
      images: "project1.png",
    },
    {
      name: "Hero Trainer",
      des: "A training partner rental platform where users can book expert trainers. The platform integrates GPS functionality to help users locate nearby trainers and schedule in-person sessions. User authentication and session management were implemented to ensure secure and seamless booking experiences. PostgreSQL was utilized for efficient database management, with optimized queries to enable fast retrieval of trainer data.",
      mission: "Back-end Developer + System Analysis + Design",
      language: "Rails, Ruby, HTML5, CSS, PostgreSQL",
      images: "project2.png",
    },
    {
      name: "Movie Bookmarking App",
      des: "A movie discovery and bookmarking app that enables users to search for films and save them to a personal watchlist. The app features authentication, search functionality, and a user-friendly UI for seamless interaction. Database queries were optimized using SQL to ensure efficient search and retrieval, delivering a smooth user experience.",
      mission: "Back-end Developer + System Analysis + Design",
      language: "Rails, Ruby, HTML5, CSS, PostgreSQL",
      images: "project3.png",
    },
  ]);
  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);
  return (
    <section className="projects" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        These are my Projects
      </div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
        T-T
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
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Role</h4>
                  <div className="de">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faEarthAmerica} />
                </div>
                <div>
                  <h4>Tech Stack</h4>
                  <div className="de">{value.language}</div>
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
