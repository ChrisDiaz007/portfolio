import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import CustomHook from "./CustomHook";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const [listSkills] = useState([
    {
      name: "Ruby on Rails",
      // des: "Developed full-stack web applications, implementing authentication, database management, and RESTful APIs.",
      icon: faGem,
    },
    {
      name: "React",
      // des: "Built dynamic and interactive user interfaces with reusable components.",
      icon: faReact,
    },
    {
      name: "Javascript",
      // des: "Added interactivity and dynamic features to web applications.",
      icon: faJs,
    },
    {
      name: "HTML",
      // des: "Structured web pages with semantic markup for accessibility and SEO. ",
      icon: faHtml5,
    },
    {
      name: "CSS/SCSS",
      // des: "Styled web pages, ensuring responsive and visually appealing designs.",
      icon: faCss3,
    },
    {
      name: "PostgreSQL",
      // des: "Wrote database queries and managed data in PostgreSQL.",
      icon: faDatabase,
    },
  ]);
  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);
  return (
    <section className="skills" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        These are my skills
      </div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
        {/* short skills description */}
      </div>
      <div className="list" ref={(el) => el && refDivs.current.push(el)}>
        {listSkills.map((value, key) => (
          <div key={key} className="item">
            <FontAwesomeIcon icon={value.icon} />
            <h3>{value.name}</h3>
            <div className="des">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
