module.exports = {
  mode: "jit",
  purge: ["./build/*.html"],
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
