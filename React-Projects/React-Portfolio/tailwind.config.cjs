/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pasifico: ["Pacifico", "cursive"],
      varela: ["Varela Round", "sans-serif"],
    },
    extend: {
      aspectRatio: {
        "9/16": "9/16",
      },
    },
  },
  plugins: [],
};
