import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import ctaBg from "@/assets/images/cta.jpg";

export function CTA() {
  const bgRef = useRef<HTMLDivElement>(null);

  // 🔥 STRONG PARALLAX
  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const move = rect.top * 0.25;

      el.style.transform = `translateY(${move}px) scale(1.15)`;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-6xl rounded-3xl overflow-hidden p-[3px]"
      >

        {/* 🔥 GLOW BORDER */}
        <div className="absolute inset-0 animate-borderMove rounded-3xl bg-gradient-to-r from-primary via-[color:var(--primary-glow)] to-primary blur-[2px]" />

        {/* INNER */}
        <div className="relative rounded-3xl overflow-hidden">

          {/* 🔥 BACKGROUND IMAGE */}
          <div
            ref={bgRef}
            className="absolute inset-0 will-change-transform"
            style={{
              backgroundImage: `url(${ctaBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "scale(1.15)",
            }}
          />

          {/* 🔥 SMART OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

          {/* 🔥 CONTENT */}
          <div className="relative flex justify-center items-center px-4 py-12">

            <div className="text-center backdrop-blur-[6px] bg-black/30 rounded-2xl px-6 py-10 max-w-2xl">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Transform Your Body Today
              </h2>

              <p className="mt-3 text-white/90 text-sm sm:text-base">
                Join Delhi’s premium fitness club. Start your journey with a free trial.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">

                <Link
                  to="/contact"
                  className="group inline-flex h-11 items-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-primary transition hover:scale-105 shadow-lg"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex h-11 items-center rounded-xl border border-white/40 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  View Plans
                </Link>

              </div>

            </div>
          </div>
        </div>
      </motion.div>

      {/* 🔥 BORDER ANIMATION */}
      <style>
        {`
          @keyframes borderMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-borderMove {
            background-size: 300% 300%;
            animation: borderMove 5s linear infinite;
          }
        `}
      </style>

    </section>
  );
}