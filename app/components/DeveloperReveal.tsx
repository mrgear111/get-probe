"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


export default function DeveloperReveal() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [stars, setStars] = useState<Array<{ width: number; height: number; top: number; left: number; opacity: number }>>([]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const introOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
    const introScale = useTransform(scrollYProgress, [0, 0.15], [0.8, 1]);
    const introY = useTransform(scrollYProgress, [0, 1], [200, -200]);

    const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
    const textScale = useTransform(scrollYProgress, [0, 0.15], [0.8, 1]);
    const textY = useTransform(scrollYProgress, [0, 1], [300, -300]);

    // Generate random star positions on client-side only to avoid hydration errors
    useEffect(() => {
        const generatedStars = [...Array(40)].map(() => ({
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            top: Math.random() * 100,
            left: Math.random() * 100,
            opacity: Math.random() * 0.7 + 0.3
        }));
        setStars(generatedStars);
    }, []);

    return (
        <section ref={containerRef} className="h-[150vh] relative z-20 bg-[#050505] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
                    {stars.map((star, i) => (
                        <div
                            key={i}
                            className="absolute bg-white rounded-full shadow-[0_0_2px_white]"
                            style={{
                                width: star.width + "px",
                                height: star.height + "px",
                                top: star.top + "%",
                                left: star.left + "%",
                                opacity: star.opacity
                            }}
                        />
                    ))}
                </motion.div>

                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: textY }}
                >
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen"></div>
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen" style={{ animationDelay: '2s' }}></div>
                </motion.div>

                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: textY }}
                >
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"></div>
                </motion.div>
            </div>

            <div className="relative top-100 h-screen overflow-hidden flex items-center justify-center">
                <motion.div
                    className="text-center px-4 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-6xl md:text-[10rem] font-bold text-white tracking-tighter leading-none flex flex-col items-center">
                        <motion.span
                            className="text-4xl md:text-7xl mb-4 block"
                            style={{
                                opacity: introOpacity,
                                scale: introScale,
                                y: introY
                            }}
                        >
                            This is what we have got
                        </motion.span>

                        <motion.div
                            style={{
                                opacity: textOpacity,
                                scale: textScale,
                                y: textY
                            }}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                        >
                            FOR DEVELOPERS
                        </motion.div>
                    </h2>

                    <motion.p
                        className="text-xl md:text-2xl text-zinc-400 font-mono tracking-wide max-w-3xl mx-auto leading-relaxed mt-8"
                        style={{
                            y: textY
                        }}
                    >
                        Built by developers, <span className="text-cyan-400">for developers</span>.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
