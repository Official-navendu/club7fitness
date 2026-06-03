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
          "Discover Club 7 Fitness — our mission, vision, and the elite coaches behind your transformation journey.",
      },
      { property: "og:title", content: "About — Club 7 Fitness" },
      {
        property: "og:description",
        content:
          "Elite coaching, premium equipment, and a community built for results.",
      },
    ],
  }),
  component: AboutPage,
});

const ACHIEVEMENTS = [
  { end: 12000, suffix: "+", label: "Lives Transformed" },
  { end: 12, suffix: "", label: "Years Experience" },
  { end: 45, suffix: "+", label: "Certified Coaches" },
  { end: 98, suffix: "%", label: "Member Satisfaction" },
];

function Achievement({ end, suffix, label }: (typeof ACHIEVEMENTS)[number]) {
  const { ref, value } = useCounter(end);

  return (
    <motion.div
      variants={fadeUp}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(255,59,59,0.15)]"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="flex items-baseline justify-center text-4xl font-black tracking-tight text-white sm:text-6xl">
          <span ref={ref}>{value.toLocaleString()}</span>
          <span className="text-primary">{suffix}</span>
        </div>

        <div className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

function AboutPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <div className="relative overflow-hidden bg-black">
        {/* Glow Background */}
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10">
          <PageHero
            eyebrow="Who we are"
            title={
              <>
                Train harder.
                <br />
                <span className="text-primary">
                  Become unstoppable.
                </span>
              </>
            }
            subtitle="Elite coaching, premium equipment, and a fitness community designed to push your limits every single day."
          />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ================= MISSION / VISION / VALUES ================= */}
      <section className="relative overflow-hidden bg-background py-20 md:py-28">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,59,59,0.12),transparent_40%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Our Foundation
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              More than a gym.
              <br />
              A place built for growth.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Every workout, every trainer, and every corner of Club 7
              Fitness is designed to help you unlock your strongest self.
            </p>
          </div>

          {/* Cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 grid gap-6 md:grid-cols-3"
          >
            {[
              {
                Icon: Target,
                title: "Our Mission",
                text: "Empower every member to become the strongest, healthiest version of themselves through expert coaching and world-class facilities.",
              },
              {
                Icon: Eye,
                title: "Our Vision",
                text: "To become the city's most trusted premium fitness destination where results, discipline, and community come together.",
              },
              {
                Icon: Award,
                title: "Our Values",
                text: "Discipline, consistency, integrity, and progress — the core principles that drive every transformation inside Club 7.",
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_50px_rgba(255,59,59,0.15)]"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <card.Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-foreground">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="bg-black">
        <AboutPreview />
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,59,59,0.18),transparent_50%)]" />

        {/* Noise Texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-soft-light">
          <div className="h-full w-full bg-[url('/noise.png')]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              By the numbers
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              A track record
              <br />
              of real transformation
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
              Thousands of members have transformed their lives with our
              expert guidance, premium environment, and performance-driven
              culture.
            </p>
          </div>

          {/* Stats */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {ACHIEVEMENTS.map((item) => (
              <Achievement key={item.label} {...item} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ================= TRAINERS ================= */}
      <section className="relative overflow-hidden bg-background py-20 md:py-28">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,59,59,0.10),transparent_35%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Meet the experts
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Coaches who live
              <br />
              fitness every day
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Our certified trainers combine experience, motivation, and
              science-backed techniques to help you achieve sustainable
              results.
            </p>
          </div>

          <Trainers />
        </div>
      </section>
    </>
  );
}