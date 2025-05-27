// src/sections/Hero.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Sefa = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Texte à gauche */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sefa Tas</h1>
          <h2 className="text-xl md:text-2xl text-blue-400 font-semibold mb-6">Développeur Full Stack</h2>
          <p className="text-gray-300 mb-6 max-w-md mx-auto md:mx-0">
            Passionné de code, rigoureux et toujours en quête de nouveaux défis.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <a
              href="/assets/CV_SefaTas.pdf"
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Télécharger CV
            </a>
            <a
              href="https://github.com/tonpseudo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-blue-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/tonprofil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Image à droite */}
        <div className="flex-1 flex justify-center">
          <img
            src="/assets/pp.jpg"
            alt="Sefa Tas"
            className="w-64 h-64 object-cover rounded-xl shadow-lg border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Sefa;
