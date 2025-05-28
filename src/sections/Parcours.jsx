import React from "react";

const experiences = [
  {
    date: "Avril – Juin 2024",
    title: "Stagiaire Validation Mécatronique",
    company: "Stellantis, Sochaux",
    description: "Test et validation des sous-systèmes embarqués dans les véhicules.",
  },
  {
    date: "Avril – Juin 2023",
    title: "Stagiaire Développement Web",
    company: "TechDev, Belfort",
    description: "Développement de modules internes en React pour un outil RH.",
  },
];

const Parcours = () => {
  return (
    <section id="parcours" className="bg-white pt-12 pb-24 px-[5%]">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Titre principal */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3B80C3] inline-block border-b-4 border-[#3B80C3] pb-1">
            Mon parcours
          </h2>
        </div>

        {/* Bloc parcours scolaire */}
        <div className="bg-[#dcecff] rounded-2xl p-8 md:p-10 shadow-md flex items-center justify-center relative overflow-hidden">
          <div className="absolute top-1/2 left-6 right-6 h-1 bg-[#3B80C3] z-0 opacity-30" />
          <div className="relative z-10 bg-[#3B80C3] text-white rounded-xl px-6 py-4 shadow-lg text-center">
            <p className="text-sm mb-1">2022 - 2025</p>
            <p className="text-lg font-bold">BUT Informatique</p>
            <p className="text-sm">IUT Nord-Franche-Comté</p>
            <div className="w-3 h-3 bg-white opacity-90 rounded-full mx-auto mt-4 shadow-md" />
          </div>
        </div>

        {/* Titre secondaire */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#3B80C3] inline-block border-b-2 border-[#3B80C3] pb-1">
            Mes expériences
          </h3>
        </div>

        {/* Timeline expériences */}
        <div className="relative border-l-4 border-[#3B80C3] pl-6 space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-[#dcecff] rounded-xl p-6 shadow-md transform transition hover:scale-[1.01] hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <span className="absolute -left-[11px] top-6 w-5 h-5 bg-[#3B80C3] rounded-full border-4 border-white shadow-md"></span>
              <p className="text-sm text-gray-600 mb-1">{exp.date}</p>
              <h3 className="text-lg font-bold text-[#1b3c59]">{exp.title}</h3>
              <p className="text-sm font-medium text-[#1b3c59]">{exp.company}</p>
              <p className="text-gray-700 mt-2 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Parcours;
