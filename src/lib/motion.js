import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const springBouncy = {
  type: "spring",
  stiffness: 180,
  damping: 12,
  mass: 0.8,
};

export const springImpact = {
  type: "spring",
  stiffness: 260,
  damping: 18,
  mass: 0.7,
};

export const springGentle = {
  type: "spring",
  stiffness: 100,
  damping: 18,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 64 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springImpact,
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: springGentle,
  },
};

export const slideFromLeft = {
  hidden: { opacity: 0, x: -90 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springImpact,
  },
};

export const slideFromRight = {
  hidden: { opacity: 0, x: 90 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springImpact,
  },
};

export const bloom = {
  hidden: { opacity: 0, scale: 0.72, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: springImpact,
  },
};

export const impactPop = {
  hidden: { opacity: 0, scale: 0.5, rotate: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: springImpact,
  },
};

export const sectionHeading = {
  hidden: { opacity: 0, y: -56, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...springImpact, delay: 0.05 },
  },
};

export const staggerContainer = (staggerChildren = 0.14, delayChildren = 0.08) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 40, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springImpact,
  },
};

export const container = (delay = 0) => ({
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...springImpact, delay },
  },
});

export const floatDrift = (duration = 4) => ({
  animate: {
    y: [0, -16, 0, 12, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

export function useParallax(offset = 80) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return { ref, y };
}
