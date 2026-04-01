import React from "react";
import reacquaint from "../assets/reacquaint.png";

const Projects = () => {
  return (
    <section className="Projects flex justify-center py-15">
      <div className="body w-325 p-5">
        <div>
          <h1 className="font-bold">Projects</h1>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 pt-15">
          <div className="Project rounded-2xl p-6 flex flex-col gap-5 ">
            <div>
              <img src={reacquaint} alt="" />
            </div>
            <div>
              <p>Nuby</p>
            </div>
            <div>
              <div className="TechStack flex flex-wrap gap-2">
                <img src="https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white" />
                <img src="https://img.shields.io/badge/Rails-CC0000?style=for-the-badge&logo=rubyonrails&logoColor=white" />
                <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
                <img src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
              </div>
            </div>
            <div>
              <p>
                A mobile-first Rails web app that helps users understand the
                nutritional quality of food by scanning barcodes and tracking
                daily calorie intake against a personal goal.
              </p>
            </div>
          </div>
          <div className="Project">
            <div>
              <img src={reacquaint} alt="" />
            </div>
            <div>
              <title>Nuvy</title>
              <div className="TechStack flex flex-wrap gap-2">
                <img src="https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white" />
                <img src="https://img.shields.io/badge/Rails-CC0000?style=for-the-badge&logo=rubyonrails&logoColor=white" />
                <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
                <img src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
              </div>
              <p>
                A mobile-first Rails web app that helps users understand the
                nutritional quality of food by scanning barcodes and tracking
                daily calorie intake against a personal goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
