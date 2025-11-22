import React from 'react';
import DocsLayout from '../../components/DocsLayout';
import { Terminal, Zap, Shield, Cpu, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

const GuideCard = ({ title, description, icon: Icon, tag }: { title: string, description: string, icon: any, tag: string }) => (
    <div className="group p-6 bg-[#161b22] border border-zinc-800 rounded-md hover:border-zinc-600 hover:shadow-lg transition-all cursor-pointer flex flex-col h-full">
        <div className="mb-4 flex items-start justify-between">
            <div className="p-2 bg-zinc-800/50 rounded-md border border-zinc-700/50 group-hover:border-zinc-600 group-hover:bg-zinc-800 transition-colors">
                <Icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
            </div>
            {tag && (
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded bg-black/20">
                    {tag}
                </span>
            )}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">
            {description}
        </p>
        <div className="flex items-center text-xs font-medium text-zinc-500 group-hover:text-blue-400 transition-colors mt-auto">
            Read guide <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
    </div>
);

export default function ProbeConsolePage() {
    return (
        <DocsLayout>
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-zinc-500 mb-8 font-mono">
                <Link href="/" className="hover:text-blue-400 transition-colors">Docs</Link>
                <span className="text-zinc-700">/</span>
                <span className="text-white">Probe Console</span>
            </div>

            {/* Header */}
            <div className="mb-12 border-b border-zinc-800 pb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Probe Console</h1>
                <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
                    The unified developer interface that combines a powerful terminal, real-time devtools, and AI assistance into a single, context-aware environment.
                </p>
                <div className="flex gap-4 mt-8">
                    <button className="px-4 py-2 bg-white text-black font-semibold rounded-md text-sm hover:bg-zinc-200 transition-colors flex items-center gap-2">
                        <Play className="w-4 h-4" /> Start Tutorial
                    </button>
                    <button className="px-4 py-2 bg-zinc-800 text-white font-semibold rounded-md text-sm border border-zinc-700 hover:bg-zinc-700 transition-colors">
                        View API Reference
                    </button>
                </div>
            </div>

            {/* Guides Section */}
            <div className="mb-16">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" /> Guides
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    <GuideCard
                        title="Getting Started with Console"
                        description="Learn the basics of the Probe Console interface, command syntax, and keyboard shortcuts."
                        icon={Terminal}
                        tag="Basics"
                    />
                    <GuideCard
                        title="Debugging with AI"
                        description="How to use the integrated AI assistant to diagnose errors and generate fixes in real-time."
                        icon={Cpu}
                        tag="AI Features"
                    />
                    <GuideCard
                        title="Security & Permissions"
                        description="Managing access controls, API keys, and secure environment variables within the console."
                        icon={Shield}
                        tag="Security"
                    />
                </div>
            </div>

            {/* Features Section */}
            <div>
                <h2 className="text-2xl font-semibold text-white mb-6">Core Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-lg border border-zinc-800 bg-[#161b22]/50 hover:bg-[#161b22] transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-2">Unified Terminal</h3>
                        <p className="text-sm text-zinc-400">Execute shell commands, run scripts, and manage processes without leaving the browser.</p>
                    </div>
                    <div className="p-6 rounded-lg border border-zinc-800 bg-[#161b22]/50 hover:bg-[#161b22] transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-2">Context Awareness</h3>
                        <p className="text-sm text-zinc-400">The console understands your current project state, open files, and recent errors.</p>
                    </div>
                    <div className="p-6 rounded-lg border border-zinc-800 bg-[#161b22]/50 hover:bg-[#161b22] transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-2">Smart Autocomplete</h3>
                        <p className="text-sm text-zinc-400">AI-powered suggestions for commands, variable names, and API endpoints.</p>
                    </div>
                    <div className="p-6 rounded-lg border border-zinc-800 bg-[#161b22]/50 hover:bg-[#161b22] transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-2">Session Replay</h3>
                        <p className="text-sm text-zinc-400">Record and replay console sessions to debug complex issues or share with teammates.</p>
                    </div>
                </div>
            </div>
        </DocsLayout>
    );
}
