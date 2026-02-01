"use client";

import * as React from "react";
import Image from "next/image";
import { ShieldCheck, Network } from "lucide-react";
import AboutTimeline from "@/components/AboutTimeline";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";

/**
 * Premium Scroll Animations (ruhig, seriös, performant)
 * - Nur beim Scrollen (keine Animation beim initialen Load)
 * - Reverse beim Hochscrollen (once:false)
 * - Erlaubt: opacity, translateX/Y, scaleY (für Linien)
 * - Reduced Motion: duration 0
 */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function useHasScrolled() {
  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    const onFirstScroll = () => setHasScrolled(true);
    const opts: AddEventListenerOptions = { passive: true };

    window.addEventListener("scroll", onFirstScroll, opts);
    window.addEventListener("wheel", onFirstScroll, opts);
    window.addEventListener("touchmove", onFirstScroll, opts);

    return () => {
      window.removeEventListener("scroll", onFirstScroll);
      window.removeEventListener("wheel", onFirstScroll);
      window.removeEventListener("touchmove", onFirstScroll);
    };
  }, []);

  return hasScrolled;
}

type RevealProps = {
  className?: string;
  children: React.ReactNode;
  y?: number; // 8–16
  x?: number; // 8–16
  direction?: "up" | "left" | "right";
  duration?: number; // Headings 0.5–0.6, Cards 0.55–0.65
  delay?: number; // minimal
  amount?: number;
};

function Reveal({
  className,
  children,
  y = 12,
  x = 12,
  direction = "up",
  duration = 0.62,
  delay = 0,
  amount = 0.15,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const hasScrolled = useHasScrolled();

  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    amount,
    once: false,
    margin: "0px 0px -5% 0px",
  });

  const safeY = Math.min(16, Math.max(8, y));
  const safeX = Math.min(16, Math.max(8, x));

  const hidden =
    direction === "left"
      ? { opacity: 0, x: safeX }
      : direction === "right"
      ? { opacity: 0, x: -safeX }
      : { opacity: 0, y: safeY };

  const show = { opacity: 1, x: 0, y: 0 };

  const effectiveDuration = prefersReducedMotion || !hasScrolled ? 0 : duration;
  const effectiveDelay = prefersReducedMotion || !hasScrolled ? 0 : delay;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{ hidden, show }}
      transition={{
        duration: effectiveDuration,
        ease: EASE,
        delay: Math.max(0, effectiveDelay),
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

export default function UeberUnsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 py-14 sm:py-16 space-y-14">
      {/* Headline */}
      <Reveal duration={0.58} y={12} amount={0.2}>
        <section className="space-y-3">
          <h1 className="section-title text-3xl sm:text-4xl font-semibold text-white">
            Über uns.
          </h1>
          <p className="section-lead text-sm sm:text-base text-[var(--muted)] max-w-3xl">
            Zusammenarbeit auf Augenhöhe. Mehrwert aus der Bankenprüfung.
          </p>
        </section>
      </Reveal>

      {/* Lukas: Bild links, Text rechts */}
      <section className="grid gap-10 lg:grid-cols-[360px_1fr] items-start">
        {/* Bild */}
        <div className="relative">
          {/* Wichtig: Bild-Container behält Höhe/Fläche → Image verschwindet nicht */}
          <div className="relative overflow-hidden rounded-2xl border border-[var(--accentBorder)] bg-[var(--surface2)]">
            <Reveal direction="right" duration={0.62} x={12} amount={0.25} className="h-full w-full">
              <div className="relative h-full w-full">
                <Image
                  src="/Scholl_9542.jpg"
                  alt="Lukas Scholl"
                  width={900}
                  height={1100}
                  priority
                  className="h-[500px] w-full object-cover object-[45%_25%]"
                />
                <div className="pointer-events-none absolute inset-0 bg-white/5" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-5">
          <Reveal duration={0.58} y={10} amount={0.25}>
            <div className="flex items-center gap-2 text-white font-semibold">
              <ShieldCheck size={18} className="text-[var(--accent)]" />
              <h2 className="text-xl">Lukas Scholl</h2>
            </div>
          </Reveal>

          <Reveal duration={0.62} y={12} delay={0.02} amount={0.2}>
            <div className="space-y-4 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
              <p>
                Lukas ist gelernter Bankkaufmann und als Bankenprüfer beim
                Baden-Württembergischen Genossenschaftsverband tätig.
              </p>

              <p>
                Seine Arbeit ist geprägt von der Prüfung bankinterner Prozesse,
                der Bewertung von Kreditengagements sowie dem Verständnis dafür,
                wie finanzielle Entscheidungen getroffen werden. Die Tätigkeit reicht von der Prüfung klassischer Bauträgerfinanzierungen
                bis hin zu spezialisierten Engagements im Gesundheits- und Pflegebereich.
                Daraus ergibt sich ein differenziertes Verständnis für branchenspezifische
                Anforderungen und individuelle Kreditstrukturen.
              </p>

              <p>
                Durch tiefgehende Kenntnisse im regulatorischen Umfeld der
                Bankenprüfung und ein geprüftes Kreditvolumen von über
                300.000.000 € weiß er, worauf es bei Struktur, Nachvollziehbarkeit
                und belastbaren Entscheidungsgrundlagen ankommt.
              </p>

              <p className="text-white/80">
                Entscheidungen treffen Banken und externe Partner. Wir schaffen
                durch unser Verständnis bankinterner Entscheidungslogiken die
                Grundlage dafür. Eine steuerliche Beratung erfolgt nicht. Unsere Leistung ergänzt bestehende
                steuerliche Strukturen durch die Analyse finanzieller Auswirkungen und die
                Beurteilung der Kapitaldienstfähigkeit.
              </p>

              <p className="text-white/80">
                Diskretion und Vertraulichkeit sind für uns selbstverständlich.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal duration={0.62} y={12} amount={0.2}>
        <div className="pt-8">
          <AboutTimeline />
        </div>
      </Reveal>

      {/* Netzwerk */}
      <section className="space-y-5">
        <Reveal duration={0.58} y={10} amount={0.25}>
          <div className="flex items-center gap-2 text-white font-semibold">
            <Network size={18} className="text-[var(--accent)]" />
            <h2 className="text-xl">Netzwerk (projektbezogen)</h2>
          </div>
        </Reveal>

        <Reveal duration={0.62} y={12} delay={0.02} amount={0.2}>
          <div className="space-y-4 text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-4xl">
            <p>
              Die Arbeit von Docalyze wird projektbezogen durch erfahrene Partner
              ergänzt.
            </p>

            <p>
              Dabei greifen wir auf Senior-Expertise aus Finanzierung,
              Unternehmensanalyse und Beratung zurück, wenn Tiefe, Erfahrung oder
              zusätzliche Perspektiven erforderlich sind. Klare Kommunikation,
              definierte Verantwortlichkeiten und ein zentraler Ansprechpartner
              sichern eine effiziente Zusammenarbeit.
            </p>

            <p className="text-white/80">
              Für unsere Mandanten bedeutet das Zugang zu über 30 Jahren
              Bankerfahrung – ohne operative Abhängigkeit von einzelnen Personen
              oder dauerhaft externen Strukturen.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Abschlussblock */}
      <section className="pt-8 space-y-5 pb-0 -mb-35 -mr-4 lg:-mr-6">
        <Reveal duration={0.58} y={10} amount={0.25}>
          <h2 className="text-xl font-semibold tracking-tight text-white">
            Nächster Schritt
          </h2>
        </Reveal>

        <Reveal duration={0.62} y={12} delay={0.01} amount={0.2}>
          <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-3xl">
            Sie haben Fragen, möchten mit uns zusammenarbeiten oder sich
            unverbindlich austauschen?
          </p>
        </Reveal>

        <Reveal duration={0.62} y={12} delay={0.02} amount={0.2}>
          <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-3xl">
            Wir freuen uns über engagierte und ambitionierte Unterstützung in unserem Team. Ein Austausch ist
            jederzeit möglich – unabhängig von Qualifikation oder Erfahrung.
            Sie möchten Teil unseres Teams werden?
          </p>
        </Reveal>

        <Reveal duration={0.55} y={10} delay={0.03} amount={0.2}>
          <div className="pt-2">
            <Link
              href="/contact"
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
              Freie Anfrage &amp; Bewerbung
            </Link>
          </div>
        </Reveal>

        {/* Logo rechts unten */}
        <Reveal direction="left" duration={0.62} x={12} amount={0.2} delay={0.02}>
          <div className="flex justify-start lg:justify-end pl:-2 lg:pl-0">
            <Image
              src="/seitlichLogoRechts.svg"
              alt="Docalyze Solutions"
              width={240}
              height={80}
              className="opacity-100 translate-y-[-200px] translate-x-6"
            />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
