export default function Datenschutz() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-3xl font-semibold mb-6">Datenschutzerklärung</h1>
      <p className="mb-4">
        Diese Website erhebt und verarbeitet keine personenbezogenen Daten außer der IP-Adresse
        durch den Hostinganbieter (Vercel) zur technischen Auslieferung der Website.
      </p>
      <p className="mb-4">
        Beim Versand einer E-Mail an hello@docalyze.de werden deine Kontaktdaten zur
        Bearbeitung gespeichert. Es erfolgt keine Weitergabe an Dritte.
      </p>
      <p className="mb-4">
        Verantwortlich für den Datenschutz: Lukas Scholl – hello@docalyze.de
      </p>
      <p className="text-sm text-gray-500">
        Stand: {new Date().toLocaleDateString("de-DE")}
      </p>
    </main>
  );
}

