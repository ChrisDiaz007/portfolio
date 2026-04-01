import React, { useState } from "react";

const Navbar = () => {
  const listNav = ["Home", "Projects", "Experience", "Contact"];

  return (
    <section className="Navbar flex justify-center ">
      <nav className="flex justify-end items-center gap-4 w-325 h-15">
        {listNav.map((value, key) => (
          <span key={key}>{value}</span>
        ))}
      </nav>
    </section>
  );
};

export default Navbar;
