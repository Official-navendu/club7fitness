import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";

import aboutImg from "@/assets/images/about1.jpg";
import smallImg from "@/assets/images/about2.jpg";

const POINTS = [
  "State-of-the-art equipment from world-class brands",
  "Certified trainers with 10+ years of experience",
  "Personalized programs tailored to your goals",
  "Open 18 hours a day, 7 days a week",
];

// 🔥 smoother animations
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function AboutPreview() {
  return (
    <section className="relative bg-white py-14 md:py-20 overflow-hidden">

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

        {/* ===== LEFT IMAGE ===== */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-60px" }}
          className="relative w-full max-w-full overflow-hidden"
        >
          {/* BIG IMAGE */}
          <div className="overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={aboutImg}
              alt="Gym"
              className="w-full h-[380px] md:h-[420px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* SMALL IMAGE CARD */}
          <div className="absolute -bottom-5 -right-4 w-[140px] sm:w-[160px]">

            <div className="relative rounded-2xl p-[2px] overflow-hidden">

              {/* 🔥 animated border */}
              <div className="absolute inset-0 animate-borderMove bg-gradient-to-r from-primary via-[color:var(--primary-glow)] to-primary opacity-80" />

              <div className="relative bg-white rounded-2xl p-2 shadow-elegant">
                <img
                  src={smallImg}
                  alt="gym small"
                  className="rounded-xl h-[100px] sm:h-[120px] w-full object-cover"
                />
              </div>

            </div>
          </div>
        </motion.div>

        {/* ===== RIGHT CONTENT ===== */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-60px" }}
          className="w-full max-w-full"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About Club 7
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl leading-tight">
            More than a gym — a movement built around{" "}
            <span className="text-primary">your progress</span>.
          </h2>

          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            For over a decade, Club 7 Fitness has helped athletes of every level transform their
            bodies and mindsets. Our facility blends premium equipment with expert coaching and a
            community that holds you accountable.
          </p>

          <ul className="mt-6 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-foreground/85">{p}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="group mt-7 inline-flex h-11 items-center gap-2 rounded-xl bg-foreground px-6 text-sm font-semibold text-background transition-all duration-300 hover:bg-primary hover:scale-[1.03]"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* 🔥 smooth border animation */}
      <style>
        {`
          @keyframes borderMove {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          .animate-borderMove {
            animation: borderMove 10s linear infinite;
          }
        `}
      </style>

    </section>
  );
}