// src/components/Navbar.jsx
import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[12vh] bg-white shadow-md z-50">
      <div className="max-w-[90%] mx-auto h-full flex items-center justify-between px-[5vw]">
        <a href="#home">
          <img src={logo} alt="Logo" className="h-[9vh] object-contain" />
        </a>
        <nav className="flex gap-[3vw]">
          <a
            href="#about"
            className="text-[#3B80C3] font-bold text-[1.3rem] hover:text-[#1e63a4] transition-colors"
          >
            À propos
          </a>
          <a
            href="#parcours"
            className="text-[#3B80C3] font-bold text-[1.3rem] hover:text-[#1e63a4] transition-colors"
          >
            Parcours
          </a>
          <a
            href="#skills"
            className="text-[#3B80C3] font-bold text-[1.3rem] hover:text-[#1e63a4] transition-colors"
          >
            Compétences
          </a>
          <a
            href="#projects"
            className="text-[#3B80C3] font-bold text-[1.3rem] hover:text-[#1e63a4] transition-colors"
          >
            Projets
          </a>
          <a
            href="#contact"
            className="text-[#3B80C3] font-bold text-[1.3rem] hover:text-[#1e63a4] transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
