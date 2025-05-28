const projects = [
  {
    id: 1,
    title: "Balonu",
    image: "/src/assets/projets/balonu.png",
    description:
      "Balonu est une plateforme web dédiée à la présentation et à la gestion des manifestations de montgolfières dans la région de la Cappadoce.",
    link: "/projets/balonu",
    github: "https://github.com/sefats/balonu",
    site: "https://balonu.cappadoce.com",
    technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    collaborators: [
      { name: "John Doe", github: "https://github.com/johndoe" },
      { name: "Sefa Tas", github: "https://github.com/sefats" },
    ],
    gallery: [
      "/src/assets/projets/balonu_1.png",
      "/src/assets/projets/balonu_2.png",
    ],
  },
  {
    id: 2,
    title: "Taxe-Sucre",
    image: "/src/assets/projects/moviezone.png",
    description:
      "MovieZone est une application de catalogue de films avec des notes, des critiques et des bandes-annonces.",
    link: "/projets/moviezone",
    github: "https://github.com/sefats/moviezone",
    site: "https://moviezone.vercel.app",
    technologies: ["Vue.js", "Firebase", "TMDB API"],
    collaborators: [{ name: "Sefa Tas", github: "https://github.com/sefats" }],
    gallery: [
      "/src/assets/projects/moviezone_1.png",
      "/src/assets/projects/moviezone_2.png",
    ],
  },
  {
    id: 3,
    title: "Cahier des Registre - Forvia",
    image: "/src/assets/projects/mytasks.png",
    description:
      "Une application de gestion de tâches avec rappels, étiquettes et notifications.",
    link: "/projets/mytasks",
    github: "https://github.com/sefats/mytasks",
    site: "",
    technologies: ["React", "Express", "PostgreSQL"],
    collaborators: [],
    gallery: ["/src/assets/projects/mytasks_1.png"],
  },
  {
    id: 4,
    title: "PokemonIOS app",
    image: "/src/assets/projects/weathernow.png",
    description:
      "Application météo moderne avec prévisions, cartes et données en temps réel.",
    link: "/projets/weathernow",
    github: "https://github.com/sefats/weathernow",
    site: "",
    technologies: ["Next.js", "OpenWeatherMap API"],
    collaborators: [],
    gallery: [],
  },
  {
    id: 5,
    title: "Quoridor",
    image: "/src/assets/projects/equiz.png",
    description:
      "Plateforme de quiz personnalisée pour les étudiants et enseignants.",
    link: "/projets/equiz",
    github: "https://github.com/sefats/equiz",
    site: "",
    technologies: ["Symfony", "Bootstrap", "MySQL"],
    collaborators: [],
    gallery: [],
  },
];

export default projects;
