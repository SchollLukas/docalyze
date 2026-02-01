// src/app/anfrage/danke/page.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AnfrageDankePage() {
  return (
    <main className="min-h-[60vh] flex items-center">
      <div className="mx-auto w-full max-w-3xl px-6 sm:px-8 lg:px-10">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 px-6 py-8 sm:px-8 sm:py-10 shadow-lg shadow-black/20">
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Anfrage erfolgreich übermittelt
            </p>

            <h1 className="text-2xl sm:text-3xl font-semibold text-white">
              Vielen Dank für das in uns gesetzte Vertrauen.
            </h1>

            <p className="text-sm sm:text-base text-[var(--muted)] max-w-2xl">
              Ihre Anfrage ist in unserem Postfach <span className="text-white">hello@docalyze-solutions.de</span>  eingegangen. Wir prüfen Ihre Anfrage und melden uns unverzüglich, um
              die weitere Vorgehensweise abzustimmen.
            </p>

            <p className="text-xs sm:text-sm text-[var(--muted)]">
              Falls zeitkritische Fristen oder bankseitige Vorgaben bestehen, können Sie diese gerne
              in der Antwort auf unsere Bestätigungsmail ergänzen.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-[var(--accentBorder)] text-white hover:bg-[#153c54] hover:border-white/25 transition"
            >
              Zurück zu den Leistungen
              <ArrowRight size={16} className="ml-1" />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-[var(--muted)] hover:text-white hover:bg-white/5 transition"
            >
              Zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
