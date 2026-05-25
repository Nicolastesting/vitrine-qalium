import { footerNavigation } from "../../data/navigation";
import { siteConfig } from "../../data/site";
import { QaliumLogo } from "./QaliumLogo";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <QaliumLogo inverted />
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
            {siteConfig.description}
          </p>
          <p className="mt-5 text-sm text-slate-400">
            © {new Date().getFullYear()} Qalium. Site vitrine.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {Object.entries(footerNavigation).map(([group, links]) => (
            <div key={group}>
              <h2 className="text-sm font-semibold text-white">{group}</h2>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-300 transition hover:text-white focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
