import {
  Activity,
  AlertTriangle,
  Boxes,
  Braces,
  ChartNoAxesCombined,
  Clock3,
  Database,
  FileText,
  FolderKanban,
  GitBranch,
  History,
  LayoutDashboard,
  Play,
  SearchCheck,
  ServerCog,
  Sparkles,
  Users,
  Video,
} from "lucide-react";
import type { IconName } from "../../data/features";
import { cn } from "../../lib/cn";

type FeatureIconProps = {
  name: IconName;
  className?: string;
};

const iconMap = {
  dashboard: LayoutDashboard,
  folder: FolderKanban,
  play: Play,
  artifact: Video,
  search: SearchCheck,
  history: History,
  activity: Activity,
  worker: ServerCog,
  queue: Boxes,
  storage: Database,
  report: FileText,
  flaky: AlertTriangle,
  stability: ChartNoAxesCombined,
  team: Users,
  pipeline: GitBranch,
  api: Braces,
  trace: Clock3,
  ai: Sparkles,
};

export function FeatureIcon({ name, className }: FeatureIconProps) {
  const Icon = iconMap[name];

  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-lg border border-teal-200 bg-teal-50 text-brand",
        className,
      )}
    >
      <Icon aria-hidden="true" size={21} strokeWidth={2.2} />
    </span>
  );
}
