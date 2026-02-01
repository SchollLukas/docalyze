"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

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
    title: "Standardisierung",
    description:
      "Langfristig entstehen wiederkehrende Strukturen, Zahlenlogiken und Entscheidungsgrundlagen, die unabhängig von Personen funktionieren.",
  },
];

export default function FounderSection() {
  const reduce = useReducedMotion();

  return (
    <section id="founder" className="space-y-10 scroll-mt-24">
      {/* Kopfblock */}
      <div className="space-y-2">
        <Reveal direction="up" distance={12} duration={0.55}>
          <h2 className="section-title text-2xl sm:text-3xl font-semibold text-white">
            Über uns
          </h2>
        </Reveal>

        <div className="space-y-5 max-w-3xl">
          <Reveal direction="up" distance={10} duration={0.55} delay={0.06}>
            <p className="section-lead text-sm sm:text-base text-[var(--muted)]">
              Docalyze ist aus der Arbeit in Banken und Prüfungen entstanden.
            </p>
          </Reveal>

          <Reveal direction="up" distance={10} duration={0.55} delay={0.10}>
            <p className="section-lead text-sm sm:text-base text-[var(--muted)]">
              Unternehmen und Projekte scheitern selten an Substanz, sondern an Struktur, Darstellung und Entscheidungsgrundlagen.
            </p>
          </Reveal>

          <Reveal direction="up" distance={10} duration={0.55} delay={0.14}>
            <p className="section-lead text-sm sm:text-base text-[var(--muted)]">
              Docalyze schließt die Lücke zwischen unternehmerischer Realität und den Anforderungen von Banken und externen Entscheidern.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Leiste: lädt von links nach rechts (Reverse beim Hochscrollen) */}
        <motion.div
          className="
            absolute
            top-[18px]
            left-[calc(50%-50vw)]
            right-[-20px]
            h-[6px]
            bg-[var(--accent)]
            rounded-full
            opacity-100
            origin-left
          "
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
          }
        />

        {/* Pfeilspitze: erscheint passend zur Leiste */}
        <motion.div
          className="absolute top-[18px] right-[-30px] pointer-events-none"
          style={{ transform: "translateX(-2px)" }}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: 0.35, delay: 0.55, ease: [0.22, 1, 0.36, 1] }
          }
        >
          <div
            className="h-0 w-0"
            style={{
              borderTop: "3px solid transparent",
              borderBottom: "3px solid transparent",
              borderLeft: "10px solid var(--accent)",
            }}
          />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {ABOUT_BLOCKS.map((b, idx) => (
            <Reveal
              key={b.label}
              direction={idx === 0 ? "left" : idx === 1 ? "up" : "right"}
              distance={12}
              duration={0.6}
              delay={0.12 + idx * 0.08}
              amount={0.28}
            >
              <div className="flex items-start justify-start">
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
            </Reveal>
          ))}
        </div>
      </div>

      {/* Text unter der Timeline */}
      <div className="grid gap-8 lg:grid-cols-3">
        {ABOUT_BLOCKS.map((b, i) => (
          <Reveal
            key={b.title}
            direction={i === 0 ? "left" : i === 1 ? "up" : "right"}
            distance={12}
            duration={0.6}
            delay={0.04 + i * 0.08}
            amount={0.25}
          >
            <div className="space-y-2">
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
          </Reveal>
        ))}
      </div>

      {/* Abstand zu Lukas */}
      <div className="h-6 lg:h-3" />

      {/* Links Text, rechts Bild */}
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:pl-5 xl:pl-10">
        {/* LEFT */}
        <Reveal direction="left" distance={16} duration={0.7} amount={0.22}>
          <div className="space-y-10 lg:pt-14 lg:translate-x-[40px]">
            {/* Lukas */}
            <div className="space-y-2">
              <GradientOutlineHeading>Lukas Scholl</GradientOutlineHeading>

              <ul className="mt-3 space-y-1 text-sm sm:text-base text-[var(--muted)]">
                <li>• Bankenprüfung (BWGV)</li>
                <li>• Regulatorik (HGB, KWG, MaBV, CRR, MaRisk, …)</li>
                <li>• Prüfung von Bankprozessen</li>
                <li>• Kreditentscheidung und Risiko</li>
                <li>• Jahresabschlussprüfung</li>
                <li>• +300.000.000&nbsp;€ geprüftes Kreditvolumen</li>
              </ul>

              <div className="pt-5">
                <Link href="/ueber-uns" className="btn-base btn-accent-outline">
                  Mehr erfahren
                </Link>
              </div>
            </div>

            {/* Netzwerk */}
            <div className="space-y-2 lg:pt-10">
              <GradientOutlineHeading>Netzwerk (projektbezogen)</GradientOutlineHeading>

              <p className="text-sm sm:text-base text-[var(--muted)]">
                Die Arbeit von Docalyze wird projektbezogen durch erfahrene Partner ergänzt.
              </p>

              <p className="text-sm sm:text-base text-[var(--muted)]">
                Senior-Expertise aus Finanzierung, Analyse und Beratung bei Bedarf.
              </p>

              <p className="text-sm sm:text-base text-[var(--muted)]">
                Klare Verantwortlichkeiten und ein zentraler Ansprechpartner.
              </p>

              <p className="text-sm sm:text-base text-[var(--muted)]">
                Zugang zu über 30 Jahren Bankerfahrung – ohne operative Abhängigkeiten.
              </p>

              <div className="pt-5">
                <Link href="/ueber-uns" className="btn-base btn-accent-outline">
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* RIGHT: Bild + Badge (Option B: garantiert von rechts nach links) */}
        <motion.div
          initial={{ opacity: 0, x: 26 }} // Start rechts -> fliegt nach links rein
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.22 }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: 0.75, delay: 0.06, ease: [0.22, 1, 0.36, 1] }
          }
        >
          <div className="flex flex-col items-center lg:items-end -mt-20">
            <Image
              src="/Profil.png"
              alt="Lukas Scholl"
              width={520}
              height={900}
              priority
              className="h-auto w-[320px] sm:w-[380px] lg:w-[420px] object-contain"
            />

            <div className="mt-0 w-[320px] sm:w-[380px] lg:w-[420px]">
              <FounderBadgeTileOneLine />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------
   Heading mit Outline
   ------------------------------------------------------- */
function GradientOutlineHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-block">
      <div
        className="
          pointer-events-none
          absolute
          -left-[14px]
          right-[-20px]
          top-[-3px]
          bottom-[-3px]
          rounded-full
          bg-[linear-gradient(to_right,rgba(255,255,255,0.90)_0%,rgba(255,255,255,0.40)_20%,rgba(255,255,255,0)_100%)]
          p-[1px]
        "
        style={{
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
        aria-hidden="true"
      />
      <h3 className="relative text-lg font-semibold tracking-tight text-white">
        {children}
      </h3>
    </div>
  );
}

/* -------------------------------------------------------
   Badge-Tile
   ------------------------------------------------------- */
function FounderBadgeTileOneLine() {
  return (
    <div className="group block relative rounded-2xl overflow-hidden">
      <div
        className="
          absolute inset-0 rounded-2xl
          bg-[linear-gradient(to_bottom,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.55)_40%,rgba(255,255,255,0.18)_60%,rgba(255,255,255,0)_85%,rgba(255,255,255,0)_100%)]
        "
      />

      <div className="relative m-[1px] rounded-2xl overflow-hidden bg-[#153c54]">
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[linear-gradient(to_bottom,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.10)_18%,rgba(255,255,255,0.06)_30%,rgba(11,26,42,0.25)_65%,rgba(11,26,42,0.70)_100%)]
            [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_62%,rgba(0,0,0,0)_100%)]
            [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,0)_100%)]
          "
        />

        <div className="px-5 py-3 text-center">
          <div className="flex items-center justify-center gap-2 whitespace-nowrap leading-none">
            <span className="text-white font-semibold text-[15.5px]">
              Lukas Scholl
            </span>
            <span className="text-white/80 font-normal text-[14.5px]">
              Gründer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
