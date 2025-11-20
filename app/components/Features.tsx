"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureCard from "./FeatureCard";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".feature-card");

            gsap.fromTo(cards,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 px-4 md:px-8 bg-black relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Built for the <span className="text-blue-500">Modern Developer</span></h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Everything you need to build, debug, and ship faster. Integrated directly into your browsing experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                    {/* Card 1: Native Dev Tools (Large - spans 2 cols) */}
                    <FeatureCard
                        title="Native Developer Tools"
                        description="Inspect, edit, and debug with tools built directly into the rendering engine. No extensions required."
                        className="feature-card md:col-span-2"
                    >
                        <div className="w-full h-full bg-zinc-950 rounded-lg border border-zinc-800 p-4 font-mono text-xs text-zinc-500 overflow-hidden relative group-hover:border-zinc-700 transition-colors">
                            <div className="flex gap-4 border-b border-zinc-800 pb-2 mb-2">
                                <span className="text-blue-400">Elements</span>
                                <span>Console</span>
                                <span>Sources</span>
                                <span>Network</span>
                            </div>
                            <div className="space-y-1">
                                <div className="flex"><span className="text-purple-400">&lt;div</span> <span className="text-yellow-400 ml-2">class</span>=<span className="text-green-400">"hero-section"</span><span className="text-purple-400">&gt;</span></div>
                                <div className="pl-4 flex"><span className="text-purple-400">&lt;h1&gt;</span><span className="text-white">Welcome to Probe</span><span className="text-purple-400">&lt;/h1&gt;</span></div>
                                <div className="pl-4 flex bg-blue-500/10 -mx-4 px-4 border-l-2 border-blue-500"><span className="text-purple-400">&lt;Button</span> <span className="text-yellow-400 ml-2">onClick</span>=<span className="text-blue-400">{`{handleClick}`}</span><span className="text-purple-400">/&gt;</span></div>
                                <div className="flex"><span className="text-purple-400">&lt;/div&gt;</span></div>
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg shadow-blue-900/20">
                                DOM v2.0
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Card 2: AI Debugging (Tall - spans 1 col, 2 rows) */}
                    <FeatureCard
                        title="AI-Assisted Debugging"
                        description="Encounter an error? Probe's AI analyzes the stack trace and suggests fixes instantly."
                        className="feature-card md:row-span-2"
                    >
                        <div className="w-full h-full bg-zinc-950 rounded-lg border border-zinc-800 flex flex-col relative overflow-hidden">
                            <div className="p-3 border-b border-zinc-800 flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-xs text-zinc-400">Probe AI</span>
                            </div>
                            <div className="flex-1 p-3 space-y-3">
                                <div className="bg-zinc-900 rounded-lg p-2 rounded-tl-none text-xs text-zinc-300 border border-zinc-800">
                                    I found a potential memory leak in <code>Hero.tsx</code>.
                                </div>
                                <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-2 rounded-tr-none text-xs text-blue-200 self-end">
                                    Fix it automatically.
                                </div>
                                <div className="bg-zinc-900 rounded-lg p-2 rounded-tl-none text-xs text-zinc-300 border border-zinc-800">
                                    <span className="text-green-400">✓ Applied fix.</span> Re-rendering...
                                </div>
                            </div>
                            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                        </div>
                    </FeatureCard>

                    {/* Card 3: Workflow (Small) */}
                    <FeatureCard
                        title="Workflow Integrations"
                        description="Connect GitHub, Linear, and Figma directly to your browser workspace."
                        className="feature-card"
                    >
                        <div className="flex items-center justify-center h-full gap-4">
                            <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700 hover:scale-110 transition-transform duration-300">
                                {/* GitHub-ish Icon */}
                                <div className="w-6 h-6 bg-white rounded-full"></div>
                            </div>
                            <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700 hover:scale-110 transition-transform duration-300 delay-75">
                                {/* Linear-ish Icon */}
                                <div className="w-6 h-6 bg-blue-500 rounded-md"></div>
                            </div>
                            <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700 hover:scale-110 transition-transform duration-300 delay-150">
                                {/* Figma-ish Icon */}
                                <div className="w-6 h-6 border-2 border-purple-500 rounded-full"></div>
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Card 4: Performance (Small) */}
                    <FeatureCard
                        title="Lightning Fast"
                        description="Built on a Rust-based engine for unparalleled speed and memory efficiency."
                        className="feature-card"
                    >
                        <div className="flex items-center justify-center h-full">
                            <div className="relative w-32 h-32 flex items-center justify-center">
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                    <path className="text-zinc-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2" />
                                    <path className="text-green-500" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2" />
                                </svg>
                                <div className="absolute text-3xl font-bold text-white">100</div>
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Card 5: Privacy (Wide - spans 2 cols) */}
                    <FeatureCard
                        title="Local-First Privacy"
                        description="Your data stays on your machine. No telemetry, no tracking, just pure browsing."
                        className="feature-card md:col-span-2"
                    >
                        <div className="w-full h-full flex items-center justify-between px-12 bg-zinc-950/50 rounded-lg border border-zinc-800/50">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-green-400 text-sm">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    Encrypted Local Storage
                                </div>
                                <div className="flex items-center gap-2 text-green-400 text-sm">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    Zero-Knowledge Sync
                                </div>
                            </div>
                            <div className="w-24 h-24 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700">
                                <div className="w-12 h-16 border-2 border-zinc-500 rounded-t-full rounded-b-lg relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
}
