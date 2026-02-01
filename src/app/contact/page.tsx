// src/app/contact/page.tsx
"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Meta-Infos (wie in der Klickstrecke, nur kontakt-spezifisch)
    formData.set("quelle", "Kontaktformular");
    formData.set("ausgewaehlte_leistungen", "—");
    formData.set("zielgruppe", "");

    try {
      setSubmitting(true);

      const res = await fetch("https://formspree.io/f/mwpodldw", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        setSubmitError(
          "Die Anfrage konnte nicht übermittelt werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt über hello@docalyze-solutions.de."
        );
        return;
      }

      router.push("/anfrage/danke");
    } catch {
      setSubmitError(
        "Es ist ein technischer Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie an hello@docalyze-solutions.de."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="pb-20 pt-16">
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 lg:px-10 space-y-10">
        {/* Kopfbereich */}
        <section className="space-y-4">
          <Link
            href="/#kontakt-teaser"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-3.5 py-1.5 text-xs font-medium text-[var(--muted)] hover:bg-white/5 hover:text-white transition"
          >
            <ArrowRight size={14} className="rotate-180" />
            Zurück zur Startseite
          </Link>

          <div className="space-y-2">
            <h1 className="section-title text-2xl sm:text-3xl text-white">
              Anfrage zur Zusammenarbeit
            </h1>
            <p className="section-lead text-[var(--muted)] text-sm sm:text-base max-w-2xl">
              Anfragen aller Art. Bitte schildern Sie uns ggf. Ihre Ausgangslage, Anforderungen und Zielbild.
              Ihre Anfrage landet direkt in unserem Postfach{" "}
              <span className="text-white">hello@docalyze-solutions.de</span>.
            </p>
          </div>

          {/* Mini-Hinweis (optional, wirkt premium & klar) */}
          <div className="text-xs sm:text-sm text-[var(--muted)]">
            Alternativ - direkt per Mail:{" "}
            <a
              className="text-white/90 hover:text-white underline underline-offset-4"
              href="mailto:hello@docalyze-solutions.de"
            >
              hello@docalyze-solutions.de
            </a>
          </div>
        </section>

        {/* Formular */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Formfelder – 1:1 aus Step 2 */}
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm text-[var(--muted)]">
                  Name*
                </label>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)]/80 px-3 py-2 text-sm text-white outline-none focus:border-[var(--accent)]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm text-[var(--muted)]">
                  Unternehmen / Projektgesellschaft
                </label>
                <input
                  name="unternehmen"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)]/80 px-3 py-2 text-sm text-white outline-none focus:border-[var(--accent)]"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm text-[var(--muted)]">
                  E-Mail*
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)]/80 px-3 py-2 text-sm text-white outline-none focus:border-[var(--accent)]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm text-[var(--muted)]">
                  Telefon (optional)
                </label>
                <input
                  name="telefon"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)]/80 px-3 py-2 text-sm text-white outline-none focus:border-[var(--accent)]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm text-[var(--muted)]">
                Kurzbeschreibung der Situation
              </label>
              <textarea
                name="situation"
                rows={6}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)]/80 px-3 py-2 text-sm text-white outline-none focus:border-[var(--accent)] resize-none"
                placeholder="z. B. aktueller Projekt- oder Unternehmensstand, Finanzierungssituation, Fristen, besondere Anforderungen der Bank."
              />
            </div>

            {/* Optionales Feld: Welche Leistung? (nur als Freitext, weil Contact keine Auswahl hat) */}
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm text-[var(--muted)]">
                Gewünschte Leistung (optional)
              </label>
              <input
                name="gewünschte_leistung"
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)]/80 px-3 py-2 text-sm text-white outline-none focus:border-[var(--accent)]"
                placeholder="z. B. Projektkalkulation, Monitoring, Unterlagenaufbereitung …"
              />
            </div>
          </div>

          {/* Fehleranzeige */}
          {submitError && (
            <p className="text-xs sm:text-sm text-red-400">{submitError}</p>
          )}

          {/* Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <Link
              href="/anfrage"
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs sm:text-sm font-medium border border-[var(--border)] text-[var(--muted)] hover:text-white hover:border-[var(--accentBorder)] transition"
            >
              Zur Leistungsauswahl
            </Link>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent2)] transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? "Nachricht wird gesendet …" : "Nachricht absenden"}
              {!submitting && <ArrowRight size={16} className="ml-1" />}
            </button>
          </div>

          {/* Rechtlicher Mini-Hinweis (DSGVO-üblich, wirkt seriös) */}
          <p className="text-xs text-[var(--muted)]">
            Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben zur Bearbeitung Ihrer Anfrage zu.
            Weitere Informationen finden Sie in der{" "}
            <Link href="/datenschutz" className="text-white/90 hover:text-white underline underline-offset-4">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </form>
      </div>
    </main>
  );
}
