import React from 'react';
import DocsLayout from '../../components/DocsLayout';
import { Code, Zap, Play, ArrowRight } from 'lucide-react';
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
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">{title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">
            {description}
        </p>
        <div className="flex items-center text-xs font-medium text-zinc-500 group-hover:text-purple-400 transition-colors mt-auto">
            Read guide <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
    </div>
);

export default function ApiClientPage() {
    return (
        <DocsLayout>
            <div className="flex items-center gap-2 text-sm text-zinc-500 mb-8 font-mono">
                <Link href="/documentation" className="hover:text-purple-400 transition-colors">Docs</Link>
                <span className="text-zinc-700">/</span>
                <span className="text-white">API Client</span>
            </div>

            <div className="mb-12 border-b border-zinc-800 pb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">API Client</h1>
                <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
                    Test, replay, and analyze API requests directly from your browser with native HTTP/REST support and AI-powered debugging.
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

            <div className="mb-16">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" /> Guides
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    <GuideCard
                        title="Making Your First Request"
                        description="Learn how to send HTTP requests, manage headers, and inspect responses."
                        icon={Code}
                        tag="Basics"
                    />
                    <GuideCard
                        title="Request Collections"
                        description="Organize and save API requests into collections for faster testing."
                        icon={Code}
                        tag="Organization"
                    />
                    <GuideCard
                        title="Environment Variables"
                        description="Use variables to manage different API endpoints and authentication tokens."
                        icon={Code}
                        tag="Advanced"
                    />
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-white mb-6">Core Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-lg border border-zinc-800 bg-[#161b22]/50 hover:bg-[#161b22] transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-2">Native REST Client</h3>
                        <p className="text-sm text-zinc-400">Send GET, POST, PUT, DELETE requests with full header and body customization.</p>
                    </div>
                    <div className="p-6 rounded-lg border border-zinc-800 bg-[#161b22]/50 hover:bg-[#161b22] transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-2">Request Replay</h3>
                        <p className="text-sm text-zinc-400">Capture and replay API calls from your browser's network activity.</p>
                    </div>
                    <div className="p-6 rounded-lg border border-zinc-800 bg-[#161b22]/50 hover:bg-[#161b22] transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-2">Response Inspection</h3>
                        <p className="text-sm text-zinc-400">View formatted JSON, XML, and HTML responses with syntax highlighting.</p>
                    </div>
                    <div className="p-6 rounded-lg border border-zinc-800 bg-[#161b22]/50 hover:bg-[#161b22] transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-2">Auto-Complete</h3>
                        <p className="text-sm text-zinc-400">AI-powered suggestions for headers, parameters, and request bodies.</p>
                    </div>
                </div>
            </div>
        </DocsLayout>
    );
}
