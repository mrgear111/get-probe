"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


export default function DeveloperReveal() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const blueHueOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const blueHueScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.2]);

    const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
    const textScale = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1]);
    const textY = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);

    const gridOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.3, 0.3, 0]);

    return (
        <section ref={containerRef} className="h-[100vh] relative z-20 bg-[#050505] overflow-hidden">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-600/30 to-purple-900/40 blur-3xl"
                    style={{
                        opacity: blueHueOpacity,
                        scale: blueHueScale,
                    }}
                />

                <motion.div
                    className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"
                    style={{
                        opacity: gridOpacity,
                    }}
                />

                <div className="relative z-10 text-center px-6 w-full max-w-7xl">
                    <motion.div
                        style={{
                            opacity: textOpacity,
                            scale: textScale,
                            y: textY
                        }}
                        className="flex flex-col items-center gap-2"
                    >
                        <h3 className="text-sm md:text-base font-mono uppercase tracking-[0.5em] text-blue-200/60 mb-4">
                            This is what we have got
                        </h3>

                        <div className="relative">
                            <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]">
                                FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-400 to-purple-400">DEVELOPERS</span>
                            </h2>

                            <div className="absolute -bottom-8 left-0 right-0 h-12 bg-gradient-to-b from-cyan-500/20 to-transparent blur-xl opacity-50 transform scale-x-110"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
