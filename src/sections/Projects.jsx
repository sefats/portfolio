import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-32 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#3B80C3] border-b-4 border-[#3B80C3] inline-block pb-2">
            Projets
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-[#3B80C3] rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#3B80C3] mb-3">
                {project.title}
              </h3>
              <a
                href={project.link}
                className="text-[#f57c00] font-semibold flex items-center gap-1 hover:underline"
              >
                Voir plus <FaArrowRightLong className="translate-y-[1px]" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
