import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { mainNavigation } from "../../data/navigation";
import { cn } from "../../lib/cn";
import { ButtonLink } from "../ui/ButtonLink";
import { QaliumLogo } from "./QaliumLogo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/92 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <QaliumLogo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {mainNavigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-3 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
                  isActive
                    ? "bg-white text-brand shadow-sm"
                    : "text-slate-600 hover:bg-white hover:text-slate-950",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink to="/contact" showIcon>
            Demander un accès
          </ButtonLink>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-white text-slate-900 transition hover:bg-paper-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:hidden"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </div>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-line bg-paper px-4 py-4 shadow-soft lg:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-2" aria-label="Navigation mobile">
            {mainNavigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
                    isActive
                      ? "bg-white text-brand shadow-sm"
                      : "text-slate-700 hover:bg-white hover:text-slate-950",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <ButtonLink to="/contact" className="mt-2" showIcon>
              Demander un accès
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
