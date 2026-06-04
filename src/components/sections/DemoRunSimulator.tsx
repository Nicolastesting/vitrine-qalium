import {
  Camera,
  CheckCircle2,
  FileText,
  Play,
  RotateCcw,
  Sparkles,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { demoRunResult, demoRunSteps } from "../../data/interactions";
import { cn } from "../../lib/cn";
import { usePrefersReducedMotion } from "../../lib/usePrefersReducedMotion";
import { Button } from "../ui/Button";
import { SectionHeader } from "../ui/SectionHeader";

export function DemoRunSimulator() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [stepIndex, setStepIndex] = useState(0);
  const [hasLaunched, setHasLaunched] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const activeStep = demoRunSteps[stepIndex];
  const isComplete = hasLaunched && !isRunning && stepIndex === demoRunSteps.length - 1;

  useEffect(() => {
    if (!isRunning) {
      return undefined;
    }

    if (stepIndex >= demoRunSteps.length - 1) {
      setIsRunning(false);
      return undefined;
    }

    const timeout = window.setTimeout(
      () => setStepIndex((current) => current + 1),
      prefersReducedMotion ? 450 : 950,
    );

    return () => window.clearTimeout(timeout);
  }, [isRunning, prefersReducedMotion, stepIndex]);

  function launchDemoRun() {
    setHasLaunched(true);
    setIsRunning(true);
    setStepIndex(0);
  }

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-8">
        <SectionHeader
          eyebrow="Simulation"
          title="Lancez un run de démonstration, sans backend ni vraie exécution Playwright."
          description="Cette interaction donne une idée du parcours produit : le run entre en queue, passe au worker, collecte ses résultats, génère ses artefacts puis affiche une synthèse."
        />

        <div className="rounded-2xl border border-line bg-paper p-5 shadow-soft sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-950">{demoRunResult.project}</p>
              <p className="mt-1 text-sm text-slate-500">
                {demoRunResult.browser} · {demoRunResult.total} tests · demo frontend
              </p>
            </div>
            <Button
              className="w-full sm:w-auto"
              disabled={isRunning}
              onClick={launchDemoRun}
            >
              {isRunning ? (
                <>
                  <RotateCcw aria-hidden="true" size={17} className="motion-safe:animate-spin" />
                  Running demo
                </>
              ) : (
                <>
                  <Play aria-hidden="true" size={17} />
                  {hasLaunched ? "Launch again" : "Launch demo run"}
                </>
              )}
            </Button>
          </div>

          <div className="mt-6 rounded-xl border border-line bg-white p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500">Current status</p>
                <p className="mt-2 text-xl font-semibold text-slate-950">{activeStep.label}</p>
              </div>
              <span
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-semibold",
                  activeStep.status === "FAILED"
                    ? "border-red-200 bg-red-50 text-red-700"
                    : "border-teal-200 bg-teal-50 text-brand",
                )}
                aria-live="polite"
              >
                {activeStep.status}
              </span>
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-paper-muted">
              <div
                className={cn(
                  "h-full rounded-full bg-gradient-to-r from-teal-500 via-brand-light to-amber-400",
                  prefersReducedMotion ? "" : "transition-all duration-700 ease-out",
                )}
                style={{ width: `${activeStep.progress}%` }}
              />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["Tests", demoRunResult.total],
                ["Passed", isComplete ? demoRunResult.passed : "—"],
                ["Failed", isComplete ? demoRunResult.failed : "—"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-line bg-paper p-4">
                  <p className="text-2xl font-semibold text-slate-950">{value}</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {demoRunResult.assets.map((asset, index) => {
                const Icon = [Camera, FileText, Sparkles][index];
                return (
                  <div
                    key={asset}
                    className={cn(
                      "flex items-center gap-3 rounded-xl border p-4 text-sm font-semibold",
                      isComplete
                        ? "border-teal-200 bg-teal-50 text-brand"
                        : "border-line bg-paper text-slate-500",
                    )}
                  >
                    {isComplete ? (
                      <CheckCircle2 aria-hidden="true" size={18} />
                    ) : (
                      <Icon aria-hidden="true" size={18} />
                    )}
                    <span>{asset}</span>
                  </div>
                );
              })}
            </div>

            {isComplete ? (
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-red-800">
                  <XCircle aria-hidden="true" size={18} />
                  Failure summary
                </div>
                <p className="mt-2 text-sm leading-6 text-red-900/80">
                  Timeout probable sur validation panier après changement de devise.
                  Screenshot, trace et logs sont prêts à être consultés.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
