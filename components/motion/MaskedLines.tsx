"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { clsx } from "clsx";
import { easePremium } from "@/lib/motion";

export function MaskedLines({
  lines,
  lineClassName,
  delay = 0,
  stagger = 0.09,
  inView = false,
}: {
  lines: ReactNode[];
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  inView?: boolean;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <>
        {lines.map((line, i) => (
          <span key={i} className={clsx("block", lineClassName)}>
            {line}
          </span>
        ))}
      </>
    );
  }

  const motionProps = inView
    ? { initial: { y: "110%" }, whileInView: { y: "0%" }, viewport: { once: true, margin: "-80px" } }
    : { initial: { y: "110%" }, animate: { y: "0%" } };

  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={clsx("block", lineClassName)}
            {...motionProps}
            transition={{ duration: 0.85, ease: easePremium, delay: delay + i * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </>
  );
}
