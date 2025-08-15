import { useRef } from "react";
import CustomHook from "../CustomHook";
import aboutMeImage from "../../assets/aboutme.png";
import EmojiRotator from "./EmojiRotator";
import "./About.css";

const About = () => {
  const refTab = useRef(null);
  CustomHook(refTab);
  return (
    <div>
      <div className="about" ref={refTab}>
        <div className="about_top_container">
          <div className="about_first_selection">
            <img src={aboutMeImage} alt="aboutMe" className="aboutMe_image" />
            <div className="Engineer_emoji">
              <EmojiRotator />
            </div>
          </div>
          <div className="about_second_selection">
            <h2>ABOUT ME</h2>
            <h3>
              A dedicated Full-Stack Engineer based in Florida, United States 📍
            </h3>
            <p>
              As a Full-Stack Engineer, I posses an impressive arsenals of
              skills. I excel in designing and maintaining reponsive websites
              that offer a smooth user experience. My expertise lies in crafting
              dynamic, engaging interfaces through writting clean and optimized
              code and utilizing cutting-edge development tools and techniques.
              I am also a team player who trives in collaborating with
              cross-functional teams to produce outstating web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
