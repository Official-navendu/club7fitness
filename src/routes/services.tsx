import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { Equipment } from "@/components/sections/Equipment";
import { Programs } from "@/components/sections/Programs";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Equipment — Club 7 Fitness" },
      {
        name: "description",
        content:
          "Explore Club 7 Fitness equipment and training programs — weight training, cardio, personal training, fat loss, and muscle gain.",
      },
      { property: "og:title", content: "Services & Equipment — Club 7 Fitness" },
      {
        property: "og:description",
        content: "Premium equipment and expert programs designed around your goals.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <PageHero
        eyebrow="Services"
        title={
          <>
            Premium equipment.
            <br />
            <span className="text-primary">Programs that work.</span>
          </>
        }
        subtitle="From cardio to strength, every machine and every program is curated for performance."
      />

      {/* ================= EQUIPMENT ================= */}
      <Equipment />

      {/* ================= PROGRAMS ================= */}
      <Programs />

      {/* ================= CTA ================= */}
      <CTA />
    </>
  );
}
