"use client";

import React from "react";

interface FeatureCardProps {
    title: string;
    description: string;
    className?: string;
    children?: React.ReactNode;
}

export default function FeatureCard({ title, description, className = "", children }: FeatureCardProps) {
    return (
        <div className={`group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-700 transition-colors ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex-1 mb-6">
                    {children}
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
}
