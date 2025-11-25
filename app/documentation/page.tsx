import React from 'react';
import DocsLayout from '../components/DocsLayout';
import { Book, Code, Terminal, Activity, Cpu, Layers, ArrowRight, Brain, Layout, Sparkles, Command, Share2 } from 'lucide-react';
import Link from 'next/link';

const DocCard = ({ title, description, icon: Icon, href }: { title: string, description: string, icon: any, href: string }) => (
    <Link href={href} className="group p-6 bg-[#161b22] border border-zinc-800 rounded-lg hover:border-purple-500/50 hover:bg-[#161b22]/80 transition-all flex flex-col h-full">
        <div className="mb-4">
            <div className="w-10 h-10 bg-zinc-800/50 rounded-lg border border-zinc-700/50 flex items-center justify-center group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-colors">
                <Icon className="w-5 h-5 text-zinc-400 group-hover:text-purple-400 transition-colors" />
            </div>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">{title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">
            {description}
        </p>
        <div className="flex items-center text-xs font-medium text-zinc-500 group-hover:text-purple-400 transition-colors mt-auto">
            Read docs <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
    </Link>
);

export default function DocumentationPage() {
    const toc = [
        { id: "introduction", label: "Introduction" },
        { id: "core-concepts", label: "Core Concepts" },
        { id: "probe-ai", label: "Probe AI" },
        { id: "developers", label: "For Developers" },
        { id: "advanced", label: "Advanced Topics" }
    ];

    return (
        <DocsLayout tableOfContents={toc}>
            <div className="max-w-4xl">
                <h1 id="introduction" className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight scroll-mt-24">Probe Documentation</h1>
                <p className="text-xl text-zinc-400 leading-relaxed mb-12">
                    Probe is a developer-first browser built with intelligence at its core. It’s designed to transform how you browse, debug, and build — combining powerful tools and contextual AI directly into your web experience.
                </p>

                <div className="mb-16">
                    <h2 id="core-concepts" className="text-2xl font-bold text-white mb-6 scroll-mt-24">Core Concepts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <DocCard
                            title="Memory Web"
                            description="Your AI-powered browsing history that remembers context and relationships."
                            icon={Brain}
                            href="/documentation/memory-web"
                        />
                        <DocCard
                            title="Probe Spaces"
                            description="Organize your tabs and windows into intelligent, context-aware spaces."
                            icon={Layout}
                            href="/documentation/probe-spaces"
                        />
                        <DocCard
                            title="Contextual AI"
                            description="AI that understands your current page and browsing journey."
                            icon={Sparkles}
                            href="/documentation/contextual-ai"
                        />
                        <DocCard
                            title="Universal Command Bar"
                            description="Control your entire browser experience with a single keystroke."
                            icon={Command}
                            href="/documentation/command-bar"
                        />
                        <DocCard
                            title="Cross-Tab Intelligence"
                            description="Connect insights and data across multiple open tabs automatically."
                            icon={Share2}
                            href="/documentation/cross-tab"
                        />
                    </div>
                </div>

                <div className="mb-16">
                    <h2 id="probe-ai" className="text-2xl font-bold text-white mb-6 scroll-mt-24">Probe AI</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <DocCard
                            title="Probe AI"
                            description="Your intelligent coding partner for debugging and code generation."
                            icon={Cpu}
                            href="/documentation/probeai"
                        />
                    </div>
                </div>

                <div className="mb-16">
                    <h2 id="developers" className="text-2xl font-bold text-white mb-6 scroll-mt-24">For Developers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <DocCard
                            title="Probe Console"
                            description="The core interface for debugging, terminal access, and AI assistance."
                            icon={Terminal}
                            href="/documentation/probeconsole"
                        />
                        <DocCard
                            title="API Client"
                            description="Test, replay, and analyze API requests directly from your browser."
                            icon={Code}
                            href="/documentation/apiclient"
                        />
                        <DocCard
                            title="Network Analyzer"
                            description="Deep dive into HTTP and WebSocket traffic with real-time insights."
                            icon={Activity}
                            href="/documentation/network"
                        />
                        <DocCard
                            title="Probe CLI"
                            description="Command line tools to control Probe, manage workspaces, and automate tasks."
                            icon={Terminal}
                            href="/documentation/cli"
                        />
                    </div>
                </div>

                <div className="border-t border-white/10 pt-12">
                    <h2 id="advanced" className="text-2xl font-bold text-white mb-6 scroll-mt-24">Advanced Topics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link href="/documentation/workspace" className="block p-4 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
                            <Layers className="w-5 h-5 text-zinc-400 mb-3" />
                            <h3 className="text-sm font-semibold text-white mb-1">Workspaces</h3>
                            <p className="text-xs text-zinc-500">Manage project configurations</p>
                        </Link>
                        <Link href="/documentation/cli" className="block p-4 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
                            <Terminal className="w-5 h-5 text-zinc-400 mb-3" />
                            <h3 className="text-sm font-semibold text-white mb-1">CLI Reference</h3>
                            <p className="text-xs text-zinc-500">Command line tools & flags</p>
                        </Link>
                        <Link href="/documentation/config" className="block p-4 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
                            <Book className="w-5 h-5 text-zinc-400 mb-3" />
                            <h3 className="text-sm font-semibold text-white mb-1">Configuration</h3>
                            <p className="text-xs text-zinc-500">Customize your environment</p>
                        </Link>
                    </div>
                </div>
            </div>
        </DocsLayout>
    );
}
