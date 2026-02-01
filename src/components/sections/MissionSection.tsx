export default function MissionSection() {
  return (
    <section id="mission" className="space-y-8">
      {/* Kopfblock */}
      <div className="space-y-4">
        <h2 className="section-title text-2xl sm:text-3xl font-semibold text-white">
          Wenn Entscheidungen vorbereitet werden müssen.
        </h2>
        <p className="section-lead text-sm sm:text-base text-[var(--muted)] max-w-5xl">
          Docalyze ist kein klassisches Beratungsmodell und kein kurzfristiger Problemlöser.
          Unsere Arbeit beginnt dort, wo finanzielle Entscheidungen tragfähig vorbereitet werden müssen.
        </p>

        <p className="section-lead text-sm sm:text-base text-[var(--muted)] max-w-5xl">
          Wir übersetzen Bankenpraxis und Prüfungslogik für Ihr Unternehmen und schaffen nachhaltige Strukturen für reproduzierbare Entscheidungsgrundlagen.
        </p>

        <p className="section-lead text-sm sm:text-base text-[var(--muted)] max-w-5xl">
         Sinnvoll ist eine Zusammenarbeit immer dann,
         wenn Unterlagen nicht nur erstellt, sondern verstanden werden müssen,
         wenn Strukturen dauerhaft funktionieren sollen
         und wenn Entscheidungen nicht auf Annahmen, sondern auf belastbaren Grundlagen beruhen müssen.
        </p>
      </div>

      {/* Zusatztext */}
      <p className="section-lead text-sm sm:text-base text-[var(--muted)] max-w-5xl">
        Damit Sie in entscheidenden Phasen sicher und strukturiert handeln können.
      </p>
    </section>
  );
}
