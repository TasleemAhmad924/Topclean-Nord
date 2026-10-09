import type { Variants } from "framer-motion";

export const easePremium = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easePremium } },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: easePremium } },
};

export const staggerContainer = (stagger = 0.1): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger } },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easePremium } },
};
