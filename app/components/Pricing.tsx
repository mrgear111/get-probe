"use client";

import React from "react";

export default function Pricing() {
    return (
        <section className="py-24 bg-black border-t border-zinc-900 relative">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple, Transparent <span className="text-blue-500">Pricing</span></h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">Start for free, upgrade for power. No hidden fees.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Hobby */}
                    <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 flex flex-col hover:border-zinc-700 transition-colors">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-white">Hobby</h3>
                            <p className="text-zinc-500 text-sm mt-1">For personal projects</p>
                        </div>
                        <div className="text-4xl font-bold text-white mb-6">$0<span className="text-lg text-zinc-500 font-normal">/mo</span></div>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex items-center gap-2 text-zinc-300 text-sm">
                                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Basic DevTools
                            </li>
                            <li className="flex items-center gap-2 text-zinc-300 text-sm">
                                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Local Storage Sync
                            </li>
                            <li className="flex items-center gap-2 text-zinc-300 text-sm">
                                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Community Support
                            </li>
                        </ul>
                        <button className="w-full py-3 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-colors">Get Started</button>
                    </div>

                    {/* Pro */}
                    <div className="bg-zinc-900/80 border border-blue-500/50 rounded-2xl p-8 flex flex-col relative shadow-2xl shadow-blue-900/20 transform scale-105 z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Most Popular</div>
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-white">Pro</h3>
                            <p className="text-zinc-500 text-sm mt-1">For serious developers</p>
                        </div>
                        <div className="text-4xl font-bold text-white mb-6">$19<span className="text-lg text-zinc-500 font-normal">/mo</span></div>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex items-center gap-2 text-white text-sm">
                                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Advanced AI Debugging
                            </li>
                            <li className="flex items-center gap-2 text-white text-sm">
                                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Workflow Integrations
                            </li>
                            <li className="flex items-center gap-2 text-white text-sm">
                                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Priority Support
                            </li>
                            <li className="flex items-center gap-2 text-white text-sm">
                                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Cloud Sync
                            </li>
                        </ul>
                        <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20">Start Free Trial</button>
                    </div>

                    {/* Enterprise */}
                    <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 flex flex-col hover:border-zinc-700 transition-colors">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-white">Team</h3>
                            <p className="text-zinc-500 text-sm mt-1">For large organizations</p>
                        </div>
                        <div className="text-4xl font-bold text-white mb-6">Custom</div>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex items-center gap-2 text-zinc-300 text-sm">
                                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                SSO & Security
                            </li>
                            <li className="flex items-center gap-2 text-zinc-300 text-sm">
                                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Dedicated Success Manager
                            </li>
                            <li className="flex items-center gap-2 text-zinc-300 text-sm">
                                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Custom Contracts
                            </li>
                        </ul>
                        <button className="w-full py-3 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-colors">Contact Sales</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
