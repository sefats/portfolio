import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white py-24 px-[5%] animate-fade-in"
    >
      <div className="max-w-7xl mx-auto">
        {/* Titre avec ligne et effet */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3B80C3] relative inline-block pb-2 border-b-4 border-[#3B80C3]">
            À propos de moi
          </h2>
        </div>

        {/* Carte principale */}
        <div className="bg-[#f1f6fb] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-md transition-transform duration-300 hover:scale-[1.01]">
          {/* Image à gauche */}
          <div className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] flex-shrink-0">
            <img
              src="src/assets/pp.jpg"
              alt="Sefa Tas"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Texte & Contact */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to...
            </p>

            {/* Email encadré */}
            <div className="bg-[#d0e6f9] text-left text-sm text-gray-800 rounded-md px-4 py-2 inline-block mb-4">
              <span className="block font-medium text-gray-600">Email</span>
              sefatas.contact@gmail.com
            </div>

            {/* Réseaux sociaux */}
            <div className="flex gap-4 justify-center md:justify-start text-2xl text-[#3B80C3]">
              <a
                href="https://www.linkedin.com/in/sefa-alperen-tas-9aa976290/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/sefats"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
