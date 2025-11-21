"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "../context/ModalContext";
import { supabase } from "../lib/supabase";

export default function RegisterModal() {
    const { isModalOpen, closeModal } = useModal();
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        if (!email) {
            setStatus("error");
            setErrorMessage("Please enter your email.");
            return;
        }

        try {
            const { error } = await supabase
                .from("early_access")
                .insert([{ email }]);

            if (error) {
                if (error.code === "23505") { // Unique violation
                    setStatus("success"); // Treat duplicate as success for UX, or show specific message
                    // setErrorMessage("You're already on the list!");
                } else {
                    throw error;
                }
            }

            setStatus("success");
            setEmail("");
        } catch (error: any) {
            console.error("Error submitting email:", error);
            setStatus("error");
            setErrorMessage(error.message || "Something went wrong. Please try again.");
        }
    };

    return (
        <AnimatePresence>
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-md bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {status === "success" ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                                <p className="text-zinc-400 mb-8">
                                    Thanks for joining. We'll notify you as soon as early access opens.
                                </p>
                                <button
                                    onClick={closeModal}
                                    className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="text-center mb-8">
                                    <div className="inline-flex items-center justify-center px-3 py-1 border border-blue-500/30 bg-blue-500/10 text-blue-400 font-mono text-xs tracking-widest uppercase rounded-full mb-6">
                                        Early Access
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-3">Join the revolution.</h3>
                                    <p className="text-zinc-400">
                                        Be the first to experience the future of web development.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                            disabled={status === "loading"}
                                        />
                                    </div>

                                    {status === "error" && (
                                        <p className="text-red-400 text-sm text-center">{errorMessage}</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {status === "loading" ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                                                Joining...
                                            </>
                                        ) : (
                                            "Join Waitlist"
                                        )}
                                    </button>
                                </form>
                                <p className="text-zinc-600 text-xs text-center mt-6">
                                    No spam. Unsubscribe anytime.
                                </p>
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
