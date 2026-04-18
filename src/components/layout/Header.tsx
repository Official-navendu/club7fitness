import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
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

export function Header() {
  const scrolled = useScrollPosition(40);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  // ✅ Dynamic logo
  const logoSrc = transparent ? logoMain : logoWhite;

  return (
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
        <Link to="/" className="flex items-center pl-1 md:pl-2">
          <img
            src={logoSrc}
            alt="Club 7 Fitness"
            className={cn(
              "w-auto object-contain transition-all duration-500",
              transparent
                ? "h-14 md:h-16 opacity-100 scale-100 drop-shadow-[0_0_12px_rgba(85,137,196,0.6)]"
                : "h-12 md:h-14 opacity-95 scale-95"
            )}
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
          <Link
            to="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary-gradient px-6 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:scale-[1.05] active:scale-95"
          >
            Join Now
          </Link>
        </div>

        {/* ===== MOBILE BUTTON ===== */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-white md:hidden"
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

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex h-11 items-center justify-center rounded-full bg-primary-gradient px-5 text-sm font-semibold text-white"
          >
            Join Now
          </Link>
        </nav>
      </div>
    </header>
  );
}