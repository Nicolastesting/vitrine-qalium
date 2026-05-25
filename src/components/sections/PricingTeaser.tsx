import { pricingPlans } from "../../data/pricing";
import { ButtonLink } from "../ui/ButtonLink";
import { SectionHeader } from "../ui/SectionHeader";

export function PricingTeaser() {
  const featuredPlans = pricingPlans.slice(0, 3);

  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Prix"
            title="Des plans lisibles pour grandir avec votre maturité QA."
            description="Le pricing est fictif pour la vitrine, mais construit autour de limites réalistes : projets, utilisateurs, volume de runs et rétention des artefacts."
          />
          <ButtonLink to="/prix" variant="secondary" showIcon>
            Voir tous les plans
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredPlans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-xl border border-line bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{plan.description}</p>
              <p className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-semibold">{plan.price}</span>
                <span className="pb-1 text-sm text-slate-500">{plan.period}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
