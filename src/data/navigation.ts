export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
};

export const mainNavigation: NavigationItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Fonctionnalités", href: "/fonctionnalites" },
  { label: "Prix", href: "/prix" },
  { label: "Developers", href: "/developers" },
  { label: "Vision", href: "/vision" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  Produit: [
    { label: "Fonctionnalités", href: "/fonctionnalites" },
    { label: "Prix", href: "/prix" },
    { label: "Vision produit", href: "/vision" },
  ],
  Ressources: [
    { label: "Documentation", href: "/developers" },
    { label: "Demande d'accès", href: "/contact" },
  ],
  Principes: [
    { label: "Playwright first", href: "/developers" },
    { label: "Traçabilité QA", href: "/fonctionnalites" },
    { label: "CI/CD roadmap", href: "/vision" },
  ],
};
