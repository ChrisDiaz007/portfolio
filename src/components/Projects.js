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
      name: "Reacquaint: Upload tenders for optomized results",
      des: "Built a  ",
      mission: "Back-end Developer, system analysis and design",
      language: "Ruby on rails, Ruby, HTML5, CSS3",
      images: "project1.png",
    },
    {
      name: "Hero Trainer: Rent Expert Trainers for Personalized Classes",
      des: "Built a training partner rental platform using Ruby on Rails, where users can book expert trainers. Integrated GPS functionality to help users find nearby trainers and book in-person sessions. Implemented user authentication and session management to ensure secure and seamless booking experiences. Utilized PostgreSQL for efficient database management and optimized queries for fast retrieval of trainer data.",
      mission: "Back-end Developer, system analysis and design",
      language: "Ruby on rails, Ruby, HTML5, CSS3",
      images: "/project2.png",
    },
    {
      name: "Netflix-Inspired Movie Bookmarking App",
      des: "Built a movie discovery and bookmarking app using Ruby on Rails, allowing users to search for movies and save them to a personal watchlist. Implemented authentication, search functionality, and a user-friendly UI for seamless interaction. Optimized database queries using SQL for efficient search and retrieval, ensuring a smooth user experience.",
      mission: "Back-end Developer, system analysis and design",
      language: "Ruby on rails, Ruby, HTML5, CSS3",
      images: "/project3.PNG",
    },
  ]);
  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);
  return (
    <section className="projects" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        This is my Projects
      </div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
        short des for projects
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
                  <h4>Mission</h4>
                  <div className="de">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faEarthAmerica} />
                </div>
                <div>
                  <h4>Languages</h4>
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
