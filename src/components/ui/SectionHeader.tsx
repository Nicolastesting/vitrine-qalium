import { cn } from "../../lib/cn";
import { Badge } from "./Badge";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
  as?: "h1" | "h2";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
  as = "h2",
}: SectionHeaderProps) {
  const HeadingTag = as;

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        inverted ? "text-white" : "text-slate-950",
      )}
    >
      {eyebrow ? (
        <Badge tone={inverted ? "dark" : "success"}>{eyebrow}</Badge>
      ) : null}
      <HeadingTag className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl">
        {title}
      </HeadingTag>
      {description ? (
        <p
          className={cn(
            "mt-4 text-pretty text-base leading-7 sm:text-lg",
            inverted ? "text-slate-200" : "text-slate-600",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
