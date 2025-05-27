// src/components/Navbar.jsx
import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <nav className="nav-links">
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
