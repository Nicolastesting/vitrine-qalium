import { cn } from "../../lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "dark" | "light" | "accent" | "success";
};

const toneClasses = {
  dark: "border-white/15 bg-white/10 text-white",
  light: "border-line bg-white text-slate-700",
  accent: "border-amber-300/60 bg-amber-100 text-amber-900",
  success: "border-teal-300/70 bg-teal-50 text-teal-900",
};

export function Badge({ children, tone = "light" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
        toneClasses[tone],
      )}
    >
      {children}
    </span>
  );
}
