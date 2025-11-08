/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Courier New', 'monospace'],
      },
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#111111',
        'bg-tertiary': '#1a1a1a',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'accent-primary': '#6366f1',
        'accent-secondary': '#8b5cf6',
        'accent-tertiary': '#ec4899',
        'border-color': '#2a2a2a',
      },
    },
  },
  plugins: [],
}

