export type RunStatus = "QUEUED" | "RUNNING" | "COLLECTING" | "ARTIFACTS" | "PASSED" | "FAILED";

export type DashboardFrame = {
  status: RunStatus;
  label: string;
  progress: number;
  duration: string;
  executed: number;
  passed: number;
  failed: number;
  artifacts: string[];
};

export const dashboardFrames: DashboardFrame[] = [
  {
    status: "QUEUED",
    label: "Run queued",
    progress: 12,
    duration: "00:03",
    executed: 0,
    passed: 0,
    failed: 0,
    artifacts: ["job metadata"],
  },
  {
    status: "RUNNING",
    label: "Chromium tests running",
    progress: 48,
    duration: "00:41",
    executed: 18,
    passed: 17,
    failed: 0,
    artifacts: ["live logs", "screenshots"],
  },
  {
    status: "COLLECTING",
    label: "Collecting results",
    progress: 76,
    duration: "01:18",
    executed: 31,
    passed: 29,
    failed: 1,
    artifacts: ["logs", "trace.zip", "video"],
  },
  {
    status: "FAILED",
    label: "Failure summary ready",
    progress: 100,
    duration: "01:42",
    executed: 34,
    passed: 33,
    failed: 1,
    artifacts: ["screenshot", "trace", "video", "summary"],
  },
  {
    status: "PASSED",
    label: "Regression suite passed",
    progress: 100,
    duration: "01:36",
    executed: 34,
    passed: 34,
    failed: 0,
    artifacts: ["screenshots", "trace", "report"],
  },
];

export const workflowStages = [
  {
    key: "project",
    label: "Project",
    title: "Projet de test",
    description:
      "L'équipe rattache suites, cas de tests et campagnes à un projet lisible plutôt qu'à une suite de dossiers CI.",
    detail: "Checkout web · staging · release candidate",
  },
  {
    key: "run",
    label: "Run",
    title: "Run automatisé",
    description:
      "Une campagne déclenche un run avec son périmètre, son navigateur cible et ses paramètres d'environnement.",
    detail: "34 tests · Chromium · tags @critical",
  },
  {
    key: "worker",
    label: "Worker",
    title: "Worker d'exécution",
    description:
      "Le worker récupère le job et isole l'exécution Playwright de l'interface produit.",
    detail: "queue qa-runs · worker-02 · sandboxed",
  },
  {
    key: "playwright",
    label: "Playwright",
    title: "Exécution Playwright",
    description:
      "Playwright exécute les scénarios et produit les signaux techniques utiles : étapes, erreurs, captures et traces.",
    detail: "checkout.spec.ts · trace viewer · video",
  },
  {
    key: "results",
    label: "Results",
    title: "Résultats consolidés",
    description:
      "Qalium rapproche statuts, durée, tentative, environnement et historique pour donner une lecture fiable.",
    detail: "33 passed · 1 failed · 0 skipped",
  },
  {
    key: "artifacts",
    label: "Artifacts",
    title: "Artefacts attachés",
    description:
      "Screenshots, logs, vidéos et traces restent attachés au bon run et au bon test, prêts à être partagés.",
    detail: "screenshot.png · trace.zip · run.log",
  },
  {
    key: "summary",
    label: "Failure Summary",
    title: "Résumé d'échec",
    description:
      "La synthèse, aujourd'hui simulée dans la vitrine et cible produit à terme, aide à transformer les preuves en hypothèse claire.",
    detail: "Probable timeout after currency switch",
  },
];

export type DemoStep = {
  status: RunStatus;
  label: string;
  progress: number;
};

export const demoRunSteps: DemoStep[] = [
  { status: "QUEUED", label: "Queued in Qalium", progress: 10 },
  { status: "RUNNING", label: "Running Playwright worker", progress: 42 },
  { status: "COLLECTING", label: "Collecting results", progress: 68 },
  { status: "ARTIFACTS", label: "Generating artifacts", progress: 88 },
  { status: "FAILED", label: "Failure summary available", progress: 100 },
];

export const demoRunResult = {
  total: 34,
  passed: 33,
  failed: 1,
  duration: "01:42",
  browser: "Chromium",
  project: "Checkout web",
  assets: ["Screenshot available", "Trace available", "Failure summary available"],
};
