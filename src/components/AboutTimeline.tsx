type AboutBlock = {
  label: string;
  title: string;
  description: string;
};

const ABOUT_BLOCKS: AboutBlock[] = [
  {
    label: "Herkunft",
    title: "Bankenprüfung & -praxis",
    description:
      "Prüfungslogik (Regulatorik, Risiko, Entscheidung) prägt Anspruch an Struktur und Unterlagenqualität.",
  },
  {
    label: "Heute",
    title: "Begleitung auf Augenhöhe",
    description:
      "Prüferische Denkweise zum Vorteil der Mandanten. Ziel: Strukturen schaffen, die nachhaltig operativ funktionieren.",
  },
  {
    label: "Zielbild",
    title: "Reproduzierbare Entscheidungsgrundlagen",
    description:
      "Standardisierte Logik, klare Nachvollziehbarkeit und belastbare Kennzahlen – damit Entscheidungen schneller und sicherer getroffen werden.",
  },
];

export default function AboutTimeline() {
  return (
    <div className="space-y-8">
      {/* Timeline */}
      <div className="relative">
        <div
          className="
            absolute
            top-[18px]
            left-[calc(50%-50vw)]
            right-[-20px]
            h-[6px]
            bg-[var(--accent)]
            rounded-full
            opacity-100
          "
          aria-hidden="true"
        />

        {/* Pfeilspitze */}
        <div
          className="absolute top-[18px] right-[-30px] pointer-events-none"
          style={{ transform: "translateX(-2px)" }}
          aria-hidden="true"
        >
          <div
            className="h-0 w-0"
            style={{
              borderTop: "3px solid transparent",
              borderBottom: "3px solid transparent",
              borderLeft: "10px solid var(--accent)",
            }}
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {ABOUT_BLOCKS.map((b) => (
            <div key={b.label} className="flex items-start justify-start">
              <div
                className="
                  relative z-10
                  inline-flex items-center justify-center
                  h-9 px-4
                  rounded-xl
                  bg-[var(--accent)]
                  text-[var(--bg)]
                  text-[13px]
                  font-black
                  tracking-tight
                "
              >
                {b.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Text unter der Timeline */}
      <div className="grid gap-8 lg:grid-cols-3">
        {ABOUT_BLOCKS.map((b, i) => (
          <div key={b.title} className="space-y-2">
            <h3
              className={`text-lg font-semibold tracking-tight text-white ${
                i < 2 ? "max-w-[420px]" : ""
              }`}
            >
              {b.title}
            </h3>

            <p
              className={`text-sm sm:text-base text-[var(--muted)] leading-relaxed ${
                i < 2 ? "max-w-[350px]" : ""
              }`}
            >
              {b.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
