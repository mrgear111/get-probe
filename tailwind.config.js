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
        'bg-primary': '#000000',
        'bg-secondary': '#111111',
        'bg-tertiary': '#1a1a1a',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'accent-primary': '#ff6b35',
        'accent-secondary': '#ff8c42',
        'accent-tertiary': '#ffa500',
        'border-color': '#2a2a2a',
      },
    },
  },
  plugins: [],
}
