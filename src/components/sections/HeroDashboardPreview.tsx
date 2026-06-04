import {
  Activity,
  Camera,
  CheckCircle2,
  Clock3,
  FileText,
  Globe2,
  PlayCircle,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { dashboardFrames, type RunStatus } from "../../data/interactions";
import { cn } from "../../lib/cn";
import { usePrefersReducedMotion } from "../../lib/usePrefersReducedMotion";

type HeroDashboardPreviewProps = {
  className?: string;
};

const statusTone: Record<RunStatus, string> = {
  QUEUED: "border-slate-300/30 bg-slate-300/10 text-slate-100",
  RUNNING: "border-amber-300/35 bg-amber-300/10 text-amber-100",
  COLLECTING: "border-teal-300/35 bg-teal-300/10 text-teal-100",
  ARTIFACTS: "border-teal-300/35 bg-teal-300/10 text-teal-100",
  PASSED: "border-teal-300/35 bg-teal-300/10 text-teal-100",
  FAILED: "border-red-300/35 bg-red-300/10 text-red-100",
};

const statusIcon = {
  QUEUED: Clock3,
  RUNNING: PlayCircle,
  COLLECTING: Activity,
  ARTIFACTS: FileText,
  PASSED: CheckCircle2,
  FAILED: XCircle,
};

export function HeroDashboardPreview({ className }: HeroDashboardPreviewProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [frameIndex, setFrameIndex] = useState(1);
  const frame = dashboardFrames[frameIndex];
  const StatusIcon = statusIcon[frame.status];

  useEffect(() => {
    if (prefersReducedMotion) {
      setFrameIndex(2);
      return undefined;
    }

    const interval = window.setInterval(() => {
      setFrameIndex((current) => (current + 1) % dashboardFrames.length);
    }, 1700);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <aside
      className={cn(
        "overflow-hidden rounded-2xl border border-white/12 bg-ink-soft/95 text-white shadow-panel ring-1 ring-white/10",
        className,
      )}
      aria-label="Aperçu simulé du dashboard Qalium"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-teal-300" />
        </div>
        <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-medium text-slate-300">
          demo run · simulated
        </span>
      </div>

      <div className="p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-teal-200">
              Qalium Live Run
            </p>
            <h2 className="mt-2 text-xl font-semibold">Checkout regression</h2>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1">
                <Globe2 aria-hidden="true" size={13} />
                Chromium
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1">
                <Clock3 aria-hidden="true" size={13} />
                {frame.duration}
              </span>
            </div>
          </div>

          <div
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold",
              statusTone[frame.status],
            )}
            aria-live="polite"
          >
            <StatusIcon aria-hidden="true" size={15} />
            {frame.status}
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span>{frame.label}</span>
            <span>{frame.progress}%</span>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/10">
            <div
              className={cn(
                "h-full rounded-full bg-gradient-to-r from-teal-300 via-brand-light to-amber-300",
                prefersReducedMotion ? "" : "transition-all duration-700 ease-out",
              )}
              style={{ width: `${frame.progress}%` }}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            ["Executed", frame.executed],
            ["Passed", frame.passed],
            ["Failed", frame.failed],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/[0.05] p-3">
              <p className="text-2xl font-semibold">{value}</p>
              <p className="mt-1 text-xs text-slate-400">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-white/10 bg-ink/45 p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold">Generated artifacts</p>
            <Camera aria-hidden="true" className="text-teal-200" size={17} />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {frame.artifacts.map((artifact) => (
              <span
                key={artifact}
                className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs text-slate-300"
              >
                {artifact}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
