/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B80C3",
      },
      keyframes: {
        bubble: {
          "0%": { transform: "translateY(0)", opacity: "0.2" },
          "50%": { opacity: "0.3" },
          "100%": { transform: "translateY(-100vh)", opacity: "0" },
        },
      },
      animation: {
        bubble: "bubble 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
