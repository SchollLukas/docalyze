import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--accentBorder)] py-4 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
        {/* Links: Logo + Startseite */}
        <div className="flex items-center gap-4">
          <Image
            src="/onlylogo.png"
            alt="Docalyze Logo"
            width={52}
            height={52}
            className="opacity-90"
            priority
          />

          <Link
            href="/#top"
            className="text-[var(--muted)] hover:text-white transition"
          >
            Startseite
          </Link>
        </div>

        {/* Mitte */}
        <div className="flex-1 text-center text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Docalyze Solutions
        </div>

        {/* Rechts: Navigation */}
        <div className="flex items-center gap-6">
          <Link
            href="/anfrage"
            className="text-[var(--muted)] hover:text-white transition"
          >
            Leistungsauswahl
          </Link>

          <Link
            href="/contact"
            className="text-[var(--muted)] hover:text-white transition"
          >
            Kontakt
          </Link>

          <Link
            href="/datenschutz"
            className="text-[var(--muted)] hover:text-white transition"
          >
            Datenschutz
          </Link>

          <Link
            href="/impressum"
            className="text-[var(--muted)] hover:text-white transition"
          >
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  );
}
