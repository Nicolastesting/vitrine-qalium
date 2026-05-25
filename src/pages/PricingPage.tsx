import { CheckCircle2 } from "lucide-react";
import { CTASection } from "../components/sections/CTASection";
import { Badge } from "../components/ui/Badge";
import { ButtonLink } from "../components/ui/ButtonLink";
import { SectionHeader } from "../components/ui/SectionHeader";
import { pricingFaq, pricingPlans } from "../data/pricing";
import { cn } from "../lib/cn";

export function PricingPage() {
  return (
    <>
      <section className="bg-paper px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Pricing"
            title="Un pricing fictif, réaliste et lisible pour présenter Qalium."
            description="Les plans ci-dessous donnent une base commerciale crédible pour une plateforme SaaS QA/TestOps : volume de runs, nombre de projets, utilisateurs et rétention des artefacts."
            align="center"
            as="h1"
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={cn(
                  "relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm",
                  plan.highlighted ? "border-brand shadow-soft ring-2 ring-teal-100" : "border-line",
                )}
              >
                {plan.highlighted ? (
                  <div className="absolute right-5 top-5">
                    <Badge tone="success">Recommandé</Badge>
                  </div>
                ) : null}
                <h2 className="text-xl font-semibold text-slate-950">{plan.name}</h2>
                <p className="mt-4 min-h-20 text-sm leading-6 text-slate-600">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-4xl font-semibold text-slate-950">{plan.price}</span>
                  <span className="pb-1 text-sm text-slate-500">{plan.period}</span>
                </div>

                <ButtonLink
                  to="/contact"
                  className="mt-6 w-full"
                  variant={plan.highlighted ? "primary" : "secondary"}
                  showIcon
                >
                  {plan.cta}
                </ButtonLink>

                <div className="mt-7">
                  <h3 className="text-sm font-semibold text-slate-950">Limites</h3>
                  <ul className="mt-3 space-y-2">
                    {plan.limits.map((limit) => (
                      <li key={limit} className="flex gap-2 text-sm leading-6 text-slate-600">
                        <CheckCircle2 className="mt-1 shrink-0 text-brand" aria-hidden="true" size={16} />
                        <span>{limit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7">
                  <h3 className="text-sm font-semibold text-slate-950">Inclus</h3>
                  <ul className="mt-3 space-y-2">
                    {plan.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-2 text-sm leading-6 text-slate-600">
                        <CheckCircle2 className="mt-1 shrink-0 text-brand" aria-hidden="true" size={16} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Questions"
            title="Les limites importantes sont volontairement explicites."
            description="Qalium est présenté comme un produit en construction avec une direction claire, pas comme une promesse illimitée."
          />
          <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-paper">
            {pricingFaq.map((item) => (
              <article key={item.question} className="p-6">
                <h3 className="text-base font-semibold text-slate-950">{item.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
