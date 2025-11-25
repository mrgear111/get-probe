"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// --- Visualizations ---

import { MotionValue, useTransform, useScroll } from "framer-motion";

interface VisualProps {
    scrollProgress: MotionValue<number>;
}

// 1. Local Memory Engine: "Data Crystallization"
const LocalMemoryVisual = ({ scrollProgress }: VisualProps) => {
    const rotate = useTransform(scrollProgress, [0, 1], [0, 360]);
    const scale = useTransform(scrollProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

    return (
        <div className="w-full h-full flex items-center justify-center perspective-[1000px]">
            <div className="relative w-64 h-64 flex items-center justify-center transform-style-3d">
                {/* Core Crystal Structure */}
                {[0, 45, 90].map((angle, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-32 h-32 border border-cyan-400/30 bg-cyan-500/5 rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.1)] will-change-transform"
                        style={{
                            rotateX: rotate,
                            rotateY: useTransform(rotate, r => r + angle),
                            scale: scale,
                            transformStyle: "preserve-3d",
                        }}
                    />
                ))}

                {/* Floating Data Shards */}
                {[...Array(8)].map((_, i) => {
                    const z = useTransform(scrollProgress, [0, 1], [200, -200]);
                    const y = useTransform(scrollProgress, [0, 1], [100 * Math.sin(i), -100 * Math.sin(i)]);
                    const opacity = useTransform(scrollProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

                    return (
                        <motion.div
                            key={i}
                            className="absolute w-8 h-8 border border-white/20 bg-white/5 will-change-transform"
                            style={{
                                z,
                                y,
                                x: 100 * Math.cos(i * (Math.PI / 4)),
                                rotateX: rotate,
                                rotateY: rotate,
                                opacity
                            }}
                        />
                    );
                })}

                {/* Central Glow */}
                <motion.div
                    className="absolute w-16 h-16 bg-cyan-400 rounded-full blur-2xl opacity-50"
                    style={{ scale: useTransform(scrollProgress, [0, 0.5, 1], [0.5, 1.5, 0.5]) }}
                />
            </div>
        </div>
    );
};

// 2. Context-Aware Assistance: "Holographic Blueprint"
const ContextAwareVisual = ({ scrollProgress }: VisualProps) => {
    const buildProgress = useTransform(scrollProgress, [0, 1], [0, 100]);
    const rotateX = useTransform(scrollProgress, [0, 1], [20, 0]);
    const rotateY = useTransform(scrollProgress, [0, 1], [-20, 0]);

    return (
        <div className="w-full h-full flex items-center justify-center perspective-[1000px]">
            <motion.div
                className="relative w-80 h-56 bg-zinc-900/80 border border-white/10 rounded-xl backdrop-blur-xl overflow-hidden transform-style-3d shadow-2xl"
                style={{ rotateX, rotateY }}
            >
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                {/* Scanning Beam */}
                <motion.div
                    className="absolute top-0 bottom-0 w-1 bg-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.5)] z-20"
                    style={{ left: useTransform(buildProgress, p => `${p}%`) }}
                />

                {/* Wireframe Content Building Up */}
                <div className="absolute inset-0 p-6 flex flex-col gap-4">
                    <motion.div
                        className="w-12 h-12 rounded-lg border-2 border-cyan-500/50 bg-cyan-500/10"
                        style={{
                            clipPath: useTransform(buildProgress, p => `polygon(0 0, ${p}% 0, ${p}% 100%, 0 100%)`)
                        }}
                    />
                    <div className="space-y-3">
                        {[80, 60, 90].map((w, i) => (
                            <motion.div
                                key={i}
                                className="h-3 bg-zinc-700/50 rounded"
                                style={{
                                    width: `${w}%`,
                                    clipPath: useTransform(buildProgress, p => `polygon(0 0, ${Math.max(0, p - (i * 10))}% 0, ${Math.max(0, p - (i * 10))}% 100%, 0 100%)`)
                                }}
                            />
                        ))}
                    </div>

                    {/* Floating UI Elements */}
                    <div className="absolute right-6 top-6 w-20 h-32 border border-dashed border-white/10 rounded-lg p-2 gap-2 flex flex-col">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-full h-8 bg-white/5 rounded"
                                style={{
                                    opacity: useTransform(buildProgress, p => p > 50 + (i * 15) ? 1 : 0),
                                    scale: useTransform(buildProgress, p => p > 50 + (i * 15) ? 1 : 0.8)
                                }}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// 3. Cross-Tab Intelligence: "Synaptic Web"
const CrossTabVisual = ({ scrollProgress }: VisualProps) => {
    const centerScale = useTransform(scrollProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

    return (
        <div className="w-full h-full flex items-center justify-center perspective-[1000px]">
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Glowing Central Node */}
                <motion.div
                    className="absolute z-20 w-6 h-6 bg-white rounded-full shadow-[0_0_50px_rgba(255,255,255,1)]"
                    style={{ scale: centerScale }}
                >
                    <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
                </motion.div>

                {/* Orbiting Nodes & Connections */}
                {[0, 1, 2, 3, 4, 5].map((i) => {
                    const angle = (i / 6) * Math.PI * 2;
                    const radius = 140;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    const currentRadius = useTransform(scrollProgress, [0, 1], [0, radius]);
                    const currentX = useTransform(currentRadius, r => Math.cos(angle) * r);
                    const currentY = useTransform(currentRadius, r => Math.sin(angle) * r);
                    const opacity = useTransform(scrollProgress, [0, 0.2], [0, 1]);

                    return (
                        <motion.div
                            key={i}
                            className="absolute z-10"
                            style={{ x: currentX, y: currentY, opacity }}
                        >
                            <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)] relative">
                                <div className="absolute inset-0 bg-white rounded-full animate-pulse"></div>
                            </div>

                            {/* Data Packet Traveling Line */}
                            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] -z-10 pointer-events-none overflow-visible" style={{ mixBlendMode: 'screen' }}>
                                {/* Base Line */}
                                <motion.line
                                    x1="50%" y1="50%"
                                    x2={150 - x} y2={150 - y}
                                    stroke="rgba(34,211,238,0.2)"
                                    strokeWidth="1"
                                />
                                {/* Moving Packet */}
                                <motion.circle
                                    r="2"
                                    fill="white"
                                // Removed expensive SVG filter
                                >
                                    <animateMotion
                                        dur={`${1 + Math.random()}s`}
                                        repeatCount="indefinite"
                                        path={`M150,150 L${150 - x},${150 - y}`}
                                    />
                                </motion.circle>
                            </svg>
                        </motion.div>
                    );
                })}

                {/* Neural Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 blur-3xl rounded-full animate-pulse-slow"></div>
            </div>
        </div >
    );
};

// 4. Smart History: "Chronological Helix"
const SmartHistoryVisual = ({ scrollProgress }: VisualProps) => {
    return (
        <div className="w-full h-full flex items-center justify-center overflow-hidden perspective-[800px]">
            <div className="relative w-full h-full flex items-center justify-center transform-style-3d">
                {[...Array(8)].map((_, i) => {
                    // Helix math
                    const progressOffset = i / 8;
                    const adjustedProgress = useTransform(scrollProgress, p => (p + progressOffset) % 1);

                    const y = useTransform(adjustedProgress, [0, 1], [300, -300]);
                    const rotateY = useTransform(adjustedProgress, [0, 1], [0, 360]);
                    const scale = useTransform(adjustedProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
                    const opacity = useTransform(adjustedProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
                    const z = useTransform(adjustedProgress, [0, 0.5, 1], [-200, 100, -200]);

                    return (
                        <motion.div
                            key={i}
                            className="absolute w-40 h-24 bg-zinc-900/90 border border-white/10 rounded-lg flex flex-col p-3 shadow-lg origin-center will-change-transform"
                            style={{
                                y,
                                rotateY,
                                z,
                                scale,
                                opacity,
                                x: useTransform(rotateY, r => Math.sin(r * Math.PI / 180) * 150) // Spiral radius
                            }}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
                                <div className="w-12 h-1 bg-white/20 rounded"></div>
                            </div>
                            <div className="space-y-1">
                                <div className="w-full h-1 bg-white/10 rounded"></div>
                                <div className="w-3/4 h-1 bg-white/10 rounded"></div>
                            </div>
                        </motion.div>
                    );
                })}

                {/* Central Time Axis */}
                <motion.div
                    className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"
                    style={{ opacity: useTransform(scrollProgress, [0, 1], [0.2, 0.5]) }}
                />
            </div>
        </div>
    );
};

// 5. Smart Collections: "Dynamic Stacking" - Optimized
const SmartCollectionsVisual = ({ scrollProgress }: VisualProps) => {
    return (
        <div className="w-full h-full flex items-center justify-center perspective-[1000px]">
            {/* 3D Stacks Container */}
            <div className="relative w-full h-full flex items-center justify-center transform-style-3d">

                {/* Category Labels (Floating) */}
                {[-1, 0, 1].map((offset, i) => (
                    <motion.div
                        key={`label-${i}`}
                        className="absolute top-1/4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest"
                        style={{
                            x: offset * 100,
                            opacity: useTransform(scrollProgress, [0, 0.5], [0, 1]),
                            y: useTransform(scrollProgress, [0, 0.5], [20, 0])
                        }}
                    >
                        {["Dev", "Research", "Design"][i]}
                    </motion.div>
                ))}

                {/* Stacking Cards - Reduced count and simplified transforms */}
                {[...Array(6)].map((_, i) => {
                    const stackIndex = i % 3; // 0, 1, 2 (Left, Center, Right)
                    const cardInStack = Math.floor(i / 3); // 0, 1 (Bottom to Top)

                    // Simplified random positions
                    const randomX = (i % 2 === 0 ? 1 : -1) * (100 + Math.random() * 100);
                    const randomY = (i % 2 === 0 ? -1 : 1) * (100 + Math.random() * 100);
                    const randomRotate = (Math.random() - 0.5) * 90;

                    // Target positions
                    const targetX = (stackIndex - 1) * 100;
                    const targetY = 50 - (cardInStack * 15);
                    const targetZ = cardInStack * 5;
                    const targetRotate = (Math.random() - 0.5) * 5;

                    const x = useTransform(scrollProgress, [0, 0.8], [randomX, targetX]);
                    const y = useTransform(scrollProgress, [0, 0.8], [randomY, targetY]);
                    const z = useTransform(scrollProgress, [0, 0.8], [0, targetZ]);
                    const rotateZ = useTransform(scrollProgress, [0, 0.8], [randomRotate, targetRotate]);
                    const opacity = useTransform(scrollProgress, [0, 0.2], [0, 1]);

                    const colors = ["bg-blue-500", "bg-purple-500", "bg-cyan-500"];
                    const color = colors[stackIndex];

                    return (
                        <motion.div
                            key={i}
                            className={`absolute w-20 h-28 ${color}/20 border border-white/10 rounded-lg flex flex-col p-2 shadow-sm will-change-transform`}
                            style={{
                                x, y, z,
                                rotateZ,
                                opacity,
                                transformStyle: "preserve-3d"
                            }}
                        >
                            <div className={`w-8 h-1 ${color}/50 rounded-full mb-2`}></div>
                            <div className="w-full h-1 bg-white/10 rounded mb-1"></div>
                            <div className="w-2/3 h-1 bg-white/10 rounded"></div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

// 6. Ask Probe: "Neural Query Network" - Optimized
const AskProbeVisual = ({ scrollProgress }: VisualProps) => {
    return (
        <div className="w-full h-full flex items-center justify-center perspective-[1000px]">
            <div className="relative w-full h-full flex items-center justify-center">

                {/* Central AI Core */}
                <motion.div
                    className="relative z-20 w-16 h-16 bg-black border border-purple-500/50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                    style={{
                        scale: useTransform(scrollProgress, [0, 0.2, 0.4], [0, 1.2, 1]),
                    }}
                >
                    <div className="absolute inset-0 rounded-full border border-purple-500/30 animate-pulse"></div>
                    <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </motion.div>

                {/* Input Query Beam */}
                <motion.div
                    className="absolute h-1 bg-gradient-to-r from-transparent via-white to-purple-500 rounded-full"
                    style={{
                        width: "150px",
                        right: "50%",
                        top: "50%",
                        x: useTransform(scrollProgress, [0, 0.3], [100, 0]),
                        opacity: useTransform(scrollProgress, [0, 0.3, 0.4], [0, 1, 0]),
                        scaleX: useTransform(scrollProgress, [0.3, 0.4], [1, 0])
                    }}
                />

                {/* Branching Results - Simplified */}
                {[0, 1, 2].map((i) => {
                    const angle = (i / 3) * Math.PI - (Math.PI / 2); // Spread in a semi-circle
                    const distance = 140;

                    return (
                        <motion.div
                            key={i}
                            className="absolute z-10"
                            style={{
                                x: useTransform(scrollProgress, [0.4, 0.8], [0, Math.cos(angle) * distance]),
                                y: useTransform(scrollProgress, [0.4, 0.8], [0, Math.sin(angle) * distance]),
                                opacity: useTransform(scrollProgress, [0.4, 0.6], [0, 1]),
                                scale: useTransform(scrollProgress, [0.4, 0.8], [0.5, 1])
                            }}
                        >
                            {/* Connection Line */}
                            <div className="absolute top-1/2 left-1/2 w-[140px] h-px bg-gradient-to-r from-purple-500/30 to-transparent origin-left -z-10"
                                style={{
                                    transform: `rotate(${angle * (180 / Math.PI)}deg) translate(-100%, -50%)`,
                                    width: distance
                                }}
                            ></div>

                            {/* Result Node - Simplified DOM */}
                            <div className="w-32 bg-zinc-900 border border-white/10 p-2 rounded-lg shadow-lg flex gap-2 items-center">
                                <div className="w-6 h-6 rounded bg-zinc-800 flex-shrink-0"></div>
                                <div className="space-y-1 w-full">
                                    <div className="h-1 w-3/4 bg-white/20 rounded"></div>
                                    <div className="h-1 w-1/2 bg-white/10 rounded"></div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

// --- Main Component ---

const features = [
    {
        title: "Local Memory Engine",
        description: "Probe stores your browsing context locally — not just URLs, but intent and state: what you were reading, debugging, or researching. Everything is saved securely on your device.",
        visual: LocalMemoryVisual
    },
    {
        title: "Context-Aware Assistance",
        description: "When you return to a site or project, Probe recalls your last actions: 'You were testing this API endpoint yesterday.' or 'You stopped reading here last time.'",
        visual: ContextAwareVisual
    },
    {
        title: "Cross-Tab Intelligence",
        description: "Probe links your activities across tabs. If you're debugging a frontend issue, Probe can automatically surface related documentation or your own previous notes.",
        visual: CrossTabVisual
    },
    {
        title: "Smart History & Recall",
        description: "Forget the endless scroll of Chrome history. Probe turns it into a timeline of moments — searchable, summarized, and easy to reopen.",
        visual: SmartHistoryVisual
    },
    {
        title: "Smart Collections",
        description: "Probe automatically groups your tabs and resources into AI-generated 'collections' — for example: React Project, Portfolio Research, ML Debugging.",
        visual: SmartCollectionsVisual
    },
    {
        title: "Ask Probe (AI Search)",
        description: "Ask Probe in natural language: 'Show me the last 5 things I researched about TypeScript.' or 'Find that article where I read about WebAssembly performance.'",
        visual: AskProbeVisual
    }
];

const FeatureSection = ({ feature, index, setFocusedIndex, isLast, forwardedRef }: { feature: any, index: number, setFocusedIndex: (i: number) => void, isLast: boolean, forwardedRef: React.RefObject<HTMLDivElement | null> }) => {
    const isInView = useInView(forwardedRef, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setFocusedIndex(index);
        }
    }, [isInView, index, setFocusedIndex]);

    return (
        <div ref={forwardedRef} className="min-h-[150vh] flex items-center py-6 font-sans relative">
            <motion.div
                className="flex flex-col gap-8 w-full max-w-xl"
                animate={{ opacity: isInView ? 1 : 0.2, scale: isInView ? 1 : 0.95 }}
                transition={{ duration: 0.5 }}
            >
                {/* Main Content */}
                <div className="space-y-6">
                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-tight">
                        {feature.title}
                    </h3>
                    <p className="text-lg text-zinc-400 leading-relaxed font-light">
                        {feature.description}
                    </p>

                    {/* Call to Action */}
                    <div className="flex items-center gap-4 pt-2">
                        <button className="px-6 py-3 bg-white text-black font-bold rounded hover:bg-zinc-200 transition-colors uppercase tracking-wide text-xs">
                            Try {feature.title}
                        </button>
                        <button className="flex items-center gap-2 text-zinc-400 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors group">
                            Documentation <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                </div>

                {/* Insight / Testimonial Card */}
                <div className="mt-8 p-5 bg-zinc-900/30 border border-white/10 rounded-xl backdrop-blur-md flex items-start gap-4 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="flex-shrink-0 w-8 h-8 rounded bg-zinc-800 flex items-center justify-center border border-white/5 relative z-10">
                        <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    </div>
                    <div className="relative z-10">
                        <p className="text-sm text-zinc-300 italic mb-2 font-mono">
                            "// Probe's {feature.title.toLowerCase()} optimized my workflow by 30%."
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest font-mono">
                                Verified User
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const ActiveVisual = ({ feature, targetRef }: { feature: any, targetRef: React.RefObject<HTMLElement | null> }) => {
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
    const blur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [20, 0, 0, 20]);
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <motion.div
            className="absolute inset-0"
            style={{
                opacity,
                scale,
                y,
                filter: useTransform(blur, b => `blur(${b}px)`)
            }}
        >
            {React.createElement(feature.visual, { scrollProgress: scrollYProgress })}
        </motion.div>
    );
};

export default function MemoryWebShowcase() {
    const [focusedIndex, setFocusedIndex] = useState(0);
    const sectionRefs = useRef<React.RefObject<HTMLDivElement | null>[]>([]);
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Initialize refs array once
    if (sectionRefs.current.length === 0) {
        sectionRefs.current = features.map(() => React.createRef<HTMLDivElement | null>());
    }

    return (
        <section ref={containerRef} id="memory-web" className="bg-[#050505] pt-32 pb-0 flex justify-center relative">

            {/* Atmosphere: Parallax Background Layers */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Layer 1: Deep Space Stars (Slowest) */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, 300]) }}
                >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
                    {[...Array(40)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-white rounded-full shadow-[0_0_2px_white]"
                            style={{
                                width: Math.random() * 3 + 1 + "px",
                                height: Math.random() * 3 + 1 + "px",
                                top: Math.random() * 100 + "%",
                                left: Math.random() * 100 + "%",
                                opacity: Math.random() * 0.7 + 0.3
                            }}
                        />
                    ))}
                </motion.div>

                {/* Layer 2: Nebula Clouds (Medium) */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, 500]) }}
                >
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen"></div>
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen" style={{ animationDelay: '2s' }}></div>
                </motion.div>

                {/* Layer 3: Tech Grid (Fast) */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, 800]) }}
                >
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"></div>
                </motion.div>
            </div>

            <div className="relative z-10 w-full">

                {/* Cinematic Intro Section */}
                <div className="h-[300vh] relative">
                    <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                        <motion.div
                            className="text-center px-4 relative z-10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-6xl md:text-[10rem] font-bold text-white tracking-tighter leading-none flex flex-col items-center">
                                <motion.span
                                    style={{
                                        opacity: useTransform(scrollYProgress, [0, 0.15], [0, 1]),
                                        scale: useTransform(scrollYProgress, [0, 0.15], [0.8, 1]),
                                        y: useTransform(scrollYProgress, [0.15, 0.25], [0, -50])
                                    }}
                                    className="text-4xl md:text-7xl mb-4 block"
                                >
                                    Introducing the
                                </motion.span>

                                <div className="flex items-center justify-center whitespace-nowrap">
                                    {/* MEM */}
                                    <motion.span
                                        style={{
                                            x: useTransform(scrollYProgress, [0.2, 0.4], [0, -1000]),
                                            opacity: useTransform(scrollYProgress, [0.2, 0.35], [1, 0])
                                        }}
                                    >
                                        MEM
                                    </motion.span>

                                    {/* The O - The Portal */}
                                    <motion.div
                                        className="inline-block relative mx-1"
                                        style={{
                                            scale: useTransform(scrollYProgress, [0.2, 0.6], [1, 150]),
                                            x: useTransform(scrollYProgress, [0.2, 0.6], [0, -15]), // Slight correction to keep center
                                        }}
                                    >
                                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80">O</span>
                                        {/* Glow behind O */}
                                        <motion.div
                                            className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full"
                                            style={{ opacity: useTransform(scrollYProgress, [0.2, 0.4], [0, 1]) }}
                                        />
                                    </motion.div>

                                    {/* RY WEB */}
                                    <motion.span
                                        style={{
                                            x: useTransform(scrollYProgress, [0.2, 0.4], [0, 1000]),
                                            opacity: useTransform(scrollYProgress, [0.2, 0.35], [1, 0])
                                        }}
                                    >
                                        RY WEB
                                    </motion.span>
                                </div>
                            </h2>

                            <motion.p
                                className="text-xl md:text-2xl text-zinc-400 font-mono tracking-wide max-w-3xl mx-auto leading-relaxed mt-8"
                                style={{ opacity: useTransform(scrollYProgress, [0.15, 0.25], [1, 0]) }}
                            >
                                Because You Shouldn’t Have to <span className="text-cyan-400">Re‑Search</span> Everything.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>

                {/* Main Container Box */}
                <div className="border-y border-white/10 bg-zinc-900/40 backdrop-blur-xl flex flex-col md:flex-row relative shadow-2xl group">

                    {/* Moving Spotlight Border Effect */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>

                    {/* Left: Scrolling Text */}
                    <div className="w-full md:w-1/2 p-10 border-r border-white/5 relative z-10 bg-zinc-950/20">
                        <div className="flex flex-col">
                            {features.map((feature, index) => (
                                <FeatureSection
                                    key={index}
                                    feature={feature}
                                    index={index}
                                    setFocusedIndex={setFocusedIndex}
                                    isLast={index === features.length - 1}
                                    forwardedRef={sectionRefs.current[index]}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Sticky Visual */}
                    <div className="hidden md:block w-1/2 relative bg-black/20">
                        {/* Inner Noise Texture */}
                        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

                        <div className="sticky top-0 h-screen flex items-center justify-center p-12">
                            <div className="w-full aspect-square rounded-2xl relative">
                                {features.map((feature, index) => (
                                    <ActiveVisual
                                        key={index}
                                        feature={feature}
                                        targetRef={sectionRefs.current[index]}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
