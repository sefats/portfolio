import React, { useEffect, useState } from "react";
import logo from "/src/assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[12vh] bg-white shadow-md z-50 transform transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[90%] mx-auto h-full flex items-center justify-between px-[5vw]">
        <a href="#home" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="h-[9vh] object-contain" />
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-[3vw]">
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

        {/* Hamburger Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#3B80C3] text-3xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden absolute top-[12vh] left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 z-40">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className="text-[#3B80C3] font-bold text-xl hover:text-[#1e63a4] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
