/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","about.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#FDF5B8",
        secondary: "#F8E559",
        dark: "#2c2c2c"
      },
    },
  },
  plugins: [],
};

