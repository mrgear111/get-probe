"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollSection({ children, className = "" }: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Opacity: 
  // - When entering (scrollYProgress 0-0.4): fade in from 0 to 1
  // - When in view (scrollYProgress 0.4-0.6): stay at 1
  // - When leaving (scrollYProgress 0.6-1): fade out to 0 completely
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0, 2, 0.7, 0]
  );

  // Y position: 
  // - When entering: start from below (positive y = 200px)
  // - When in view: at center (y = 0)
  // - When leaving: move up (negative y = -200px)
  const y = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [200, 0, 0, -200]
  );

  // Blur: blur when entering/leaving, clear when in view
  const blur = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [25, 0, 0, 25]
  );

  // Scale: slight scale effect
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0.9, 1, 1, 0.9]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        opacity,
        scale,
        filter: `blur(${blur}px)`,
        y
      }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

