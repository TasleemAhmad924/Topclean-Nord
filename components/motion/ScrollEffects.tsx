"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Elements marked with data-reveal stay visible without JS. Only elements that
// start below the fold are hidden and revealed once, so nothing flashes.
export function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealState = "in";
          observer.unobserve(entry.target);
        }
      },
      // Clipped elements report a ratio of 0, so rely on isIntersecting only.
      { rootMargin: "0px 0px -10% 0px" },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) return;
      element.dataset.revealState = "pending";
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
