import { PageHero } from "@/components/sections/PageHero";
import { PremiumServices } from "@/components/sections/PremiumServices";
import { CTA } from "@/components/sections/CTA";

export function ServicesPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <PageHero
        eyebrow="Services"
        title={
          <>
            Premium Fitness Services
            <br />
            <span className="text-primary">& Member Benefits</span>
          </>
        }
        subtitle="Explore our world-class gym floor, recovery spa, functional training arenas, and member lounge."
      />

      {/* ================= PREMIUM SERVICES & BENEFITS ================= */}
      <PremiumServices />

      {/* ================= CTA ================= */}
      <CTA />
    </>
  );
}
