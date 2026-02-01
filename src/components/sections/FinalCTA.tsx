import Link from "next/link";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section
      id="kontakt-teaser"
      className="rounded-2xl bg-[var(--surface2)] p-6 border border-[var(--accentBorder)]"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-10">
        
        {/* Linke Seite: Text + CTA */}
        <div className="space-y-10 md:max-w-[68%]">
          {/* Kopfblock */}
          <div className="space-y-2">
            <h2 className="section-title text-2xl sm:text-3xl font-semibold text-white">
              Der nächste sinnvolle Schritt.
            </h2>
            <p className="section-lead text-sm sm:text-base text-[var(--muted)] max-w-3xl">
              In einem ersten Gespräch klären wir, ob und wie eine Zusammenarbeit sinnvoll ist. 
              Das Erstgespräch ist unverbindlich und mit klarem Blick aufs Wesentliche.
              Eine sachliche Einordnung auf Grundlage Ihrer Unterlagen, Fragestellungen und Herausforderungen.
            </p>
          </div>

          {/* CTA-Block */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-[14.5px] font-semibold bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent2)] transition"
            >
              Analyse anfragen
            </Link>

            <Link
            href="mailto:hello@docalyze-solutions.de"
            className="btn-base btn-accent-outline"
          >
            Kontakt per E-Mail
            </Link>
          </div>
        </div>

        {/* Rechte Seite: Logo – bewusst zentriert */}
        <div className="flex w-full md:w-[320px] justify-center md:pl-20">
          <Image
            src="/logo helleschrift.png"
            alt="Docalyze Solutions Logo"
            width={220}
            height={220}
            className="block"
          />
        </div>

      </div>
    </section>
  );
}
