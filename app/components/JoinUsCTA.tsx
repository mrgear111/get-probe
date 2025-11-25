"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, Check } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function JoinUsCTA() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const { error } = await supabase
                .from('join_requests')
                .insert([{ name, email }]);

            if (error) throw error;

            setSuccess(true);
            setName("");
            setEmail("");
        } catch (err: any) {
            console.error('Error submitting form:', err);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-24 bg-[#050505] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                            Probe looks interesting? <span className="text-zinc-500">Join us in building it.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            We're a small team obsessed with developer tools. If you love Rust, React, or just breaking browsers, we want to hear from you.
                        </p>
                    </div>

                    <div className="w-full max-w-md">
                        {success ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-zinc-900/50 border border-green-500/20 rounded-xl p-8 text-center"
                            >
                                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check className="w-6 h-6 text-green-500" />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">Request Sent!</h3>
                                <p className="text-zinc-400">We'll be in touch shortly.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="flex flex-col gap-4 sm:flex-row">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/20 transition-colors"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/20 transition-colors"
                                    />
                                </div>
                                {error && <p className="text-red-400 text-sm">{error}</p>}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        <>
                                            <span>Join the Team</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
