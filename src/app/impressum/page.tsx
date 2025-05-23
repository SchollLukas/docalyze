import Link from "next/link";
    
export default function Impressum() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Impressum</h1>
    
        <p className="mb-2 font-semibold">Docalyze</p>
        <p>
          Lukas Scholl<br />
          Kernerweg 1<br />
          74239 Hardthausen am Kocher<br />
          Deutschland
        </p>
    
        <p className="mt-4">Telefon: +49 162 9087741<br />
          E-Mail: hello@docalyze.de</p>

    
        <p className="mt-4">
          Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV:<br />
          Lukas Scholl
        </p>
    
        <p className="mt-8 text-sm text-gray-500">
          Angaben gemäß § 5 TMG. Inhalte und Layout dieser Website sind urheberrechtlich geschützt.
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






