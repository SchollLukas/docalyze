"use client";
import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mwpodldw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        setError(false);
        form.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  }

  return (
    <section id="kontakt" className="w-full bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Kontakt</h2>
        <p className="text-gray-700 mb-8">
          Du hast Interesse oder Fragen? Schreib mir eine Nachricht – ich melde mich zeitnah zurück.
        </p>

        {submitted ? (
          <div className="bg-green-100 border border-green-400 text-green-800 p-4 rounded">
            Vielen Dank! Deine Nachricht wurde erfolgreich versendet.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <input
              type="text"
              name="name"
              placeholder="Dein Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Deine E-Mail"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <textarea
              name="message"
              placeholder="Deine Nachricht"
              rows={5}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            ></textarea>
            <button
              type="submit"
              className="block mx-auto bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Nachricht senden
            </button>
            {error && (
              <p className="text-red-600 mt-2 text-center">
                Leider ist ein Fehler aufgetreten. Bitte versuche es erneut.
              </p>
            )}
          </form>
        )}

        <p className="mt-8 text-gray-700 text-center">
          📞 Alternativ kannst du mich direkt unter{" "}
          <a href="tel:+491629087741" className="text-blue-600">
            +49 162 9087741
          </a>{" "}
          erreichen – sollte ich nicht direkt abnehmen, werde ich schnellstmöglich zurückrufen.
        </p>
      </div>
    </section>
  );
}

