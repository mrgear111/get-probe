'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="h-screen w-full bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            <div className="relative z-10 text-center px-4 max-w-lg">
                <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center">
                        <AlertTriangle className="w-8 h-8 text-red-500" />
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4">Runtime Exception Detected</h2>
                <p className="text-zinc-400 mb-8 font-mono text-sm bg-zinc-900/50 p-4 rounded border border-white/5 overflow-x-auto">
                    {error.message || "An unexpected error occurred within the application context."}
                </p>

                <div className="flex gap-4 justify-center">
                    <button
                        onClick={
                            // Attempt to recover by trying to re-render the segment
                            () => reset()
                        }
                        className="px-6 py-2 bg-white text-black font-bold rounded hover:bg-zinc-200 transition-colors"
                    >
                        Try Again
                    </button>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="px-6 py-2 bg-zinc-800 text-white font-bold rounded hover:bg-zinc-700 transition-colors border border-zinc-700"
                    >
                        Return Home
                    </button>
                </div>
            </div>
        </div>
    )
}
