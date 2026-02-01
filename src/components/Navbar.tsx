"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const nav = [
    { label: "Leistungen", href: "/leistungen" },          // eigene Seite
    { label: "Über uns", href: "/ueber-uns" },              // eigene Seite
    { label: "Arbeitstiefe", href: "/#arbeitsnachweise" }, // Anchor auf Startseite
    { label: "Ablauf", href: "/#ablauf" },
    { label: "Mission", href: "/#mission" },
    { label: "Kontakt", href: "/#kontakt-teaser" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-[var(--border)] bg-[color:rgb(18_33_52/0.75)]">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 h-[88px] flex items-center justify-between gap-4">
        {/* Logo – Next.js Link, führt immer zur Startseite */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logosideways.svg"
            alt="Docalyze Solutions"
            width={520}
            height={120}
            className="h-12 md:h-14 w-auto"
            priority
          />
          <span className="sr-only">Docalyze Solutions</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-[15.5px] font-medium tracking-tight text-[var(--text)]/85 hover:text-white transition"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-full px-6 py-2.5 text-sm font-semibold bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent2)] transition"
          >
            Analyse anfragen
          </Link>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 border border-[var(--border)]"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]">
          <div className="mx-auto w-full max-w-7xl px-6 py-4 space-y-3">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="block py-2 text-[var(--muted)] hover:text-white transition"
                onClick={() => setOpen(false)}
              >
                {i.label}
              </Link>
            ))}

            <Link
              href="/#kontakt-teaser"
              className="inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent2)] transition"
              onClick={() => setOpen(false)}
            >
              Analyse anfragen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
