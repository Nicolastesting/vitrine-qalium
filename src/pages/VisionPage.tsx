import { productPrinciples, roadmapItems } from "../data/vision";
import { CTASection } from "../components/sections/CTASection";
import { Badge } from "../components/ui/Badge";
import { SectionHeader } from "../components/ui/SectionHeader";

export function VisionPage() {
  return (
    <>
      <section className="bg-paper px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Vision produit"
            title="Faire de l'automatisation QA un système de compréhension, pas seulement d'exécution."
            description="Qalium vise les équipes techniques qui veulent garder Playwright, réduire le reporting manuel et rendre les échecs de tests actionnables plus vite."
            as="h1"
          />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Principes"
            title="Les décisions produit suivent quelques règles simples."
            description="Ces principes aident à préserver un produit léger, utile et centré sur les preuves d'exécution."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {productPrinciples.map((principle) => (
              <article key={principle.title} className="rounded-xl border border-line bg-paper p-6">
                <h2 className="text-xl font-semibold text-slate-950">{principle.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Roadmap"
            title="Une trajectoire progressive pour éviter la plateforme trop lourde trop tôt."
            description="La roadmap sépare clairement le socle de runs, les capacités de diagnostic et les intégrations futures."
            inverted
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {roadmapItems.map((item) => (
              <article key={item.phase} className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                <Badge tone="dark">{item.phase}</Badge>
                <h2 className="mt-5 text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="La vision est claire : moins de bruit, plus de preuves utiles."
        description="Qalium doit aider les équipes à industrialiser Playwright sans perdre leur vitesse ni leur capacité de diagnostic."
      />
    </>
  );
}
