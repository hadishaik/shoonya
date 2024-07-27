/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        darkBlue: "#1b3252",
        lightBrown: "#E0D9CF",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
