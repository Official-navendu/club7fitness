import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, Dumbbell, MessageCircle, UserCheck } from "lucide-react";

import logoMain from "@/assets/images/logo-main.png";
import logoWhite from "@/assets/images/logo-white.png";

export function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">

      {/* 🔥 ANIMATED BG */}
      <div className="absolute inset-0 -z-10 bg-hero-gradient animate-gradientMove" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">

        {/* ===== BRAND ===== */}
        <div>
          <div className="group relative inline-block cursor-pointer">

            <img
              src={logoMain}
              alt="logo"
              className="h-12 transition-opacity duration-300 group-hover:opacity-0"
            />

            <img
              src={logoWhite}
              alt="logo white"
              className="absolute top-0 left-0 h-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

          </div>

          <p className="mt-4 text-sm text-white/70 max-w-xs">
            Train smart. Live strong. Premium fitness experience built for real results.
          </p>

          {/* SOCIAL */}
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-all duration-300 hover:bg-primary hover:scale-110"
              >
                <Icon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              </a>
            ))}
          </div>
        </div>

        {/* ===== LINKS ===== */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h4>

          <ul className="space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="relative inline-block text-white/70 transition-all duration-300 hover:text-white group"
                >
                  {l.label}

                  {/* 🔥 UNDERLINE ANIMATION */}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== CONTACT ===== */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h4>

          <ul className="space-y-3.5 text-sm text-white/70">
            <li className="flex items-start gap-2.5 group hover:text-white transition">
              <MapPin className="mt-0.5 h-4 w-4 text-primary group-hover:scale-110 flex-shrink-0" />
              <div>
                <span>B-17, Main Matiala Road, Nawada, Uttam Nagar, Delhi 110059</span>
                <span className="block text-[11px] text-white/40 mt-1">Nearest Metro: Nawada Metro Station</span>
              </div>
            </li>
            <li className="flex items-center gap-2.5 group hover:text-white transition">
              <Phone className="h-4 w-4 text-primary group-hover:scale-110 flex-shrink-0" />
              <span>Reception: +91 92175 14428</span>
            </li>
            <li className="flex items-center gap-2.5 group hover:text-white transition">
              <MessageCircle className="h-4 w-4 text-primary group-hover:scale-110 flex-shrink-0" />
              <a href="https://wa.me/918810469577" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                WhatsApp: +91 88104 69577
              </a>
            </li>
            <li className="flex items-center gap-2.5 group hover:text-white transition">
              <UserCheck className="h-4 w-4 text-primary group-hover:scale-110 flex-shrink-0" />
              <span>Owner: +91 88824 51016</span>
            </li>
          </ul>
        </div>

        {/* ===== HOURS ===== */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Hours
          </h4>

          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Dumbbell className="h-4 w-4 text-primary animate-dumbbell" />
              Mon–Fri · 5:00 — 23:00
            </li>

            <li className="flex items-center gap-2">
              <Dumbbell className="h-4 w-4 text-primary animate-dumbbell delay-200" />
              Sat · 7:00 — 21:00
            </li>

            <li className="flex items-center gap-2">
              <Dumbbell className="h-4 w-4 text-primary animate-dumbbell delay-400" />
              Sun · 8:00 — 20:00
            </li>
          </ul>
        </div>

      </div>

      {/* ===== BOTTOM ===== */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-6 text-xs text-white/50 text-center sm:px-6 lg:px-8">
          <p className="font-light tracking-wide text-white/40">© {new Date().getFullYear()} Club 7 Fitness. All Rights Reserved.</p>
          <a
            href="https://wa.me/917633944029?text=Hello%20Navendu%2C%0A%0AI%20visited%20the%20Club%207%20Fitness%20website.%0A%0AThe%20design%20looks%20professional%20and%20premium.%0A%0AI%20would%20like%20to%20discuss%20a%20website%20project.%0A%0AThank%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-primary transition-colors duration-300 font-medium tracking-wide mt-1"
          >
            Website crafted with passion by <span className="underline decoration-primary/30 hover:decoration-primary text-white/50">Navendu</span>
          </a>
        </div>
      </div>

      {/* 🔥 ANIMATIONS */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-gradientMove {
            background-size: 200% 200%;
            animation: gradientMove 10s ease infinite;
          }

          @keyframes dumbbellMove {
            0% { transform: rotate(0deg) translateY(0); }
            50% { transform: rotate(10deg) translateY(-3px); }
            100% { transform: rotate(0deg) translateY(0); }
          }

          .animate-dumbbell {
            animation: dumbbellMove 1.5s ease-in-out infinite;
          }
        `}
      </style>

    </footer>
  );
}