import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 0.1 } },
};

const imageAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const ProjectCard = ({ project, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const hasGallery = Array.isArray(project.gallery) && project.gallery.length > 0;

  const handleKeyDown = useCallback(
    (e) => {
      if (selectedImageIndex !== null && hasGallery) {
        if (e.key === "Escape") setSelectedImageIndex(null);
        if (e.key === "ArrowRight" && selectedImageIndex < project.gallery.length - 1)
          setSelectedImageIndex((prev) => prev + 1);
        if (e.key === "ArrowLeft" && selectedImageIndex > 0)
          setSelectedImageIndex((prev) => prev - 1);
      }
    },
    [selectedImageIndex, hasGallery, project.gallery]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 backdrop-blur-sm bg-white/20 z-[999]"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 max-w-5xl w-[92%] mx-auto mt-20 relative overflow-y-auto max-h-[85vh]"
          variants={modal}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Bouton fermeture */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-600 hover:text-black text-2xl cursor-pointer"
          >
            <FaTimes />
          </button>

          {/* Titre */}
          <h2 className="text-4xl font-bold text-[#3B80C3] mb-6">{project.title}</h2>

          {/* Description */}
          <p className="text-gray-800 text-xl leading-relaxed mb-8">{project.description}</p>

          {/* Sujet */}
          {project.subject && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#3B80C3] mb-3">À propos du projet</h3>
              <p className="text-gray-800 text-lg leading-relaxed">{project.subject}</p>
            </div>
          )}

          {/* Fonctionnalités */}
          {project.features && typeof project.features === "string" && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#3B80C3] mb-3">Fonctionnalités</h3>
              <ul className="space-y-2 text-gray-800 text-lg leading-relaxed">
                {project.features.split("\n").map((line, idx) => {
                  const [title, ...rest] = line.split(" : ");
                  return (
                    <li key={idx}>
                      <strong>{title} :</strong> {rest.join(" : ")}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Galerie */}
          {hasGallery && (
            <div className="mb-8 flex gap-4 overflow-x-auto pb-2">
              {project.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Aperçu ${idx + 1}`}
                  onClick={() => setSelectedImageIndex(idx)}
                  className="w-130 h-70 object-cover rounded-xl border cursor-pointer transition-transform duration-200 hover:scale-105"
                />
              ))}
            </div>
          )}

          {/* Lightbox */}
          <AnimatePresence>
            {selectedImageIndex !== null &&
              hasGallery &&
              selectedImageIndex >= 0 &&
              selectedImageIndex < project.gallery.length && (
                <motion.div
                  className="fixed inset-0 bg-black bg-opacity-80 z-[1000] flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedImageIndex(null)}
                >
                  <div onClick={(e) => e.stopPropagation()} className="relative">
                    <button
                      onClick={() => setSelectedImageIndex(null)}
                      className="absolute top-[-3rem] right-[-3rem] text-white text-3xl z-[1001] cursor-pointer hover:text-red-400 transition"
                    >
                      <FaTimes />
                    </button>

                    <motion.img
                      key={selectedImageIndex}
                      src={project.gallery[selectedImageIndex]}
                      alt={`Image ${selectedImageIndex + 1}`}
                      className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-lg"
                      variants={imageAnimation}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    />

                    {/* Flèche gauche */}
                    {selectedImageIndex > 0 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImageIndex((prev) => prev - 1);
                        }}
                        className="absolute left-[-3rem] top-1/2 -translate-y-1/2 text-white text-4xl z-[1001] cursor-pointer hover:text-blue-300 transition"
                      >
                        ‹
                      </button>
                    )}

                    {/* Flèche droite */}
                    {selectedImageIndex < project.gallery.length - 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImageIndex((prev) => prev + 1);
                        }}
                        className="absolute right-[-3rem] top-1/2 -translate-y-1/2 text-white text-4xl z-[1001] cursor-pointer hover:text-blue-300 transition"
                      >
                        ›
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
          </AnimatePresence>

          {/* Technologies */}
          {project.technologies?.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#3B80C3] mb-3">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-4">
                {project.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-[#e1ecf7] text-[#1e63a4] text-base font-medium px-4 py-1.5 rounded-full"
                  >
                    <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Liens */}
          <div className="mb-8 flex flex-wrap gap-6 items-center text-lg text-[#f57c00]">
            {project.site && (
              <a
                href={project.site}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <FaExternalLinkAlt /> Site en ligne
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <FaGithub /> Code source
              </a>
            )}
          </div>

          {/* Collaborateurs */}
          {project.collaborators?.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold text-[#3B80C3] mb-3">Collaborateurs</h3>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-1">
                {project.collaborators.map((collab, idx) => (
                  <li key={idx}>
                    <a
                      href={collab.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-[#1e63a4]"
                    >
                      {collab.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectCard;
