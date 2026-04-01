import React from "react";
import demoDay from "../assets/demoDay.jpg";
import SplineScene from "./SplineScene";

const Home = () => {
  return (
    <section className="Home relative flex justify-center py-15">
      <div className="absolute inset-0 -z-1">
        <SplineScene />
      </div>
      <div className="w-325 relative z-1 p-5 ">
        <div className="flex">
          <div className="w-2/4">
            <h1 className="font-bold">
              Hi, I'm{" "}
              <span className="text-fuchsia-600">Christopher Diaz </span>
            </h1>
            <p className="text-[20px]">
              I'm a fullstack web developer specializing in {""}
              <span className="text-fuchsia-400">
                Ruby on Rails, JavaScript
              </span>
              , and{" "}
              <span className="text-fuchsia-400"> front-end technologies </span>
              . I'm now exited to continue building products that make a
              positive impact in the world.{" "}
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src={demoDay} alt="" className="rounded-full w-64" />
          </div>
        </div>
        <section id="skills">
          <div className="pb-5">
            <h2 className="text-[40px] font-bold">Skills</h2>
          </div>
          <div className="border-l-18 flex flex-col pl-7 border-l-fuchsia-500 font-bold text-fuchsia-400">
            <div className="skill card">
              <div className="text-[28px]">Front-End</div>
              <div className="skill-bar flex gap-2 flex-wrap">
                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
                <img src="https://img.shields.io/badge/Stimulus-333333?style=for-the-badge&logo=stimulus&logoColor=white" />
                <img src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
                <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
              </div>
            </div>
            <div className="skill card ">
              <div className="text-[28px]">Back-End</div>
              <div className="skill-bar flex gap-2 flex-wrap">
                <img src="https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white" />
                <img src="https://img.shields.io/badge/Rails-CC0000?style=for-the-badge&logo=rubyonrails&logoColor=white" />
                <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
              </div>
            </div>

            <div className="skill card">
              <div className="text-[28px]">Tools</div>
              <div className="skill-bar flex gap-2 flex-wrap">
                <img src="https://img.shields.io/badge/RESTful%20API-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" />
                <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
                <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />
                <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;
