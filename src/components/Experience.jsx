import React from "react";

const Experience = () => {
  return (
    <section className="Experience flex justify-center p-15">
      <div className="body w-325 p-5 flex flex-col gap-15">
        <div>
          <h1 className="font-bold">Experience</h1>
        </div>
        <div className="border-l-18 flex flex-col gap-5 pl-7 border-l-fuchsia-500 font-bold text-fuchsia-400">
          <div>
            <p className="text-3xl">Freelancer</p>
            <p className="text-gray-300">Fullstack Developer</p>
            <p className="text-white">2025 - Present</p>
            <p className="text-white">
              As a freelance web developer, I build responsive and visually
              appealing websites for clients using Ruby on Rails. From frontend
              design to backend logic, I deliver full-stack solutions tailored
              to each client's business needs — with clean code, intuitive UX,
              and fast delivery.
            </p>
          </div>
          <div className="">
            <p className="text-3xl">NTT DATA</p>
            <p className="text-gray-300">IT Support Specialist</p>
            <p className="text-white">2021 - 2024</p>
            <p className="text-white">
              At NTT DATA, I provided multi-channel technical support — phone,
              email, and remote diagnostics — helping customers troubleshoot
              hardware, systems, and applications. I handled installation
              guidance, configuration walkthroughs, and root cause analysis,
              turning complex failures into documented solutions that
              strengthened the team's knowledge base.
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-bold">Education</h1>
        </div>
        <div className="border-l-18 flex flex-col gap-5 pl-7 border-l-fuchsia-500 font-bold text-fuchsia-400">
          <div>
            <p className="text-3xl">Miami Dade College(MDC)</p>
            <p className="text-gray-300">
              Major in Cybersecurity, Bacherlor in Science
            </p>
            <p className="text-white">2017 - 2021</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
