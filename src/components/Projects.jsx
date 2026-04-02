import reacquaint from "../assets/reacquaint.png";

const projects = [
  {
    name: "Nuby",
    image: reacquaint,
    description:
      "A mobile-first Rails web app that helps users understand the nutritional quality of food by scanning barcodes and tracking daily calorie intake against a personal goal.",
    techStack: [
      "https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white",
      "https://img.shields.io/badge/Rails-CC0000?style=for-the-badge&logo=rubyonrails&logoColor=white",
      "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white",
      "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      "https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
      "https://img.shields.io/badge/OpenAPI-6BA539?style=for-the-badge&logo=openapiinitiative&logoColor=white",
    ],
    githubUrl: "https://github.com/ChrisDiaz007/nuby",
    liveUrl: "https://github.com/ChrisDiaz007/nuby",
  },
  {
    name: "Reacquaint",
    image: reacquaint,
    description:
      "A construction tender evaluation platform enabling bidders to upload tenders and receive AI-driven assessments and scores across key criterias such as Budget Control, Environment, Health & Safety, Qualification, and Quality.",
    techStack: [
      "https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white",
      "https://img.shields.io/badge/Rails-CC0000?style=for-the-badge&logo=rubyonrails&logoColor=white",
      "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white",
      "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      "https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white",
      "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
    ],
    githubUrl: "https://github.com/adi-kotian/reacquaint",
    liveUrl: "https://github.com/adi-kotian/reacquaint",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="Projects flex justify-center py-15">
      <div className="body w-full max-w-[1300px] p-5">
        <div>
          <h1 className="font-bold">Projects</h1>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 pt-15">
          {projects.map((project, key) => (
            <div
              key={key}
              className="Project rounded-2xl p-6 flex flex-col gap-5"
            >
              <img
                src={project.image}
                alt={`${project.name} project screenshot`}
              />
              <p>{project.name}</p>
              <div className="TechStack flex flex-wrap gap-2">
                {project.techStack.map((badge, i) => (
                  <img key={i} src={badge} />
                ))}
              </div>
              <p>{project.description}</p>
              <div className="flex gap-5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-3xl bg-white text-fuchsia-500 hover:bg-fuchsia-600 hover:text-white"
                >
                  Github Repo
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-3xl bg-white text-fuchsia-500 hover:bg-fuchsia-600 hover:text-white"
                >
                  Web Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
