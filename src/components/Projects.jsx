import reacquaint from "../assets/reacquaint.png";

const Projects = () => {
  return (
    <section id="projects" className="Projects flex justify-center py-15">
      <div className="body w-full max-w-[1300px] p-5">
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
                <img
                  src="https://img.shields.io/badge/OpenAPI-6BA539?logo=openapiinitiative&logoColor=white"
                  className="h-7 "
                />
              </div>
            </div>
            <div>
              <p>
                A mobile-first Rails web app that helps users understand the
                nutritional quality of food by scanning barcodes and tracking
                daily calorie intake against a personal goal.
              </p>
            </div>
            <div className="flex gap-5">
              <div>
                <p>
                  <a
                    href="https://github.com/ChrisDiaz007/nuby"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" p-2 rounded-3xl bg-white text-fuchsia-500 hover:bg-fuchsia-600 hover:text-white"
                  >
                    Github Repo
                  </a>
                </p>
              </div>
              <div>
                <p>
                  <a
                    href="https://github.com/adi-kotian/reacquaint"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" p-2 rounded-3xl bg-white text-fuchsia-500 hover:bg-fuchsia-600 hover:text-white"
                  >
                    Web Link
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="Project rounded-2xl p-6 flex flex-col gap-5 ">
            <div>
              <img src={reacquaint} alt="" />
            </div>
            <div>
              <p>Reacquaint</p>
            </div>
            <div>
              <div className="TechStack flex flex-wrap gap-2">
                <img src="https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white" />
                <img src="https://img.shields.io/badge/Rails-CC0000?style=for-the-badge&logo=rubyonrails&logoColor=white" />
                <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
                <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
                <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
              </div>
            </div>
            <div>
              <p>
                A construction tender evaluation platform enabling bidders to
                upload tenders and receive AI-driven assessments and scores
                across key criterias such as Budget Control, Environment, Health
                & Safery, Qualification, and Quality.
              </p>
            </div>
            <div>
              <div className="flex gap-5">
                <div>
                  <p>
                    <a
                      href="https://github.com/adi-kotian/reacquaint"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" p-2 rounded-3xl bg-white text-fuchsia-500 hover:bg-fuchsia-600 hover:text-white"
                    >
                      GitHub Repo
                    </a>
                  </p>
                </div>
                <div>
                  <p>
                    <a
                      href="https://github.com/adi-kotian/reacquaint"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" p-2 rounded-3xl bg-white text-fuchsia-500 hover:bg-fuchsia-600 hover:text-white"
                    >
                      Web Link
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex pt-10">View more work on Github</div> */}
      </div>
    </section>
  );
};

export default Projects;
