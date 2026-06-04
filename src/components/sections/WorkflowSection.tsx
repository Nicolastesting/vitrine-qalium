import { SectionHeader } from "../ui/SectionHeader";
import { InteractiveWorkflow } from "./InteractiveWorkflow";

export function WorkflowSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Workflow"
          title="Project → Run → Worker → Playwright → Results → Artifacts → Failure Summary."
          description="Activez chaque étape pour comprendre comment Qalium transforme un run automatisé en preuves, résultats et synthèse exploitable."
        />

        <InteractiveWorkflow />
      </div>
    </section>
  );
}
