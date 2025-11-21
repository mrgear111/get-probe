"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useModal } from "../context/ModalContext";

import InteractiveBrowser from "./InteractiveBrowser";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();

  // Tilt State
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Text Animation
      tl.fromTo(textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // Mockup Entrance
      tl.fromTo(mockupRef.current,
        { opacity: 0, y: 100, rotateX: 20 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.5, ease: "power3.out" },
        "-=0.6"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mockupRef.current) return;

    const rect = mockupRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -5; // Max rotation deg
    const rotateYValue = ((x - centerX) / centerX) * 5;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-[#050505] flex flex-col items-center justify-center overflow-hidden relative pt-32 pb-20 px-6"
    >
      {/* Antimetal-style Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#3b82f615,transparent)]"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center z-10 relative">

        {/* Text Content */}
        <div ref={textRef} className="mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-medium mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            v1.0 Public Beta
          </div>

          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
            AI browser that  <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">modern engineering.</span>
          </h1>

          <p className="text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            Probe is a high-performance browser built for developers. <br className="hidden md:block" />
            Native devtools, AI debugging, and zero-config workflow integrations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={openModal}
              className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_-10px_rgba(255,255,255,0.2)]"
            >
              Register for Early Access
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-all backdrop-blur-md hover:border-white/20">
              Read the Manifesto
            </button>
          </div>
        </div>

        {/* Browser Mockup (Interactive + 3D Tilt) */}
        <div
          className="w-full max-w-6xl perspective-[2000px] group"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={mockupRef}
            className="w-full h-[700px] relative transition-transform duration-200 ease-out will-change-transform"
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            }}
          >
            <div className="relative w-full h-full rounded-2xl bg-[#0A0A0A] border border-white/10 shadow-2xl overflow-hidden">
              <InteractiveBrowser />

              {/* Reflection/Sheen Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ mixBlendMode: 'overlay' }}
              ></div>
            </div>

            {/* Glow under mockup */}
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl -z-10 rounded-[3rem] opacity-50 transition-opacity duration-500 group-hover:opacity-70"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
