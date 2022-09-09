/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      ...colors,
      mazai: {DEFAULT: "#FFCC00", 500:"#0000bb"}
    },
    extend: {},
  },
  plugins: [],
}