import { ArrowRight } from "lucide-react";
import { Link, type LinkProps } from "react-router-dom";
import { cn } from "../../lib/cn";

type ButtonLinkVariant = "primary" | "secondary" | "dark" | "ghost";

type ButtonLinkProps = LinkProps & {
  variant?: ButtonLinkVariant;
  showIcon?: boolean;
};

const variantClasses: Record<ButtonLinkVariant, string> = {
  primary:
    "bg-brand text-white shadow-soft hover:bg-teal-800 focus-visible:outline-brand-light",
  secondary:
    "border border-line bg-white text-slate-900 hover:border-slate-400 hover:bg-paper-muted focus-visible:outline-brand",
  dark:
    "bg-white text-ink hover:bg-teal-50 focus-visible:outline-brand-light",
  ghost:
    "text-slate-700 hover:bg-paper-muted hover:text-slate-950 focus-visible:outline-brand",
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  showIcon = false,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {showIcon ? <ArrowRight aria-hidden="true" size={17} /> : null}
    </Link>
  );
}
