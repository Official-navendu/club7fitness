import { motion } from "framer-motion";
import { 
  UserCheck, 
  Dumbbell, 
  Users, 
  Trophy, 
  Sparkles, 
  ClipboardList 
} from "lucide-react";

interface BenefitCard {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CARDS: BenefitCard[] = [
  {
    title: "Certified Trainers",
    desc: "Delhi's top certified coaches dedicated to form correction, personal guidance, and structured transformations.",
    icon: UserCheck
  },
  {
    title: "Modern Equipment",
    desc: "Equipped with world-class, premium international fitness brands to guarantee smooth biomechanics and safety.",
    icon: Dumbbell
  },
  {
    title: "Women Friendly Environment",
    desc: "Dedicated and private training zones providing a comfortable, welcoming, and safe space for female members.",
    icon: Users
  },
  {
    title: "Powerlifting Zone",
    desc: "Heavy-duty deadlift platforms, competition-grade squat racks, and specialized barbells built for serious strength.",
    icon: Trophy
  },
  {
    title: "Recovery Facilities",
    desc: "Restore and repair muscle fibers in our luxury steam bath, dry cedar sauna, and cold-shower therapy areas.",
    icon: Sparkles
  },
  {
    title: "Personalized Training Plans",
    desc: "Customized workout splits and tailored macro nutrition blueprints structured around your body type and goals.",
    icon: ClipboardList
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

export function WhyChooseUs() {
  return (
    <section className="bg-background py-16 md:py-24 relative overflow-hidden border-t border-border">
      {/* Subtle top gradient flare */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#0b1c2c]/5 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Why Us
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose <span className="text-primary-gradient bg-clip-text text-transparent">Club 7 Fitness?</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base">
            Experience Uttam Nagar's premier luxury fitness club—designed to support your transformation with world-class facilities and expert coaching.
          </p>
        </div>

        {/* CARDS GRID */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="group p-8 rounded-3xl border border-border bg-card shadow-soft hover:-translate-y-1.5 transition-all duration-300 hover:border-primary/20 hover:shadow-glow text-left"
              >
                <div className="card-icon-container flex h-12 w-12 items-center justify-center rounded-2xl shadow-soft mb-6">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
