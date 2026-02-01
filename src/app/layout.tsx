import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import localFont from "next/font/local";
import { Inter, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const aileron = localFont({
  src: [
    { path: "../fonts/Aileron-Black.woff2", weight: "1000", style: "normal" },
  ],
  variable: "--font-aileron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Docalyze – Struktur schafft Vertrauen",
  description:
    "Bankfähige Unterlagen, klare Analysen und prüfungssichere Strukturen für Unternehmer, Projektentwickler und Bauträger.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={[
          manrope.variable,
          inter.variable,
          aileron.variable,
          "antialiased",
          "bg-[var(--bg)]",
          "text-[var(--text)]",
        ].join(" ")}
      >
        {/* Navbar global */}
        <Navbar />

        {/* Page content */}
        {children}

        {/* Globaler Footer */}
        <Footer />
      </body>
    </html>
  );
}
