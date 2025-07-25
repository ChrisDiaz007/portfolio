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
      language:
        "Ruby on Rails, HTML5, CSS, PostgreSQL, OpenAI, Figma",
      images: "project1.png",
    },
    {
      name: "Hero Trainer",
      des: "A training partner rental platform where users can book expert trainers. The platform integrates GPS functionality to help users locate nearby trainers and schedule in-person sessions. User authentication and session management were implemented to ensure secure and seamless booking experiences. PostgreSQL was utilized for efficient database management, with optimized queries to enable fast retrieval of trainer data.",
      mission: "Back-end Developer + System Analysis + Design",
      language: "Ruby on Rails, HTML5, CSS, PostgreSQL, Figma",
      images: "project2.png",
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
        These are my Projects
      </div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
        {/* Short project description */}
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
