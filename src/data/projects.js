const projects = [
  {
    id: 1,
    title: "Balonu",
    image: "/balonu.png",
    description:
      "Balonu est une plateforme web dédiée à la présentation et à la gestion des manifestations de montgolfières dans la magnifique région de la Cappadoce.",
    subject:
      "Ce projet vise à offrir une expérience utilisateur complète pour les personnes souhaitant participer à des manifestations de montgolfières en Cappadoce. Il couvre à la fois le backend, qui gère la logique métier et la base de données, et le frontend, qui propose une interface utilisateur intuitive et réactive.",
    features: `Calendrier des Événements : Consultez le calendrier pour les prochaines manifestations.\nRéservation en Ligne : Réservez votre place pour une aventure inoubliable en montgolfière.\nInformations Touristiques : Découvrez la Cappadoce, son histoire et ses sites touristiques.\nGalerie : Parcourez les photos des précédentes manifestations.\nContact et Support : Contactez-nous pour toute question ou assistance.`,
    link: "/projets/balonu",
    github: "https://github.com/nexiath/balonu_",
    site: "https://balonu.vercel.app/",
    technologies: [
      { name: "React", icon: "react.svg" },
      { name: "Node.js", icon: "Node.js.svg" },
      { name: "MongoDB", icon: "MongoDB.svg" },
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
    image: "taxe-sucre.png",
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
      { name: "Symfony", icon: "Symfony.svg" },
      { name: "Bootstrap", icon: "Bootstrap.svg" },
      { name: "MySQL", icon: "MySQL.svg" },
    ],
    collaborators: [
      { name: "Ebubekir Guldal", github: "https://github.com/EbubekirGuldal" },
      { name: "Bilal Taze", github: "https://github.com/BilalTaze" },
    ],
    gallery: [
      "taxe-sucre2.png",
      "taxe-sucre3.png",
      "taxe-sucre4.png",
      "taxe-sucre5.png",
    ],
  },
  {
    id: 3,
    title: "Cahier-Registre Forvia",
    image: "forvia.png",
    description: "Application interne de registre d’entrées pour Forvia, permettant de suivre les visites des employés et visiteurs tout en générant des statistiques précises.",
    subject: "Développée lors de mon stage chez Forvia, cette application a pour but de centraliser les enregistrements des personnes entrant sur le site d’Allenjoie. En interfaçant le système avec LDAP (Active Directory), elle permet une identification rapide et fiable. Le projet visait également à produire des statistiques journalières et mensuelles pour améliorer la traçabilité et la gestion des accès.",
    features: `Identification LDAP : Connexion sécurisée via l’annuaire interne pour les employés.
    Enregistrement visiteurs : Interface dédiée à la saisie des entrées visiteurs avec date/heure.
    Statistiques journalières : Suivi des entrées en temps réel, avec visualisation des pics d’affluence.
    Statistiques mensuelles : Synthèse mensuelle des accès pour les responsables de site.
    Interface double : Accueil différencié Visiteur / Employé pour simplifier l’expérience utilisateur.`,
    link: "/projets/forvia",
    github: "https://github.com/sefats/cahier-registre-forvia",
    site: "https://cahier-registre-forvia.vercel.app/",
    technologies: [
      { name: "React", icon: "react.svg" },
      { name: "Node.js", icon: "Node.js.svg" },
      { name: "MySQL", icon: "MySQL.svg" }
    ],
  },
  {
    id: 4,
    title: "PokemonIOS",
    description: "Application iOS de type e-commerce dédiée à l’univers Pokémon, permettant aux utilisateurs de découvrir, ajouter et commander des cartes Pokémon via une interface fluide et moderne.",
    subject: "Cette application a été développée avec Swift pour la partie mobile et Node.js pour l’API back-end. Elle propose une expérience utilisateur complète : navigation dans les cartes Pokémon, création de compte, connexion, gestion du panier et finalisation de commande. L’objectif était de créer une application mobile stable, visuellement attrayante et fonctionnelle, inspirée des standards de l’e-commerce moderne, tout en restant fidèle à l’univers Pokémon.",
    features: `Navigation par collection : Parcours fluide de cartes Pokémon avec images, détails et rareté.
              Inscription et authentification : Création de compte utilisateur et connexion sécurisée.
              Ajout au panier : Système de panier interactif pour ajouter, retirer ou modifier les quantités.
              Passage de commande : Simulation de commande avec récapitulatif du panier.
              Connexion à une API Node.js : Échanges sécurisés entre l’app iOS et le serveur (produits, utilisateurs, commandes).`,
    technologies: [
      { name: "Swift", icon: "Swift.svg" },
      { name: "Node.js", icon: "Node.js.svg" }
    ],
    video: "PokemonIOS.MP4",
  },
  {
    id: 5,
    title: "Quoridor",
    image: "quoridor.png",
    description: "Reproduction en JavaFX du célèbre jeu de plateau Quoridor, où deux joueurs s’affrontent pour atteindre le côté opposé du plateau tout en plaçant stratégiquement des murs pour ralentir leur adversaire.",
    subject: "Ce projet a été réalisé en groupe dans un contexte pédagogique. L’objectif était de concevoir une version numérique du jeu Quoridor en utilisant JavaFX pour l’interface graphique. Le jeu devait intégrer une logique de mouvement, de blocage par murs, une gestion du tour par tour, et une IA simple pour simuler un adversaire. Nous avons aussi soigné l’ergonomie de l’interface pour une prise en main intuitive.",
    features: `Plateau interactif : Représentation fidèle du plateau Quoridor en grille graphique.
              Déplacement joueur : Commandes clavier ou clics pour déplacer les pions selon les règles.
              Placement de murs : Possibilité de poser des murs verticaux ou horizontaux pour gêner l’adversaire.
              IA simple : Mode contre l’ordinateur avec logique de déplacement automatique.
              Règles intégrées : Affichage des règles et des commandes à l’écran pour guider le joueur.`,
    link: "/projets/quoridor",
    github: "https://github.com/sefats/Quoridor_JavaFX",
    technologies: [
      { name: "Java", icon: "Java.svg" },
    ],
    collaborators: [
      { name: "Robin Cassard", github: "https://github.com/nexiath" },
      { name: "Noam Joly-Girods", github: "https://github.com/Na-m0" },
      { name: "Elmir Gerovic", github: "https://github.com/elmirge7" },
    ],  },
];

export default projects;
