import { Activity, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { workflowStages } from "../../data/interactions";
import { cn } from "../../lib/cn";
import { usePrefersReducedMotion } from "../../lib/usePrefersReducedMotion";

export function InteractiveWorkflow() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = workflowStages[activeIndex];

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % workflowStages.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div className="mt-12 rounded-2xl border border-line bg-paper p-4 shadow-soft sm:p-6">
      <div className="grid gap-3 md:grid-cols-7">
        {workflowStages.map((stage, index) => {
          const isActive = index === activeIndex;
          const isPast = index < activeIndex;

          return (
            <button
              key={stage.key}
              type="button"
              aria-pressed={isActive}
              className={cn(
                "group relative flex min-h-24 flex-col items-start justify-between rounded-xl border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
                isActive
                  ? "border-brand bg-white shadow-soft"
                  : "border-line bg-white/70 hover:border-teal-200 hover:bg-white",
              )}
              onClick={() => setActiveIndex(index)}
            >
              <span
                className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold",
                  isActive
                    ? "bg-brand text-white"
                    : isPast
                      ? "bg-teal-50 text-brand"
                      : "bg-paper-muted text-slate-600",
                )}
              >
                {index + 1}
              </span>
              <span className="mt-4 text-sm font-semibold text-slate-950">{stage.label}</span>
              {index < workflowStages.length - 1 ? (
                <ArrowRight
                  className={cn(
                    "absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-slate-300 md:block",
                    isActive && "text-brand motion-safe:animate-pulse",
                  )}
                  aria-hidden="true"
                  size={18}
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <div
        className="mt-5 grid gap-5 rounded-xl border border-line bg-white p-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-center"
        aria-live="polite"
      >
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-brand">
            <Activity aria-hidden="true" size={14} />
            Active step
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-slate-950">
            {activeStage.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {activeStage.description}
          </p>
        </div>

        <div className="rounded-xl border border-line bg-ink p-4 text-white">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold">Qalium flow event</p>
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs text-slate-300">
              simulated
            </span>
          </div>
          <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="font-mono text-sm text-teal-100">{activeStage.key}.event</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">{activeStage.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
