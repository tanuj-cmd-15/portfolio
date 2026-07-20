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
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {

      colors:{
        primary: "#0a0e27",
        secondary: "#1a1f3a",
        accent:{
          DEFAULT:"#00d9ff",
          hover: "#00b8d4",
          light: "#5ce1e6"
        },
        purple: {
          DEFAULT: "#c77dff",
          dark: "#9d4edd",
          light: "#e0aaff"
        },
        pink: {
          DEFAULT: "#ff6ec7",
          light: "#ff9eda"
        },
        blue: {
          DEFAULT: "#4361ee",
          dark: "#3a0ca3",
          light: "#7209b7"
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}