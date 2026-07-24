/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
    },
    fontFamily: {
      primary: "var(--font-jost)",
    },
    extend: {
      colors:{
        // RS Design System Colors
        'rs-bg-primary': '#F3F3F3',
        'rs-bg-secondary': '#FFFFFF',
        'rs-text-primary': '#0A0A0A',
        'rs-text-muted': '#666666',
        'rs-border': '#D8D8D8',
        'rs-accent-orange': '#FF4D00',
        'rs-accent-red': '#E50000',
        
        // Original colors
        primary: "#0a0118",
        secondary: "#1a1030",
        accent:{
          DEFAULT:"#00f5ff",
          hover: "#00d4e6",
          light: "#66f9ff"
        },
        purple: {
          DEFAULT: "#a855f7",
          dark: "#7c3aed",
          light: "#c084fc"
        },
        pink: {
          DEFAULT: "#ec4899",
          light: "#f472b6"
        },
        orange: {
          DEFAULT: "#fb923c",
          light: "#fdba74"
        },
        blue: {
          DEFAULT: "#3b82f6",
          dark: "#2563eb",
          light: "#60a5fa"
        },
        green: {
          DEFAULT: "#10b981",
          light: "#34d399"
        },
        slate: "#94a3b8",
        steel: "#475569",
        charcoal: "#1e293b",
        dark: "#0f172a",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "marquee-scroll": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": "marquee-scroll 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}