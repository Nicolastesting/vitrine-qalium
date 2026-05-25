# Qalium Site Vitrine

Site vitrine officiel de Qalium, une plateforme SaaS QA/TestOps centrée sur Playwright, les runs automatisés, les artefacts, les rapports, l'analyse d'échecs et la traçabilité.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router avec `HashRouter` pour éviter les problèmes de routing sur GitHub Pages
- GitHub Actions pour publier `dist` sur GitHub Pages

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Structure

```text
src/
  components/
    layout/
    sections/
    ui/
  data/
  lib/
  pages/
```

Les contenus de navigation, fonctionnalités, pricing et vision produit sont centralisés dans `src/data`.

## GitHub Pages

Le projet conserve `index.html` à la racine, comme attendu par Vite, et produit un build statique dans `dist` avec :

```bash
npm run build
```

Le workflow `.github/workflows/deploy.yml` installe les dépendances, build le site et publie `dist` via GitHub Pages.

## Configuration du `base` Vite

Le dépôt GitHub de ce site vitrine est prévu sous le nom `vitrine-qalium`. `vite.config.ts` est donc configuré par défaut avec :

```ts
base: "/vitrine-qalium/"
```

Règle à appliquer selon l'URL de publication :

- Si le site est publié sous `https://username.github.io/vitrine-qalium/`, garder `base: "/vitrine-qalium/"`.
- Si le site est publié sous `https://username.github.io/`, utiliser `base: "/"`.
- Si le nom du repo change, remplacer `/vitrine-qalium/` par `/<nom-du-repo>/`.

GitHub n'utilise pas d'espace dans les URLs de repositories. Pour un nom lisible "vitrine qalium", le slug recommandé est donc `vitrine-qalium`.

Une variable d'environnement peut aussi surcharger cette valeur :

```bash
VITE_BASE_PATH=/autre-repo/ npm run build
```

Sur Windows PowerShell :

```powershell
$env:VITE_BASE_PATH="/autre-repo/"
npm run build
```

## Pages

- Accueil
- Fonctionnalités
- Prix
- Documentation / Developers
- Vision produit
- Contact / Demande d'accès

## Notes produit

Qalium est positionné comme un copilote QA/TestOps pour petites équipes techniques. Le site évite de présenter les futures intégrations CI/CD, l'API et certaines capacités avancées comme déjà livrées : elles sont signalées comme roadmap lorsque nécessaire.
