/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",       // include your root HTML
    "./src/**/*.{js,jsx,ts,tsx}" // include all React files
  ],
  theme: {
    extend: {
      colors: {
        brand: "#0f66ff",        // example custom color
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"], // example custom font
      },
    },
  },
  plugins: [],
}
