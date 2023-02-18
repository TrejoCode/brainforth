/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      ...colors,
      primary: "#09E077",
    },
    fontFamily: {
      cormorant: ["Cormorant", "ui-serif"],
      "atyp-bl": ["Atyp BL", "ui-sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
