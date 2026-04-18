import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { Trainers } from "@/components/sections/Trainers";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { GallerySection } from "@/components/sections/GallerySection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Club 7 Fitness — Premium Gym & Personal Training" },
      {
        name: "description",
        content:
          "Train smart, live strong. Club 7 Fitness delivers world-class equipment, expert coaches, and proven programs.",
      },
      { property: "og:title", content: "Club 7 Fitness — Premium Gym & Personal Training" },
      {
        property: "og:description",
        content: "Premium gym, expert trainers, and programs built to deliver real results.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <Hero />
      {/* ================= STATS STRIP ================= */}
      <Stats />
      {/* ================= ABOUT PREVIEW ================= */}
      <AboutPreview />
      {/* ================= SERVICES PREVIEW ================= */}
      <ServicesPreview />
       {/* ================= Gallery Section ================= */}
      <GallerySection />
      {/* ================= TRAINERS ================= */}
      <Trainers />
      {/* ================= TESTIMONIALS ================= */}
      <Testimonials />
      {/* ================= CTA ================= */}
      <CTA />
    </>
  );
}
