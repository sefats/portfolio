// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    { id: "about", label: "À propos" },
    { id: "parcours", label: "Parcours" },
    { id: "skills", label: "Compétences" },
    { id: "projects", label: "Projets" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[12vh] bg-white shadow-md z-50 transform transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[90%] mx-auto h-full flex items-center justify-between px-[5vw]">
        <a href="#home">
          <img src={logo} alt="Logo" className="h-[9vh] object-contain" />
        </a>
        <nav className="flex gap-[3vw]">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-[#3B80C3] font-bold text-[1.3rem] hover:text-[#1e63a4] transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
