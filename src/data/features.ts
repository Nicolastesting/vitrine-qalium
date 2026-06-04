export type FeatureStatus = "Disponible" | "Roadmap";

export type FeatureItem = {
  title: string;
  description: string;
  icon: IconName;
  status?: FeatureStatus;
};

export type FeatureGroup = {
  eyebrow: string;
  title: string;
  description: string;
  items: FeatureItem[];
};

export type IconName =
  | "dashboard"
  | "folder"
  | "play"
  | "artifact"
  | "search"
  | "history"
  | "activity"
  | "worker"
  | "queue"
  | "storage"
  | "report"
  | "flaky"
  | "stability"
  | "team"
  | "pipeline"
  | "api"
  | "trace"
  | "ai";

export const highlightFeatures: FeatureItem[] = [
  {
    title: "Dashboard QA centralisé",
    description:
      "Une vue claire des projets, campagnes, statuts de runs et signaux de stabilité.",
    icon: "dashboard",
  },
  {
    title: "Runs Playwright lisibles",
    description:
      "Chaque exécution remonte ses étapes, erreurs, durées et preuves sans fouiller dans la CI.",
    icon: "play",
  },
  {
    title: "Artefacts automatiques",
    description:
      "Vidéos, traces, screenshots et logs sont regroupés autour du test concerné.",
    icon: "artifact",
  },
  {
    title: "Analyse rapide des échecs",
    description:
      "Qalium rapproche erreur, contexte, historique et artefacts pour réduire le temps de diagnostic.",
    icon: "search",
  },
  {
    title: "Résumés IA d'échecs",
    description:
      "Une aide de lecture future pour transformer logs et traces en hypothèses de diagnostic compréhensibles.",
    icon: "ai",
    status: "Roadmap",
  },
  {
    title: "Détection flaky tests",
    description:
      "Les instabilités récurrentes sont visibles avant qu'elles ne polluent toute la confiance QA.",
    icon: "flaky",
    status: "Roadmap",
  },
  {
    title: "Traçabilité bout en bout",
    description:
      "Relier exigences, cas de tests, runs, bugs et rapports pour garder une mémoire exploitable.",
    icon: "trace",
    status: "Roadmap",
  },
  {
    title: "Rapports partageables",
    description:
      "Transformer une campagne en synthèse lisible pour diffuser les preuves et conclusions à l'équipe.",
    icon: "report",
  },
];

export const capabilityGroups: FeatureGroup[] = [
  {
    eyebrow: "Orchestration",
    title: "Piloter les campagnes sans perdre le contexte",
    description:
      "Qalium organise les projets, suites, cas de tests et campagnes pour que chaque run reste relié à un objectif QA compréhensible.",
    items: [
      {
        title: "Gestion projets et suites",
        description:
          "Structurer les applications, périmètres fonctionnels, suites Playwright et campagnes de validation.",
        icon: "folder",
      },
      {
        title: "Lancement de runs",
        description:
          "Préparer des exécutions automatisées et suivre leur progression depuis une interface unique.",
        icon: "play",
      },
      {
        title: "Statuts temps réel",
        description:
          "Visualiser les runs en attente, en cours, réussis, échoués ou annulés sans attendre le rapport final.",
        icon: "activity",
      },
    ],
  },
  {
    eyebrow: "Preuves",
    title: "Centraliser ce qui prouve vraiment l'exécution",
    description:
      "Les preuves utiles au diagnostic sont attachées au run, au test et au rapport, au lieu de rester dispersées dans des dossiers CI.",
    items: [
      {
        title: "Vidéos, traces et screenshots",
        description:
          "Regrouper automatiquement les artefacts Playwright autour du scénario exécuté.",
        icon: "artifact",
      },
      {
        title: "Logs exploitables",
        description:
          "Consulter les sorties utiles avec le contexte du test, de l'environnement et de la tentative.",
        icon: "search",
      },
      {
        title: "Stockage type S3 / MinIO",
        description:
          "Prévoir un stockage d'artefacts compatible avec les usages self-hosted ou cloud.",
        icon: "storage",
      },
    ],
  },
  {
    eyebrow: "Diagnostic",
    title: "Comprendre vite pourquoi un test échoue",
    description:
      "L'objectif n'est pas seulement de dire rouge ou vert, mais de réduire le temps entre l'échec et la bonne décision.",
    items: [
      {
        title: "Analyse d'échecs",
        description:
          "Afficher erreur, step, artefact, historique et environnement dans une même lecture.",
        icon: "search",
      },
      {
        title: "Historique d'exécutions",
        description:
          "Comparer les tentatives et repérer les régressions, répétitions ou changements de comportement.",
        icon: "history",
      },
      {
        title: "Suivi de stabilité",
        description:
          "Identifier les suites fragiles et les tests dont la confiance baisse dans le temps.",
        icon: "stability",
        status: "Roadmap",
      },
    ],
  },
  {
    eyebrow: "Architecture",
    title: "Séparer l'expérience produit de l'exécution technique",
    description:
      "La plateforme est pensée autour d'une application web claire et d'une exécution asynchrone, plus adaptée aux charges de tests.",
    items: [
      {
        title: "Worker d'exécution séparé",
        description:
          "Déléguer les runs à un worker pour isoler l'exécution Playwright du produit web.",
        icon: "worker",
      },
      {
        title: "Jobs Redis / BullMQ",
        description:
          "Modéliser les demandes d'exécution comme des jobs suivables, rejouables et observables.",
        icon: "queue",
      },
      {
        title: "Rapports partageables",
        description:
          "Partager un état de campagne, ses preuves et ses conclusions sans copier-coller manuel.",
        icon: "report",
      },
    ],
  },
  {
    eyebrow: "Collaboration",
    title: "Aligner QA, dev et produit autour des mêmes faits",
    description:
      "Qalium sert de mémoire commune pour transformer les échecs de tests en décisions d'équipe plus rapides.",
    items: [
      {
        title: "Collaboration équipe",
        description:
          "Commenter, partager et prioriser les échecs avec un contexte commun.",
        icon: "team",
      },
      {
        title: "Intégrations CI/CD futures",
        description:
          "Brancher progressivement GitHub Actions, GitLab CI ou autres pipelines quand le socle sera stabilisé.",
        icon: "pipeline",
        status: "Roadmap",
      },
      {
        title: "API future",
        description:
          "Ouvrir les données de runs, artefacts et rapports à des intégrations internes.",
        icon: "api",
        status: "Roadmap",
      },
    ],
  },
];

export const workflowSteps = [
  {
    title: "Déclencher",
    description:
      "L'équipe lance une campagne ou prépare un run depuis Qalium, avec le périmètre et l'environnement attendus.",
  },
  {
    title: "Exécuter",
    description:
      "Le worker récupère le job, exécute Playwright et remonte les statuts au fil de l'eau.",
  },
  {
    title: "Collecter",
    description:
      "Traces, vidéos, screenshots, logs et métadonnées sont attachés au bon test.",
  },
  {
    title: "Diagnostiquer",
    description:
      "Les échecs sont regroupés avec leur contexte, leur historique et les preuves utiles.",
  },
  {
    title: "Partager",
    description:
      "Un rapport lisible circule vers l'équipe sans reporting manuel ni captures éparpillées.",
  },
];
