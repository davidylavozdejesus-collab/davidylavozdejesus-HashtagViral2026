/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: "#09090b",
          dark: "#050508",
          purple: "#8b5cf6",
          purpleLight: "#a855f7",
          blue: "#06b6d4",
          blueLight: "#22d3ee",
          gray: "#18181b",
          grayLight: "#27272a"
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.2), 0 0 10px rgba(6, 182, 212, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.6), 0 0 35px rgba(6, 182, 212, 0.6)' }
        }
      }
    },
  },
  plugins: [],
}
