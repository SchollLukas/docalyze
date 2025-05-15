export default function Hero() {
  return (
    <section className="w-full bg-gray-50 py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Struktur schafft Vertrauen.
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Docalyze unterstützt Unternehmen bei der Bilanzanalyse und der
          strukturierten Aufbereitung kaufmännischer Unterlagen – verständlich,
          effektiv und bankentauglich.
        </p>
        <a
          href="#kontakt"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-blue-700 transition"
        >
          Jetzt Kontakt aufnehmen
        </a>
      </div>
    </section>
  )
}

