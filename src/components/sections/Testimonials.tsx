import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import t1 from "@/assets/images/test-1.jpg";
import t2 from "@/assets/images/test-2.jpg";
import t3 from "@/assets/images/test-3.jpg";

const ITEMS = [
  {
    name: "Rohit Sharma",
    role: "Delhi · 2 years",
    img: t1,
    quote:
      "Club 7 ne meri fitness journey completely change kar di. Energy aur vibe next level hai.",
  },
  {
    name: "Priya Mehta",
    role: "Delhi · 1 year",
    img: t2,
    quote:
      "Maine yaha 12kg weight loss kiya aur confidence bhi gain kiya. Trainers amazing hain.",
  },
  {
    name: "Aman Verma",
    role: "Delhi · 3 years",
    img: t3,
    quote:
      "Best gym in Delhi. Equipment, training aur environment sab premium hai.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const [scrollDir, setScrollDir] = useState(1);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDir(currentY > lastY ? 1 : -1);
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const next = () => setI((p) => (p + 1) % ITEMS.length);
  const prev = () => setI((p) => (p - 1 + ITEMS.length) % ITEMS.length);

  const item = ITEMS[i];

  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">

      <div className="mx-auto max-w-6xl px-4">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Real <span className="text-primary">Transformations</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            What our Delhi members say
          </p>
        </div>

        {/* 🔥 CARD */}
        <motion.div
          key={scrollDir}
          initial={{ opacity: 0, x: scrollDir === 1 ? 120 : -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: "-100px" }}
          className="group relative rounded-3xl p-[2px] overflow-hidden"
        >

          {/* 🔥 BORDER LOOP */}
          <div className="absolute inset-0 animate-borderMove bg-gradient-to-r from-primary via-[color:var(--primary-glow)] to-primary opacity-70" />

          {/* INNER CARD */}
          <div className="relative bg-white rounded-3xl p-8 md:p-10 transition duration-300 group-hover:bg-primary">

            <div className="flex flex-col md:flex-row items-center gap-10">

              {/* IMAGE */}
              <div className="relative w-[240px] h-[300px] flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-2xl shadow-elegant"
                />
              </div>

              {/* TEXT */}
              <div className="text-center md:text-left">

                <p className="text-lg sm:text-xl leading-relaxed max-w-xl text-foreground transition group-hover:text-white">
                  “{item.quote}”
                </p>

                <div className="mt-6">
                  <h4 className="font-bold text-lg text-foreground group-hover:text-white">
                    {item.name}
                  </h4>
                  <p className="text-muted-foreground text-sm group-hover:text-white/80">
                    {item.role}
                  </p>
                </div>

                {/* ⭐ GOLDEN STARS */}
                <div className="flex justify-center md:justify-start gap-1 mt-3">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star
                      key={k}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* CONTROLS */}
        <div className="mt-10 flex justify-center gap-4">

          <button
            onClick={prev}
            className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition"
          >
            <ChevronRight />
          </button>

        </div>

      </div>

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
            animation: borderMove 6s linear infinite;
          }
        `}
      </style>

    </section>
  );
}