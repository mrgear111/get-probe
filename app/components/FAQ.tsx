"use client";

import React, { useState } from "react";

const faqs = [
    {
        question: "Is Probe free to use?",
        answer: "Yes! Probe has a generous free tier for personal use. We also offer Pro and Team plans for advanced features and collaboration."
    },
    {
        question: "Does it support Chrome Extensions?",
        answer: "Absolutely. Probe is built on the Chromium engine, so you can install all your favorite extensions directly from the Chrome Web Store."
    },
    {
        question: "How is this different from Chrome DevTools?",
        answer: "Probe integrates dev tools directly into the browser engine, offering faster performance, AI-assisted debugging, and deeper integration with your local development environment."
    },
    {
        question: "Is my data secure?",
        answer: "We take privacy seriously. Probe is local-first by default. Your browsing history, cookies, and local storage never leave your device unless you explicitly sync them."
    },
    {
        question: "What platforms is Probe available on?",
        answer: "Currently, we support macOS (Intel & Silicon), Windows 10/11, and Linux (Debian/Ubuntu)."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-black border-t border-zinc-900">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Frequently Asked <span className="text-blue-500">Questions</span></h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="border border-zinc-800 rounded-lg bg-zinc-900/30 overflow-hidden transition-all"
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-900/50 transition-colors"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <span className="text-lg font-medium text-white">{faq.question}</span>
                                <svg
                                    className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
