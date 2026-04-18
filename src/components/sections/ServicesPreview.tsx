import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Dumbbell, Heart, Users, Flame, Trophy, Timer } from "lucide-react";

const SERVICES = [
  { icon: Dumbbell, title: "Weight Training", desc: "Build strength with structured programs and pro coaching." },
  { icon: Heart, title: "Cardio Studio", desc: "Top-tier treadmills, bikes and rowers for any pace." },
  { icon: Users, title: "Personal Training", desc: "1-on-1 coaching tailored to your goals and lifestyle." },
  { icon: Flame, title: "Fat Loss Programs", desc: "High-intensity sessions that maximize calorie burn." },
  { icon: Trophy, title: "Muscle Gain", desc: "Hypertrophy plans backed by science and nutrition." },
  { icon: Timer, title: "Group Classes", desc: "120+ classes weekly — HIIT, yoga, spin, and more." },
];

// smooth animation
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function ServicesPreview() {
  return (
    <section className="bg-white py-14 md:py-20 overflow-hidden">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden">

        {/* HEADER */}
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            What we offer
          </span>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Programs designed to <span className="text-primary">unlock</span> your potential
          </h2>

          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            Every program is crafted by expert coaches with one goal in mind — your results.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-10 w-full overflow-hidden">
          <div className="grid w-full max-w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-60px" }}
                variants={fadeUp}
                className="group relative w-full min-w-0 overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-elegant hover:bg-primary"
              >
                
                {/* ICON */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-white group-hover:text-primary">
                  <s.icon className="h-6 w-6 transition-all duration-300" />
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-white">
                  {s.title}
                </h3>

                {/* DESC */}
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-white/90">
                  {s.desc}
                </p>

                {/* LINK */}
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all duration-300 group-hover:text-white group-hover:translate-x-1"
                >
                  Learn more →
                </Link>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}