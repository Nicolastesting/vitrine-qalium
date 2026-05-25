export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  limits: string[];
  benefits: string[];
  cta: string;
  highlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "19 €",
    period: "/mois",
    description:
      "Pour une petite équipe qui veut centraliser ses premiers runs Playwright.",
    limits: [
      "1 projet",
      "3 utilisateurs",
      "500 runs par mois",
      "Rétention artefacts 7 jours",
    ],
    benefits: [
      "Dashboard QA centralisé",
      "Import manuel des résultats",
      "Artefacts vidéos, traces et screenshots",
      "Rapports partageables basiques",
    ],
    cta: "Démarrer Starter",
  },
  {
    name: "Team",
    price: "59 €",
    period: "/mois",
    description:
      "Le plan recommandé pour industrialiser une suite Playwright en équipe.",
    limits: [
      "5 projets",
      "10 utilisateurs",
      "3 000 runs par mois",
      "Rétention artefacts 30 jours",
    ],
    benefits: [
      "Campagnes et suites organisées",
      "Historique complet des exécutions",
      "Analyse rapide des échecs",
      "Notifications et rapports d'équipe",
      "Préparation CI/CD",
    ],
    cta: "Choisir Team",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "149 €",
    period: "/mois",
    description:
      "Pour les équipes qui ont plusieurs produits, plus de volume et un besoin de traçabilité.",
    limits: [
      "20 projets",
      "30 utilisateurs",
      "15 000 runs par mois",
      "Rétention artefacts 90 jours",
    ],
    benefits: [
      "Rapports avancés et exports",
      "Suivi de stabilité",
      "Détection flaky tests",
      "Traçabilité exigences-tests-runs",
      "Support prioritaire",
    ],
    cta: "Passer Pro",
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    period: "",
    description:
      "Pour les organisations qui veulent adapter Qalium à leurs contraintes sécurité, stockage et gouvernance.",
    limits: [
      "Projets illimités",
      "Utilisateurs illimités",
      "Volume de runs personnalisé",
      "Rétention et stockage sur mesure",
    ],
    benefits: [
      "Options S3 / MinIO dédiées",
      "Accompagnement intégration CI/CD",
      "SSO et politiques d'accès sur demande",
      "SLA et support dédié",
      "Architecture self-hosted à étudier",
    ],
    cta: "Contacter l'équipe",
  },
];

export const pricingFaq = [
  {
    question: "Les intégrations CI/CD sont-elles incluses aujourd'hui ?",
    answer:
      "Elles sont présentées comme une direction produit. Le site prépare le positionnement, mais l'intégration dépendra du périmètre réellement livré dans les prochaines versions.",
  },
  {
    question: "Qalium remplace-t-il Jira, TestRail ou Xray ?",
    answer:
      "Non. Qalium se concentre sur l'exécution automatisée, les preuves, le diagnostic et la traçabilité QA/TestOps. Il peut cohabiter avec les outils de gestion existants.",
  },
  {
    question: "Les artefacts sont-ils stockés dans Qalium ?",
    answer:
      "Le modèle cible prévoit un stockage d'artefacts type S3 ou MinIO. Les limites de rétention dépendent du plan et de l'architecture retenue.",
  },
];
