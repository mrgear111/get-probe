import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-purple-500/30 py-20 px-6">
            <div className="max-w-3xl mx-auto">
                <Link href="/" className="text-sm text-zinc-500 hover:text-white mb-8 block">← Back to Home</Link>

                <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
                <p className="text-zinc-500 mb-12">Last updated: November 25, 2025</p>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
                        <p className="leading-relaxed">
                            Probe ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website probe.sh and use our browser application.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">2. Data Collection</h2>
                        <p className="leading-relaxed mb-4">
                            We prioritize local-first data storage. Most of your browsing history, bookmarks, and "Memory Web" data is stored locally on your device and is not transmitted to our servers.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                            <li><strong>Account Information:</strong> If you create an account, we collect your email address and basic profile information.</li>
                            <li><strong>Usage Data:</strong> We may collect anonymous telemetry data to improve app performance and stability (crash reports). You can opt-out of this in settings.</li>
                            <li><strong>AI Interactions:</strong> Queries sent to "Ask Probe" may be processed by third-party LLM providers, but are not used to train their models.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">3. Data Security</h2>
                        <p className="leading-relaxed">
                            We use administrative, technical, and physical security measures to help protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">4. Contact Us</h2>
                        <p className="leading-relaxed">
                            If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:privacy@probe.sh" className="text-purple-400 hover:underline">privacy@probe.sh</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
