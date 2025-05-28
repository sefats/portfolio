// src/components/AnimatedText.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Développeur Full-Stack",
  "Développement d'Applications",
  "Développement Front-End",
  "Systèmes et Réseaux",
  "Développement Back-End",
  
];

const AnimatedText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % roles.length),
      4000 // Change toutes les 3 secondes
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-10 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.h2
          key={roles[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl text-[#3B80C3] font-semibold absolute"
        >
          {roles[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedText;
