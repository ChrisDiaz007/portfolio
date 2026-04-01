import { useState } from "react";

const Navbar = () => {
  const listNav = ["Home", "Projects", "Experience", "Contact"];
  const [active, setActive] = useState("Home");

  return (
    <section className="Navbar flex justify-center fixed top-0 w-full z-50 backdrop-blur-md">
      <nav className="flex justify-end items-center gap-4 w-full max-w-[1300px] h-15">
        {listNav.map((value, key) => (
          <span
            key={key}
            onClick={() => {
              setActive(value);
              document
                .getElementById(value.toLowerCase())
                .scrollIntoView({ behavior: "smooth" });
            }}
            className={`cursor-pointer ${active === value ? "text-purple-400" : ""}`}
          >
            {value}
          </span>
        ))}
      </nav>
    </section>
  );
};

export default Navbar;
