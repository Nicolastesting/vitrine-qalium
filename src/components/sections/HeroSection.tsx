import { heroSignals, siteConfig } from "../../data/site";
import { Badge } from "../ui/Badge";
import { ButtonLink } from "../ui/ButtonLink";
import { HeroDashboardPreview } from "./HeroDashboardPreview";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(45,212,191,0.18),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:min-h-[600px] lg:px-8 lg:py-20">
        <HeroDashboardPreview className="pointer-events-none absolute right-[-250px] top-24 hidden w-[700px] opacity-90 xl:block 2xl:right-0" />

        <div className="relative max-w-2xl">
          <Badge tone="dark">Playwright · QA automation · TestOps</Badge>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight sm:text-5xl 2xl:text-6xl">
            Qalium, le copilote QA qui transforme les runs Playwright en décisions claires.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-200 sm:text-xl">
            Centralisez campagnes, artefacts, logs et diagnostics d'échecs pour passer
            plus vite du run Playwright au rapport partageable.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/contact" variant="dark" className="w-full sm:w-auto" showIcon>
              {siteConfig.primaryCta}
            </ButtonLink>
            <ButtonLink
              to="/fonctionnalites"
              variant="ghost"
              className="w-full text-white hover:bg-white/10 hover:text-white sm:w-auto"
              showIcon
            >
              {siteConfig.secondaryCta}
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {heroSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-sm font-medium text-slate-100"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>

        <HeroDashboardPreview className="mt-10 md:max-w-3xl xl:hidden" />
      </div>
    </section>
  );
}
