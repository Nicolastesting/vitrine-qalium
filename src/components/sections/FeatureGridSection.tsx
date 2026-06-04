import { highlightFeatures } from "../../data/features";
import { FeatureIcon } from "../ui/FeatureIcon";
import { SectionHeader } from "../ui/SectionHeader";
import { Badge } from "../ui/Badge";

export function FeatureGridSection() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Fonctionnalités clés"
          title="Tout ce qu'il faut pour passer du test rouge au diagnostic utile."
          description="Qalium n'est pas un clone de Jira, TestRail ou Xray. La plateforme se concentre sur l'exécution automatisée, les preuves et la compréhension rapide des échecs."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {highlightFeatures.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex items-start justify-between gap-4">
                <FeatureIcon name={feature.icon} />
                {feature.status ? <Badge tone="accent">{feature.status}</Badge> : null}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
