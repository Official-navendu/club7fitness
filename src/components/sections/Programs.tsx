import { motion } from "framer-motion";
import w from "@/assets/images/prog-weight.jpg";
import c from "@/assets/images/prog-cardio.jpg";
import p from "@/assets/images/prog-personal.jpg";
import f from "@/assets/images/prog-fatloss.jpg";
import m from "@/assets/images/prog-muscle.jpg";
import { fadeUp, stagger } from "@/utils/motion";

const PROGRAMS = [
  { img: w, title: "Weight Training", desc: "Progressive strength programming with proper form coaching." },
  { img: c, title: "Cardio", desc: "Build endurance with structured zone-based cardio sessions." },
  { img: p, title: "Personal Training", desc: "1-on-1 with a certified coach who designs your roadmap." },
  { img: f, title: "Fat Loss", desc: "High-intensity training plans paired with nutrition guidance." },
  { img: m, title: "Muscle Gain", desc: "Hypertrophy-focused splits engineered for visible results." },
];

export function Programs() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Training Programs
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Find the program that <span className="text-primary">fits your goal</span>
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROGRAMS.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              className="card-tilt group relative overflow-hidden rounded-2xl shadow-soft"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--surface-darker)] via-[color:var(--surface-darker)]/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-white/80">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
