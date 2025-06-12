import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import portfolio from "/src/data/portfolio";
import PortfolioCard from "/src/components/PortfolioCard";

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
    setSelectedItem(item);
    document.body.style.overflow = "hidden"; // Bloque le scroll
  };

  const handleClose = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto"; // Débloque le scroll
  };

  return (
    <section id="portfolio" className="bg-white py-32 px-[5%]">
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#3B80C3] border-b-4 border-[#3B80C3] inline-block pb-2">
            Portfolio
          </h2>
        </div>

        {/* Grille des compétences analysées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-30">
          {portfolio.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-md hover:shadow-lg border border-gray-200 hover:translate-y-[-4px] transition-all duration-300 ease-in-out p-5 flex flex-col"
            >
              {/* Image illustrative (optionnelle) */}
              {Array.isArray(item.gallery) && item.gallery.length > 0 && (
                <div className="w-full h-[260px] flex items-center justify-center overflow-hidden rounded-xl mb-4 border bg-gray-50">
                  <img
                    src={item.gallery[0]}
                    alt={item.title}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
              )}

              {/* Titre */}
              <h3 className="text-2xl font-bold text-[#3B80C3] mb-4">
                {item.title}
              </h3>

              {/* Bouton d'ouverture */}
              <button
                onClick={() => handleOpen(item)}
                className="mt-auto self-start text-[#f57c00] font-semibold text-base flex items-center gap-2 hover:underline hover:scale-[1.02] transition-transform cursor-pointer"
              >
                Voir l’analyse <FaArrowRightLong className="translate-y-[1px]" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modale */}
      {selectedItem && (
        <PortfolioCard item={selectedItem} onClose={handleClose} />
      )}
    </section>
  );
};

export default Portfolio;
