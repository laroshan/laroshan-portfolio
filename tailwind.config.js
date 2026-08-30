/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgDark: "#0b0e14",
        bgSecondary: "#0f141f",
        cardDark: "#131926",
        cardHover: "#1a2233",
        borderDark: "#232d42",
        borderLight: "#33415c",
        accent: {
          blue: "#146ef5",
          cyan: "#00d2ff",
          sky: "#38bdf8",
          purple: "#7c3aed",
          coral: "#ff4d6d",
        },
        neutral: {
          100: "#ffffff",
          200: "#f1f5f9",
          300: "#e2e8f0",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'card': '0 12px 32px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 20px 40px rgba(20, 110, 245, 0.12)',
        'glow-blue': '0 0 24px rgba(20, 110, 245, 0.35)',
        'glow-cyan': '0 0 24px rgba(0, 210, 255, 0.35)',
      },
      borderRadius: {
        'card': '20px',
        'badge': '100px',
      }
    },
  },
  plugins: [],
}
