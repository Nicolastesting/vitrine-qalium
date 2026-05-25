import { ArrowRight, Boxes, Database, GitBranch, TerminalSquare } from "lucide-react";
import { CTASection } from "../components/sections/CTASection";
import { Badge } from "../components/ui/Badge";
import { SectionHeader } from "../components/ui/SectionHeader";

const developerCards = [
  {
    title: "Playwright first",
    description:
      "Qalium part des suites existantes et de leurs artefacts natifs : trace viewer, screenshots, vidéos et logs.",
    icon: TerminalSquare,
  },
  {
    title: "Execution worker",
    description:
      "Les runs sont exécutés hors de l'interface web pour garder une séparation nette entre produit et charge de test.",
    icon: Boxes,
  },
  {
    title: "Artifact storage",
    description:
      "Le modèle cible prévoit un stockage type S3 ou MinIO afin de conserver les preuves selon les règles de rétention.",
    icon: Database,
  },
  {
    title: "CI/CD roadmap",
    description:
      "Les intégrations pipeline sont prévues comme une étape progressive après stabilisation du socle de runs.",
    icon: GitBranch,
  },
];

export function DevelopersPage() {
  return (
    <>
      <section className="bg-ink px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Documentation / Developers"
            title="Une approche technique claire pour brancher Qalium sur les suites Playwright."
            description="Cette page pose les principes d'intégration attendus : exécution asynchrone, artefacts structurés, stockage durable et futures connexions CI/CD."
            inverted
            as="h1"
          />
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {developerCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="rounded-xl border border-line bg-white p-6 shadow-sm">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-teal-200 bg-teal-50 text-brand">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <h2 className="mt-5 text-lg font-semibold text-slate-950">{card.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="min-w-0">
            <Badge tone="success">Intégration cible</Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950">
              Garder Playwright comme source d'exécution, Qalium comme couche de lecture.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Les exemples ci-dessous décrivent une cible d'intégration. Ils servent à clarifier
              le modèle produit sans ajouter de backend au site vitrine.
            </p>
          </div>

          <div className="min-w-0 rounded-2xl border border-line bg-ink p-5 text-white shadow-panel">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4 text-sm font-semibold text-slate-200">
              <TerminalSquare aria-hidden="true" size={18} />
              qalium.integration.md
            </div>
            <pre className="mt-5 max-w-full overflow-x-auto rounded-xl bg-black/30 p-4 text-sm leading-7 text-slate-100">
              <code>{`1. Playwright exécute les tests
2. Le worker suit le job de run
3. Les artefacts sont publiés vers un stockage durable
4. Qalium relie run, test, statut, logs et preuves
5. Le rapport devient partageable par l'équipe`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Parcours développeur"
            title="Une documentation pensée pour passer progressivement de la preuve au diagnostic."
            description="Le contenu développeur pourra évoluer vers des guides d'installation, des références API et des exemples CI/CD quand ces capacités seront stabilisées."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {["Configurer les suites", "Collecter les artefacts", "Partager les rapports"].map((step) => (
              <article key={step} className="rounded-xl border border-line bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">{step}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Définir un chemin clair entre l'exécution Playwright et la lecture produit par les équipes QA/dev.
                </p>
                <ArrowRight className="mt-5 text-brand" aria-hidden="true" size={20} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Vous avez déjà une suite Playwright ?"
        description="La meilleure entrée produit consiste à comprendre comment vos runs sont lancés, où vivent vos artefacts et comment votre équipe diagnostique les échecs aujourd'hui."
      />
    </>
  );
}
