/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Custom primary color
        secondary: "#10B981", // Custom secondary color
        dark: "#1E293B", // Custom dark color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom sans font
        mono: ["Fira Code", "monospace"], // Custom monospace font
      },
      screens: {
        xs: "480px", // Extra small breakpoint
        "3xl": "1920px", // Larger breakpoint
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Typography plugin
    require("@tailwindcss/forms"), // Forms plugin
  ],
};