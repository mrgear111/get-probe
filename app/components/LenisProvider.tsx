"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

type LenisProviderProps = {
  children: ReactNode;
};

const LenisProvider = ({ children }: LenisProviderProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let animationFrameId: number;

    const animate = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisProvider;

