import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Music, 
  Sparkles, 
  Flame, 
  Dumbbell, 
  Zap, 
  Users, 
  Activity, 
  Trophy, 
  Droplet, 
  Thermometer, 
  Snowflake, 
  Coffee, 
  Utensils, 
  CupSoda, 
  ShoppingBag, 
  Clipboard, 
  Calendar, 
  UserCheck,
  X,
  MessageCircle,
  Clock,
  Check,
  ChevronRight,
  ShieldCheck,
  HeartHandshake
} from "lucide-react";

// Local image imports from src/assets/images/services/
import zumbaImg from "@/assets/images/services/zumba.webp";
import yogaImg from "@/assets/images/services/yoga.webp";
import hiitImg from "@/assets/images/services/hiit.webp";
import strengthImg from "@/assets/images/services/strength.webp";
import cardioImg from "@/assets/images/services/cardio.webp";
import ladiesImg from "@/assets/images/services/ladies.webp";
import crossfitImg from "@/assets/images/services/crossfit.webp";
import weightImg from "@/assets/images/services/weight.webp";
import powerliftingImg from "@/assets/images/services/powerlifting.webp";
import steamImg from "@/assets/images/services/steam.webp";
import saunaImg from "@/assets/images/services/sauna.webp";
import iceImg from "@/assets/images/services/ice.webp";
import cafeImg from "@/assets/images/services/cafe.webp";
import dietImg from "@/assets/images/services/diet.webp";
import coffeeImg from "@/assets/images/services/coffee.webp";
import supplementImg from "@/assets/images/services/supplement.webp";
import dietchartImg from "@/assets/images/services/dietchart.webp";
import workoutplanImg from "@/assets/images/services/workoutplan.webp";
import ptImg from "@/assets/images/services/pt.webp";

interface ServiceItem {
  title: string;
  desc: string;
  img: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  benefits: string[];
  duration: string;
  whyChoose: string;
  category: "training" | "recovery" | "nutrition" | "facilities";
  suitableFor: string;
}

const SERVICES: ServiceItem[] = [
  {
    title: "Zumba Classes",
    desc: "Experience high-energy Zumba sessions that combine dance and fitness to improve stamina, coordination, flexibility, and overall cardiovascular health while making every workout enjoyable.",
    img: zumbaImg,
    icon: Music,
    benefits: ["High-energy cardio workout", "Improves balance and coordination", "Full-body toning & calorie burn"],
    duration: "Mon, Wed, Fri · 60 mins",
    whyChoose: "Led by certified Zumba instructors in an energetic party-like atmosphere.",
    category: "training",
    suitableFor: "Anyone looking for a fun, high-energy cardio workout to burn calories while dancing."
  },
  {
    title: "Yoga & Mindfulness",
    desc: "Improve flexibility, posture, breathing, recovery, and mental wellness through guided yoga sessions designed for all fitness levels.",
    img: yogaImg,
    icon: Sparkles,
    benefits: ["Increases core strength and flexibility", "Reduces stress and mental fatigue", "Aids in posture alignment and muscle recovery"],
    duration: "Tue, Thu, Sat · 60 mins",
    whyChoose: "Peaceful studio setting with experienced yogis specialized in mindfulness and anatomy.",
    category: "training",
    suitableFor: "All fitness levels looking to improve flexibility, balance, alignment, and mental clarity."
  },
  {
    title: "HIIT Training",
    desc: "Burn maximum calories in minimum time with scientifically designed HIIT workouts that improve endurance, fat loss, and athletic performance.",
    img: hiitImg,
    icon: Flame,
    benefits: ["Efficient calorie burn post-workout", "Boosts metabolic rate", "Improves aerobic and anaerobic endurance"],
    duration: "Daily Sessions · 45 mins",
    whyChoose: "Scientifically structured intervals designed to push boundaries under heart-rate tracking guidance.",
    category: "training",
    suitableFor: "Individuals seeking high-intensity conditioning, fat loss, and maximum calorie burn in short sessions."
  },
  {
    title: "Strength Training",
    desc: "Build muscle, improve strength, and enhance overall physical performance with structured strength development programs.",
    img: strengthImg,
    icon: Dumbbell,
    benefits: ["Accelerates muscle hypertrophy", "Enhances bone density and joint stability", "Improves overall athletic performance"],
    duration: "Daily Sessions · 60-90 mins",
    whyChoose: "Structured progression protocols guided by elite national-level strength coaches.",
    category: "training",
    suitableFor: "Individuals aiming to build muscle mass, enhance bone density, and increase physical lifting capacity."
  },
  {
    title: "Cardio Training",
    desc: "Boost heart health, endurance, and calorie burn using advanced cardio equipment and customized workout routines.",
    img: cardioImg,
    icon: Zap,
    benefits: ["Improves lung capacity and heart health", "Supports fat burning", "Boosts daily energy levels"],
    duration: "Self-paced / Guided · Open daily",
    whyChoose: "Equipped with state-of-the-art interactive treadmills, self-powered curves, and stationary bikes.",
    category: "training",
    suitableFor: "Members looking to boost cardiovascular health, increase stamina, and warm up effectively."
  },
  {
    title: "Ladies Exclusive Training Zone",
    desc: "Dedicated and comfortable training space designed exclusively for female members with specialized workout support and privacy.",
    img: ladiesImg,
    icon: Users,
    badge: "Women Only Area",
    benefits: ["Highly comfortable & private space", "Specialized fitness coaching for women", "Dedicated equipment and training zone"],
    duration: "Open Daily · 5:00 - 23:00",
    whyChoose: "A dedicated women-only workout environment ensuring total comfort, safety, and specialized female trainers.",
    category: "facilities",
    suitableFor: "Female members seeking total privacy, comfort, and specialized training splits for women's fitness goals."
  },
  {
    title: "CrossFit & Abs Training",
    desc: "Challenge your limits with functional fitness programs focused on endurance, agility, strength, core development, and athletic conditioning.",
    img: crossfitImg,
    icon: Activity,
    benefits: ["Improves core strength and posture", "Builds functional power and agility", "Enhances stamina and endurance"],
    duration: "Mon to Sat · 60 mins",
    whyChoose: "Delhi's most comprehensive CrossFit rig and bumper plate training arena.",
    category: "training",
    suitableFor: "Fitness enthusiasts looking for core development, high-intensity conditioning, and functional power."
  },
  {
    title: "Weight Training",
    desc: "Achieve muscle growth, body transformation, and strength progression with professional weight training programs.",
    img: weightImg,
    icon: Trophy,
    benefits: ["Builds strength and muscle volume", "Improves body composition", "Boosts base metabolic rate"],
    duration: "Self-paced / Guided · Open daily",
    whyChoose: "Premium selection of plate-loaded and selectorized weight stacks for all experience levels.",
    category: "training",
    suitableFor: "Beginners to advanced lifters aiming to sculpt their body, tone muscles, and increase strength."
  },
  {
    title: "Powerlifting Arena",
    desc: "Specialized area built for serious powerlifters featuring professional-grade equipment and performance-focused training environments.",
    img: powerliftingImg,
    icon: Trophy,
    badge: "Dedicated Powerlifting Zone",
    benefits: ["Professional deadlift platforms", "Competition-grade barbells and squat racks", "Specialized lifting climate"],
    duration: "Open Daily · 5:00 - 23:00",
    whyChoose: "Designed specifically for heavy squat, bench, and deadlift training with high-tensile bars and bumper plates.",
    category: "facilities",
    suitableFor: "Powerlifters and strength athletes focusing on squat, bench press, and deadlift performance."
  },
  {
    title: "Steam Bath",
    desc: "Recover faster, improve circulation, and relax your muscles after intense workouts with our premium steam bath facility.",
    img: steamImg,
    icon: Droplet,
    benefits: ["Relaxes tense muscles", "Improves blood circulation", "Cleanses skin and aids detoxification"],
    duration: "Post-workout · 15-20 mins",
    whyChoose: "Luxury steam chamber with strict temperature controls and absolute hygiene monitoring.",
    category: "recovery",
    suitableFor: "Members needing deep physical relaxation, skin detoxification, and accelerated muscle recovery."
  },
  {
    title: "Sauna Therapy",
    desc: "Support recovery, detoxification, and relaxation with professional sauna sessions designed for overall wellness.",
    img: saunaImg,
    icon: Thermometer,
    benefits: ["Reduces muscle soreness and joint pain", "Supports cardiovascular health", "Promotes deep relaxation and sleep quality"],
    duration: "Post-workout · 15-20 mins",
    whyChoose: "Premium cedar wood sauna designed to maintain dry heat for optimal recovery.",
    category: "recovery",
    suitableFor: "Athletes seeking to reduce joint stiffness, relieve muscle soreness, and unwind post-workout."
  },
  {
    title: "Ice Shower Recovery",
    desc: "Enhance recovery, reduce muscle soreness, and improve circulation through cold-water recovery therapy.",
    img: iceImg,
    icon: Snowflake,
    benefits: ["Reduces inflammation and swelling", "Speeds up muscle tissue repair", "Invigorates central nervous system"],
    duration: "Post-workout · 3-5 mins",
    whyChoose: "Dedicated cold-water immersion shower for advanced recovery.",
    category: "recovery",
    suitableFor: "Advanced athletes and high-performance lifters looking to minimize inflammation and physical soreness."
  },
  {
    title: "Indoor Fitness Café",
    desc: "Relax, recharge, and socialize in our modern in-house café designed exclusively for members.",
    img: cafeImg,
    icon: Coffee,
    benefits: ["Perfect space to relax and unwind", "Socialize with fellow fitness enthusiasts", "Work-friendly environment with free Wi-Fi"],
    duration: "Open Daily · 7:00 - 22:00",
    whyChoose: "A premium café lounge built right inside the gym, offering comfort and healthy vibes.",
    category: "facilities",
    suitableFor: "Members wanting to socialize, work on their laptops, or unwind after a demanding training session."
  },
  {
    title: "Healthy Diet Café",
    desc: "Fuel your fitness journey with nutritious meals, protein shakes, healthy snacks, and wellness-focused beverages.",
    img: dietImg,
    icon: Utensils,
    benefits: ["Chef-curated macro-balanced meals", "Fresh high-protein shakes and smoothies", "Guilt-free healthy snacks"],
    duration: "Open Daily · 7:00 - 22:00",
    whyChoose: "Nutrition-first menu where every single meal comes with detailed calorie and macro counts.",
    category: "nutrition",
    suitableFor: "Anyone wanting high-quality, pre/post-workout nutrition, macro-counted meals, and recovery shakes."
  },
  {
    title: "Complimentary Coffee",
    desc: "All members enjoy complimentary coffee to keep energy levels high before or after training sessions.",
    img: coffeeImg,
    icon: Coffee,
    badge: "Free For Members",
    benefits: ["Pre-workout energy booster", "Premium freshly brewed coffee beans", "Available to all active members"],
    duration: "Available Daily",
    whyChoose: "Self-service premium espresso station to fuel your training sessions at zero cost.",
    category: "facilities",
    suitableFor: "All active members looking for a quick caffeine boost to power their workouts or recover."
  },
  {
    title: "Supplement Store",
    desc: "Purchase authentic fitness supplements, proteins, vitamins, and wellness products at competitive and genuine prices.",
    img: supplementImg,
    icon: ShoppingBag,
    badge: "Authentic Products Only",
    benefits: ["100% genuine and verified brands", "Competitive member pricing", "Expert supplement advice"],
    duration: "Open Daily · 9:00 - 21:00",
    whyChoose: "Guaranteed authentic products from official distributors to ensure your health and safety.",
    category: "nutrition",
    suitableFor: "Members seeking trusted, authentic whey proteins, amino acids, creatine, and active multivitamins."
  },
  {
    title: "Personalized Diet Charts",
    desc: "Receive customized diet plans based on your fitness goals, body composition, lifestyle, and nutritional requirements.",
    img: dietchartImg,
    icon: Clipboard,
    benefits: ["Tailored specifically to your metabolism", "Easy to follow meal plans", "Regular updates and consultation"],
    duration: "Monthly consultations",
    whyChoose: "Diet plans designed by in-house clinical nutritionists, not generic AI calculators.",
    category: "nutrition",
    suitableFor: "Anyone wanting a structured diet blueprint optimized for muscle gain, fat loss, or specific health needs."
  },
  {
    title: "Customized Workout Plans",
    desc: "Structured training programs designed specifically around your goals, fitness level, and transformation journey.",
    img: workoutplanImg,
    icon: Calendar,
    benefits: ["Structured training splits", "Targeted muscle group progression", "Adapted to your schedule"],
    duration: "Updated every 4-6 weeks",
    whyChoose: "Workout structures crafted by head coaches to ensure constant progression without plateaus.",
    category: "training",
    suitableFor: "Lifters seeking a systematic, periodized program to build strength and break training plateaus."
  },
  {
    title: "Personal Training (PT)",
    desc: "Work one-on-one with certified fitness professionals who provide personalized coaching, motivation, progress tracking, and expert guidance.",
    img: ptImg,
    icon: UserCheck,
    badge: "Certified Trainers",
    benefits: ["Accelerated transformation results", "Form correction and injury prevention", "Accountability and constant motivation"],
    duration: "Scheduled sessions",
    whyChoose: "1-on-1 coaching by certified trainers with proven success in body transformations.",
    category: "training",
    suitableFor: "Anyone wanting expert form guidance, absolute accountability, and an accelerated transformation path."
  }
];

const WHY_CHOOSE_CLUB7 = [
  {
    title: "Certified Trainers",
    desc: "Delhi's top certified fitness coaches with decades of collective experience, dedicated to form correction and structured progressions.",
    icon: UserCheck
  },
  {
    title: "Imported Equipment",
    desc: "Equipped with world-class, premium international fitness brands to guarantee smooth biomechanics and safety.",
    icon: Dumbbell
  },
  {
    title: "Women Friendly Environment",
    desc: "Comfortable, safe, and private zones designed exclusively for our female members to train with total confidence.",
    icon: Users
  },
  {
    title: "Dedicated Powerlifting Zone",
    desc: "Heavy squat racks, competition-grade platforms, and professional barbells engineered specifically for heavy lifts.",
    icon: Trophy
  },
  {
    title: "Recovery Facilities",
    desc: "Unwind and repair muscle fibers in our luxury steam bath, sauna, and cryotherapy ice shower recovery areas.",
    icon: Sparkles
  },
  {
    title: "Customized Fitness Plans",
    desc: "No cookie-cutter workouts. Tailor-made nutrition blueprints and workout splits structured around your exact body type.",
    icon: Clipboard
  }
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
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

export function PremiumServices() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<"all" | "training" | "recovery" | "nutrition" | "facilities">("all");

  const getWhatsAppLink = (serviceName: string) => {
    const phone = "918810469577";
    const message = `Hello Club 7 Fitness,

I am interested in the ${serviceName} service.

Please share more details.

Regards`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const filteredServices = SERVICES.filter(
    (service) => activeCategory === "all" || service.category === activeCategory
  );

  return (
    <section className="bg-background py-20 md:py-28 relative">
      {/* Absolute top gradient flare */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#0b1c2c]/10 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Club 7 Experiences
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Premium Fitness Services &{" "}
            <span className="text-primary-gradient bg-clip-text text-transparent">Member Benefits</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Everything you need for fitness, recovery, nutrition, performance, and transformation under one roof.
          </p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:gap-3">
          {(["all", "training", "recovery", "nutrition", "facilities"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-soft border",
                activeCategory === cat
                  ? "bg-primary-gradient text-white border-transparent scale-105"
                  : "bg-card text-muted-foreground border-border hover:border-primary/20 hover:text-foreground"
              )}
            >
              {cat === "all" ? "All Services" : cat}
            </button>
          ))}
        </div>

        {/* SERVICES GRID */}
        <motion.div
          layout
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-60px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                layout
                key={service.title}
                variants={fadeUp}
                onClick={() => setSelectedService(service)}
                className="card-tilt group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-soft cursor-pointer transition-all duration-400 hover:border-primary/30 hover:shadow-glow"
              >
                {/* Image Section */}
                <div className="aspect-[16/10] overflow-hidden relative bg-black/10">
                  <img
                    src={service.img}
                    alt={service.title}
                    width={600}
                    height={375}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {service.badge && (
                    <span className="absolute top-4 left-4 rounded-full bg-primary-gradient px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-soft">
                      {service.badge}
                    </span>
                  )}
                  {/* Subtle hover zoom visual helper */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-xs font-semibold text-white uppercase tracking-widest border border-white/20 px-4 py-2 rounded-xl backdrop-blur-sm bg-white/10">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-grow p-6 flex flex-col justify-between">
                  <div>
                    {/* Header: Title and Icon */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                        {service.title}
                      </h3>
                      <div className="card-icon-container flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl shadow-soft">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {service.desc}
                    </p>
                  </div>

                  {/* Luxury dynamic chevron indicator */}
                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-border group-hover:border-primary/20 transition-colors duration-300">
                    <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      Learn More
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* WHY CHOOSE CLUB 7 FITNESS SECTION */}
        <div className="mt-28 border-t border-border pt-24">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Why Us
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose <span className="text-primary-gradient bg-clip-text text-transparent">Club 7 Fitness</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Experience the pinnacle of wellness, strength, and community in Nawada's elite training facility.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-60px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {WHY_CHOOSE_CLUB7.map((item) => {
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

      </div>

      {/* SERVICE MODAL POPUP */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              className="relative w-full max-w-4xl rounded-3xl bg-card border border-border shadow-elegant overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh] md:max-h-[85vh] text-left"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-25 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 border border-white/10 text-white backdrop-blur hover:bg-black/80 transition shadow-soft cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Left Column: Image */}
              <div className="w-full md:w-1/2 relative min-h-[220px] md:min-h-full bg-black/20">
                <img
                  src={selectedService.img}
                  alt={selectedService.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {selectedService.badge && (
                  <span className="absolute top-4 left-4 rounded-full bg-primary-gradient px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-soft">
                    {selectedService.badge}
                  </span>
                )}
                {/* Dark overlay inside image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/30 pointer-events-none" />
              </div>

              {/* Right Column: Scrollable Details */}
              <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col justify-between bg-card text-foreground">
                <div>
                  {/* Availability/Duration strip */}
                  <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider mb-3">
                    <Clock className="h-4 w-4" />
                    <span>{selectedService.duration}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight mb-4">
                    {selectedService.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                    {selectedService.desc}
                  </p>

                  {/* Suitable For */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2 flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-primary" />
                      Suitable For
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {selectedService.suitableFor}
                    </p>
                  </div>

                  {/* Why Choose Service */}
                  <div className="bg-secondary/40 border border-border p-4 rounded-2xl mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-1.5 flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      Why choose Club 7 Fitness
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {selectedService.whyChoose}
                    </p>
                  </div>

                  {/* Benefits checklist */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3.5 flex items-center gap-1.5">
                      <HeartHandshake className="h-4 w-4 text-primary" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedService.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                            <Check className="h-3 w-3 stroke-[3]" />
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-border mt-auto">
                  <a
                    href="/contact"
                    onClick={() => setSelectedService(null)}
                    className="flex-1 inline-flex h-11 items-center justify-center rounded-xl bg-foreground text-background font-semibold text-sm transition hover:opacity-90 shadow-soft cursor-pointer text-center"
                  >
                    Book Consultation
                  </a>
                  <a
                    href={getWhatsAppLink(selectedService.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex h-11 items-center justify-center rounded-xl bg-primary-gradient text-white font-semibold text-sm transition hover:scale-[1.02] shadow-soft gap-2 cursor-pointer text-center"
                  >
                    <MessageCircle className="h-4 w-4 fill-white text-white" />
                    WhatsApp Inquiry
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
