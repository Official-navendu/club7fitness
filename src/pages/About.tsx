import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Dumbbell, 
  UserCheck, 
  Users, 
  Activity, 
  Sparkles, 
  Clipboard,
  Flame,
  CheckCircle2
} from "lucide-react";

import { Trainers } from "@/components/sections/Trainers";
import { useCounter } from "@/hooks/useCounter";

// Local image imports for the About Page
import aboutHeroImg from "@/assets/images/about/hero.webp";
import aboutStoryImg from "@/assets/images/about/story.webp";
import aboutMissionImg from "@/assets/images/about/mission.webp";
import aboutVisionImg from "@/assets/images/about/vision.webp";
import aboutPhilosophyImg from "@/assets/images/about/philosophy.webp";

// 6 facility zones
import cardioZoneImg from "@/assets/images/about/cardio.webp";
import strengthZoneImg from "@/assets/images/about/strength.webp";
import powerliftingZoneImg from "@/assets/images/about/powerlifting.webp";
import womenZoneImg from "@/assets/images/about/women.webp";
import recoveryZoneImg from "@/assets/images/about/recovery.webp";
import cafeZoneImg from "@/assets/images/about/cafe.webp";

const FACILITY_ZONES = [
  {
    name: "Cardio Zone",
    desc: "Equipped with interactive commercial curved treadmills, stationary bikes, and stairmasters.",
    img: cardioZoneImg
  },
  {
    name: "Strength Zone",
    desc: "Imported strength stacks and plate-loaded machines engineered to safely target every muscle group.",
    img: strengthZoneImg
  },
  {
    name: "Powerlifting Zone",
    desc: "Deadlift platforms, competition-grade barbells, and heavy-duty squat racks for serious lifters.",
    img: powerliftingZoneImg
  },
  {
    name: "Women Training Area",
    desc: "A separate, safe, and fully equipped training zone designed exclusively for female members.",
    img: womenZoneImg
  },
  {
    name: "Recovery Area",
    desc: "Speed up muscle recovery and unwind in our premium steam baths and dry saunas.",
    img: recoveryZoneImg
  },
  {
    name: "Café Area",
    desc: "Recharge with freshly brewed complimentary coffee, macro-balanced meals, and recovery shakes.",
    img: cafeZoneImg
  }
];

const ACHIEVEMENTS = [
  { end: 12000, suffix: "+", label: "Lives Transformed" },
  { end: 12, suffix: "", label: "Years Experience" },
  { end: 45, suffix: "+", label: "Certified Coaches" },
  { end: 98, suffix: "%", label: "Member Satisfaction" },
];

const WHY_CHOOSE_US = [
  {
    title: "Modern Equipment",
    desc: "Imported strength and conditioning machines engineered for perfect biomechanics and safety.",
    icon: Dumbbell
  },
  {
    title: "Certified Coaches",
    desc: "Delhi's leading trainers focused on form correction, structural alignment, and injury prevention.",
    icon: UserCheck
  },
  {
    title: "Personal Guidance",
    desc: "1-on-1 consultations and structured workout logs adjusted constantly to match your fitness goals.",
    icon: Clipboard
  },
  {
    title: "Female Friendly Training",
    desc: "Dedicated and private training zones providing a comfortable, welcoming space for female members.",
    icon: Users
  },
  {
    title: "Nutrition Support",
    desc: "Customized diet blueprints curated by in-house clinical nutritionists to fuel muscle growth and fat loss.",
    icon: Flame
  },
  {
    title: "Recovery & Wellness",
    desc: "Premium steam baths, dry cedar saunas, and cold-shower therapy areas to maximize muscular repair.",
    icon: Sparkles
  }
];

const BENEFITS = [
  "All-Access Passes to multi-floor training zones",
  "Complimentary steam bath & sauna recovery sessions",
  "Freshly brewed pre-workout espresso at our coffee bar",
  "Monthly body composition scans and fitness tracking",
  "Highly hygienic lockers, clean showers, and changing rooms",
  "Invitations to exclusive member challenges and events"
];

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

function Achievement({ end, suffix, label }: (typeof ACHIEVEMENTS)[number]) {
  const { ref, value } = useCounter(end);

  return (
    <motion.div
      variants={fadeUp}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-glow"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="flex items-baseline justify-center text-4xl font-black tracking-tight text-white sm:text-6xl">
          <span ref={ref}>{value.toLocaleString()}</span>
          <span className="text-primary">{suffix}</span>
        </div>
        <div className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export function AboutPage() {
  return (
    <div className="overflow-hidden">
      
      {/* ================= 1. ABOUT HERO ================= */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-black text-white py-24 overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src={aboutHeroImg} 
            alt="Club 7 Fitness interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c2c] via-[#0b1c2c]/70 to-black" />
        </div>

        {/* Top Glow */}
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 backdrop-blur-md">
              Since 2014
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-none mb-6">
              Shaping Champions.<br />
              <span className="text-primary-gradient bg-clip-text text-transparent">Defining Strength.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-xl text-white/80 leading-relaxed font-medium">
              Club 7 Fitness is Nawada's premier luxury fitness club—combining elite athletic conditioning with modern recovery facilities to offer a world-class training experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. OUR STORY ================= */}
      <section className="bg-background py-20 md:py-28 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            {/* Text Column */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="text-left"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Heritage
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
                Redefining the fitness landscape, <span className="text-primary">one member at a time</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-5">
                Founded on the belief that fitness should be progressive, elite, and accessible, Club 7 Fitness was built to redefine the gym experience in Nawada. What started as a dedicated strength training area has grown into a multi-floor, state-of-the-art wellness facility featuring imported equipment, certified trainers, and premium recovery zones.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                We bridge the gap between heavy athletic training and holistic recovery. Inside our club, you are not just buying a gym membership; you are investing in a structured path towards total body transformation, backed by expert coaching and clean, premium spaces.
              </p>
            </motion.div>

            {/* Image Column */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="relative rounded-3xl p-[2px] overflow-hidden group shadow-soft"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-[color:var(--primary-glow)] to-primary opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-[22px] overflow-hidden bg-card">
                <img 
                  src={aboutStoryImg} 
                  alt="Trainer guiding member" 
                  className="w-full h-[380px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= 3. MISSION & 4. VISION ================= */}
      <section className="relative overflow-hidden bg-[#0b1c2c] text-white py-20 md:py-28 border-y border-white/5">
        <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            
            {/* Mission Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-xl transition hover:border-primary/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 shadow-soft">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                Our Mission
              </h3>
              <p className="text-sm leading-relaxed text-white/70">
                Our mission is to inspire, educate, and empower every member to achieve their highest physical potential. By combining evidence-based training programs, clinical-level nutrition planning, and advanced recovery facilities, we ensure a sustainable and injury-free transformation journey.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-xl transition hover:border-primary/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 shadow-soft">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                Our Vision
              </h3>
              <p className="text-sm leading-relaxed text-white/70">
                To stand as New Delhi's gold standard for premium athletic performance and wellness clubs—where high-energy conditioning meets holistic body recovery to cultivate a dedicated community of champions.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= 5. WHY CHOOSE CLUB 7 FITNESS ================= */}
      <section className="bg-background py-20 md:py-28 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The Club 7 Standard
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose Club 7 Fitness
            </h2>
            <p className="mt-4 text-muted-foreground">
              We provide an unmatched environment to ensure every session moves you closer to your goals.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-60px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {WHY_CHOOSE_US.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="group p-8 rounded-3xl border border-border bg-card shadow-soft hover:-translate-y-1.5 transition-all duration-300 hover:border-primary/20 hover:shadow-elegant"
                >
                  <div className="card-icon-container flex h-12 w-12 items-center justify-center rounded-2xl shadow-soft mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= 6. FACILITY SHOWCASE ================= */}
      <section className="bg-surface-darker text-white py-20 md:py-28 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-hero-gradient opacity-30 pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* SECTION HEADER */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Facility Tour
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              12,000+ Sq. Ft. <span className="text-primary-gradient bg-clip-text text-transparent">Premium Space</span>
            </h2>
            <p className="mt-4 text-white/70 text-sm sm:text-base">
              Explore the dedicated training zones engineered to elevate your workout experience and accelerate your recovery.
            </p>
          </div>

          {/* FACILITY ZONES GRID */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-60px" }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {FACILITY_ZONES.map((zone) => (
              <motion.div
                key={zone.name}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col justify-between shadow-soft hover:border-primary/20 transition-all duration-300"
              >
                {/* Visual Image */}
                <div className="aspect-[4/3] overflow-hidden relative bg-black/10">
                  <img 
                    src={zone.img} 
                    alt={zone.name} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 text-left flex-grow">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {zone.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                    {zone.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= 7. EXPERT TRAINERS ================= */}
      <section className="bg-background py-20 md:py-28 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Coaches
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Meet our <span className="text-primary">Expert Trainers</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Certified fitness professionals committed to guiding your transformations safely.
            </p>
          </div>

          <Trainers />
        </div>
      </section>

      {/* ================= 8. TRANSFORMATION PHILOSOPHY ================= */}
      <section className="bg-secondary/40 py-20 md:py-28 relative border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            {/* Text Info */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="text-left"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Philosophy
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground mb-6">
                Transformation built on <span className="text-primary">scientific foundations</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                We reject quick-fix shortcuts and generic programs. Our core philosophy is built on three essential pillars to guarantee real, sustainable transformations:
              </p>

              <div className="space-y-5">
                {[
                  { title: "Progressive Overload", desc: "Systematic increases in weight, reps, or volume to trigger continuous muscle growth and strength adaptation." },
                  { title: "Dynamic Nutrition Planning", desc: "Personalized diet charts built around clinical parameters, tailored to fuel workouts and optimize metabolic functions." },
                  { title: "Active Muscular Recovery", desc: "Prioritizing recovery through dry sauna, steam bath, and cold shower therapy to rebuild muscle fibers faster." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs flex-shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visual Info */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="relative rounded-3xl overflow-hidden shadow-elegant"
            >
              <img 
                src={aboutPhilosophyImg} 
                alt="Athlete training hard" 
                className="w-full h-[380px] md:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= 9. MEMBERSHIP BENEFITS ================= */}
      <section className="bg-background py-20 md:py-28 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Privileges
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Elite Membership Benefits
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every Club 7 Fitness membership includes premium perks designed for total wellness.
            </p>
          </div>

          <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2">
            {BENEFITS.map((benefit, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3.5 p-5 rounded-2xl border border-border bg-card shadow-soft hover:border-primary/20 transition-all duration-350"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0 shadow-soft">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <span className="font-semibold text-foreground text-sm text-left">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 10. CTA SECTION ================= */}
      <section className="relative overflow-hidden py-24 text-white text-center bg-[#0b1c2c]">
        {/* Glowing background shapes */}
        <div className="absolute top-1/2 left-1/2 h-[350px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Start Today
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight leading-none">
            Are you ready to unlock<br />
            your strongest self?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-white/70 font-medium">
            Join Club 7 Fitness and receive a complimentary body composition scan and customized workout blueprint.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary-gradient px-8 text-sm font-bold text-white shadow-glow hover:scale-[1.03] transition-all"
            >
              Join Club 7 Fitness
            </a>
            <a
              href="https://wa.me/918810469577?text=Hello%20Club%207%20Fitness%2C%20I%27d%20like%20to%20know%20more%20about%20your%20membership%20plans."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white/10 border border-white/20 px-8 text-sm font-bold text-white hover:bg-white/20 transition-all"
            >
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ================= BY THE NUMBERS (STATISTICS) ================= */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28 border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,59,59,0.18),transparent_50%)] pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              By the numbers
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              A track record<br />
              of real transformations
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
              Thousands of members have transformed their lives with our expert guidance, premium environment, and performance-driven culture.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {ACHIEVEMENTS.map((item) => (
              <Achievement key={item.label} {...item} />
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
