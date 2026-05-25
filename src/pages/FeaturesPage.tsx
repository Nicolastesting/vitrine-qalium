import { capabilityGroups } from "../data/features";
import { Badge } from "../components/ui/Badge";
import { FeatureIcon } from "../components/ui/FeatureIcon";
import { SectionHeader } from "../components/ui/SectionHeader";
import { CTASection } from "../components/sections/CTASection";

export function FeaturesPage() {
  return (
    <>
      <section className="bg-ink px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Fonctionnalités"
            title="Une plateforme QA/TestOps centrée sur les runs, les preuves et le diagnostic."
            description="Chaque bloc de Qalium sert une boucle simple : organiser les tests, exécuter Playwright, collecter les artefacts, comprendre les échecs et partager les conclusions."
            inverted
            as="h1"
          />
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          {capabilityGroups.map((group) => (
            <article key={group.title} className="border-b border-line pb-12 last:border-b-0 last:pb-0">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <Badge tone="success">{group.eyebrow}</Badge>
                  <h2 className="mt-5 text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl">
                    {group.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {group.description}
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {group.items.map((item) => (
                    <div key={item.title} className="rounded-xl border border-line bg-white p-5 shadow-sm">
                      <div className="flex items-start justify-between gap-3">
                        <FeatureIcon name={item.icon} />
                        {item.status ? <Badge tone="accent">{item.status}</Badge> : null}
                      </div>
                      <h3 className="mt-5 text-base font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Construisez une mémoire QA exploitable, pas seulement une pile de logs."
        description="Qalium rassemble les signaux qui aident réellement l'équipe à décider quoi corriger, quoi rejouer et quoi surveiller."
      />
    </>
  );
}
