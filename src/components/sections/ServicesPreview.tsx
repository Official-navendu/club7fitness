import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { 
  Music, 
  Flame, 
  Dumbbell, 
  Users, 
  Trophy, 
  UserCheck,
  ChevronRight
} from "lucide-react";

// Local image imports from src/assets/images/services/
import zumbaImg from "@/assets/images/services/zumba.webp";
import hiitImg from "@/assets/images/services/hiit.webp";
import strengthImg from "@/assets/images/services/strength.webp";
import ladiesImg from "@/assets/images/services/ladies.webp";
import powerliftingImg from "@/assets/images/services/powerlifting.webp";
import ptImg from "@/assets/images/services/pt.webp";

interface ServiceItem {
  title: string;
  desc: string;
  img: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const SERVICES: ServiceItem[] = [
  {
    title: "Zumba Classes",
    desc: "Experience high-energy Zumba sessions that combine dance and fitness to improve stamina, coordination, and cardiovascular health.",
    img: zumbaImg,
    icon: Music
  },
  {
    title: "HIIT Training",
    desc: "Burn maximum calories in minimum time with scientifically designed HIIT workouts that improve endurance and athletic performance.",
    img: hiitImg,
    icon: Flame
  },
  {
    title: "Strength Training",
    desc: "Build muscle, improve strength, and enhance overall physical performance with structured strength development programs.",
    img: strengthImg,
    icon: Dumbbell
  },
  {
    title: "Ladies Exclusive Training Zone",
    desc: "Dedicated and comfortable training space designed exclusively for female members with specialized workout support.",
    img: ladiesImg,
    icon: Users,
    badge: "Women Only Area"
  },
  {
    title: "Powerlifting Arena",
    desc: "Specialized area built for serious powerlifters featuring professional-grade racks, barbells, and deadlift platforms.",
    img: powerliftingImg,
    icon: Trophy,
    badge: "Dedicated Powerlifting Zone"
  },
  {
    title: "Personal Training (PT)",
    desc: "Work one-on-one with certified fitness professionals who provide personalized coaching, motivation, and expert guidance.",
    img: ptImg,
    icon: UserCheck,
    badge: "Certified Trainers"
  }
];

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06
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

export function ServicesPreview() {
  return (
    <section className="bg-background py-16 md:py-20 relative overflow-hidden border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            What we offer
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Premium Fitness Services & <span className="text-primary-gradient bg-clip-text text-transparent">Experiences</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base">
            Explore our featured premium services built to deliver real results and performance.
          </p>
        </div>

        {/* CARDS GRID */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-60px" }} // Replays animation on scroll
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                variants={fadeUp}
                className="card-tilt group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-soft hover:border-primary/20 transition-all duration-300"
              >
                {/* Image Section */}
                <div className="aspect-[16/10] overflow-hidden relative bg-black/10">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {s.badge && (
                    <span className="absolute top-3 left-3 rounded-full bg-primary-gradient px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white shadow-soft">
                      {s.badge}
                    </span>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex-grow p-6 flex flex-col justify-between">
                  <div>
                    {/* Header: Title and Icon */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-base font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                        {s.title}
                      </h3>
                      {/* Icon container - kept clean & premium with high contrast */}
                      <div className="card-icon-container flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-xl shadow-soft">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>

                  {/* Divider and link */}
                  <div className="mt-5 flex items-center justify-between pt-3 border-t border-border group-hover:border-primary/20 transition-colors duration-300">
                    <Link
                      to="/services"
                      className="text-xs font-bold text-muted-foreground group-hover:text-primary transition-all duration-300 flex items-center gap-1 group-hover:translate-x-0.5"
                    >
                      Learn more
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Explore All Services button below cards */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary-gradient px-8 text-sm font-bold text-white shadow-glow hover:scale-[1.03] active:scale-95 transition-all cursor-pointer"
          >
            Explore All Services
          </Link>
        </div>

      </div>
    </section>
  );
}