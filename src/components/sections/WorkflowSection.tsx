import { workflowSteps } from "../../data/features";
import { SectionHeader } from "../ui/SectionHeader";

export function WorkflowSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Workflow"
          title="Une boucle courte entre automatisation, preuve et décision."
          description="Le parcours Qalium est conçu pour que chaque run conserve son contexte technique et produit, du déclenchement au rapport."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {workflowSteps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-xl border border-line bg-paper p-5"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
