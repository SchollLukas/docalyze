import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Impressum</h1>
          <p className="text-sm text-[var(--muted)]">Anbieterkennzeichnung gemäß § 5 DDG.</p>
        </header>

        <section className="space-y-6">
          <div className="space-y-2">
            <p className="font-semibold">Docalyze Solutions</p>
            <p className="text-[var(--muted)]">
              Inhaber: Lukas Scholl <br />
              Kernerweg 1 <br />
              74239 Hardthausen am Kocher <br />
              Deutschland
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold">Kontakt</p>
            <p className="text-[var(--muted)]">
              Telefon: +49 162 9087741 <br />
              E-Mail: hello@docalyze-solutions.de
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold">Rechtsform</p>
            <p className="text-[var(--muted)]">Einzelunternehmen</p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold">Umsatzsteuer</p>
            <p className="text-[var(--muted)]">
              Gemäß § 19 UStG wird keine Umsatzsteuer erhoben und ausgewiesen (Kleinunternehmerregelung).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold">Verantwortlich i. S. d. § 18 Abs. 2 MStV</p>
            <p className="text-[var(--muted)]">Lukas Scholl, Anschrift wie oben</p>
          </div>
        </section>

        <div className="flex gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-[var(--accentBorder)] bg-transparent px-5 py-2.5 text-sm font-medium text-white hover:bg-white/5 transition"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}
