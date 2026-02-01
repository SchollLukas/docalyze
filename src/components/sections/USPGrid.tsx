import { ShieldCheck, ArrowLeftRight, Layers } from "lucide-react";
import type { ReactNode } from "react";

export default function USPGrid() {
  return (
    <section id="usps" className="space-y-10">
      <div className="space-y-2">
        <h2 className="section-title text-2xl sm:text-3xl font-semibold text-white">
          Warum Docalyze?
        </h2>
        <p className="section-lead text-sm sm:text-base text-[var(--muted)] max-w-3xl">
          Praxiswissen aus der Bankenprüfung. Wir verstehen, wie Banken entscheiden und funktionierende Strukturen entstehen.
        </p>
      </div>

      {/* wichtig: items-start verhindert "Mitziehen" der Nachbarn */}
      <div className="grid items-start gap-6 lg:gap-8 md:grid-cols-3">
        <USPCard
          icon={<ShieldCheck size={20} />}
          title="Prüfungspraxis"
          text={`Durch Erfahrung aus der Bankenprüfung & -praxis wissen wir, was Banken erwarten. Prüfungsnahe Unterlagen, die Rückfragen vermeiden und Entscheidungen beschleunigen.`}
        />

        <USPCard
          icon={<ArrowLeftRight size={20} />}
          title="Autarke Strukturen"
          text={`Wir bauen keine Schubladen-Konzepte. Integration von Buchhaltungs-, Controlling- und Prozessstrukturen direkt im Unternehmen, die ohne uns weiterlaufen.`}
        />

        <USPCard
          icon={<Layers size={20} />}
          title="Senior Consulting"
          text={`Über 30 Jahre Beratungserfahrung im Bankenbereich kombiniert mit prüferischer Methodik und Umsetzungskompetenz. Zahlen, Prozesse, Finanzierung und Strategie aus einer Hand.`}
        />
      </div>
    </section>
  );
}

function USPCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        group rounded-2xl bg-[var(--surface)]
        border border-[var(--border)] hover:border-[var(--borderStrong)]
        transition-colors duration-300
        overflow-hidden
        px-6 py-4
      "
    >
      {/* Header: bleibt kompakt, Icon/Title aligned */}
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface2)] text-[var(--accent)]">
          {icon}
        </div>

        <div className="min-w-0">
          <h3 className="pt-[10px] text-lg font-semibold tracking-tight text-white leading-none">
            {title}
          </h3>

          {/* Reveal: öffnet + schließt smooth (0fr <-> 1fr) */}
          <div
            className="
              mt-3
              grid grid-rows-[0fr]
              opacity-0 translate-y-2
              transition-all duration-500 ease-in-out
              group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:translate-y-0
              group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 group-focus-within:translate-y-0
            "
          >
            <div className="overflow-hidden">
              <p className="text-sm text-[var(--muted)] whitespace-pre-line leading-relaxed">
                {text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
