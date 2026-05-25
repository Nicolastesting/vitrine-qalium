import { ArrowUpRight, CheckCircle2, TimerReset } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";

const insights = [
  "Échecs regroupés par suite, environnement et signature d'erreur",
  "Artefacts consultables au même endroit que le diagnostic",
  "Rapports partageables sans retraiter manuellement les résultats",
];

export function ProductSnapshotSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Positionnement"
            title="Un cockpit QA pour les petites équipes techniques."
            description="Qalium aide les équipes qui ont déjà investi dans Playwright mais manquent d'un endroit clair pour suivre les campagnes, relire les artefacts et expliquer les échecs."
          />
          <ul className="mt-8 space-y-4">
            {insights.map((insight) => (
              <li key={insight} className="flex gap-3 text-sm leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 shrink-0 text-brand" aria-hidden="true" size={18} />
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-line bg-paper p-5 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl bg-white p-5 shadow-sm">
              <TimerReset className="text-brand" aria-hidden="true" size={24} />
              <h3 className="mt-4 text-lg font-semibold">Diagnostic accéléré</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Les signaux importants restent au niveau du test : erreur, trace, vidéo,
                tentative, historique et environnement.
              </p>
            </article>
            <article className="rounded-xl bg-ink p-5 text-white shadow-sm">
              <ArrowUpRight className="text-brand-light" aria-hidden="true" size={24} />
              <h3 className="mt-4 text-lg font-semibold">Reporting allégé</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Les rapports deviennent une conséquence du run, pas une tâche manuelle à
                reconstruire après coup.
              </p>
            </article>
          </div>
          <div className="mt-4 rounded-xl border border-line bg-white p-5">
            <p className="text-sm font-semibold text-slate-950">Traceabilité cible</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-5">
              {["Exigence", "Test", "Run", "Bug", "Rapport"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-line bg-paper px-3 py-3 text-center text-xs font-semibold text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
