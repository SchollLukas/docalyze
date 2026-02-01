import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Datenschutzerklärung</h1>
          <p className="text-sm text-[var(--muted)]">Stand: 01.02.2026</p>
        </header>

        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">1. Verantwortlicher</h2>
            <p className="text-[var(--muted)]">
              Lukas Scholl (Docalyze Solutions) <br />
              Kernerweg 1, 74239 Hardthausen am Kocher, Deutschland <br />
              E-Mail: hello@docalyze-solutions.de
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">2. Hosting (Vercel)</h2>
            <p className="text-[var(--muted)]">
              Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der Website werden technisch
              erforderliche Daten (z. B. IP-Adresse, Zeitstempel, Browser-/Systeminformationen, Referrer)
              in Server-Logfiles verarbeitet, um einen sicheren und stabilen Betrieb zu gewährleisten.
            </p>
            <p className="text-[var(--muted)]">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">3. Kontaktformular (Formspree)</h2>
            <p className="text-[var(--muted)]">
              Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben (z. B. Name, E-Mail, Nachricht,
              ggf. Leistungswahl) zur Bearbeitung Ihrer Anfrage verarbeitet und an Formspree übermittelt.
            </p>
            <p className="text-[var(--muted)]">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen). Speicherdauer:
              bis Abschluss der Bearbeitung; darüber hinaus nur im Rahmen gesetzlicher Pflichten.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">4. Kontaktaufnahme per E-Mail</h2>
            <p className="text-[var(--muted)]">
              Bei Kontaktaufnahme per E-Mail werden die übermittelten Daten ausschließlich zur Bearbeitung
              Ihrer Anfrage verarbeitet.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">5. Cookies / Tracking</h2>
            <p className="text-[var(--muted)]">
              Diese Website verwendet keine Analyse- oder Tracking-Tools und setzt keine Cookies zu
              Marketing- oder Analysezwecken ein.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">6. SSL-/TLS-Verschlüsselung</h2>
            <p className="text-[var(--muted)]">
              Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung („https“).
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">7. Ihre Rechte</h2>
            <p className="text-[var(--muted)]">
              Sie haben die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
              Datenübertragbarkeit sowie Widerspruch (Art. 15–21 DSGVO).
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">8. Beschwerderecht</h2>
            <p className="text-[var(--muted)]">
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, z. B. beim
              Landesbeauftragten für den Datenschutz und die Informationsfreiheit Baden-Württemberg.
            </p>
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
