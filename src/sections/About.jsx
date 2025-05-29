import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import githubLogo from "../assets/logos/GitHub.svg";
import linkedinLogo from "../assets/logos/LinkedIn.svg";

const About = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sefatas.contact@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // message visible 2s
    });
  };

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
              src="/src/assets/images/Sefa2.jpg"
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
              concrets. Ce que j'aime dans l'informatique ? Le développement
              d'applications web et logicielles, la gestion de bases de données
              et un intérêt pour l’administration systèmes et réseaux. 
              En dehors de l’informatique, j'aime passer mon temps libre à regarder des films et des séries.
              J'aime également voyager, jouer aux jeux vidéos et le sport en général, particulièrement le football et les échecs.

            </p>

            {/* Email cliquable + copiable */}
            <div
              onClick={handleCopyEmail}
              className="cursor-pointer bg-[#d0e6f9] hover:bg-[#bddaf3] transition-colors duration-200 text-left text-base md:text-lg text-gray-800 rounded-lg px-5 py-3 inline-block mb-6 relative group"
              title="Cliquez pour copier l’e-mail"
            >
              <span className="block font-semibold text-gray-600 mb-1">
                Email
              </span>
              sefatas.contact@gmail.com
              {/* Message "Copié !" */}
              {copied && (
                <span className="absolute top-0 right-0 bg-[#3B80C3] text-white text-xs px-2 py-1 rounded-bl-lg shadow-md">
                  Copié !
                </span>
              )}
            </div>

            {/* Réseaux sociaux avec logos image */}
            <div className="flex gap-6 justify-center md:justify-start text-3xl">
              <a
                href="https://www.linkedin.com/in/sefa-alperen-tas-9aa976290/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative hover:scale-110 transition-transform"
              >
                <img src={linkedinLogo} alt="LinkedIn" className="w-8 h-8" />
              </a>

              <a
                href="https://github.com/sefats"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative hover:scale-110 transition-transform"
              >
                <img src={githubLogo} alt="GitHub" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
