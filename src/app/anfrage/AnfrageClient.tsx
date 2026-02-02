// src/app/anfrage/AnfrageClient.tsx
"use client";

import { useEffect, useMemo, useState, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type ServiceOption = {
  id: string;
  label: string;
  group: "retainer" | "entwicklung" | "unternehmen";
  description: string;
  honorar: string;
};

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: "retainer",
    label: "Laufende Begleitung (Retainer)",
    group: "retainer",
    description:
      "Von der ersten Aufbereitung bis zum laufenden Reporting. Bündelung von Analyse, Abstimmungen und Reporting in einem Mandat.",
    honorar: "ab 3.000 € / Monat",
  },
  {
    id: "projektkalkulationen",
    label: "Projektkalkulation",
    group: "entwicklung",
    description:
      "Bankfähige Kalkulation mit realistischen Annahmen, Puffern und Kapitaldienstlogik. Planung der Zahlungsströme.",
    honorar: "ab 4.500 €",
  },
  {
    id: "projektanalyse",
    label: "Projektanalyse",
    group: "entwicklung",
    description:
      "Einordnung, ob Projektstruktur, Risiko und Vorverkaufsquote eine vertretbare Finanzierung zulassen. Kapitalbeschaffung auf Wunsch.",
    honorar: "ab 3.300 €",
  },
  {
    id: "risiko-sensitivitaet",
    label: "Risiko- & Sensitivitätsanalyse",
    group: "entwicklung",
    description:
      "Szenarien zu Kosten, Erlösen, Zeit und Zins mit Auswirkungen auf Ergebnis und Kapitaldienstfähigkeit.",
    honorar: "ab 3.500 €",
  },
  {
    id: "projektmonitoring",
    label: "Monitoring",
    group: "entwicklung",
    description: "Laufende bankreife Berichte zu Bautenstand, Kosten und Liquidität.",
    honorar: "ab 1.750 € / Monat",
  },
  {
    id: "unternehmensanalyse",
    label: "Unternehmensanalyse",
    group: "unternehmen",
    description:
      "Klarheit über wirtschaftliche Lage, Risiken und die nächsten sinnvollen Schritte.",
    honorar: "ab 3.000 €",
  },
  {
    id: "unterlagen",
    label: "Unterlagenaufbereitung",
    group: "unternehmen",
    description:
      "Nachvollziehbare Aufbereitung Ihrer Zahlen mit Fokus auf Finanzierungsfähigkeit. Auf Wunsch begleiten wir Sie bei der Kapitalbeschaffung.",
    honorar: "ab 3.500 €",
  },
  {
    id: "pruefungsbericht",
    label: "Umsetzung Prüfungsbericht",
    group: "unternehmen",
    description:
      "Konkrete Ableitung und Umsetzung der im Prüfungsbericht benannten Feststellungen. Grundlage für eine stabile Zukunft.",
    honorar: "ab 2.500 €",
  },
  {
    id: "prozesse",
    label: "Prozesse",
    group: "unternehmen",
    description:
      "Integration und Optimierung. Abläufe, die liefern – lösungsorientiert und umsetzbar gestaltet.",
    honorar: "ab 4.000 €",
  },
  {
    id: "buchhaltung-controlling",
    label: "Buchhaltungs- und Controllingstruktur",
    group: "unternehmen",
    description:
      "Einführung von Strukturen, damit Sie Ihr Unternehmen aktiv steuern können – intern wie extern.",
    honorar: "ab 3.500 €",
  },
  {
    id: "kmu-reporting",
    label: "Reporting",
    group: "unternehmen",
    description:
      "Laufendes Reporting zu Liquidität, Ergebnis und wesentlichen Kennzahlen. Abweichungen werden eingeordnet – ohne zusätzlichen internen Aufwand.",
    honorar: "ab 1.500 € / Monat",
  },
];

export default function AnfrageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [step, setStep] = useState<1 | 2>(1);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const zielgruppe = searchParams.get("zielgruppe"); // "entwicklung" | "unternehmen" | null
  const vorwahlLeistung = searchParams.get("leistung");
  const vorwahlModell = searchParams.get("modell"); // "retainer" etc.

  useEffect(() => {
    const initial: string[] = [];

    if (vorwahlModell === "retainer") initial.push("retainer");
    if (vorwahlLeistung) initial.push(vorwahlLeistung);

    if (initial.length > 0) {
      setSelectedIds((prev) =>
        prev.length ? prev : Array.from(new Set(initial))
      );
    }
  }, [vorwahlLeistung, vorwahlModell]);

  const toggleSelection = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const selectedOptions = useMemo(
    () => SERVICE_OPTIONS.filter((o) => selectedIds.includes(o.id)),
    [selectedIds]
  );

  const selectedSummary = useMemo(() => {
    if (selectedOptions.length === 0) return "";
    return selectedOptions.map((o) => o.label).join(", ");
  }, [selectedOptions]);

  const canProceed = selectedIds.length > 0;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    if (selectedIds.length === 0) {
      setStep(1);
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.set("ausgewaehlte_leistungen", selectedSummary);
    formData.set("zielgruppe", zielgruppe ?? "");
    formData.set("quelle", "Klickstrecke-Leistungen");

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
    } catch (err) {
      console.error("Form submit failed:", err);
      setSubmitError(
        "Es ist ein technischer Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie direkt an hello@docalyze-solutions.de."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const ServiceCard = ({ opt }: { opt: ServiceOption }) => {
    const active = selectedIds.includes(opt.id);

    return (
      <button
        type="button"
        onClick={() => toggleSelection(opt.id)}
        className={`w-full text-left rounded-2xl border transition ${
          active
            ? "border-[var(--accent)] bg-[var(--surface)]/90"
            : "border-[var(--border)] bg-[var(--surface)]/70 hover:border-[var(--accentBorder)]"
        }`}
      >
        <div className="px-4 py-3 sm:px-5 sm:py-4 flex items-start gap-4">
          <div className="mt-1 shrink-0">
            {active ? (
              <CheckCircle2 size={18} className="text-[var(--accent)]" />
            ) : (
              <span className="inline-block h-4 w-4 rounded-full border border-[var(--border)]" />
            )}
          </div>

          <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="min-w-0">
              <p className="text-sm sm:text-[15px] font-semibold text-white">
                {opt.label}
              </p>
              <p className="text-xs sm:text-sm text-[var(--muted)] mt-1">
                {opt.description}
              </p>
            </div>

            <div className="sm:self-center sm:text-right shrink-0 sm:min-w-[170px] pt-0.5">
              <p className="text-[8px] uppercase tracking-wide text-[var(--muted)]">
                Honorar
              </p>
              <p className="text-sm sm:text-base font-semibold text-white leading-tight mt-1">
                {opt.honorar}
              </p>
            </div>
          </div>
        </div>
      </button>
    );
  };

  return (
    <main className="pb-20 pt-16">
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 lg:px-10 space-y-10">
        <section className="space-y-4">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-3.5 py-1.5 text-xs font-medium text-[var(--muted)] hover:bg-white/5 hover:text-white transition"
          >
            <ArrowRight size={14} className="rotate-180" />
            Zurück zu den Leistungen
          </Link>

          <div className="space-y-2">
            <h1 className="section-title text-2xl sm:text-3xl text-white">
              Leistungsauswahl.
            </h1>
            <p className="section-lead text-[var(--muted)] text-sm sm:text-base max-w-4xl">
              Auswahl der relevanten Module für Ihren Bedarf. Anschließend geben
              Sie Ihre Kontaktdaten und Entscheidungssituation an. Die Anfrage
              landet direkt in unserem Postfach:{" "}
              <span className="text-white">hello@docalyze-solutions.de</span>.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                  step === 1
                    ? "bg-[var(--accent)] border-[var(--accent)] text-[var(--bg)]"
                    : "bg-[var(--surface)] border-[var(--border)] text-white"
                }`}
              >
                1
              </span>
              <span
                className={
                  step === 1 ? "text-white font-semibold" : "text-[var(--muted)]"
                }
              >
                Leistungen auswählen
              </span>
            </div>
            <div className="h-px flex-1 bg-[var(--border)]" />
            <div className="flex items-center gap-2">
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                  step === 2
                    ? "bg-[var(--accent)] border-[var(--accent)] text-[var(--bg)]"
                    : "bg-[var(--surface)] border-[var(--border)] text-white"
                }`}
              >
                2
              </span>
              <span
                className={
                  step === 2 ? "text-white font-semibold" : "text-[var(--muted)]"
                }
              >
                Kontaktdaten &amp; Situation
              </span>
            </div>
          </div>
        </section>

        <form onSubmit={handleSubmit} className="space-y-10">
          {step === 1 && (
            <section className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-sm sm:text-base font-semibold text-white">
                  Laufende Begleitung
                </h2>
                <p className="text-xs sm:text-sm text-[var(--muted)] max-w-2xl">
                  Für Konstellationen mit laufenden Projekten, wiederkehrenden
                  Abstimmungen und kontinuierlichem Reportingbedarf.
                </p>

                <ServiceCard
                  opt={SERVICE_OPTIONS.find((o) => o.id === "retainer")!}
                />
              </div>

              <div className="space-y-3">
                <h2 className="text-sm sm:text-base font-semibold text-white">
                  Leistungen für Projektentwickler &amp; Bauträger
                </h2>
                <div className="space-y-2">
                  {SERVICE_OPTIONS.filter((o) => o.group === "entwicklung").map(
                    (opt) => (
                      <ServiceCard key={opt.id} opt={opt} />
                    )
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-sm sm:text-base font-semibold text-white">
                  Leistungen für Unternehmer &amp; KMU
                </h2>
                <div className="space-y-2">
                  {SERVICE_OPTIONS.filter((o) => o.group === "unternehmen").map(
                    (opt) => (
                      <ServiceCard key={opt.id} opt={opt} />
                    )
                  )}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  disabled={!canProceed}
                  onClick={() => setStep(2)}
                  className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition ${
                    canProceed
                      ? "border border-[var(--accentBorder)] text-white hover:bg-[#153c54] hover:border-white/25"
                      : "border border-[var(--border)] text-[var(--muted)] cursor-not-allowed"
                  }`}
                >
                  Weiter zu Kontaktdaten
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </section>
          )}

          {step === 2 && (
            <section className="space-y-8">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-4 sm:p-5 space-y-3">
                <h2 className="text-sm sm:text-base font-semibold text-white">
                  Ausgewählte Leistungen
                </h2>

                {selectedOptions.length === 0 ? (
                  <p className="text-xs sm:text-sm text-[var(--muted)]">
                    Es sind aktuell keine Leistungen ausgewählt. Sie können oben
                    im ersten Schritt Leistungen markieren.
                  </p>
                ) : (
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[var(--muted)]">
                    {selectedOptions.map((opt) => (
                      <li key={opt.id} className="flex items-start gap-2">
                        <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                        <span className="text-white/90">
                          {opt.label}{" "}
                          <span className="text-[var(--muted)]">
                            ({opt.honorar})
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

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
                    rows={5}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)]/80 px-3 py-2 text-sm text-white outline-none focus:border-[var(--accent)] resize-none"
                    placeholder="z. B. aktueller Projekt- oder Unternehmensstand, Finanzierungssituation, Fristen, besondere Anforderungen der Bank."
                  />
                </div>
              </div>

              {submitError && (
                <p className="text-xs sm:text-sm text-red-400">{submitError}</p>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs sm:text-sm font-medium border border-[var(--border)] text-[var(--muted)] hover:text-white hover:border-[var(--accentBorder)] transition"
                  disabled={submitting}
                >
                  Zurück zur Auswahl
                </button>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent2)] transition disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? "Anfrage wird gesendet …" : "Anfrage verbindlich absenden"}
                  {!submitting && <ArrowRight size={16} className="ml-1" />}
                </button>
              </div>
            </section>
          )}
        </form>
      </div>
    </main>
  );
}
