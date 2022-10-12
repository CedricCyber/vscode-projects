/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spin: "spin 10s linear infinite",
        bounce: "bounce 2s infinite",
      },
    },
  },
  plugins: [],
};
