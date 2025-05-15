export default function Contact() {
  return (
    <section id="kontakt" className="w-full bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Kontakt</h2>
        <p className="text-gray-700 mb-8">
          Du hast Interesse oder Fragen? Schreib mir eine Nachricht – ich melde mich zeitnah zurück.
        </p>
        <form
          action="mailto:deine@email.de"
          method="POST"
          encType="text/plain"
          className="space-y-4 text-left"
        >
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
            name="nachricht"
            placeholder="Deine Nachricht"
            rows={5}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Nachricht senden
          </button>
        </form>
      </div>
    </section>
  )
}

