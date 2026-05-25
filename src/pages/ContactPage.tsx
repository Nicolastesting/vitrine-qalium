import { Mail, MessageSquare, ShieldCheck } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/ui/Button";
import { SectionHeader } from "../components/ui/SectionHeader";
import { siteConfig } from "../data/site";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-paper px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Demander un accès ou présenter votre contexte QA."
              description="Expliquez votre stack, votre maturité Playwright et les difficultés de diagnostic ou de reporting que vous voulez résoudre."
              as="h1"
            />

            <div className="mt-10 grid gap-4">
              <article className="rounded-xl border border-line bg-white p-5 shadow-sm">
                <Mail className="text-brand" aria-hidden="true" size={22} />
                <h2 className="mt-4 text-lg font-semibold text-slate-950">Contact direct</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Écrivez à{" "}
                  <a
                    className="font-semibold text-brand underline-offset-4 hover:underline"
                    href={`mailto:${siteConfig.contactEmail}`}
                  >
                    {siteConfig.contactEmail}
                  </a>
                  .
                </p>
              </article>
              <article className="rounded-xl border border-line bg-white p-5 shadow-sm">
                <ShieldCheck className="text-brand" aria-hidden="true" size={22} />
                <h2 className="mt-4 text-lg font-semibold text-slate-950">Sans backend</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Ce formulaire est une expérience vitrine. Il pourra être connecté plus tard à un CRM ou à une API.
                </p>
              </article>
            </div>
          </div>

          <form
            className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-brand">
                <MessageSquare aria-hidden="true" size={21} />
              </span>
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Demande d'accès</h2>
                <p className="text-sm text-slate-500">Réponse simulée côté vitrine.</p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-slate-800" htmlFor="name">
                  Nom
                </label>
                <input
                  className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-teal-100"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  type="text"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-800" htmlFor="email">
                  Email professionnel
                </label>
                <input
                  className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-teal-100"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  type="email"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="text-sm font-semibold text-slate-800" htmlFor="company">
                Entreprise
              </label>
              <input
                className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-teal-100"
                id="company"
                name="company"
                autoComplete="organization"
                type="text"
              />
            </div>

            <div className="mt-5">
              <label className="text-sm font-semibold text-slate-800" htmlFor="context">
                Contexte QA / Playwright
              </label>
              <textarea
                className="mt-2 min-h-36 w-full resize-y rounded-lg border border-line bg-paper px-4 py-3 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-teal-100"
                id="context"
                name="context"
                required
                placeholder="Ex : nombre de suites, CI utilisée, difficulté principale de diagnostic..."
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit">Envoyer la demande</Button>
              {submitted ? (
                <p className="text-sm font-medium text-brand" role="status">
                  Merci, la demande est prête à être branchée à un backend.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
