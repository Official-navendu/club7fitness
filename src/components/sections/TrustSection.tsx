import { motion } from "framer-motion";
import { 
  Award, 
  Dumbbell, 
  Users, 
  Sparkles, 
  ClipboardCheck, 
  Heart,
  ShieldCheck,
  CheckCircle
} from "lucide-react";

interface TrustPillar {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PILLARS: TrustPillar[] = [
  {
    title: "Certified Trainers",
    desc: "1-on-1 direct coaching by national-level athletes and international fitness certification holders.",
    icon: Award
  },
  {
    title: "Modern Equipment",
    desc: "Imported strength stacks and specialized biomechanical tracks engineered to maximize safety.",
    icon: Dumbbell
  },
  {
    title: "Dedicated Female Zone",
    desc: "Safe, separate, and comfortable training arenas for our female members to exercise with total freedom.",
    icon: Users
  },
  {
    title: "Recovery Facilities",
    desc: "Cedar-wood saunas, customized steam rooms, and dedicated cryo-showers to accelerate muscular repair.",
    icon: Sparkles
  },
  {
    title: "Personalized Programs",
    desc: "Macro-balanced nutrition charts and structured workout logs tailor-made around your body composition.",
    icon: ClipboardCheck
  },
  {
    title: "Community Environment",
    desc: "An active, professional fitness culture where goals are achieved and celebrated collectively.",
    icon: Heart
  }
];

const STATS = [
  { value: "12,000+", label: "Transforms Completed" },
  { value: "12 Years", label: "Elite Club Experience" },
  { value: "45+", label: "National Certified Coaches" },
  { value: "98.4%", label: "Satisfaction Rate" }
];

const BADGES = [
  "Delhi's Elite Strength Club",
  "Uttam Nagar's Premier Gym",
  "ISO 9001:2015 Certified Facility",
  "100% Genuine Supplement Guarantee"
];

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

export function TrustSection() {
  return (
    <section className="bg-surface-darker text-white py-20 relative overflow-hidden border-t border-white/5">
      {/* Background flare */}
      <div className="absolute inset-0 bg-hero-gradient opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Trust & Authority
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Trusted By Fitness Enthusiasts <span className="text-primary-gradient bg-clip-text text-transparent">Across Uttam Nagar</span>
          </h2>
          <p className="mt-4 text-white/70 text-sm sm:text-base">
            For over a decade, we have been Nawada's benchmark for elite physical culture, transformations, and premium lifestyle development.
          </p>
        </div>

        {/* PILLARS GRID */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16"
        >
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl transition duration-300 hover:border-primary/20"
              >
                <div className="card-icon-container flex h-11 w-11 items-center justify-center rounded-xl shadow-soft mb-6">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* STATISTICS STRIP */}
        <div className="border-y border-white/10 py-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary-gradient bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TRUST BADGES STRIP */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {BADGES.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 text-white/80 font-bold text-xs uppercase tracking-widest">
              <ShieldCheck className="h-4.5 w-4.5 text-primary" />
              <span>{badge}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
