import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import projects from "/src/data/projects";
import ProjectCard from "/src/components/ProjectCard";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Bloque scroll
  };

  const handleClose = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Débloque scroll
  };

  return (
    <section id="projects" className="bg-white py-32 px-[5%]">
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#3B80C3] border-b-4 border-[#3B80C3] inline-block pb-2">
            Projets
          </h2>
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-30">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-lg border border-gray-200 hover:translate-y-[-4px] transition-all duration-300 ease-in-out p-5 flex flex-col"
            >
              {/* Image ou Vidéo */}
            <div className="w-full h-[260px] flex items-center justify-center overflow-hidden rounded-xl mb-4 border bg-gray-50">
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-[100%] w-auto object-contain rounded-lg"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover rounded-lg"
                />
              )}
            </div>

              {/* Titre */}
              <h3 className="text-2xl font-bold text-[#3B80C3] mb-4">
                {project.title}
              </h3>

              {/* Bouton */}
              <button
                onClick={() => handleOpen(project)}
                className="mt-auto self-start text-[#f57c00] font-semibold text-base flex items-center gap-2 hover:underline hover:scale-[1.02] transition-transform cursor-pointer"
              >
                Voir plus <FaArrowRightLong className="translate-y-[1px]" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modale */}
      {selectedProject && (
        <ProjectCard project={selectedProject} onClose={handleClose} />
      )}
    </section>
  );
};

export default Projects;
