"use client";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Kontakt</h1>
        <p className="mb-6">
          Du hast Fragen oder möchtest mit mir zusammenarbeiten? Fülle einfach das
          folgende Formular aus. Ich melde mich schnellstmöglich bei dir zurück.
        </p>

        {submitted ? (
          <div className="bg-green-100 border border-green-400 text-green-800 p-4 rounded">
            Vielen Dank! Deine Nachricht wurde erfolgreich versendet.
          </div>
        ) : (
          <form
            action="https://formspree.io/f/mwpodldw"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="space-y-4"
          >
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="message">
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full border px-4 py-2 rounded"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Absenden
            </button>
          </form>
        )}

        <div className="mt-10">
          <Link
            href="/"
            className="inline-block text-blue-600 hover:underline"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}

