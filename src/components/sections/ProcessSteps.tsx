"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type Step = {
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    title: "Erstgespräch",
    description: "Vertraulich auf Augenhöhe. Ziel: Kennenlernen und Erwartungen",
  },
  {
    title: "Mandatierung",
    description: "Schriftliche Beauftragung. Klare Rollen, Aufgaben und Rahmen.",
  },
  {
    title: "Analyse",
    description: "IST-Situation. Engpässe und Potenziale erkennen.",
  },
  {
    title: "Strukturierung",
    description: "Realistisches Konzept. Unterlagen für Banken, StB und Partner.",
  },
  {
    title: "Begleitung",
    description: "Unterstützung bei der Umsetzung. Langfristige Qualitätssicherung.",
  },
];

export default function ProcessSteps() {
  const reduce = useReducedMotion();

  const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const tFast = reduce ? { duration: 0 } : { duration: 0.55, ease: easePremium };
  const tLine = reduce ? { duration: 0 } : { duration: 0.9, ease: easePremium };
  const tStep = reduce ? { duration: 0 } : { duration: 0.6, ease: easePremium };

  return (
    <section id="ablauf" className="space-y-10 scroll-mt-24">
      {/* Kopfblock */}
      <div className="space-y-2">
        <motion.h2
          className="section-title text-2xl sm:text-3xl font-semibold text-white"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={tFast}
        >
          Ablauf der Zusammenarbeit
        </motion.h2>

        <motion.p
          className="section-lead text-sm sm:text-base text-[var(--muted)] max-w-3xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={reduce ? { duration: 0 } : { duration: 0.55, delay: 0.06, ease: easePremium }}
        >
          Strukturiert. Verbindlich. Ergebnisorientiert.
        </motion.p>
      </div>

      {/* Zentrierter Block (Timeline + Cards) */}
      <div className="mx-auto max-w-5xl translate-x-5">
        <div className="relative">
          {/* Timeline-Linie: lädt von oben nach unten (Reverse beim Hochscrollen) */}
          <motion.div
            className="
              absolute
              left-[18px]
              top-[18px]
              bottom-[18px]
              w-[6px]
              -translate-x-1/2
              bg-[var(--accent)]
              rounded-full
              origin-top
            "
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={tLine}
          />

          <div className="space-y-6">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.22 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { ...tStep, delay: 0.04 + idx * 0.08 }
                }
              >
                <div className="relative flex gap-6 items-stretch">
                  {/* Punkt mit Nummer */}
                  <div className="relative z-10 flex w-9 items-center justify-center">
                    <div
                      className="
                        flex h-9 w-9 items-center justify-center
                        rounded-full
                        bg-[var(--accent)]
                        text-[var(--bg)]
                        text-[20px]
                        font-black
                        tracking-tight
                      "
                    >
                      {idx + 1}
                    </div>
                  </div>

                  {/* Kachel */}
                  <div className="w-full sm:w-[520px]">
                    <div className="rounded-2xl bg-[var(--surface)] px-6 py-5 border border-[var(--border)] hover:border-[var(--borderStrong)] transition">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold tracking-tight text-white">
                          {step.title}
                        </h3>
                        <p className="text-sm text-[var(--muted)] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className="flex flex-wrap items-center gap-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={reduce ? { duration: 0 } : { duration: 0.55, delay: 0.04, ease: easePremium }}
      >
        <Link
          href="#kontakt-teaser"
          className="inline-flex items-center justify-center rounded-full px-7 py-3 text-[14.5px] font-semibold bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent2)] transition"
          aria-label="Analyse anfragen"
        >
          Analyse anfragen
        </Link>
      </motion.div>
    </section>
  );
}
