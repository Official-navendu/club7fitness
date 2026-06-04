import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { Trainers } from "@/components/sections/Trainers";
import { TrustSection } from "@/components/sections/TrustSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { GallerySection } from "@/components/sections/GallerySection";
import { InstagramFeed } from "@/components/sections/InstagramFeed";

export function HomePage() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <Hero />
      {/* ================= STATS STRIP ================= */}
      <Stats />
      {/* ================= ABOUT PREVIEW ================= */}
      <AboutPreview />
      {/* ================= WHY CHOOSE US ================= */}
      <WhyChooseUs />
      {/* ================= SERVICES PREVIEW ================= */}
      <ServicesPreview />
      {/* ================= Gallery Section ================= */}
      <GallerySection />
      {/* ================= INSTAGRAM FEED ================= */}
      <InstagramFeed />
      {/* ================= TRAINERS ================= */}
      <Trainers />
      {/* ================= TRUST & CREDIBILITY ================= */}
      <TrustSection />
      {/* ================= TESTIMONIALS ================= */}
      <Testimonials />
      {/* ================= CTA ================= */}
      <CTA />
    </>
  );
}
