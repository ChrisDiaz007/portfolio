import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faBity,
  faKeybase,
} from "@fortawesome/free-brands-svg-icons";
// import { icon } from "@fortawesome/fontawesome-svg-core";
import CustomHook from "./CustomHook";
// import { faJ } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const [listSkills] = useState([
    {
      name: "HTML",
      des: "Semantic HTML5 for better accessibility and SEO. ",
      icon: faHtml5,
    },
    {
      name: "CSS",
      des: "",
      icon: faCss3,
    },
    {
      name: "Javascript",
      des: "3",
      icon: faJs,
    },
    {
      name: "ReactJS",
      des: "4",
      icon: faReact,
    },
    {
      name: "Ruby on rails",
      des: "6",
      icon: faBity,
    },
    {
      name: "SQL",
      des: "7",
      icon: faKeybase,
    },
  ]);
  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);
  return (
    <section className="skills" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        This is my skills
      </div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
        T-T
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
