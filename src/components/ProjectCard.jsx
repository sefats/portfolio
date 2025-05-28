import React from "react";
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

const ProjectCard = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
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
            className="absolute top-6 right-6 text-gray-600 hover:text-black text-2xl"
          >
            <FaTimes />
          </button>

          {/* Titre */}
          <h2 className="text-4xl font-bold text-[#3B80C3] mb-6">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-gray-800 text-xl leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Galerie d'images */}
          {project.gallery?.length > 0 && (
            <div className="mb-8 flex gap-4 overflow-x-auto pb-2">
              {project.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Aperçu ${idx + 1}`}
                  className="w-60 h-40 object-cover rounded-lg border"
                />
              ))}
            </div>
          )}

          {/* Technologies utilisées */}
          {project.technologies?.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#3B80C3] mb-3">
                Technologies utilisées
              </h3>
              <div className="flex flex-wrap gap-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-[#e1ecf7] text-[#1e63a4] text-base font-medium px-4 py-1.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Liens externes */}
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
              <h3 className="text-2xl font-semibold text-[#3B80C3] mb-3">
                Collaborateurs
              </h3>
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
