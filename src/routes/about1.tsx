import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Trainers } from "@/components/sections/Trainers";
import { useCounter } from "@/hooks/useCounter";
import { fadeUp, stagger } from "@/utils/motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Club 7 Fitness" },
      {
        name: "description",
        content:
          "Discover Club 7 Fitness — our mission, vision, and the team of expert coaches behind your transformation.",
      },
      { property: "og:title", content: "About — Club 7 Fitness" },
      {
        property: "og:description",
        content: "Our mission, vision, and team behind your transformation.",
      },
    ],
  }),
  component: AboutPage,
});

const ACHIEVEMENTS = [
  { end: 12000, suffix: "+", label: "Lives Transformed" },
  { end: 12, suffix: "", label: "Years in Business" },
  { end: 45, suffix: "+", label: "Certified Coaches" },
  { end: 98, suffix: "%", label: "Member Satisfaction" },
];

function Achievement({ end, suffix, label }: (typeof ACHIEVEMENTS)[number]) {
  const { ref, value } = useCounter(end);
  return (
    <div className="text-center">
      <div className="flex items-baseline justify-center text-3xl font-bold text-foreground sm:text-5xl">
        <span ref={ref}>{value.toLocaleString()}</span>
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <PageHero
        eyebrow="Who we are"
        title={
          <>
            Built for athletes,
            <br />
            <span className="text-primary">powered by passion</span>
          </>
        }
        subtitle="A premium fitness club where every detail is designed around your progress."
      />

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              {
                Icon: Target,
                title: "Our Mission",
                text: "Empower every member to become the strongest, healthiest version of themselves through expert coaching and premium facilities.",
              },
              {
                Icon: Eye,
                title: "Our Vision",
                text: "Be the most trusted fitness club in the city — where results, community, and quality come together.",
              },
              {
                Icon: Award,
                title: "Our Values",
                text: "Discipline, integrity, and progress. Every workout, every coach, every member upholds these standards.",
              },
            ].map((c) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-8 shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <c.Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT PREVIEW BLOCK ================= */}
      <AboutPreview />

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              By the numbers
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A track record of results
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4">
            {ACHIEVEMENTS.map((a) => (
              <Achievement key={a.label} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRAINERS ================= */}
      <Trainers />
    </>
  );
}
