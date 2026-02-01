"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const FRAGMENTS = [
  {
    title: "Kennzahlenblatt",
    desc: "Kennzahlen entscheiden. Struktur auf Zustimmungskriterien und Kapitaldienstfolge ausgerichtet.",
    bullets: ["geringe Komplexität", "entscheidungsrelevant", "kapitaldienstorientiert"],
    src: "/fragment-01.png",
    alt: "Fragment 01 – Kennzahlenblatt (bankfähig), anonymisierter Arbeitsstand",
  },
  {
    title: "Liquiditätsmonitoring",
    desc: "Liquidität definiert Zeitpunkt und Tragfähigkeit. Relevante Engpässe entstehen vor GuV und Ergebnis.",
    bullets: ["Frühzeitige Steuerung", "Konsequenz vor GuV", "Engpässe früh sichtbar"],
    src: "/fragment-02.png",
    alt: "Fragment 02 – Liquiditätsverlauf und Engpasslogik, anonymisierter Arbeitsstand",
  },
  {
    title: "Sensitivitätsbetrachtung",
    desc: "Sensitivitäten prüfen Robustheit. Nicht das Ergebnis zählt, sondern die Kapitaldienstfolge.",
    bullets: ["Annahmen variieren", "Kapitaldienst im Fokus", "Konsequenzen -> Ergebnis"],
    src: "/fragment-03.png",
    alt: "Fragment 03 – Sensitivitätsanalyse, anonymisierter Arbeitsstand",
  },
  {
    title: "Struktur der Unterlagen",
    desc: "Struktur erzeugt Nachvollziehbarkeit. Unterlagen müssen ohne Zusatzinformation funktionieren.",
    bullets: ["prüffähig", "nachvollziehbar", "entscheidungsorientiert"],
    src: "/fragment-04.png",
    alt: "Fragment 04 – Unterlagenstruktur, anonymisierter Arbeitsstand",
  },
];

export default function ProofOfWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const current = FRAGMENTS[activeIndex];

  const canPrev = activeIndex > 0;
  const canNext = activeIndex < FRAGMENTS.length - 1;

  const handlePrev = () => {
    if (!canPrev) return;
    setDirection("prev");
    setActiveIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!canNext) return;
    setDirection("next");
    setActiveIndex((prev) => prev + 1);
  };

  return (
    <section
      id="arbeitsnachweise"
      className="relative space-y-12 sm:space-y-16"
    >
      {/* Pfeile am Bildschirmrand, vertikal mittig */}
      {canPrev && (
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Vorheriges Fragment"
          className="absolute left-[-20px] md:left-[-32px] lg:left-[-48px] xl:left-[-64px] top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--borderStrong)] bg-black/40 backdrop-blur-sm text-white text-xl hover:bg-black/70 hover:scale-105 transition"
        >
          <span className="mt-[1px] select-none">←</span>
        </button>
      )}

      {canNext && (
        <button
          type="button"
          onClick={handleNext}
          aria-label="Nächstes Fragment"
          className="absolute right-[-20px] md:right-[-32px] lg:right-[-48px] xl:right-[-64px] top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--borderStrong)] bg-black/40 backdrop-blur-sm text-white text-xl hover:bg-black/70 hover:scale-105 transition"
        >
          <span className="mt-[1px] select-none">→</span>
        </button>
      )}

      {/* Kopfblock */}
      <div className="space-y-4">
        <h2 className="section-title text-2xl sm:text-3xl font-semibold text-white">
          Tiefe unserer Arbeit.
        </h2>

        <p className="section-lead text-sm sm:text-base text-[var(--muted)] max-w-3xl">
          Unsere Arbeit findet auf Entscheiderebene statt. Gezeigt werden Fragmente der Docalyze-Struktur, die projektspezifisch angewendet und angepasst werden.
        </p>
      </div>

      {/* Inhalt */}
      <div className="mx-auto max-w-5xl">
        {/* Aktives Fragment */}
        <div key={activeIndex} className="relative">
          <div className="grid gap-6 sm:gap-7 sm:grid-cols-12 items-start">
            
            {/* Links: Titel + Text */}
            <div
              className="sm:col-span-4 space-y-3"
              style={{ animation: "slideInLeft 0.6s ease-out" }}
            >
              <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-white">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                {current.desc}
              </p>

              {current.bullets && (
                <ul className="mt-2 space-y-1 text-xs sm:text-sm text-[var(--muted2)]">
                  {current.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-1.5">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--borderStrong)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Rechts: Dokumentfragment */}
            <div
              className="sm:col-span-8 space-y-2 sm:translate-x-12"
              style={{
                animation:
                  direction === "next"
                    ? "swapInFromRight 0.9s ease-out"
                    : "swapInFromLeft 0.9s ease-out",
              }}
            >
              <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[#f9fafb]">
                <div className="relative h-[340px] w-full">
                  <Image
                    src={current.src}
                    alt={current.alt}
                    width={1600}
                    height={900}
                    className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.01]"
                    sizes="(min-width: 1024px) 640px, 100vw"
                  />
                </div>

                <div className="flex items-center justify-between border-t border-[var(--border)]/60 px-4 py-2.5 sm:px-5 sm:py-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted2)]">
                    Strukturfragment
                  </span>
                  <span className="text-xs text-[var(--muted2)]">
                    kein Download · kein Demo
                  </span>
                </div>
              </div>

              {/* Nummerierung unterhalb */}
              <div className="flex justify-end mt-2">
                <span className="text-xs text-[var(--muted2)] bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
                  {activeIndex + 1} / {FRAGMENTS.length}
                </span>
              </div>

              <span className="block text-xs text-[var(--muted2)]">
                Beispielauszug der Docalyze-Struktur.
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-base sm:text-lg font-semibold text-white">
            Bringen wir Ihr Projekt in eine zustimmungsfähige Struktur.
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Die Struktur richtet sich nach Ihrem Anliegen.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="#kontakt-teaser"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-[14.5px] font-semibold bg-[var(--accent)] text-white hover:opacity-90 transition"
            >
              Gespräch anfragen
            </Link>

            <Link
              href="#kontakt-teaser"
              className="btn-base btn-accent-outline"
            >
              Unterlagenaufbereitung erhalten
            </Link>
          </div>
        </div>
      </div>

      {/* Animationen */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes swapInFromRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes swapInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
