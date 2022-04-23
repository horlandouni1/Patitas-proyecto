module.exports = {
  purge: [
    "./pages/**/*.vue",
    "./components/**/*.vue",
    "./plugins/**/*.vue",
    "./static/**/*.vue",
    "./store/**/*.vue",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#031136",
        secundary: "#ff5903",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
