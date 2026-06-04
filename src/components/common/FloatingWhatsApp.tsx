import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  MessageSquare, 
  UserCheck, 
  Flame, 
  Trophy, 
  Calendar, 
  Info 
} from "lucide-react";

export function FloatingWhatsApp() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const phone = "918810469577";

  const options = [
    {
      label: "Membership Inquiry",
      icon: MessageSquare,
      text: "Hello Club 7 Fitness,\n\nI would like to know more about membership plans."
    },
    {
      label: "Personal Training (PT)",
      icon: UserCheck,
      text: "Hello Club 7 Fitness,\n\nI am interested in Personal Training (PT). Please share details."
    },
    {
      label: "Weight Loss Program",
      icon: Flame,
      text: "Hello Club 7 Fitness,\n\nI would like guidance regarding your Weight Loss Program."
    },
    {
      label: "Powerlifting Training",
      icon: Trophy,
      text: "Hello Club 7 Fitness,\n\nI am interested in Powerlifting Training. Please share details."
    },
    {
      label: "Book Gym Visit",
      icon: Calendar,
      text: "Hello Club 7 Fitness,\n\nI would like to schedule a gym visit and explore the facilities.\n\nPlease share available timings.\n\nThank you."
    },
    {
      label: "General Information",
      icon: Info,
      text: "Hello Club 7 Fitness,\n\nI would like to know more about Club 7 Fitness services and facilities."
    }
  ];

  const handleRedirect = (messageText: string) => {
    const link = `https://wa.me/${phone}?text=${encodeURIComponent(messageText)}`;
    window.open(link, "_blank");
    setIsPanelOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-8 right-4 md:right-8 z-50 flex flex-col items-end">
        {/* ===== QUICK OPTIONS PANEL ===== */}
        <AnimatePresence>
          {isPanelOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 w-[290px] sm:w-[330px] md:w-[360px] rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-gradient-to-b from-[#0b1c2c]/98 to-[#0f2a44]/98 backdrop-blur-md text-white"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#0b1c2c] to-[#0f2a44] p-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center p-1.5 shadow-sm">
                    <svg viewBox="0 0 24 24" className="h-full w-full fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-none">Club 7 Fitness Support</h4>
                    <span className="text-[10px] text-green-400 flex items-center gap-1 font-medium mt-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                      Online • Ready to assist
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsPanelOpen(false)}
                  className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Options */}
              <div className="p-4 bg-slate-950/20 max-h-[350px] overflow-y-auto">
                <p className="text-xs text-white/60 mb-3 px-1">How can we help you?</p>
                <div className="space-y-2">
                  {options.map((opt) => {
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.label}
                        onClick={() => handleRedirect(opt.text)}
                        className="w-full flex items-center gap-3.5 p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-primary/20 text-left transition-all duration-300 group cursor-pointer"
                      >
                        <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary-gradient group-hover:text-white transition-all duration-300 shrink-0">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <span className="text-sm font-semibold text-white/90 group-hover:text-primary transition-colors">
                          {opt.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===== WIDGET TOGGLE BUTTON ===== */}
        <button
          onClick={() => setIsPanelOpen(!isPanelOpen)}
          aria-label="WhatsApp Support Widget"
          className="flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#0b1c2c] via-[#0f2a44] to-[#0b1c2c] border border-primary/40 px-5 py-3.5 text-white shadow-elegant hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group animate-softPulse"
        >
          {/* Green official WhatsApp Icon badge */}
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white p-0.5 shadow-sm group-hover:rotate-12 transition-transform duration-300">
            <svg viewBox="0 0 24 24" className="h-full w-full fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <span className="text-xs md:text-sm font-bold tracking-wide text-white">
            We're Here To Help
          </span>
        </button>
      </div>

      {/* Global CSS for soft pulsate and clean styles */}
      <style>
        {`
          @keyframes softPulse {
            0% {
              box-shadow: 0 0 0 0 rgba(85, 137, 196, 0.45);
            }
            70% {
              box-shadow: 0 0 0 12px rgba(85, 137, 196, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(85, 137, 196, 0);
            }
          }

          .animate-softPulse {
            animation: softPulse 3s infinite;
          }
        `}
      </style>
    </>
  );
}
