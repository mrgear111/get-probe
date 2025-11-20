"use client";

import React from "react";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Senior Engineer @ Vercel",
        content: "Probe has completely changed how I debug. The AI integration is scary good.",
        avatar: "SC"
    },
    {
        name: "Alex Rivera",
        role: "CTO @ StartupX",
        content: "Finally, a browser that understands the developer workflow. It's fast, minimal, and powerful.",
        avatar: "AR"
    },
    {
        name: "Jordan Smith",
        role: "Frontend Lead @ Netflix",
        content: "The DOM tools in Probe are lightyears ahead of Chrome DevTools. A must-have.",
        avatar: "JS"
    },
    {
        name: "Emily Zhang",
        role: "Indie Hacker",
        content: "I built my entire SaaS using Probe. The local-first approach gives me peace of mind.",
        avatar: "EZ"
    },
    {
        name: "David Kim",
        role: "DevOps Engineer",
        content: "Memory usage is non-existent compared to other browsers. My laptop fans are finally silent.",
        avatar: "DK"
    },
    {
        name: "Lisa Wang",
        role: "Full Stack Dev",
        content: "The workflow integrations with Linear and GitHub are a game changer.",
        avatar: "LW"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-black overflow-hidden border-t border-zinc-900">
            <div className="max-w-6xl mx-auto px-4 mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Loved by <span className="text-blue-500">Builders</span></h2>
                <p className="text-zinc-400">Join the community of developers shipping faster with Probe.</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-6 py-4">
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="w-[350px] bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl flex-shrink-0 hover:border-zinc-700 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="text-white font-semibold text-sm">{t.name}</div>
                                    <div className="text-zinc-500 text-xs">{t.role}</div>
                                </div>
                            </div>
                            <p className="text-zinc-300 text-sm whitespace-normal leading-relaxed">"{t.content}"</p>
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-6 py-4">
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="w-[350px] bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl flex-shrink-0 hover:border-zinc-700 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="text-white font-semibold text-sm">{t.name}</div>
                                    <div className="text-zinc-500 text-xs">{t.role}</div>
                                </div>
                            </div>
                            <p className="text-zinc-300 text-sm whitespace-normal leading-relaxed">"{t.content}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
