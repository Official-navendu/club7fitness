import { motion } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";

const STATS = [
  { end: 12000, suffix: "+", label: "Active Members" },
  { end: 45, suffix: "+", label: "Expert Trainers" },
  { end: 12, suffix: "", label: "Years Experience" },
  { end: 120, suffix: "+", label: "Classes / Week" },
];

function StatItem({
  end,
  suffix,
  label,
  index,
}: (typeof STATS)[number] & { index: number }) {
  const { ref, value } = useCounter(end);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: false }}
      className="text-center"
    >
      <div className="flex items-baseline justify-center text-3xl font-bold sm:text-4xl lg:text-5xl">
        <span ref={ref}>{value.toLocaleString()}</span>
        <span className="text-primary ml-1">{suffix}</span>
      </div>

      <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="relative -mt-12 px-4 sm:px-6 lg:px-8">

      {/* 🔥 Animated Border (FIXED WAY) */}
      <div className="mx-auto max-w-6xl rounded-3xl p-[2px] relative overflow-hidden">

        {/* Moving Gradient Layer */}
        <div className="absolute inset-0 animate-borderMove bg-gradient-to-r from-primary via-[color:var(--primary-glow)] to-primary" />

        {/* Inner Card */}
        <div className="relative rounded-3xl bg-white px-6 py-10 shadow-elegant sm:py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((s, i) => (
              <StatItem key={s.label} {...s} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}