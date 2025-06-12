import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

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

const PortfolioCard = ({ item, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const hasGallery = Array.isArray(item.gallery) && item.gallery.length > 0;

  const handleKeyDown = useCallback(
    (e) => {
      if (selectedImageIndex !== null && hasGallery) {
        if (e.key === "Escape") setSelectedImageIndex(null);
        if (e.key === "ArrowRight" && selectedImageIndex < item.gallery.length - 1)
          setSelectedImageIndex((prev) => prev + 1);
        if (e.key === "ArrowLeft" && selectedImageIndex > 0)
          setSelectedImageIndex((prev) => prev - 1);
      }
    },
    [selectedImageIndex, hasGallery, item.gallery]
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
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-600 hover:text-black text-2xl cursor-pointer"
          >
            <FaTimes />
          </button>

          <h2 className="text-4xl font-bold text-[#3B80C3] mb-6">{item.title}</h2>

          <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line mb-8">
            {item.fullText}
          </p>

          {/* Galerie (si elle existe) */}
          {hasGallery && (
            <div className="mb-8 flex gap-4 overflow-x-auto pb-2">
              {item.gallery.map((img, idx) => (
                <div key={idx} className="flex-shrink-0 w-[240px]">
                  <img
                    src={img}
                    alt={`Illustration ${idx + 1}`}
                    onClick={() => setSelectedImageIndex(idx)}
                    className="w-full h-auto object-cover rounded-xl border cursor-pointer transition-transform duration-200 hover:scale-105"
                  />
                  {item.legends?.[idx] && (
                    <p className="text-sm text-gray-600 italic text-center mt-2">
                      {item.legends[idx]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Lightbox (galerie) */}
          <AnimatePresence>
            {selectedImageIndex !== null &&
              hasGallery &&
              selectedImageIndex >= 0 &&
              selectedImageIndex < item.gallery.length && (
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
                      src={item.gallery[selectedImageIndex]}
                      alt={`Image ${selectedImageIndex + 1}`}
                      className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-lg"
                      variants={imageAnimation}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    />

                    {/* Navigation fléchée */}
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

                    {selectedImageIndex < item.gallery.length - 1 && (
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

          {/* Technologies utilisées */}
          {Array.isArray(item.technologies) && item.technologies.length > 0 && (
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-[#3B80C3] mb-3">
                Technologies utilisées
              </h3>
              <div className="flex flex-wrap gap-4">
                {item.technologies.map((tech, idx) => (
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioCard;
