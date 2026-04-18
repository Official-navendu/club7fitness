import { motion } from "framer-motion";
import t from "@/assets/images/eq-treadmill.jpg";
import d from "@/assets/images/eq-dumbbells.jpg";
import b from "@/assets/images/eq-bench.jpg";
import c from "@/assets/images/eq-cross.jpg";
import cb from "@/assets/images/eq-cable.jpg";
import s from "@/assets/images/eq-strength.jpg";
import { fadeUp, stagger } from "@/utils/motion";

const EQUIPMENT = [
  { img: t, title: "Treadmill", desc: "Latest commercial-grade treadmills with cushioned decks and HD displays." },
  { img: d, title: "Dumbbells", desc: "Full chrome dumbbell range from 2.5kg to 60kg for every level." },
  { img: b, title: "Bench Press", desc: "Olympic bench stations with safety spotters and competition bars." },
  { img: c, title: "Cross Trainer", desc: "Low-impact ellipticals built for endurance and joint-friendly cardio." },
  { img: cb, title: "Cable Machine", desc: "Multi-pulley cable systems for unlimited movement variations." },
  { img: s, title: "Strength Machines", desc: "Plate-loaded selectorized machines targeting every muscle group." },
];

export function Equipment() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Equipment
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Premium equipment, <span className="text-primary">built for results</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            We invest in the best so you can focus on what matters — your training.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {EQUIPMENT.map((e) => (
            <motion.article
              key={e.title}
              variants={fadeUp}
              className="card-tilt group overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={e.img}
                  alt={e.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
