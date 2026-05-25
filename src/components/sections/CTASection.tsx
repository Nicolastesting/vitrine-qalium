import { siteConfig } from "../../data/site";
import { ButtonLink } from "../ui/ButtonLink";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Prêt à rendre vos runs Playwright plus utiles ?",
  description = "Demandez un accès pour présenter votre contexte QA, vos suites existantes et le niveau d'intégration attendu.",
}: CTASectionProps) {
  return (
    <section className="bg-ink px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-2xl border border-white/10 bg-white/[0.04] p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold leading-tight">{title}</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
          <ButtonLink to="/contact" variant="dark" showIcon>
            {siteConfig.primaryCta}
          </ButtonLink>
          <ButtonLink to="/developers" variant="ghost" className="text-white hover:bg-white/10 hover:text-white" showIcon>
            Voir l'approche dev
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
