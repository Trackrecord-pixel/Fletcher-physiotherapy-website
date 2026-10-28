import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // "navy" is now the Ink scale (premium redesign, Oct 2026)
        navy: {
          50: "#f3f5f6",
          100: "#e3e7ea",
          200: "#c6cdd3",
          300: "#9ca7b0",
          400: "#6f7d88",
          500: "#52616c",
          600: "#3d4b56",
          700: "#2b3944",
          800: "#1c2a34",
          900: "#13212b",
          950: "#0b141a",
        },
        // Eucalyptus — primary brand green
        euc: {
          50: "#f0f5f2",
          100: "#e3ece6",
          200: "#c9dacf",
          300: "#a8c1b4",
          400: "#729886",
          500: "#3f7464",
          600: "#2e5a4c",
          700: "#254a3f",
          800: "#1d3a32",
          900: "#152b25",
        },
        // "beige" is now the Sand/Stone neutral scale
        beige: {
          50: "#faf8f4",
          100: "#f1ece3",
          200: "#e6dece",
          300: "#d6c9b1",
          400: "#bfae8f",
          500: "#a8956f",
        },
        clay: {
          50: "#f8eee8",
          100: "#f1ddd1",
          200: "#e3bba4",
          300: "#d0946f",
          400: "#c27a52",
          500: "#b5653e",
          600: "#9a5232",
          700: "#7c4229",
        },
        sand: "#f1ece3",
        cream: "#f7f4ef",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(19, 33, 43, 0.04), 0 8px 28px -12px rgba(19, 33, 43, 0.14)",
        "card-hover": "0 2px 4px rgba(19, 33, 43, 0.05), 0 22px 48px -16px rgba(19, 33, 43, 0.22)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
