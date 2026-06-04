import { useEffect, useState } from "react";

export function useScrollPosition(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > threshold;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
