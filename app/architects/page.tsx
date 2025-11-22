"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";

export default function ArchitectsPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white overflow-hidden font-sans selection:bg-purple-500/30">
            {/* Global Background - Minimalist */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#2e106520,transparent)]"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            </div>

            <main className="relative z-10 pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Header Section - Editorial Style */}
                    <div className="mb-24 flex flex-col md:flex-row gap-12 items-start justify-between">
                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px w-12 bg-blue-500/50"></div>
                                <span className="text-blue-400 font-mono text-xs tracking-[0.2em] uppercase">Origin Story</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
                                THE <br />
                                <span className="text-zinc-500">FOUNDERS</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            className="flex-1 max-w-md pt-4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="space-y-6 text-zinc-400 text-base leading-relaxed font-light border-l border-white/10 pl-8">
                                <p>
                                    <span className="text-white font-medium">Eight years ago</span>, we were just two kids in the same classroom. That shared space became the foundation of a partnership that has outlasted schools, hackathons, and countless side projects.
                                </p>
                                <p>
                                    From building fun experiments to tackling complex engineering challenges, our collaboration has evolved into a singular vision.
                                </p>
                                <p>
                                    Now, we're building <span className="text-white">Probe</span>—bringing everything we've learned together to redefine how people explore the web.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Founders Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto place-items-center">
                        <ProfileCard
                            name="Sourav Bhagat"
                            title="Co-Founder"
                            handle="souravbhagat_4"
                            status="Online"
                            avatarUrl="/sourav.jpg"
                            grainUrl="https://grainy-gradients.vercel.app/noise.svg"
                            contactText="Connect"
                            onContactClick={() => window.open("https://www.linkedin.com/in/sogoyalz/", "_blank")}
                            innerGradient="linear-gradient(to bottom, #000000 0%, #1a1a2e 60%, #2d2d55 100%)"
                            behindGlowColor="rgba(120, 119, 198, 0.2)"
                            behindGlowSize="60%"
                        />
                        <ProfileCard
                            name="Daksh Saini"
                            title="Core Founder"
                            handle="dakshsaini"
                            status="Online"
                            avatarUrl="/daksh.jpg"
                            grainUrl="https://grainy-gradients.vercel.app/noise.svg"
                            contactText="Connect"
                            onContactClick={() => window.open("https://www.linkedin.com/in/dakshsainii/", "_blank")}
                            innerGradient="linear-gradient(to bottom, #000000 0%, #1a1a2e 60%, #2d2d55 100%)"
                            behindGlowColor="rgba(120, 119, 198, 0.2)"
                            behindGlowSize="60%"
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
