"use client";

// src/components/Services.tsx
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Briefcase,
  ArrowRight,
  LineChart,
  FileSpreadsheet,
} from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type ServiceRow = {
  anchorId: string;
  title: string;
  description: string;
  honorar?: string;
};

const peRows: ServiceRow[] = [
  {
    anchorId: "projektkalkulationen",
    title: "Projektkalkulation",
    description:
      "Bankfähige Kalkulation mit realistischen Annahmen, Puffern und Kapitaldienstlogik. Planung der Zahlungsströme.",
    honorar: "ab 4.500 €",
  },
  {
    anchorId: "projektanalyse",
    title: "Projektanalyse",
    description:
      "Einordnung, ob Projektstruktur, Risiko und Vorverkaufsquote eine vertretbare Finanzierung zulassen. Kapitalbeschaffung auf Wunsch.",
    honorar: "ab 3.300 €",
  },
  {
    anchorId: "risiko-sensitivitaet",
    title: "Risiko- & Sensitivitätsanalyse",
    description:
      "Szenarien zu Kosten, Erlösen, Zeit und Zins mit Auswirkungen auf Ergebnis und Kapitaldienstfähigkeit.",
    honorar: "ab 3.500 €",
  },
  {
    anchorId: "projektmonitoring",
    title: "Monitoring",
    description:
      "Laufende bankreife Berichte zu Bautenstand, Kosten und Liquidität.",
    honorar: "ab 1.750 € / Monat",
  },
];

const kmuRows: ServiceRow[] = [
  {
    anchorId: "unternehmensanalyse",
    title: "Unternehmensanalyse",
    description:
      "Klarheit über wirtschaftliche Lage, Risiken und die nächsten sinnvollen Schritte.",
    honorar: "ab 3.000 €",
  },
  {
    anchorId: "unterlagen",
    title: "Unterlagenaufbereitung",
    description:
      "Nachvollziehbare Aufbereitung Ihrer Zahlen mit Fokus auf Finanzierungsfähigkeit. Auf Wunsch begleiten wir Sie bei der Kapitalbeschaffung.",
    honorar: "ab 3.500 €",
  },
  {
    anchorId: "pruefungsbericht",
    title: "Umsetzung Prüfungsbericht",
    description:
      "Konkrete Ableitung und Umsetzung der im Prüfungsbericht benannten Feststellungen. Wir schaffen gemeinsam die Grundlage für eine stabile Zukunft.",
    honorar: "ab 2.500 €",
  },
  {
    anchorId: "prozesse",
    title: "Prozesse",
    description:
      "Integration und Optimierung. Abläufe, die liefern. Wir gestalten gemeinsam lösungsorientiert Ihre Prozesse.",
    honorar: "ab 4.000 €",
  },
  {
    anchorId: "buchhaltung-controlling",
    title: "Buchhaltungs- und Controllingstruktur",
    description:
      "Einführung von Strukturen, damit Sie Ihr Unternehmen aktiv steuern können – intern wie extern.",
    honorar: "ab 3.500 €",
  },
  {
    anchorId: "kmu-reporting",
    title: "Reporting",
    description:
      "Laufendes Reporting zu Liquidität, Ergebnis und wesentlichen Kennzahlen. Abweichungen werden eingeordnet – für Transparenz ohne zusätzlichen internen Aufwand.",
    honorar: "ab 1.500 € / Monat",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function useHasScrolled() {
  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    const onFirstScroll = () => setHasScrolled(true);
    const opts: AddEventListenerOptions = { passive: true };

    window.addEventListener("scroll", onFirstScroll, opts);
    window.addEventListener("wheel", onFirstScroll, opts);
    window.addEventListener("touchmove", onFirstScroll, opts);

    return () => {
      window.removeEventListener("scroll", onFirstScroll);
      window.removeEventListener("wheel", onFirstScroll);
      window.removeEventListener("touchmove", onFirstScroll);
    };
  }, []);

  return hasScrolled;
}

type RevealProps = {
  className?: string;
  children: React.ReactNode;
  y?: number; // 8–16
  x?: number; // 8–16
  direction?: "up" | "left" | "right";
  duration?: number; // 0.55–0.65 / headings 0.5–0.6
  delay?: number; // keep tiny
  amount?: number;
};

function Reveal({
  className,
  children,
  y = 12,
  x = 12,
  direction = "up",
  duration = 0.62,
  delay = 0,
  amount = 0.15,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const hasScrolled = useHasScrolled();

  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    amount,
    once: false, // reverse
    // weniger aggressiv als zuvor → stabileres InView
    margin: "0px 0px -5% 0px",
  });

  const safeY = Math.min(16, Math.max(8, y));
  const safeX = Math.min(16, Math.max(8, x));

  const hidden =
    direction === "left"
      ? { opacity: 0, x: safeX }
      : direction === "right"
      ? { opacity: 0, x: -safeX }
      : { opacity: 0, y: safeY };

  const show = { opacity: 1, x: 0, y: 0 };

  // ✅ Key fix:
  // - initial stays "hidden" for the reverse behavior
  // - BUT: until user scrolls, duration is 0 → no "load animation"
  // - inView controls visibility; on initial load, inView elements will snap to show (duration 0)
  const effectiveDuration =
    prefersReducedMotion || !hasScrolled ? 0 : duration;
  const effectiveDelay = prefersReducedMotion || !hasScrolled ? 0 : delay;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{ hidden, show }}
      transition={{
        duration: effectiveDuration,
        ease: EASE,
        delay: Math.max(0, effectiveDelay),
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

function AccentBar({
  className,
  duration = 0.88,
  delay = 0,
  amount = 0.25,
}: {
  className: string;
  duration?: number;
  delay?: number;
  amount?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const hasScrolled = useHasScrolled();

  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    amount,
    once: false,
    margin: "0px 0px -5% 0px",
  });

  const effectiveDuration =
    prefersReducedMotion || !hasScrolled ? 0 : duration;
  const effectiveDelay = prefersReducedMotion || !hasScrolled ? 0 : delay;

  return (
    <motion.div
      ref={ref}
      className={className}
      aria-hidden="true"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: inView ? 1 : 0 }}
      transition={{
        duration: effectiveDuration,
        ease: EASE,
        delay: Math.max(0, effectiveDelay),
      }}
      style={{ transformOrigin: "top", willChange: "transform" }}
    />
  );
}

export default function Services() {
  return (
    <main className="pb-20 pt-16">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 space-y-16">
        {/* Kopfbereich – Back-Button + Titel + Logo rechts */}
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,0.9fr)] items-start">
          {/* Link + Titel + Intro links */}
          <div className="space-y-6 max-w-3xl">
            <Reveal duration={0.55} y={12}>
              <div>
                <Link
                  href="/#hero"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-3.5 py-1.5 text-xs font-medium text-[var(--muted)] hover:bg-white/5 hover:text-white transition"
                >
                  <ArrowRight size={14} className="rotate-180" />
                  Zurück zur Startseite
                </Link>
              </div>
            </Reveal>

            <Reveal duration={0.58} y={12} delay={0.02}>
              <div className="space-y-3">
                <h1 className="section-title text-3xl sm:text-4xl text-white">
                  Leistungen
                </h1>

                <p className="section-lead text-[var(--muted)] text-sm sm:text-base">
                  Für Projektentwickler, Bauträger und Unternehmer mit
                  Finanzierungs- und Bankbezug.
                </p>
              </div>
            </Reveal>

            <Reveal duration={0.62} y={14} delay={0.03}>
              <div className="space-y-2 text-sm sm:text-[15px] text-[var(--muted)] max-w-7xl leading-relaxed">
                <p>
                  Finanzierungsentscheidungen scheitern selten am Vorhaben –
                  sondern an fehlendem Verständnis. Die Folge sind Nachreichungen,
                  Verzögerungen und hoher interner Aufwand. Das kostet Zeit,
                  bindet Ressourcen und belastet die Wirtschaftlichkeit.
                </p>
                <p>
                  Probleme werden erst nachgelagert sichtbar. Geringe Puffer,
                  steigende Zinsen und ungünstige Zahlungsströme führen zu teuren
                  Nachfinanzierungen.
                </p>
                <p>
                  Docalyze arbeitet vor der Bank – mit über 30 Jahren
                  Beratungserfahrung im Bankenumfeld. Sie erhalten eine Struktur,
                  die intern steuerbar und extern belastbar ist:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>nachvollziehbare Kalkulationen</li>
                  <li>lösungsorientierte Abläufe</li>
                  <li>sauberes Reporting</li>
                </ul>
                <p>
                  Wir stärken Ihre Finanzierungsfähigkeit und schaffen mehr
                  Liquidität, verlässliche Entscheidungsgrundlagen und effiziente
                  Abläufe. Docalyze ist eine Investition in Ihr Unternehmen.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Logo rechts – auf Höhe der Headline */}
          <Reveal direction="left" duration={0.62} x={12} delay={0.02}>
            <div className="flex justify-start lg:justify-end">
              <div className="relative w-[240px] h-[100px] mt-2">
                <Image
                  src="/seitlichLogoRechts.svg"
                  alt="Docalyze Logo"
                  fill
                  className="object-contain opacity-90"
                />
              </div>
            </div>
          </Reveal>
        </section>

        {/* RETAINER-MODELL */}
        <section id="retainer" className="space-y-6">
          <Reveal duration={0.62} y={14}>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/90 p-5 sm:p-6 lg:p-7 grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] items-start">
              {/* Textseite */}
              <div className="space-y-4">
                <Reveal duration={0.58} y={12}>
                  <div className="space-y-1.5">
                    <h2 className="text-base sm:text-lg font-semibold text-white">
                      Laufende Begleitung
                    </h2>

                    <p className="text-xs sm:text-sm text-[var(--muted)]">
                      Bevorzugtes Modell unserer Mandanten
                    </p>
                  </div>
                </Reveal>

                <Reveal duration={0.62} y={14} delay={0.02}>
                  <div className="space-y-2 text-sm sm:text-[15px] text-[var(--muted)] leading-relaxed">
                    <p>
                      Von der ersten Aufbereitung bis zum laufenden Reporting.
                      Bündelung von Analyse, Aufbereitung, Szenarien, Abstimmungen
                      und Reporting in einem Mandat. Umsetzung gemeinsamer Ziele und
                      Prioritäten (bspw. Finanzierung, Liquidität, Reportingtiefe
                      und Entscheidungsreife).
                    </p>

                    {/* Timeline */}
                    <div className="pt-2">
                      <div className="relative w-full">
                        <Reveal duration={0.88} y={10} delay={0.03} amount={0.2}>
                          <div
                            className="
                              absolute
                              top-[18px]
                              left-0
                              right-0
                              h-[6px]
                              bg-[var(--accent)]
                              rounded-full
                              opacity-100
                            "
                            aria-hidden="true"
                          />
                        </Reveal>

                        <Reveal duration={0.88} y={10} delay={0.04} amount={0.2}>
                          <div
                            className="absolute top-[18px] right-[-10px] pointer-events-none"
                            style={{ transform: "translateX(-2px)" }}
                            aria-hidden="true"
                          >
                            <div
                              className="h-0 w-0"
                              style={{
                                borderTop: "3px solid transparent",
                                borderBottom: "3px solid transparent",
                                borderLeft: "10px solid var(--accent)",
                              }}
                            />
                          </div>
                        </Reveal>

                        <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
                          {["Erste Analyse", "Gemeinsame Ziele", "Laufende Umsetzung"].map(
                            (label, idx) => (
                              <Reveal
                                key={label}
                                duration={0.62}
                                y={12}
                                delay={idx * 0.03}
                                amount={0.2}
                              >
                                <div className="flex items-start justify-center">
                                  <div
                                    className="
                                      relative z-10
                                      inline-flex items-center justify-center
                                      h-9 px-4
                                      rounded-xl
                                      bg-[var(--accent)]
                                      text-[var(--bg)]
                                      text-[13px]
                                      font-black
                                      tracking-tight
                                    "
                                  >
                                    {label}
                                  </div>
                                </div>
                              </Reveal>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal duration={0.62} y={12} delay={0.02}>
                  <div className="grid gap-1.5 text-xs sm:text-sm text-[var(--muted)]">
                    <div className="flex items-start gap-3">
                      <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      <p>klare Entscheidungsprozesse</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      <p>Risikofrüherkennung</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      <p>Zeit, Kosten und interne Ressourcen sparen</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Honorar + Abschlussstrecke */}
              <Reveal direction="left" duration={0.62} x={12}>
                <div className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 p-4 sm:p-5 lg:self-center">
                  <div className="space-y-1.5">
                    <p className="text-[11px] uppercase tracking-wide text-[var(--muted)]">
                      Honorar
                    </p>
                    <p className="text-sm sm:text-[15px] font-semibold text-white">
                      ab 3.000 € / Monat
                    </p>
                    <p className="text-xs sm:text-sm text-[var(--muted)]">
                      Monatlich kündbar, Laufzeit projektbezogen.
                    </p>
                  </div>

                  <div className="pt-1">
                    <Link
                      href="/anfrage?modell=retainer"
                      className="inline-flex w-full items-center justify-center rounded-full px-5 py-2 text-sm font-semibold border border-[var(--accentBorder)] text-white hover:bg-[#153c54] hover:border-white/25 transition"
                    >
                      Begleitung unverbindlich anfragen
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </section>

        {/* PROJEKTENTWICKLER & BAUTRÄGER */}
        <section id="projektentwickler" className="space-y-8">
          <Reveal duration={0.58} y={12}>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/8 border border-white/15">
                <Building2 size={18} className="text-[var(--accent)]" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-white">
                  Leistungen für Projektentwickler &amp; Bauträger
                </h2>
                <p className="text-sm sm:text-[15px] text-[var(--muted)] max-w-3xl mt-1">
                  Viele Projekte sind tragfähig – aber nicht entscheidungsreif
                  strukturiert.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] items-stretch max-w-7xl">
            <Reveal duration={0.62} y={14}>
              <div className="relative pl-5 border-l border-white/16 space-y-4">
                <AccentBar className="absolute -left-[1px] top-0 h-8 w-[2px] bg-[var(--accent)] rounded-full" />

                <div className="space-y-2">
                  <p className="text-[11px] uppercase tracking-wide text-[var(--muted)]">
                    Herausforderungen
                  </p>
                  <ul className="space-y-1.5 text-sm sm:text-[15px] text-[var(--muted)]">
                    <li>
                      Steigende Zinsen, hohe Baukosten und strengere
                      Bankanforderungen verschärfen den Druck.
                    </li>
                  </ul>
                </div>

                <div className="space-y-2 pt-1">
                  <p className="text-[11px] uppercase tracking-wide text-[var(--muted)]">
                    Konsequenz
                  </p>
                  <p className="text-sm sm:text-[15px] text-[var(--muted)]">
                    Entscheidungen werden aufgeschoben – mit realen Kostenfolgen
                    und Nachfinanzierungsbedarf.
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  <p className="text-[11px] uppercase tracking-wide text-[var(--muted)]">
                    Unser Ansatz
                  </p>
                  <p className="text-sm sm:text-[15px] text-[var(--muted)]">
                    Docalyze arbeitet vor der Bank. Wir strukturieren Projekte,
                    wie sie kreditseitig gelesen und entschieden werden – mit
                    klarer Logik zu Kosten, Zeit, Liquidität und Risiko.
                  </p>
                </div>

                <div className="grid gap-1.5 text-xs sm:text-sm text-[var(--muted)] pt-2">
                  <div className="flex items-start gap-2">
                    <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <p>höhere Planungssicherheit</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <p>Risikofrüherkennung</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <p>verbesserte Finanzierungsfähigkeit</p>
                  </div>
                </div>
              </div>
            </Reveal>

           {/* Bild rechts */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 min-h-[260px] lg:min-h-0">
            <Reveal direction="left" duration={0.62} x={12} className="h-full w-full">
              <div className="relative h-full w-full min-h-[260px] lg:min-h-0">
                <Image
                  src="/pe-bt.jpg"
                  alt="Projektentwicklung – Struktur und Komplexität"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 420px, 100vw"
                />
              </div>
            </Reveal>
          </div>

          </div>

          <Reveal duration={0.62} y={14}>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/85 overflow-hidden">
              <div className="border-b border-white/8 px-4 sm:px-5 py-3 flex items-center">
                <LineChart size={18} className="text-[var(--accent)] mr-2" />
                <span className="text-xs sm:text-sm font-semibold text-white">
                  Leistungen (Einzel- oder Mehrfachauswahl)
                </span>
              </div>

              <div className="divide-y divide-white/6">
                {peRows.map((row, idx) => (
                  <Reveal
                    key={row.anchorId}
                    duration={0.62}
                    y={12}
                    delay={Math.min(idx * 0.03, 0.12)}
                    amount={0.12}
                  >
                    <div
                      id={row.anchorId}
                      className="px-4 sm:px-5 py-4 flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-6 hover:bg-white/[0.03] transition"
                    >
                      <div className="flex-1 min-w-0 sm:pr-4">
                        <p className="text-sm sm:text-[15px] font-semibold text-white">
                          {row.title}
                        </p>
                        <p className="text-xs sm:text-sm text-[var(--muted)] mt-1">
                          {row.description}
                        </p>
                      </div>

                      <div className="sm:text-right flex flex-col justify-between pt-1 sm:pt-0 min-w-[125px]">
                        {row.honorar && (
                          <div className="mb-2">
                            <p className="text-[10px] uppercase tracking-wide text-[var(--muted)]">
                              Honorarrahmen
                            </p>
                            <p className="text-xs sm:text-sm font-semibold text-white">
                              {row.honorar}
                            </p>
                          </div>
                        )}
                        <Link
                          href={`/anfrage?leistung=${encodeURIComponent(
                            row.anchorId
                          )}&zielgruppe=entwicklung`}
                          className="inline-flex items-center justify-center rounded-full px-2.5 py-1.5 text-[11px] sm:text-xs font-semibold border border-[var(--accentBorder)] text-white hover:bg-[#153c54] hover:border-white/25 transition"
                        >
                          Auswählen
                          <ArrowRight size={14} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* UNTERNEHMER & KMU */}
        <section id="unternehmen" className="space-y-8">
          <Reveal duration={0.58} y={12}>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/8 border border-white/15">
                <Briefcase size={18} className="text-[var(--accent)]" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-white">
                  Leistungen für Unternehmer &amp; KMU
                </h2>
                <p className="text-sm sm:text-[15px] text-[var(--muted)] max-w-xl mt-1">
                  Wir arbeiten mit Ihnen an Ihrem Unternehmen.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] items-stretch max-w-7xl">
            <Reveal duration={0.62} y={14}>
              <div className="relative pl-5 border-l border-white/16 space-y-4">
                <AccentBar className="absolute -left-[1px] top-0 h-8 w-[2px] bg-[var(--accent)] rounded-full" />

                <div className="space-y-2">
                  <p className="text-[11px] uppercase tracking-wide text-[var(--muted)]">
                    Typische Herausforderungen
                  </p>
                  <ul className="space-y-1.5 text-sm sm:text-[15px] text-[var(--muted)]">
                    <li>
                      Viele Unternehmen sind wirtschaftlich gesund – aber nicht
                      entscheidungsfähig aufbereitet. Zahlen kommen zu spät,
                      Unterlagen entstehen unter Druck, Risiken werden erst
                      erkannt, wenn es teuer wird.
                    </li>
                  </ul>
                </div>

                <div className="space-y-2 pt-1">
                  <p className="text-[11px] uppercase tracking-wide text-[var(--muted)]">
                    Konsequenz
                  </p>
                  <p className="text-sm sm:text-[15px] text-[var(--muted)]">
                    Intransparente und zeitintensive Kreditprozesse. Bankseitig
                    isolierte Betrachtung der Zahlen ohne wirtschaftliche
                    Zusammenhänge. Höherer Aufwand – mit direkten Auswirkungen auf
                    Liquidität, Konditionen und Handlungsspielraum.
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  <p className="text-[11px] uppercase tracking-wide text-[var(--muted)]">
                    Unser Ansatz
                  </p>
                  <p className="text-sm sm:text-[15px] text-[var(--muted)]">
                    Docalyze schafft Struktur vor dem Bankprozess. Wir übersetzen
                    Zahlen in eine klare Logik, die Entscheidungen ermöglicht –
                    intern wie extern.
                  </p>
                </div>
              </div>
            </Reveal>

           {/* Bild rechts */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 min-h-[260px] lg:min-h-0">
                <Reveal direction="left" duration={0.62} x={12} className="h-full w-full">
                  <div className="relative h-full w-full min-h-[260px] lg:min-h-0">
                    <Image
                      src="/kmu.jpg"
                      alt="Unternehmen – Klarheit und Struktur"
                      fill
                      className="object-cover object-[45%_75%]"
                      sizes="(min-width: 1024px) 420px, 100vw"
                    />
                  </div>
                </Reveal>
              </div>
          </div>

          <Reveal duration={0.62} y={14}>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/85 overflow-hidden">
              <div className="border-b border-white/8 px-4 sm:px-5 py-3 flex items-center">
                <FileSpreadsheet size={18} className="text-[var(--accent)] mr-2" />
                <span className="text-xs sm:text-sm font-semibold text-white">
                  Leistungen (Einzel- oder Mehrfachauswahl)
                </span>
              </div>

              <div className="divide-y divide-white/6">
                {kmuRows.map((row, idx) => (
                  <Reveal
                    key={row.anchorId}
                    duration={0.62}
                    y={12}
                    delay={Math.min(idx * 0.03, 0.15)}
                    amount={0.12}
                  >
                    <div
                      id={row.anchorId}
                      className="px-4 sm:px-5 py-4 flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-6 hover:bg-white/[0.03] transition"
                    >
                      <div className="flex-1 min-w-0 sm:pr-4">
                        <p className="text-sm sm:text-[15px] font-semibold text-white">
                          {row.title}
                        </p>
                        <p className="text-xs sm:text-sm text-[var(--muted)] mt-1">
                          {row.description}
                        </p>
                      </div>

                      <div className="sm:text-right flex flex-col justify-between pt-1 sm:pt-0 min-w-[125px]">
                        {row.honorar && (
                          <div className="mb-2">
                            <p className="text-[10px] uppercase tracking-wide text-[var(--muted)]">
                              Honorarrahmen
                            </p>
                            <p className="text-xs sm:text-sm font-semibold text-white">
                              {row.honorar}
                            </p>
                          </div>
                        )}
                        <Link
                          href={`/anfrage?leistung=${encodeURIComponent(
                            row.anchorId
                          )}&zielgruppe=unternehmen`}
                          className="inline-flex items-center justify-center rounded-full px-2.5 py-1.5 text-[11px] sm:text-xs font-semibold border border-[var(--accentBorder)] text-white hover:bg-[#153c54] hover:border-white/25 transition"
                        >
                          Auswählen
                          <ArrowRight size={14} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal duration={0.62} y={12} amount={0.12}>
            <div className="max-w-4xl text-sm sm:text-[15px] text-[var(--muted)] pt-4 border-t border-white/8 leading-relaxed">
              <p>
                Die Module sind einzeln beauftragbar. Der größte Mehrwert entsteht
                durch die kombinierte und dauerhafte Nutzung. Alle Preise sind
                netto angegeben und stellen Untergrenzen dar. Das Honorar wird
                projektabhängig transparent festgelegt. Diskretion ist
                selbstverständlich. Docalyze übernimmt ausschließlich klar
                strukturierte und realistisch umsetzbare Mandate.
              </p>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
