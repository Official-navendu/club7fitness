import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, Play } from "lucide-react";

import gym1 from "@/assets/images/gym1.jpg";
import gym2 from "@/assets/images/gym2.jpg";
import gym3 from "@/assets/images/gym3.jpg";
import gym4 from "@/assets/images/gym4.jpg";

import { fadeUp, stagger } from "@/utils/motion";

export function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const images = [gym1, gym2, gym3, gym4];

  // Parallax
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const onScroll = () => {
      const y = window.scrollY;
      gsap.to(el, {
        y: y * 0.08,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto change images
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate overflow-hidden pt-14 text-white md:pt-16 bg-[color:var(--surface-darker)]">

      {/* Animated Background */}
      <div className="absolute inset-0 -z-20 bg-animated-gradient" />
      <div className="absolute inset-0 -z-10 bg-hero-gradient opacity-70" />

      {/* Glow */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -left-32 top-1/3 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -right-20 top-10 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pb-20 lg:pt-12">

        {/* ===== LEFT CONTENT ===== */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="lg:col-span-6 xl:col-span-5"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Premium Fitness Club
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Train Smart.
            <br />
            <span className="bg-gradient-to-r from-primary to-[color:var(--primary-glow)] bg-clip-text text-transparent">
              Live Strong.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-md text-base text-white/70 sm:text-lg"
          >
            World-class equipment, expert coaches, and a community designed to push you toward your
            best self — every single day.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex h-12 items-center gap-2 rounded-xl bg-primary-gradient px-6 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.03]"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>

            <Link
              to="/services"
              className="group inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur"
            >
              <Play className="h-4 w-4 fill-primary text-primary" />
              Explore Programs
            </Link>
          </motion.div>
        </motion.div>

        {/* ===== RIGHT IMAGE LAYOUT (PERFECT ROW) ===== */}
        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:col-span-6 xl:col-span-7 flex justify-center"
        >
          <div className="flex gap-4 w-full max-w-[650px] h-[420px]">

            {/* BIG IMAGE */}
            <motion.div
              key={active}
              initial={{ opacity: 0.6, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="flex-[2] overflow-hidden rounded-3xl border border-white/10 shadow-elegant"
            >
              <img
                src={images[active]}
                alt="main gym"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* SIDE STACK */}
            <div className="flex flex-col gap-4 flex-1">
              {images.map((img, i) => {
                if (i === active) return null;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 0.7, scale: 0.95 }}
                    className="flex-1 overflow-hidden rounded-2xl border border-white/10"
                  >
                    <img
                      src={img}
                      alt="gym"
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                );
              })}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}