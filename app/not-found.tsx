import Link from 'next/link'
import { Brain } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="h-screen w-full bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 text-center px-4">
                <div className="mb-8 flex justify-center">
                    <div className="w-24 h-24 bg-zinc-900/50 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-2xl">
                        <Brain className="w-12 h-12 text-zinc-500 animate-pulse" />
                    </div>
                </div>

                <h1 className="text-9xl font-bold text-white tracking-tighter mb-4 opacity-50">404</h1>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Lost in the Memory Web?</h2>
                <p className="text-zinc-400 max-w-md mx-auto mb-8 leading-relaxed">
                    The page you're looking for seems to have been garbage collected. It might have been moved, deleted, or never existed in this context.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors"
                >
                    Return to Source
                </Link>
            </div>

            <div className="absolute bottom-8 text-zinc-600 font-mono text-xs">
                ERROR_CODE: PAGE_NOT_FOUND
            </div>
        </div>
    )
}
