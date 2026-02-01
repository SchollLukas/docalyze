import Link from "next/link";
import { Building2, Briefcase, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

type Tile = {
  title: string;
  subtitle: string;
  href: string;
};

type ListItem = {
  no: number;
  title: string;
  href: string;
};

export default function ServicesSection() {
  const pebt: Tile[] = [
    {
      title: "Projektmonitoring",
      subtitle: "Darstellung für Stakeholder",
      href: "/leistungen#projektmonitoring",
    },
    {
      title: "Projektanalyse",
      subtitle: "Prüfung der Finanzierbarkeit",
      href: "/leistungen#projektanalyse",
    },
    {
      title: "Risiko- & Sensitivitätsanalyse",
      subtitle: "Optimal vorbereitet",
      href: "/leistungen#risiko-sensitivitaet",
    },
    {
      title: "Projekt- & Liquiditätskalkulation",
      subtitle: "Schnelle Kreditreife",
      href: "/leistungen#liquiditaetskalkulation",
    },
  ];

  const kmuItems: ListItem[] = [
    { no: 1, title: "Unternehmensanalyse", href: "/leistungen#unternehmen" },
    { no: 2, title: "Unterlagenaufbereitung", href: "/leistungen#unternehmen" },
    { no: 3, title: "Umsetzung Prüfungsbericht", href: "/leistungen#unternehmen" },
    { no: 4, title: "Prozessintegration", href: "/leistungen#unternehmen" },
    { no: 5, title: "Buchhaltungs- und Controllingstruktur", href: "/leistungen#unternehmen" },
    { no: 6, title: "Reporting", href: "/leistungen#unternehmen" },
  ];

  return (
    <section id="leistungen" className="space-y-10">
      {/* Kopfblock */}
      <div className="space-y-2">
        <Reveal direction="up" distance={14}>
          <h2 className="section-title text-2xl sm:text-3xl font-semibold text-white">
            Unsere Leistungen.
          </h2>
        </Reveal>

        <Reveal direction="up" distance={12} delay={0.06}>
          <p className="section-lead text-sm sm:text-base text-[var(--muted)] max-w-3xl">
            Optimierung Ihres Unternehmens durch 30 Jahre Beratungserfahrung im Bankensektor.
          </p>
        </Reveal>
      </div>

      {/* PE / BT */}
      <Reveal direction="left" distance={14} delay={0.02}>
        <div className="flex items-center gap-2 text-white font-semibold">
          <Building2 size={18} className="text-[var(--accent)]" />
          <h3 className="text-lg">Für Projektentwickler &amp; Bauträger</h3>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
       {pebt.map((t, idx) => (
      <Reveal
        key={t.title}
        direction={idx % 2 === 0 ? "left" : "right"}
        distance={12}
        duration={0.65}
        delay={0.08 + idx * 0.08}
        amount={0.22}
      >
    <TopBottomTile title={t.title} subtitle={t.subtitle} href={t.href} />
  </Reveal>
))}

      </div>

      {/* CTA unter PE/BT */}
      <Reveal direction="up" distance={12} delay={0.05}>
        <div className="flex justify-center pt-2">
          <Link href="/leistungen#projektentwickler" className="btn-base btn-accent-outline">
            Gesamte Leistungen ansehen
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </Reveal>

      {/* Unternehmer / KMU */}
      <Reveal direction="left" distance={14} delay={0.02}>
        <div className="flex items-center gap-2 text-white font-semibold pt-2">
          <Briefcase size={18} className="text-[var(--accent)]" />
          <h3 className="text-lg">Für Unternehmer &amp; KMU</h3>
        </div>
      </Reveal>

      <div className="flex justify-center">
        <div className="w-full max-w-6xl">
          {/* Abstand weiter reduziert: 22px -> 11px */}
          <div className="grid gap-[11px] lg:grid-cols-[520px_1fr] items-start">
            <div className="space-y-4">
              {kmuItems.map((it, idx) => (
                <Reveal
                  key={it.no}
                  direction="left"
                  distance={14}
                  delay={0.04 + idx * 0.035}
                  amount={0.22}
                >
                  <EntrepreneurRowSketchGradient no={it.no} title={it.title} href={it.href} />
                </Reveal>
              ))}
            </div>

            {/* Bild: leicht von rechts rein, sehr dezent */}
            <Reveal
              direction="left"
              distance={22}
              duration={0.75}
              delay={0.10}
              amount={0.22}
            >
              <ImagePlaceholderCroppedRight />
            </Reveal>


          </div>

          {/* Text + Button (ohne Kachel) */}
          <Reveal direction="up" distance={12} delay={0.06} amount={0.25}>
            <div className="flex justify-center pt-6">
              <div className="w-full max-w-[546px] text-center">
                <div className="text-white font-semibold leading-snug">
                  Weitere Informationen unter:
                </div>

                <div className="pt-3 flex justify-center">
                  <Link
                    href="/leistungen#unternehmen"
                    className="
                      inline-flex items-center justify-center
                      rounded-full px-6 py-2.5
                      text-sm font-semibold
                      border border-[var(--accentBorder)]
                      text-white
                      transition
                      hover:bg-[#153c54]
                      hover:border-white/25
                      whitespace-nowrap
                    "
                  >
                    Gesamte Leistungen ansehen
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------
   PE / BT Kachel – unverändert klickbar
   ------------------------------------------------------- */

function TopBottomTile({
  title,
  subtitle,
  href,
}: {
  title: string;
  subtitle: string;
  href: string;
}) {
  return (
    <Link href={href} className="group block relative rounded-2xl overflow-hidden">
      <div
        className="
          absolute inset-0 rounded-2xl
          bg-[linear-gradient(to_bottom,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.55)_40%,rgba(255,255,255,0.18)_65%,rgba(255,255,255,0)_85%,rgba(255,255,255,0)_100%)]
        "
      />

      <div className="relative m-[1px] rounded-2xl overflow-hidden bg-[#153c54]">
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[linear-gradient(to_bottom,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.10)_18%,rgba(255,255,255,0.06)_42%,rgba(11,26,42,0.25)_65%,rgba(11,26,42,0.70)_100%)]
            [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_62%,rgba(0,0,0,0)_100%)]
            [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_62%,rgba(0,0,0,0)_100%)]
          "
        />

        <div className="h-[120px] flex flex-col">
          <div className="px-4 py-4 flex items-center justify-center">
            <div className="text-center">
              <div className="text-white font-semibold leading-snug">{title}</div>
              <div className="mt-1 text-sm text-white/75 leading-snug">{subtitle}</div>
            </div>
          </div>

          <div className="h-px w-full bg-white/12" />

          <div className="h-[44px] bg-white/6 flex items-center justify-center px-4">
            <span
              className="
                inline-flex items-center justify-center
                rounded-full px-3 py-1.5
                text-xs font-semibold
                border border-[var(--accentBorder)]
                text-white
                whitespace-nowrap
                transition
                group-hover:bg-[#153c54]
                group-hover:border-white/25
                group-hover:text-white
                hover:bg-[#153c54]
                hover:border-white/25
                hover:text-white
              "
            >
              Details
              <ArrowRight size={14} className="ml-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* -------------------------------------------------------
   KMU Row – klickbar, Design unverändert
   ------------------------------------------------------- */

function EntrepreneurRowSketchGradient({
  no,
  title,
  href,
}: {
  no: number;
  title: string;
  href: string;
}) {
  return (
    <Link href={href} className="block relative max-w-[520px] rounded-full overflow-hidden">
      <div
        className="
          absolute inset-0 rounded-full
          bg-[linear-gradient(to_right,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.55)_45%,rgba(255,255,255,0.12)_60%,rgba(255,255,255,0)_74%,rgba(255,255,255,0)_100%)]
        "
      />

      <div className="relative m-[1px] rounded-full overflow-hidden bg-[#153c54]">
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.12)_10%,rgba(255,255,255,0.08)_40%,rgba(11,26,42,0.20)_65%,rgba(11,26,42,0.70)_100%,rgba(11,26,42,0.95)_50%)]
          "
        />

        <div
          className="
            pointer-events-none absolute right-0 top-0 h-full w-40
            bg-gradient-to-r from-transparent to-[var(--bg)]
          "
        />

        <div className="relative flex items-center gap-4 px-4 py-4 pr-3">
          <div
            className="
              flex h-12 w-12 items-center justify-center
              rounded-full bg-white/35 border border-white/70
              text-white font-semibold shrink-0
            "
          >
            {no}
          </div>

          <div className="text-white font-semibold leading-snug truncate">{title}</div>
        </div>
      </div>
    </Link>
  );
}

/* -------------------------------------------------------
   Bild-Placeholder – Position unverändert
   ------------------------------------------------------- */

function ImagePlaceholderCroppedRight() {
  return (
    <div className="self-stretch flex justify-center lg:justify-end lg:pl-12 lg:translate-x-[14px]">
      {/* lg:pl-10 => größerer Abstand zum Textblock */}
      <div className="w-3/4 h-[570px]">
        {/* h fix auf 570px */}
        <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] relative overflow-hidden">
          <Image
            src="/landing.jpg"
            alt="Docalyze – Landing Visual"
            fill
            priority
            className="object-cover object-right"
            sizes="(min-width: 1024px) 520px, 75vw"
          />
          <div className="absolute inset-0 bg-white/5 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
