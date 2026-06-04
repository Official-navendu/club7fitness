import { useState, memo } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

// ✅ LOGOS
import logoMain from "@/assets/images/logo-main.png";
import logoWhite from "@/assets/images/logo-white.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export const Header = memo(function Header() {
  const scrolled = useScrollPosition(40);
  const [open, setOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const { pathname } = useLocation();

  // Form states
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", goal: "" });
  const [isSuccess, setIsSuccess] = useState(false);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);

    const phoneNum = "918810469577";
    const textMessage = `Hello Club 7 Fitness,

New Membership Inquiry

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Fitness Goal: ${formData.goal}

Please contact me regarding membership details.`;

    const waLink = `https://wa.me/${phoneNum}?text=${encodeURIComponent(textMessage)}`;
    
    // Simulate premium success animation before redirect
    setTimeout(() => {
      // Open WhatsApp
      window.open(waLink, "_blank");
      
      // Reset and close
      setIsSuccess(false);
      setFormData({ name: "", phone: "", email: "", goal: "" });
      setIsJoinOpen(false);
    }, 1500);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          transparent
            ? "bg-transparent"
            : "border-b border-white/5 backdrop-blur-md shadow-soft bg-gradient-to-r from-[#0b1c2c]/95 via-[#0f2a44]/95 to-[#0b1c2c]/95"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4 md:py-5">
          
          {/* ===== LOGO ===== */}
          <Link to="/" className="relative flex items-center pl-1 md:pl-2 h-16 w-32 md:w-36">
            <img
              src={logoMain}
              alt="Club 7 Fitness"
              className={cn(
                "absolute left-1 md:left-2 top-1/2 -translate-y-1/2 w-auto object-contain transition-all duration-500",
                transparent
                  ? "h-14 md:h-16 opacity-100 scale-100 drop-shadow-[0_0_12px_rgba(85,137,196,0.6)]"
                  : "h-12 md:h-14 opacity-0 scale-95 pointer-events-none"
              )}
              loading="eager"
              decoding="async"
            />
            <img
              src={logoWhite}
              alt="Club 7 Fitness"
              className={cn(
                "absolute left-1 md:left-2 top-1/2 -translate-y-1/2 w-auto object-contain transition-all duration-500",
                !transparent
                  ? "h-12 md:h-14 opacity-95 scale-95"
                  : "h-14 md:h-16 opacity-0 scale-100 pointer-events-none"
              )}
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* ===== DESKTOP NAV ===== */}
          <nav className="hidden items-center gap-10 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative text-sm font-medium text-white/80 transition-all duration-300 hover:text-white"
                activeProps={{
                  className: "text-white after:w-full",
                } as never}
                activeOptions={{ exact: true }}
              >
                {item.label}

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* ===== CTA ===== */}
          <div className="hidden md:block">
            <button
              onClick={() => setIsJoinOpen(true)}
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary-gradient px-6 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:scale-[1.05] active:scale-95 cursor-pointer"
            >
              Join Now
            </button>
          </div>

          {/* ===== MOBILE BUTTON ===== */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-white md:hidden cursor-pointer"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <div
          className={cn(
            "overflow-hidden border-t border-white/10 md:hidden transition-all duration-300",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
            "bg-gradient-to-b from-[#0b1c2c] to-[#0f2a44]"
          )}
        >
          <nav className="flex flex-col gap-1 px-4 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5 hover:text-white"
                activeProps={{ className: "text-primary bg-white/5" } as never}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={() => {
                setOpen(false);
                setIsJoinOpen(true);
              }}
              className="mt-3 inline-flex h-11 items-center justify-center rounded-full bg-primary-gradient px-5 text-sm font-semibold text-white cursor-pointer"
            >
              Join Now
            </button>
          </nav>
        </div>
      </header>

      {/* ===== JOIN NOW PREMIUM MODAL POPUP ===== */}
      <AnimatePresence>
        {isJoinOpen && (
          <div className="fixed inset-0 z-150 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsJoinOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl rounded-[24px] bg-white overflow-hidden shadow-elegant flex flex-col md:flex-row z-10 text-left text-slate-800 border border-slate-100"
            >
              {/* LEFT SIDE (40% on desktop) */}
              <div className="w-full md:w-[40%] bg-gradient-to-br from-[#0b1c2c] via-[#0d2238] to-[#122e4c] p-6 md:p-8 flex flex-col justify-between text-white relative overflow-hidden">
                {/* Theme compatible decorative glow */}
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
                <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[#5589c4]/15 blur-3xl pointer-events-none" />
                
                <div className="relative z-10 flex flex-col justify-center h-full">
                  {/* Logo */}
                  <motion.img
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    src={logoMain}
                    alt="Club 7 Fitness"
                    className="h-10 w-auto object-contain mb-6 self-start drop-shadow-[0_0_12px_rgba(85,137,196,0.35)]"
                  />
                  
                  {/* Heading */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl font-extrabold tracking-tight mb-3 leading-tight text-white"
                  >
                    Start Your Fitness Journey Today
                  </motion.h3>
                  
                  {/* Motivational content */}
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xs md:text-sm text-slate-300 leading-relaxed font-light"
                  >
                    Join Club 7 Fitness and get access to world-class equipment, certified trainers, recovery facilities, and a motivating fitness community designed to help you achieve your goals.
                  </motion.p>
                </div>
              </div>

              {/* RIGHT SIDE (60% on desktop) */}
              <div className="w-full md:w-[60%] bg-white p-6 md:p-8 flex flex-col justify-center relative">
                {/* Close button in top-right corner */}
                <button
                  onClick={() => setIsJoinOpen(false)}
                  className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition cursor-pointer z-20"
                >
                  <X className="h-4 w-4" />
                </button>

                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center w-full"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="h-16 w-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4"
                    >
                      <Check className="h-8 w-8 stroke-[3]" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Success!</h4>
                    <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                      Redirecting to WhatsApp to process your membership inquiry...
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* Headers */}
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight mb-1">
                      Begin Your Transformation
                    </h3>
                    <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed mb-5 max-w-xs">
                      Submit details below to query membership plans and start training in Delhi's elite wellness club.
                    </p>

                    {/* Existing membership form with improved fields styling */}
                    <form onSubmit={handleSubmit} className="w-full space-y-3.5">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-[#5589c4] focus:ring-2 focus:ring-[#5589c4]/15"
                        />
                      </div>

                      <div>
                        <input
                          type="tel"
                          required
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-[#5589c4] focus:ring-2 focus:ring-[#5589c4]/15"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-[#5589c4] focus:ring-2 focus:ring-[#5589c4]/15"
                        />
                      </div>

                      <div>
                        <select
                          required
                          value={formData.goal}
                          onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                          className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-800 outline-none transition focus:border-[#5589c4] focus:ring-2 focus:ring-[#5589c4]/15 cursor-pointer"
                        >
                          <option value="" disabled className="text-slate-400">Select your fitness goal</option>
                          <option value="Weight Loss" className="text-slate-800">Weight Loss</option>
                          <option value="Muscle Gain" className="text-slate-800">Muscle Gain</option>
                          <option value="Strength Building" className="text-slate-800">Strength Building</option>
                          <option value="General Fitness" className="text-slate-800">General Fitness</option>
                          <option value="Powerlifting" className="text-slate-800">Powerlifting</option>
                          <option value="Cardio Fitness" className="text-slate-800">Cardio Fitness</option>
                        </select>
                      </div>

                      {/* Improved Button Styling */}
                      <button
                        type="submit"
                        className="w-full flex h-11 items-center justify-center gap-2 rounded-xl bg-primary-gradient px-6 text-sm font-bold text-white shadow-elegant hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer mt-3.5 hover:shadow-glow"
                      >
                        Join Now
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
});