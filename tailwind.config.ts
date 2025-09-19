import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6", // Tailwind (blue-500)
          dark: "#1E40AF",   // blue-900
          light: "#93C5FD",  // blue-300
        },
        secondary: {
          DEFAULT: "#F59E0B", // amber-500
          dark: "#B45309",   // amber-700
          light: "#FCD34D",  // amber-300
        },
        neutral: {
          DEFAULT: "#6B7280", // gray-500
          dark: "#374151",    // gray-700
          light: "#D1D5DB",   // gray-300
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;