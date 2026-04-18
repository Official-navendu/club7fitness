import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

import t1 from "@/assets/images/trainer-1.jpg";
import t2 from "@/assets/images/trainer-2.jpg";
import t3 from "@/assets/images/trainer-3.jpg";
import t4 from "@/assets/images/trainer-4.jpg";

const TRAINERS = [
  { name: "Rahul Verma", role: "Strength Coach", img: t1 },
  { name: "Priya Sharma", role: "HIIT & Conditioning", img: t2 },
  { name: "Aman Singh", role: "Powerlifting Coach", img: t3 },
  { name: "Neha Kapoor", role: "Yoga & Mobility", img: t4 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export function Trainers() {
  return (
    <section className="bg-background py-16 md:py-20">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Meet the Team
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Coaches who push you{" "}
              <span className="text-primary">forward</span>
            </h2>
          </div>

          <p className="max-w-md text-muted-foreground text-sm sm:text-base">
            Certified trainers dedicated to transforming your fitness journey.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {TRAINERS.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-elegant"
            >

              {/* IMAGE */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* 🔥 HOVER OVERLAY */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* INSTAGRAM */}
                <a
                  href="#"
                  className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white hover:text-primary z-10"
                >
                  <Instagram className="h-4 w-4" />
                </a>

                {/* TEXT OVERLAY ON HOVER */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 transition duration-300 group-hover:opacity-100 z-10">

                  <h3 className="text-lg font-bold text-white">
                    {t.name}
                  </h3>

                  <p className="text-sm text-white/90">
                    {t.role}
                  </p>

                </div>
              </div>

              {/* DEFAULT TEXT */}
              <div className="p-5 text-center transition group-hover:opacity-0">
                <h3 className="text-base font-bold text-foreground">
                  {t.name}
                </h3>
                <p className="text-sm text-primary">{t.role}</p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}