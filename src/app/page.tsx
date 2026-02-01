// src/app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import USPGrid from "@/components/sections/USPGrid";
import ProofOfWork from "@/components/sections/ProofOfWork";
import ServicesSection from "@/components/sections/ServicesSection";
import MissionSection from "@/components/sections/MissionSection";
import FounderSection from "@/components/sections/FounderSection";
import FinalCTA from "@/components/sections/FinalCTA";
import ProcessSteps from "@/components/sections/ProcessSteps";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div id="top" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="space-y-20 lg:space-y-28">
          <HeroSection />
          <USPGrid />
          <ServicesSection />
          <FounderSection />
          <ProofOfWork />
          <ProcessSteps />
          <MissionSection />
          <FinalCTA />
        </div>
      </div>
    </main>
  );
}
