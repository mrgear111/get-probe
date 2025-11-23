"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TextDecode = ({ text, className }: { text: string, className?: string }) => {
    const [displayText, setDisplayText] = useState("");
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(text
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return text[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    return <span className={className}>{displayText}</span>;
};

export default function DeveloperReveal() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Animation Phases
    // 0 -> 0.3: Grid flies in / Atmosphere rises
    // 0.3 -> 0.5: Full immersion
    // 0.5 -> 0.8: Text reveal

    // 3D Grid Movement
    const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const gridOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Deep Blue Atmosphere
    const atmosphereOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    // Text animations
    const textOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.8, 0.9], [0, 1, 1, 0]);
    const textScale = useTransform(scrollYProgress, [0.4, 0.8], [0.9, 1.05]);
    const textY = useTransform(scrollYProgress, [0.4, 0.8], [30, 0]);

    // Trigger decode effect when in view
    const [startDecode, setStartDecode] = useState(false);
    useTransform(scrollYProgress, (value) => {
        if (value > 0.45 && !startDecode) {
            setStartDecode(true);
        }
    });

    return (
        <section ref={containerRef} className="h-[250vh] relative z-20 bg-[#050505] overflow-hidden">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center perspective-[1000px]">

                {/* 3D Perspective Grid */}
                <motion.div
                    className="absolute inset-0 origin-bottom"
                    style={{
                        opacity: gridOpacity,
                        rotateX: "60deg",
                        translateY: "20%",
                        scale: 2,
                    }}
                >
                    <motion.div
                        className="w-full h-[200%] bg-[linear-gradient(to_right,rgba(56,189,248,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"
                        style={{
                            y: gridY
                        }}
                    />
                </motion.div>

                {/* Deep Blue Atmosphere / Horizon Glow */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        opacity: atmosphereOpacity,
                        background: "radial-gradient(circle at 50% 100%, #1e1b4b 0%, #020617 60%, transparent 100%)",
                    }}
                >
                    {/* Horizon Line Glow */}
                    <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-cyan-900/20 via-purple-900/20 to-transparent blur-3xl"></div>
                </motion.div>

                {/* Content Container */}
                <div className="relative z-10 text-center px-6 w-full max-w-7xl">
                    <motion.div
                        style={{
                            opacity: textOpacity,
                            scale: textScale,
                            y: textY
                        }}
                        className="flex flex-col items-center gap-2"
                    >
                        {/* Cinematic Overline */}
                        <h3 className="text-sm md:text-base font-mono uppercase tracking-[0.5em] text-blue-200/60 mb-4">
                            This is what we have got
                        </h3>

                        {/* Massive Metallic Title */}
                        <div className="relative">
                            <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]">
                                FOR {startDecode ? <TextDecode text="DEVELOPERS" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-400 to-purple-400" /> : <span className="opacity-0">DEVELOPERS</span>}
                            </h2>

                            {/* Reflection / Glow Underneath */}
                            <div className="absolute -bottom-8 left-0 right-0 h-12 bg-gradient-to-b from-cyan-500/20 to-transparent blur-xl opacity-50 transform scale-x-110"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
