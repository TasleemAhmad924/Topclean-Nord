"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { MaskedLines } from "@/components/motion/MaskedLines";
import { easePremium } from "@/lib/motion";

const content = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.38 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easePremium } },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 36]);

  return (
    <section ref={sectionRef} className="bg-background pb-20 pt-28 md:pb-28 md:pt-36">
      <Container className="grid items-end gap-12 lg:grid-cols-[42fr_58fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mb-8 flex items-start gap-4"
          >
            <div className="mt-1.5 h-14 w-px shrink-0 bg-border" />
            <p className="text-xs font-semibold uppercase leading-relaxed tracking-[0.2em] text-muted">
              TopClean Nord
              <br />
              Gebäudeservice
              <br />
              Lübeck · Ostholstein
            </p>
          </motion.div>

          <h1 className="text-[clamp(4.5rem,7vw,7rem)] font-semibold leading-[0.94] tracking-tight text-ink">
            <MaskedLines lines={["Reinigung auf", "höchstem Niveau."]} delay={0.16} stagger={0.08} />
          </h1>

          <motion.div initial="hidden" animate="visible" variants={content}>
            <motion.p variants={item} className="mt-8 max-w-[38ch] text-lg leading-relaxed text-muted md:text-xl">
              Unser erfahrenes Team sorgt für makellose Ergebnisse – effizient, zeitnah und abgestimmt auf Ihre
              Anforderungen.
            </motion.p>
            <motion.div variants={item} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/#kontakt">Kostenloses Angebot anfragen</Button>
              <Button href="/#leistungen" variant="secondary">
                Services ansehen
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          style={{ y: imageY }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-sm md:aspect-[3/4] lg:h-[38rem] lg:aspect-auto"
        >
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.05, ease: easePremium, delay: 0.2 }}
          >
            <Image
              src="/images/hero/window-cleaning-unsplash.jpg"
              alt="Fensterreinigung an einem Hochhaus – Symbolbild für professionelle Gebäudereinigung"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
