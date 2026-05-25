import { ActivitySquare } from "lucide-react";
import { Link } from "react-router-dom";

type QaliumLogoProps = {
  inverted?: boolean;
};

export function QaliumLogo({ inverted = false }: QaliumLogoProps) {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      aria-label="Qalium - Accueil"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white shadow-soft">
        <ActivitySquare aria-hidden="true" size={22} />
      </span>
      <span className="leading-none">
        <span
          className={
            inverted
              ? "block text-lg font-semibold text-white"
              : "block text-lg font-semibold text-slate-950"
          }
        >
          Qalium
        </span>
        <span
          className={
            inverted
              ? "block text-xs font-medium text-slate-300"
              : "block text-xs font-medium text-slate-500"
          }
        >
          QA/TestOps
        </span>
      </span>
    </Link>
  );
}
