import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-white py-32 px-[5%] animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3B80C3] relative inline-block pb-2 border-b-4 border-[#3B80C3]">
            À propos de moi
          </h2>
        </div>

        {/* Carte */}
        <div className="bg-[#f1f6fb] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-lg transition-transform duration-300 hover:scale-[1.015]">
          {/* Image */}
          <div className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] flex-shrink-0">
            <img
              src="src/assets/Sefa2.jpg"
              alt="Sefa Tas"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Texte & contact */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-gray-800 text-xl leading-relaxed mb-8">
              Salut ! Je m'appelle Sefa TAS, actuellement en 3e année d'un BUT
              Informatique à l’IUT Nord Franche-Comté. Passionné par le
              développement web et la création de logiciels, je m’épanouis dans
              des projets où je peux concevoir, coder et résoudre des problèmes
              concrets. Mes domaines de prédilection ? Le développement
              d'applications web et logicielles, la gestion de bases de données
              et un intérêt pour l’administration réseau. En
              dehors de l’informatique, je suis un grand amateur de cinéma. 
              J'aime également voyager et le sport en général. Je suis aussi
              passionné de football et j’adore jouer aux échecs.
            </p>

            {/* Email encadré */}
            <div className="bg-[#d0e6f9] text-left text-base md:text-lg text-gray-800 rounded-lg px-5 py-3 inline-block mb-6">
              <span className="block font-semibold text-gray-600 mb-1">
                Email
              </span>
              sefatas.contact@gmail.com
            </div>

            {/* Réseaux sociaux */}
            <div className="flex gap-6 justify-center md:justify-start text-3xl text-[#3B80C3]">
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
