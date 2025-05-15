export default function Services() {
  return (
    <section id="leistungen" className="w-full bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-12">
          Unsere Leistungen
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Bilanzanalyse mit Optimierungsimpulsen
            </h3>
            <p className="text-gray-700">
              Wir analysieren deine Jahresabschlüsse aus Sicht der Bank und
              geben gezielte Hinweise zur Verbesserung von Bonität und
              Kapitalstruktur – verständlich und pragmatisch.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Buchhalterische Unterstützung
            </h3>
            <p className="text-gray-700">
              Wir helfen bei der strukturierten Vorbereitung deiner
              Buchhaltungsunterlagen – für mehr Ordnung, Zeitersparnis und eine
              bessere Grundlage für deine Steuerberatung.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

