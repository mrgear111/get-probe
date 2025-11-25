import React from 'react';
import Link from 'next/link';

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-purple-500/30 py-20 px-6">
            <div className="max-w-3xl mx-auto">
                <Link href="/" className="text-sm text-zinc-500 hover:text-white mb-8 block">← Back to Home</Link>

                <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
                <p className="text-zinc-500 mb-12">Last updated: November 25, 2025</p>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                        <p className="leading-relaxed">
                            By accessing and using Probe ("the Service"), you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">2. Use License</h2>
                        <p className="leading-relaxed mb-4">
                            Permission is granted to temporarily download one copy of the materials (information or software) on Probe's website for personal, non-commercial transitory viewing only.
                        </p>
                        <p className="leading-relaxed">
                            This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-zinc-400 mt-2">
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>attempt to decompile or reverse engineer any software contained on Probe's website;</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">3. Disclaimer</h2>
                        <p className="leading-relaxed">
                            The materials on Probe's website are provided on an 'as is' basis. Probe makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">4. Governing Law</h2>
                        <p className="leading-relaxed">
                            Any claim relating to Probe's website shall be governed by the laws of the State of California without regard to its conflict of law provisions.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
