import { CheckCircle2 } from "lucide-react";
import { teamBenefits } from "../../data/site";
import { SectionHeader } from "../ui/SectionHeader";

export function BenefitsSection() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow="Bénéfices"
            title="Moins de friction entre QA et dev, plus de décisions basées sur des preuves."
            description="Qalium se présente comme une couche de clarté au-dessus de l'automatisation Playwright, pas comme un outil de gestion de projet généraliste."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {teamBenefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-xl border border-line bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="text-brand" aria-hidden="true" size={22} />
                <h3 className="mt-4 text-lg font-semibold text-slate-950">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
