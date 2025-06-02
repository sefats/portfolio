import React, { useEffect, useState } from "react";
import AnimatedText from "/src/components/AnimatedText";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";

const Sefa = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen text-black flex items-center justify-center px-[5%] pt-40 md:pt-24 pb-24 overflow-hidden"
    >
      <ParticlesBackground />

      {/* 🧑‍💻 Contenu principal */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-24 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 md:pr-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sefa TAS</h1>
          <h2 className="text-xl md:text-2xl mb-8">
            <AnimatedText />
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <a
              href="TAS_Sefa_CV.pdf"
              className="bg-black text-white font-semibold text-lg px-8 py-3 rounded-full hover:bg-gray-800 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Télécharger mon CV
            </a>
            <a
              href="#contact"
              className="border border-black text-lg px-8 py-3 rounded-full hover:bg-black hover:text-white transition"
            >
              Me contacter
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/Sefa.png"
            alt="Sefa Tas"
            className="w-[350px] h-[350px] md:w-[420px] md:h-[420px] object-cover rounded-xl shadow-lg border-4 border-black"
          />
        </motion.div>
      </div>

      {/* ⬇️ Indicateur scroll */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-7 h-7 border-b-2 border-r-2 border-black rotate-45 animate-bounce" />
        </motion.div>
      )}
    </section>
  );
};

export default Sefa;
