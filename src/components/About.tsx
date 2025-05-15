export default function About() {
  return (
    <section id="ueber" className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Bild */}
        <div className="flex justify-center">
          <img
            src="/lukas-scholl.jpg"
            alt="Lukas Scholl"
            className="rounded-full shadow-lg w-72 h-auto object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Über mich</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Mein Name ist Lukas Scholl. Als ehemaliger Bankberater und heutiger
            Junior Auditor kenne ich die Anforderungen, die Banken, Investoren
            und Steuerberater an die Aufbereitung von Zahlen und Unterlagen
            stellen. Mit Docalyze helfe ich kleinen und mittleren Unternehmen und Selbstständigen,
            ihre Finanzstruktur transparent, verständlich und professionell
            darzustellen.
          </p>
        </div>
      </div>
    </section>
  )
}

