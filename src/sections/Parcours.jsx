import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

// Logos entreprises
import forviaLogo from "../assets/FORVIA.svg.png";
import sevilogLogo from "../assets/sevilog.png";

// Logos technologies (ajuste selon ton organisation)
import reactLogo from "../assets/logos/React.svg";
import symfonyLogo from "../assets/logos/Symfony.svg";
import phpLogo from "../assets/logos/Php.svg";
import mysqlLogo from "../assets/logos/MySQL.svg";
import nodejsLogo from "../assets/logos/Node.js.svg";
import vuejsLogo from "../assets/logos/Vue.js.svg";

const Parcours = () => {
  const [showExperiences, setShowExperiences] = useState(false);

  const toggleView = () => setShowExperiences(!showExperiences);

  const techIcons = (logos) => (
    <div className="flex gap-3 mt-4 flex-wrap">
      {logos.map(({ src, name }) => (
        <Tippy content={name} key={name} placement="top">
          <img
            src={src}
            alt={name}
            className="w-8 h-8 hover:scale-110 transition-transform duration-200"
          />
        </Tippy>
      ))}
    </div>
  );

  return (
    <section id="parcours" className="bg-white pt-32 pb-40 px-[5%]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#3B80C3] border-b-4 border-[#3B80C3] inline-block pb-2">
            {showExperiences ? "Mes expériences" : "Mon parcours"}
          </h2>
        </div>

        <div className="text-center mb-14">
          <button
            onClick={toggleView}
            className="text-white bg-[#3B80C3] hover:bg-[#2f6dac] transition px-8 py-3 rounded-full text-xl flex items-center justify-center gap-3 mx-auto shadow-md"
          >
            {showExperiences ? "Voir mon parcours" : "Voir mes expériences"}
            <FaArrowRightLong className="translate-y-[1px]" />
          </button>
        </div>

        <div className="min-h-[300px] relative">
          <AnimatePresence mode="wait">
            {!showExperiences ? (
              <motion.div
                key="parcours"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-[#dcecff] rounded-3xl p-12 shadow-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-1/2 left-6 right-6 h-1 bg-[#3B80C3] z-0 opacity-30" />
                  <div className="relative z-10 bg-[#3B80C3] text-white rounded-xl px-10 py-8 shadow-md text-center">
                    <p className="text-lg mb-1">2022 - 2025</p>
                    <p className="text-2xl font-bold">BUT Informatique</p>
                    <p className="text-base">IUT Nord-Franche-Comté</p>
                    <div className="w-3 h-3 bg-white rounded-full mx-auto mt-4 shadow-md" />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="experiences"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-10 border-l-4 border-[#3B80C3] pl-8">
                  {/* Expérience Sevilog */}
                  <motion.div className="bg-[#dcecff] p-8 rounded-2xl shadow-md relative">
                    <div className="absolute -left-[14px] top-6 w-5 h-5 bg-white border-2 border-[#3B80C3] rounded-full" />
                    <img
                      src={sevilogLogo}
                      alt="Sevilog"
                      className="absolute right-6 top-6 w-[60px]"
                    />
                    <p className="text-base text-gray-600 mb-1">
                      Janvier – Avril 2025
                    </p>
                    <h3 className="font-bold text-2xl text-[#1e63a4]">
                      Stage : Développement d’Application
                    </h3>
                    <p className="text-base font-medium">
                      Sevilog, Mundolsheim
                    </p>
                    <p className="text-base mt-2 leading-relaxed">
                      Développement et amélioration de l’application “Taxe au
                      sucre” en Symfony. Ajout de fonctionnalités pour les
                      administrateurs, optimisation du processus d’ajout et
                      modification des produits, amélioration du backend et mise
                      en place de la génération de PDF pour la déclaration de la
                      taxe au sucre.
                    </p>
                    {techIcons([
                      { src: symfonyLogo, name: "Symfony" },
                      { src: phpLogo, name: "PHP" },
                      { src: mysqlLogo, name: "MySQL" },
                    ])}
                  </motion.div>

                  {/* Expérience Forvia */}
                  <motion.div className="bg-[#dcecff] p-8 rounded-2xl shadow-md relative">
                    <div className="absolute -left-[14px] top-6 w-5 h-5 bg-white border-2 border-[#3B80C3] rounded-full" />
                    <img
                      src={forviaLogo}
                      alt="Forvia"
                      className="absolute right-6 top-6 w-[60px]"
                    />
                    <p className="text-base text-gray-600 mb-1">
                      Avril – Juin 2024
                    </p>
                    <h3 className="font-bold text-2xl text-[#1e63a4]">
                      Stage : Développements d’Applications
                    </h3>
                    <p className="text-base font-medium">Forvia, Allenjoie</p>
                    <p className="text-base mt-2 leading-relaxed">
                      Amélioration, correction et ajout de nouvelles
                      fonctionnalités sur un site web gérant les alertes de
                      composants. Implémentation d'un système d'envoi de mails
                      et de SMS. Création d’un site web qui permet d'enregistrer
                      les personnes entrant dans l'entreprise via l'outil LDAP.
                      Ce registre offre également des statistiques journalières
                      et mensuelles
                    </p>
                    {techIcons([
                      { src: vuejsLogo, name: "VueJS" },
                      { src: nodejsLogo, name: "NodeJS" },
                      { src: mysqlLogo, name: "MySQL" },
                    ])}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Parcours;
