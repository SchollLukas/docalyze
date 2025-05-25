import Link from "next/link";

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

        <p className="mb-4">
          Diese Website erhebt und verarbeitet keine personenbezogenen Daten
          außer der IP-Adresse, die beim Aufruf technisch durch den Hosting-Anbieter (Vercel)
          verarbeitet wird.
        </p>

        <p className="mb-4">
          Wenn du mir per E-Mail an hello@docalyze-solutions.de schreibst, speichere ich
          deine Angaben nur zum Zweck der Bearbeitung deiner Anfrage. Eine Weitergabe
          an Dritte erfolgt nicht.
        </p>

        <p className="mb-4">
          Ich verwende keine Cookies, keine Tracker und keine Analysetools. Diese Website
          dient lediglich zur Information über meine Dienstleistungen.
        </p>

        <p className="mb-4">
          Verantwortlich für den Datenschutz: Lukas Scholl – hello@docalyze-solutions.de
        </p>

        <p className="text-sm text-gray-500">
          Stand: {new Date().toLocaleDateString("de-DE")}
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}

