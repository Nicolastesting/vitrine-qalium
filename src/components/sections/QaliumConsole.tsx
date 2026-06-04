import {
  Activity,
  CheckCircle2,
  Clock3,
  PlayCircle,
  Sparkles,
  XCircle,
} from "lucide-react";
import { cn } from "../../lib/cn";

type QaliumConsoleProps = {
  className?: string;
};

type RunStatus = "passed" | "failed" | "running";

const runRows: Array<{
  suite: string;
  status: RunStatus;
  time: string;
  artifact: string;
}> = [
  {
    suite: "checkout.spec.ts",
    status: "failed",
    time: "01:42",
    artifact: "trace + video",
  },
  {
    suite: "auth.spec.ts",
    status: "passed",
    time: "00:38",
    artifact: "screenshots",
  },
  {
    suite: "billing.spec.ts",
    status: "running",
    time: "00:17",
    artifact: "live logs",
  },
];

export function QaliumConsole({ className }: QaliumConsoleProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-white/12 bg-ink-soft/94 text-white shadow-panel ring-1 ring-white/10",
        className,
      )}
      aria-label="Aperçu d'un dashboard Qalium avec runs, artefacts et diagnostic"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-teal-300" />
        </div>
        <div className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-slate-300">
          run #4821 · staging
        </div>
      </div>

      <div className="grid gap-4 p-5 md:grid-cols-[1.25fr_0.85fr]">
        <section className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase text-teal-200">
                Qalium Run Console
              </p>
              <h3 className="mt-2 text-xl font-semibold">Campagne release-web</h3>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-100">
              <Clock3 aria-hidden="true" size={14} />
              En cours
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["42", "tests"],
              ["36", "passés"],
              ["3", "à diagnostiquer"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/[0.06] p-3">
                <p className="text-2xl font-semibold">{value}</p>
                <p className="mt-1 text-xs text-slate-300">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-3">
            {runRows.map((row) => (
              <div
                key={row.suite}
                className="grid grid-cols-[1fr_auto] gap-3 rounded-lg border border-white/10 bg-ink/45 p-3 sm:grid-cols-[1fr_auto_auto]"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{row.suite}</p>
                  <p className="mt-1 text-xs text-slate-400">{row.artifact}</p>
                </div>
                <StatusBadge status={row.status} />
                <span className="hidden text-sm text-slate-300 sm:block">{row.time}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <p className="text-xs font-semibold uppercase text-teal-200">Diagnostic</p>
          <h3 className="mt-2 text-lg font-semibold">Échec probable</h3>
          <div className="mt-4 rounded-lg border border-red-300/20 bg-red-400/10 p-3">
            <p className="text-sm font-semibold text-red-100">
              Timeout sur validation panier
            </p>
            <p className="mt-2 text-xs leading-5 text-red-50/80">
              Le bouton de paiement reste désactivé après changement de devise.
            </p>
          </div>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <div className="flex items-center justify-between gap-3">
              <span>Trace Playwright</span>
              <span className="font-semibold text-teal-200">attachée</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span>Vidéo</span>
              <span className="font-semibold text-teal-200">01:42</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span>Historique</span>
              <span className="font-semibold text-amber-100">2 échecs / 10</span>
            </div>
          </div>
          <div className="mt-5 rounded-lg border border-white/10 bg-ink/50 p-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Activity aria-hidden="true" size={16} />
              Signal stabilité
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-teal-300 to-amber-300" />
            </div>
          </div>
          <div className="mt-3 rounded-lg border border-teal-200/20 bg-teal-300/10 p-3">
            <div className="flex items-center justify-between gap-3 text-sm font-semibold text-white">
              <span className="inline-flex items-center gap-2">
                <Sparkles aria-hidden="true" size={16} />
                Résumé IA
              </span>
              <span className="rounded-full border border-teal-200/20 px-2 py-0.5 text-[11px] text-teal-100">
                roadmap
              </span>
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-300">
              Hypothèse guidée à partir des logs, traces et derniers échecs similaires.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: RunStatus }) {
  const state = {
    passed: {
      label: "passé",
      className: "border-teal-300/30 bg-teal-300/10 text-teal-100",
      icon: CheckCircle2,
    },
    failed: {
      label: "échec",
      className: "border-red-300/30 bg-red-300/10 text-red-100",
      icon: XCircle,
    },
    running: {
      label: "live",
      className: "border-amber-300/30 bg-amber-300/10 text-amber-100",
      icon: PlayCircle,
    },
  }[status];

  const Icon = state.icon;

  return (
    <span
      className={cn(
        "inline-flex h-8 items-center justify-center gap-1.5 rounded-full border px-2.5 text-xs font-semibold",
        state.className,
      )}
    >
      <Icon aria-hidden="true" size={14} />
      {state.label}
    </span>
  );
}
