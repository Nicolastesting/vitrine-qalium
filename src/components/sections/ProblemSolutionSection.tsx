import { ArrowRight, SearchX, ShieldCheck, Waypoints } from "lucide-react";
import { painPoints, solutionSteps } from "../../data/site";
import { Badge } from "../ui/Badge";
import { SectionHeader } from "../ui/SectionHeader";

const problemIcons = [SearchX, Waypoints, ShieldCheck];

export function ProblemSolutionSection() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Problème"
            title="Les équipes n'ont pas besoin de plus de logs. Elles ont besoin de preuves reliées."
            description="Qalium transforme les sorties techniques Playwright en un espace de lecture commun pour QA, dev et produit."
          />

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {painPoints.map((point, index) => {
              const Icon = problemIcons[index];
              return (
                <article
                  key={point.title}
                  className="rounded-xl border border-line bg-white p-5 transition hover:border-teal-200 hover:shadow-soft"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-brand shadow-sm">
                      <Icon aria-hidden="true" size={21} />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-950">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-line bg-ink p-5 text-white shadow-panel sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <Badge tone="dark">Approche Qalium</Badge>
              <h3 className="mt-4 text-2xl font-semibold leading-tight">
                Une chaîne lisible du projet de test jusqu'au rapport.
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-300">
              Le produit reste volontairement centré : organiser, exécuter, collecter,
              comprendre et partager. Les intégrations avancées viennent ensuite.
            </p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {solutionSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
              >
                <div>
                  <p className="text-xs font-semibold text-teal-200">0{index + 1}</p>
                  <p className="mt-1 text-sm font-semibold">{step}</p>
                </div>
                {index < solutionSteps.length - 1 ? (
                  <ArrowRight className="hidden text-slate-400 md:block" aria-hidden="true" size={18} />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
