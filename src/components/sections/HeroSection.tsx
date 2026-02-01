import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="space-y-10 pt-8">
      {/* Kopfblock */}
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)] font-semibold">
          Docalyze Solutions
        </p>

        <h1 className="section-title text-3xl sm:text-4xl md:text-5xl leading-tight text-white">
          Klarheit in Zahlen. Sicherheit in Entscheidungen.{" "}
          <span className="text-[var(--accent)]">Erfolg in der Finanzierung.</span>
        </h1>

        <p className="section-lead text-sm sm:text-base text-[var(--muted)] max-w-3xl">
          Docalyze ermöglicht Projektentwicklern, Bauträgern und Unternehmern
          bankfähige Kalkulationen, präzise Analysen und geprüfte Strukturen – für
          schnellere Finanzierungsentscheidungen, transparente Kostenkontrolle und
          nachhaltig erfolgreiche Projekte.
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-wrap gap-4">
        <Link
          href="#kontakt-teaser"
          className="inline-flex items-center justify-center rounded-full px-7 py-3 text-[14.5px] font-semibold bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent2)] transition"
        >
          Analyse anfragen
        </Link>
        <Link href="#kontakt-teaser" className="btn-base btn-accent-outline">
          Kontakt aufnehmen
        </Link>
      </div>
    </section>
  );
}
