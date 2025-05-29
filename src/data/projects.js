const projects = [
  {
    id: 1,
    title: "Balonu",
    image: "/src/assets/projets/balonu.png",
    description:
      "Balonu est une plateforme web dédiée à la présentation et à la gestion des manifestations de montgolfières dans la magnifique région de la Cappadoce.",
    subject:
      "Ce projet vise à offrir une expérience utilisateur complète pour les personnes souhaitant participer à des manifestations de montgolfières en Cappadoce. Il couvre à la fois le backend, qui gère la logique métier et la base de données, et le frontend, qui propose une interface utilisateur intuitive et réactive.",
    features: `Calendrier des Événements : Consultez le calendrier pour les prochaines manifestations.\nRéservation en Ligne : Réservez votre place pour une aventure inoubliable en montgolfière.\nInformations Touristiques : Découvrez la Cappadoce, son histoire et ses sites touristiques.\nGalerie : Parcourez les photos des précédentes manifestations.\nContact et Support : Contactez-nous pour toute question ou assistance.`,
    link: "/projets/balonu",
    github: "https://github.com/nexiath/balonu_",
    site: "https://balonu.vercel.app/",
    technologies: [
      { name: "React", icon: "/src/assets/logos/React.svg" },
      { name: "Node.js", icon: "/src/assets/logos/Node.js.svg" },
      { name: "MongoDB", icon: "/src/assets/logos/MongoDB.svg" },
    ],
    collaborators: [
      { name: "Robin Cassard", github: "https://github.com/nexiath" },
      { name: "Noam Joly-Girods", github: "https://github.com/Na-m0" },
      { name: "Elmir Gerovic", github: "https://github.com/elmirge7" },
    ],

  },
  {
    id: 2,
    title: "Taxe-Sucre",
    image: "/src/assets/projets/taxe-sucre.png",
    description: "Taxe-Sucre est une application web développée pour automatiser le calcul et la déclaration de la taxe sur les boissons sucrées en France. Elle est destinée aux commerçants du secteur alimentaire afin de les aider à rester conformes à la réglementation tout en gagnant du temps.",
    subject: "Ce projet a été réalisé chez Sevilog dans le cadre d’un stage en développement. L’objectif était de répondre aux besoins des clients en proposant une solution complète et intuitive permettant de gérer les produits, les déclarations fiscales et le calcul des taxes sucrées, tout en respectant les règles fiscales en vigueur. J’ai principalement travaillé sur le tableau de bord administrateur, le module de gestion des produits, la duplication d’historiques et le calcul automatisé de la taxe.",
    features: `Gestion des produits : Ajout, modification, suppression, filtrage par code-barres ou catégorie, avec variantes selon pays et année.
    Duplication d’historique : Génération rapide d’une nouvelle déclaration à partir d’une précédente, pour gagner du temps sur les périodes récurrentes.
    Calcul automatique de la taxe : Application dynamique des barèmes fiscaux en fonction de l’année, de la quantité de sucre et des édulcorants.
    Génération de PDF : Création de documents de déclaration téléchargeables pour l’administration fiscale.
    Dashboard administrateur : Supervision complète des données, contrôle des produits soumis, alertes en cas de doublons ou erreurs, statistiques globales.
    Authentification et gestion des rôles : Accès différencié entre administrateurs (pleins droits) et utilisateurs standards (droits limités).`,
    link: "/projets/taxe-sucre",
    site: "https://taxe-sucre.com/",
    technologies: [
      { name: "Symfony", icon: "/src/assets/logos/Symfony.svg" },
      { name: "Bootstrap", icon: "/src/assets/logos/Bootstrap.svg" },
      { name: "MySQL", icon: "/src/assets/logos/MySQL.svg" },
    ],
    collaborators: [
      { name: "Ebubekir Guldal", github: "https://github.com/EbubekirGuldal" },
      { name: "Bilal Taze", github: "https://github.com/BilalTaze" },
    ],
    gallery: [
      "/src/assets/projets/taxe-sucre2.png",
      "/src/assets/projets/taxe-sucre3.png",
      "/src/assets/projets/taxe-sucre4.png",
      "/src/assets/projets/taxe-sucre5.png",
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
