import React from 'react';
import DocsLayout from '../../components/DocsLayout';
import { Activity, Zap, Play, ArrowRight } from 'lucide-react';
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

export default function NetworkAnalyzerPage() {
    return (
        <DocsLayout>
            <div className="flex items-center gap-2 text-sm text-zinc-500 mb-8 font-mono">
                <Link href="/documentation" className="hover:text-purple-400 transition-colors">Docs</Link>
                <span className="text-zinc-700">/</span>
                <span className="text-white">Network Analyzer</span>
            </div>

            <div className="mb-12 border-b border-zinc-800 pb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Network Analyzer</h1>
                <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
                    Deep dive into HTTP and WebSocket traffic with real-time insights, performance metrics, and request/response analysis.
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
                        title="Network Traffic Basics"
                        description="Learn to monitor HTTP requests, responses, and identify performance bottlenecks."
                        icon={Activity}
                        tag="Basics"
                    />
                    <GuideCard
                        title="WebSocket Debugging"
                        description="Monitor real-time WebSocket connections and message payloads."
                        icon={Activity}
                        tag="Real-time"
                    />
                    <GuideCard
                        title="Performance Metrics"
                        description="Analyze load times, DNS resolution, and connection speeds."
                        icon={Activity}
                        tag="Performance"
                    />
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-white mb-6">Core Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-lg border border-zinc-800 bg-[#161b22]/50 hover:bg-[#161b22] transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-2">Real-Time Monitoring</h3>
                        <p className="text-sm text-zinc-400">Track all network activity as it happens with live updates.</p>
                    </div>
                    <div className="p-6 rounded-lg border border-zinc-800 bg-[#161b22]/50 hover:bg-[#161b22] transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-2">Request Filtering</h3>
                        <p className="text-sm text-zinc-400">Filter by domain, method, status code, or custom patterns.</p>
                    </div>
                    <div className="p-6 rounded-lg border border-zinc-800 bg-[#161b22]/50 hover:bg-[#161b22] transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-2">Waterfall View</h3>
                        <p className="text-sm text-zinc-400">Visualize request timing and dependencies in a timeline view.</p>
                    </div>
                    <div className="p-6 rounded-lg border border-zinc-800 bg-[#161b22]/50 hover:bg-[#161b22] transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-2">Export & Share</h3>
                        <p className="text-sm text-zinc-400">Export network logs as HAR files for collaboration and analysis.</p>
                    </div>
                </div>
            </div>
        </DocsLayout>
    );
}
