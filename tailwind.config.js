/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandRed: "#ff2a00",
        brandBlack: "#0b0b0b",
        softWhite: "#f8f8f8",
      },
      fontFamily: {
        display: ["Rockwell", "Roboto Slab", "serif"],
        body: ["Inter", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 28px -14px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};
