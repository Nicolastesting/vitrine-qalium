export const productPrinciples = [
  {
    title: "Expliquer avant de classer",
    description:
      "Un échec de test doit d'abord devenir compréhensible. Les statuts, tags et workflows viennent ensuite.",
  },
  {
    title: "Respecter la stack de l'équipe",
    description:
      "Qalium part de Playwright et des pipelines existants plutôt que d'imposer une nouvelle façon d'écrire les tests.",
  },
  {
    title: "Garder les preuves proches des décisions",
    description:
      "Une vidéo, une trace ou un log n'a de valeur que s'il est relié au run, au test, au bug et au rapport concernés.",
  },
  {
    title: "Rester léger pour les petites équipes",
    description:
      "La plateforme doit aider les équipes techniques à aller plus vite, pas ajouter une couche administrative de plus.",
  },
];

export const roadmapItems = [
  {
    phase: "Alpha",
    title: "Runs et artefacts Playwright",
    description:
      "Socle web pour suivre les runs, consulter les statuts et regrouper les preuves d'exécution.",
  },
  {
    phase: "Beta",
    title: "Diagnostic et rapports partageables",
    description:
      "Lecture guidée des échecs, historique des exécutions et rapports utiles aux équipes QA/dev.",
  },
  {
    phase: "Next",
    title: "Stabilité et flaky tests",
    description:
      "Signaux de stabilité, tendances par suite et détection des tests à confiance faible.",
  },
  {
    phase: "Future",
    title: "CI/CD, API et traçabilité étendue",
    description:
      "Connexions pipeline, API et liens plus profonds entre exigences, tests, runs, bugs et rapports.",
  },
];
