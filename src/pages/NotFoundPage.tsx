import { ButtonLink } from "../components/ui/ButtonLink";

export function NotFoundPage() {
  return (
    <section className="bg-paper px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold text-brand">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950">Page introuvable</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Le lien demandé n'existe pas dans le site vitrine Qalium.
        </p>
        <ButtonLink to="/" className="mt-8" showIcon>
          Revenir à l'accueil
        </ButtonLink>
      </div>
    </section>
  );
}
