const portfolio = [
  {
    id: 1,
    title: "Utilisation de Symfony 7.1 avec architecture MVC",
    description:
      "Application concrète de l’architecture MVC dans le projet Taxe-Sucre avec Symfony 7.1, séparation claire des responsabilités et intégration de nouvelles fonctionnalités dans une base de code existante.",
    fullText: `Lors de mon stage de troisième année de BUT Informatique, j’ai travaillé sur le développement de l’application Taxe-Sucre, un projet professionnel au sein de l’entreprise Sevilog. Cette application permet de gérer la déclaration d’une taxe réglementaire appliquée aux boissons sucrées. Elle a été développée à partir du framework Symfony 7.1, en suivant rigoureusement l’architecture MVC, que j’ai appris à maîtriser à la fois dans sa théorie et surtout dans sa mise en œuvre concrète.

L’un des premiers enjeux a été de comprendre la structure de l’application existante et d’y intégrer mes propres développements sans casser la logique du projet. L’architecture MVC, déjà en place, séparait clairement les responsabilités entre les modèles (entités Doctrine), les vues (fichiers Twig) et les contrôleurs (classes PHP dédiées à la logique métier et au routage). J’ai pu constater à quel point cette séparation facilitait la maintenance et la clarté du code, notamment lorsqu’il a fallu faire évoluer certaines fonctionnalités sans impacter l’ensemble du projet.

Très rapidement, j’ai été amené à créer mes propres contrôleurs pour gérer des fonctionnalités spécifiques comme l’ajout ou la duplication d’historiques fiscaux, le traitement de la déclaration, ou encore la génération de documents PDF. Pour cela, j’ai utilisé les commandes intégrées de Symfony, notamment pour générer des squelettes de fichiers, appliquer des migrations de base de données ou encore gérer le cache applicatif. Ces outils m’ont permis de gagner en efficacité et de produire un code plus conforme aux standards du framework.

L’un des points techniques que j’ai particulièrement apprécié a été l’injection de dépendances, qui permet de rendre chaque composant indépendant et réutilisable. Par exemple, j’ai utilisé l’injection du service EntityManager pour manipuler la base de données au sein de mes contrôleurs, et intégré d’autres services personnalisés pour traiter certaines opérations métiers. Cette logique d’injection et de découplage m’a permis de structurer mon code de manière modulaire, ce qui a été un vrai atout pour le projet.

Le projet comportait également une interface d’administration bâtie sur EasyAdmin. Cela m’a confronté à une réalité courante en entreprise : faire cohabiter une architecture MVC personnalisée avec des solutions plus “clés en main”. J’ai ainsi appris à composer entre des pages Twig sur-mesure pour le client final, et des interfaces générées automatiquement pour l’administration. Cela m’a permis de mieux comprendre les limites et avantages d’une telle intégration hybride.

Enfin, travailler avec Symfony dans ce cadre m’a permis de consolider mes bases en routage, en gestion des services, en configuration via annotations, et en utilisation du CLI Symfony. L’ensemble m’a donné une vue d’ensemble très concrète d’un projet professionnel complet, construit avec une architecture maintenable, évolutive, et conforme aux standards du développement web moderne.

Avec le recul, je pense que certains contrôleurs auraient gagné à être davantage épurés. Une partie de la logique métier aurait pu être déportée plus tôt dans des services ou des classes utilitaires, afin de respecter davantage encore le principe de responsabilité unique. De même, l’absence de tests automatisés autour de certains modules a parfois rendu plus difficile la validation d’évolutions. Cela fait partie des améliorations que je mettrais en œuvre si je devais retravailler sur un projet similaire
    
    `,
    gallery: ["mvc-structure.png"],
    legends: [
      "Structure MVC de Symfony appliquée au projet Taxe-Sucre",
    ],
    technologies: [
      { name: "Symfony", icon: "Symfony.svg" },
      { name: "Twig", icon: "Twig.svg" },
      { name: "Doctrine", icon: "Doctrine.svg" },
    ],
  },
  {
    id: 2,
    title:
      "Manipulation avancée de Doctrine ORM (relations, migrations, entités personnalisées)",
    description:
      "Modélisation d’entités complexes, gestion de relations avancées, migrations et requêtes personnalisées avec Doctrine ORM.",
    fullText: `
L’un des aspects techniques les plus riches de mon stage a été l’utilisation avancée de Doctrine ORM, qui est l’outil de mapping objet-relationnel intégré à Symfony. Grâce à Doctrine, j’ai pu modéliser, créer et faire évoluer l’ensemble des entités qui constituaient le cœur des données de l’application Taxe-Sucre. Ce travail allait bien au-delà d’un simple usage basique du framework, car le projet contenait une logique métier dense, avec des relations complexes entre entités, des cas de duplication de données, des règles conditionnelles, et des opérations automatisées nécessitant une maîtrise approfondie de l’outil.

Dans un premier temps, j’ai été amené à concevoir de nouvelles entités comme Historic, Product, TaxedItem, ou encore Sucre, en lien avec les exigences du client. Cela m’a permis de mettre en œuvre une vraie réflexion sur la structure de la base de données, en allant au-delà de la simple traduction d’un modèle conceptuel. J’ai dû prendre en compte la logique du domaine, les interactions entre éléments, la nécessité d’avoir un historique traçable, ou encore la gestion de variantes de produits en fonction des années fiscales ou de la composition nutritionnelle.

Doctrine m’a permis de gérer avec finesse ces relations, en utilisant les associations ManyToOne, OneToMany et ManyToMany, selon les besoins. Par exemple, un historique de déclaration est lié à plusieurs produits, mais chaque produit est aussi susceptible d’être partagé entre plusieurs historiques dans le cas de duplications. J’ai donc dû modéliser ces cas avec attention, tout en prévoyant des règles de cascade ou de suppression conditionnelle pour éviter toute perte ou corruption de données. Ces choix ont demandé une réflexion continue sur l’intégrité référentielle et les conséquences métier de chaque relation.

Un autre point important a été l’usage des migrations Doctrine, qui m’a permis de versionner proprement la base de données à mesure que le projet évoluait. À chaque ajout ou modification d’entité, je créais une migration avec la commande make:migration, que j’appliquais ensuite avec migrate. Cette pratique m’a permis de garder un historique clair et réversible des évolutions, ce qui s’est révélé précieux lors des phases de tests ou lorsque plusieurs fonctionnalités évoluaient simultanément.

Enfin, Doctrine m’a offert la possibilité d’écrire des requêtes personnalisées via des repositories, lorsque les cas d’usage devenaient trop spécifiques pour être couverts par les méthodes par défaut. J’ai ainsi appris à manipuler le QueryBuilder de Symfony pour construire des requêtes dynamiques, filtrées ou ordonnées selon les besoins métier (par exemple, pour trier les historiques par date, ou filtrer les produits actifs d’une année donnée). Cela m’a permis d’optimiser les performances et la pertinence des résultats affichés dans les interfaces.

Cette pratique régulière de Doctrine m’a permis de renforcer considérablement mes compétences en modélisation de base de données, en gestion des relations complexes, et en optimisation des accès aux données. J’ai pu constater que Doctrine, bien qu’abstrait en surface, nécessite une réelle compréhension des principes de la POO, de la persistance des données, et du fonctionnement sous-jacent de SQL.

En termes d’amélioration, je pense que certains choix initiaux de structure auraient pu être anticipés plus tôt pour éviter d’avoir à remanier certaines relations en cours de projet. Par exemple, le lien entre les entités Sucre et Product aurait pu être modélisé de manière plus souple dès le début, afin de mieux gérer les cas particuliers rencontrés par la suite. De même, la mise en place de tests d’intégration pour valider le bon comportement des entités liées aurait apporté une sécurité supplémentaire.

Dans l’ensemble, ce projet m’a permis d’acquérir une vraie autonomie dans l’utilisation de Doctrine, bien au-delà de ce qui est abordé en cours. C’est une compétence technique centrale que je considère aujourd’hui comme maîtrisée et applicable dans des projets professionnels exigeants.
`,
    gallery: ["doctrine-exemple.png"],
    legends: [
      "Entité Barcode créée avec Doctrine",
    ],
    technologies: [
      { name: "Doctrine", icon: "Doctrine.svg" },
      { name: "MySQL", icon: "MySQL.svg" },
      { name: "Symfony", icon: "Symfony.svg" },
    ],
  },
  {
    id: 3,
    title: "Création de contrôleurs métier pour la logique applicative",
    description:
      "Développement de modules dédiés à la logique fiscale, génération de PDF et duplication d’historiques avec des contrôleurs clairs et modulaires.",
    fullText: 
`
Au-delà de l’architecture et de la structuration des données, l’un des axes majeurs de mon travail durant ce stage a été le développement de la logique métier propre à l’application Taxe-Sucre. Celle-ci a été implémentée essentiellement dans des contrôleurs Symfony, que j’ai moi-même conçus ou adaptés selon les besoins fonctionnels du client. L’objectif n’était pas seulement d’afficher ou modifier des données, mais de modéliser des comportements métier complexes, parfois encadrés par des règles fiscales précises, tout en assurant la robustesse et la maintenabilité du code.

L’un des premiers modules sur lequel j’ai travaillé concernait la gestion des produits taxables. J’ai mis en place un contrôleur complet permettant d’ajouter, modifier ou supprimer des produits via des formulaires dynamiques. Cette gestion n’était pas triviale, car il fallait tenir compte de nombreuses contraintes : cohérence des champs obligatoires, vérification de doublons, gestion d’unités de mesure, association à des taux de sucre ou d’édulcorants, etc. L’ensemble de ces règles a été centralisé dans des méthodes bien distinctes, permettant de conserver une architecture claire et évolutive.

Par la suite, j’ai développé des contrôleurs plus spécifiques à la logique fiscale. Par exemple, j’ai créé un module permettant de dupliquer un historique de déclaration, afin de simplifier le travail des utilisateurs qui doivent effectuer des déclarations similaires d’année en année. Cette fonctionnalité a nécessité de réfléchir à la façon de copier des entités liées (produits, quantités, valeurs de sucre), sans pour autant dupliquer les références de base. Il a donc fallu concevoir des algorithmes de duplication contrôlée, tout en respectant l’intégrité des données. Ce travail m’a permis de me confronter à la complexité d’un vrai traitement métier, où les règles ne sont pas purement techniques mais guidées par des attentes fonctionnelles précises.

Une autre partie importante de mon intervention concernait la génération de fichiers PDF, qui devait intégrer les résultats du calcul fiscal de manière claire et présentable. J’ai ainsi conçu un contrôleur dédié, chargé de récupérer les informations d’un historique fiscal, de les formater, puis de générer un document PDF via la bibliothèque dompdf. Cette génération devait être dynamique, avec une mise en page adaptée aux données disponibles, tout en respectant les éléments obligatoires exigés par l’administration (dates, montants, produit, taux de sucre, etc.). Ce module a été pensé de façon modulaire, en séparant la logique de récupération des données et la logique de rendu, ce qui m’a permis de mieux maîtriser les dépendances entre composants.

Ces différents contrôleurs ont été conçus avec un souci constant de lisibilité et de réutilisabilité. J’ai notamment appliqué des principes d’injection de dépendances, en déléguant certaines opérations à des services Symfony, ce qui a rendu les contrôleurs plus clairs et plus faciles à tester. Par exemple, le calcul de la taxe a été encapsulé dans un service distinct, que je pouvais ensuite appeler dans différents contextes (affichage, validation, export).

Avec le recul, j’identifie deux pistes d’amélioration sur cette partie. La première concerne la taille de certains contrôleurs : certaines méthodes auraient pu être fragmentées en sous-services plus spécialisés afin de respecter plus strictement le principe de responsabilité unique. La seconde concerne l’écriture de tests automatisés autour de ces contrôleurs. Si la logique métier a été rigoureusement validée manuellement, la mise en place de tests unitaires ou fonctionnels aurait apporté une plus grande fiabilité, notamment en cas d’évolution future du projet.

En somme, cette partie du projet a été très formatrice, car elle m’a permis de sortir d’une logique de simple manipulation de données pour entrer dans celle, plus exigeante, de la modélisation de règles métier concrètes. C’est à travers cette création de contrôleurs que j’ai pu vraiment mesurer l’importance d’une architecture propre, documentée et évolutive, et affiner ma capacité à répondre à des besoins utilisateurs dans un cadre technique réaliste.
`,
    gallery: ["controller-tax.png", "pdf-test.png"],
    legends: [
      "Contrôleur métier dédié au calcul de la taxe",
      "Exemple de génération de PDF",
    ],
    technologies: [
      { name: "Symfony", icon: "Symfony.svg" },
      { name: "dompdf", icon: "dompdf.svg" },
    ],
  },
  {
    id: 4,
    title: "Développement front-end : interface produit et page client",
    description:
      "Création de vues dynamiques et adaptées, avec formulaires interactifs et interface claire pour l’utilisateur final.",
    fullText: `
    
Même si le cœur de mon stage s’est concentré sur des aspects back-end et métier, j’ai également eu la responsabilité de concevoir et d’intégrer une interface front-end fonctionnelle, claire et adaptée aux besoins des utilisateurs finaux. Cette interface avait une double vocation : permettre la gestion interne des produits et des déclarations fiscales par des utilisateurs administrateurs, et fournir une interface principale accessible au client pour consulter ou soumettre des données. Cette partie m’a permis de mettre en œuvre des savoirs en développement front-end que j’avais acquis durant ma formation, tout en les adaptant à un contexte professionnel où la clarté, la robustesse et la simplicité d’utilisation primaient sur l’esthétique avancée.

L’interface de gestion des produits, accessible depuis l’administration, a été développée avec EasyAdmin pour les opérations standards (affichage, édition, suppression), mais j’ai dû également développer plusieurs vues personnalisées en utilisant Twig et Bootstrap pour des besoins plus spécifiques. Par exemple, l’ajout d’un produit nécessitait de renseigner plusieurs champs interdépendants (quantité, unité, taux de sucre, type d’édulcorant), avec des règles de validation conditionnelles. J’ai donc conçu des formulaires dynamiques, dans lesquels certains champs s’adaptaient automatiquement selon les valeurs saisies, pour éviter des erreurs courantes. Cette logique de validation, bien que côté serveur en priorité, a été complétée par des ajustements côté front-end pour améliorer l’expérience utilisateur.

J’ai également développé une page principale dédiée au client, lui permettant d’ajouter, consulter ou valider ses déclarations fiscales. Cette interface devait être intuitive, accessible même à un public non technique, et permettre d’afficher clairement les données importantes : produits déclarés, montants calculés, dates de déclaration, statuts, etc. J’ai opté pour une structure sobre mais efficace, avec des tableaux triables, des alertes visuelles en cas d’anomalie (par exemple un produit sans taux de sucre), et des messages de confirmation ou d’erreur bien visibles. L’ensemble a été réalisé avec Twig, en réutilisant les composants Bootstrap pour garantir une compatibilité avec les autres parties de l’application.

Un autre point important a été la gestion des interactions utilisateur : j’ai intégré des filtres permettant de trier les historiques par date, année ou état de validation, ainsi que des boutons d’action pour dupliquer un historique ou exporter la déclaration au format PDF. Ces fonctionnalités ont demandé un travail d’interconnexion entre les couches back-end (contrôleurs et services) et front-end (vues et formulaires), ce qui m’a permis de mieux comprendre le cycle complet d’un traitement applicatif, du clic utilisateur jusqu’à la réponse serveur.

Même si l’interface n’avait pas vocation à être visuellement innovante, j’ai porté une attention particulière à l’ergonomie et à la cohérence visuelle. Les couleurs, les espacements, les icônes et les tailles de police ont été ajustés pour garantir une lecture rapide des informations. Les retours que j’ai pu recevoir lors des tests internes ont confirmé que l’application était facile à prendre en main, même pour un utilisateur peu familier avec les outils numériques.

Avec le recul, je reconnais que la personnalisation visuelle restait limitée par l’utilisation d’EasyAdmin, qui impose un certain cadre graphique difficile à adapter. Si le projet avait nécessité une interface plus poussée, j’aurais sans doute proposé une refonte partielle en JavaScript ou l’usage d’un framework front-end moderne comme Vue.js. De plus, l’absence de feedback utilisateur en temps réel (via AJAX ou composants réactifs) limite encore un peu l’expérience. Ce sont des pistes que je retiens pour des améliorations futures.

Néanmoins, cette partie m’a permis de confirmer mes compétences en développement d’interfaces web dynamiques, en lien étroit avec le modèle de données et les règles métier. Elle m’a aussi montré l’importance de concevoir une interface avant tout utile, fiable et compréhensible, même dans un contexte technique contraint.
`,
    gallery: ["frontend-products.png", "taxe-sucre5.png"],
    legends: [
      "Interface de gestion des produits avec champs dynamiques",
      "Page  dédiée au client pour consultation et validation du produit",
    ],
    technologies: [
      { name: "Bootstrap", icon: "Bootstrap.svg" },
      { name: "Twig", icon: "Twig.svg" },
      { name: "Symfony", icon: "Symfony.svg" },
    ],
  },
  {
    id: 5,
    title:
      "Capacité à intégrer une équipe en autonomie et respecter les contraintes d’un projet existant",
    description:
      "Appropriation rapide d’une base de code existante, travail autonome, respect des conventions et intégration fluide dans une équipe technique.",
    fullText: `
    
L’un des aspects les plus formatifs de mon stage a été d’apprendre à travailler de manière autonome au sein d’un environnement professionnel, tout en respectant les contraintes techniques, organisationnelles et humaines d’un projet déjà existant. Contrairement aux projets académiques où l’on démarre souvent d’une feuille blanche, l’application Taxe-Sucre était déjà en cours de développement depuis plusieurs semaines au moment de mon arrivée chez Sevilog. Il m’a donc fallu m’approprier rapidement une base de code partiellement fonctionnelle, comprendre les choix architecturaux effectués, et identifier les règles implicites que l’équipe avait mises en place.

Dès les premiers jours, j’ai pris le temps d’explorer la structure du projet, de relire les contrôleurs et services déjà présents, et de suivre le fonctionnement global de l’application via l’environnement de test local. Ce travail d’analyse m’a permis de comprendre la logique métier de l’application, le découpage des fonctionnalités, ainsi que la manière dont le projet utilisait Symfony, Doctrine, EasyAdmin et dompdf. J’ai également étudié les pratiques de nommage, les conventions de codage, et la façon dont les dépendances étaient gérées, afin de m’y conformer dans mes propres développements.

Un point particulièrement marquant a été la prise en compte des contraintes techniques déjà posées par l’architecture initiale. Certaines décisions, comme l’usage d’EasyAdmin pour le back-office ou la présence de routes partiellement configurées, m’ont obligé à adapter mes méthodes de travail plutôt que de repartir de zéro. J’ai appris à intervenir en douceur sur des modules sensibles, à réutiliser les composants existants au lieu d’en créer de nouveaux inutilement, et à maintenir une cohérence d’ensemble même lorsque j’apportais des évolutions significatives.

En parallèle, j’ai aussi appris à respecter des contraintes de temps et de qualité, avec des livrables attendus à des échéances précises. Par exemple, la page principale de gestion client devait être opérationnelle avant une date butoir pour des tests utilisateurs. J’ai donc appris à découper mes tâches, à anticiper les difficultés, et à documenter mon travail pour faciliter les échanges. Même en étant le seul développeur actif sur cette branche du projet, je n’étais jamais isolé : je devais produire un code lisible, compréhensible, et intégrable par d’autres membres de l’équipe.

Enfin, cette immersion dans un contexte réel m’a permis de mieux comprendre les exigences professionnelles en matière de rigueur, de communication et de documentation. J’ai rédigé un rapport technique détaillé pour permettre la reprise du projet, intégré des commentaires dans le code source, et mis en œuvre des pratiques inspirées de la gestion de projet agile (liste de tâches, priorisation, retours réguliers). Ces habitudes, acquises sur le terrain, m’ont permis de sortir du simple rôle d’exécutant pour adopter une posture plus complète de développeur professionnel.

Avec le recul, je pense que j’aurais pu encore améliorer la communication de certains choix techniques, notamment en sollicitant plus souvent des retours intermédiaires pour éviter de prendre des orientations discutables. De même, si j’avais eu plus de temps, j’aurais proposé une mise en place plus formelle du versionnage via Git, avec des branches dédiées par fonctionnalité. Mais dans l’ensemble, ce stage m’a permis de prendre conscience de l’importance de l’autonomie structurée, à la fois dans l’écriture du code et dans l’organisation du travail, et de la responsabilité qu’elle implique dans un cadre collectif.
`,
    technologies: [
      { name: "GitHub", icon: "GitHub.svg" },
    ],
  },
];

export default portfolio;
