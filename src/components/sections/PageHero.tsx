import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--surface-darker)] pt-32 pb-20 text-white md:pt-40 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-hero-gradient" />
      <div className="absolute -left-32 top-1/2 -z-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -right-20 -top-10 -z-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-xl text-base text-white/70 sm:text-lg">{subtitle}</p>
        )}
      </motion.div>
    </section>
  );
}
