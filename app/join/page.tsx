"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { MapPin, Clock, Briefcase, DollarSign, ArrowRight, Sparkles } from "lucide-react";

const JobCard = ({ title, tags, delay }: { title: string, tags: { label: string, color: string }[], delay: number }) => (
    <motion.a
        href="mailto:daksh@probebrowser.com"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="group block p-5 bg-[#161b22] border border-zinc-800 rounded-xl hover:border-zinc-600 hover:bg-[#1c2128] transition-all"
    >
        <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-lg">
                    👷
                </div>
                <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
        </div>

        <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
                <span
                    key={i}
                    className={`text-[10px] font-medium px-2 py-0.5 rounded ${tag.color} border border-white/5`}
                >
                    {tag.label}
                </span>
            ))}
        </div>
    </motion.a>
);

export default function JoinUsPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30">
            {/* Global Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#2e106520,transparent)]"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            </div>

            <main className="relative z-10 pt-32 pb-20 px-6 max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-xl">
                            👋
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight">Join Us</h1>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-zinc-400 mb-8">
                        <a href="/" className="hover:text-white transition-colors flex items-center gap-1">
                            <span className="opacity-50">🏠</span> Home
                        </a>
                        <span className="opacity-30">/</span>
                        <span className="text-white">Join Us</span>
                    </div>
                </motion.div>

                {/* Open Positions */}
                <div className="mb-24">
                    <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        Open Positions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <JobCard
                            title="C++ Developer"
                            delay={0.1}
                            tags={[
                                { label: "Remote", color: "bg-yellow-900/30 text-yellow-200" },
                                { label: "Full-Time", color: "bg-zinc-800 text-zinc-300" },
                                { label: "Engineering", color: "bg-green-900/30 text-green-200" },
                                { label: "2 Openings", color: "bg-purple-900/30 text-purple-200" }
                            ]}
                        />
                        <JobCard
                            title="Canva Designer"
                            delay={0.2}
                            tags={[
                                { label: "Remote", color: "bg-pink-900/30 text-pink-200" },
                                { label: "Design", color: "bg-blue-900/30 text-blue-200" },
                                { label: "Contract", color: "bg-zinc-800 text-zinc-300" },
                                { label: "1 Opening", color: "bg-purple-900/30 text-purple-200" }
                            ]}
                        />
                    </div>
                </div>

                {/* Manifesto / Text Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl space-y-8 text-zinc-300 leading-relaxed"
                >
                    <h2 className="text-3xl font-bold text-white">99% of browsing is still stuck in the past.</h2>

                    <p>
                        Yet we spend thousands of hours online, navigating a web that hasn't fundamentally changed in decades. The browser is the operating system of our lives, but it's still just a static window.
                    </p>

                    <p className="font-semibold text-white">
                        Probe is the browser for the AI era.
                    </p>

                    <p>
                        Our model gives you a browsing experience that actually understands context. It's not just about rendering pages; it's about connecting dots, automating workflows, and anticipating what you need next.
                    </p>

                    <p>
                        We're focused on providing a <span className="text-white">smarter, faster, and more intuitive</span> way to explore the internet. Instead of getting lost in tabs, Probe helps you organize your digital life effortlessly.
                    </p>

                    <p>
                        And the coolest part... we leverage local AI to keep your data private while giving you superpowers that feel like magic.
                    </p>


                </motion.div>

            </main>
            <Footer />
        </div>
    );
}
