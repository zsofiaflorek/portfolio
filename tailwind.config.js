const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      current: "currentColor",
      black: colors.blueGray[900],
      white: colors.white,
      prose: colors.blueGray[600],
      primary: colors.pink[700],
      "on-primary": colors.white,
    },
    fontSize: {
      sm: ["0.875rem", "1.5rem"],
      base: ["1rem", "1.625rem"],
      md: ["1.125rem", "1.67rem"],
      lg: ["1.31rem", "1.94rem"],
      xl: ["2.5rem", "3rem"],
      xxl: ["2.81rem", "3rem"],
    },
    fontFamily: {
      body: "'Open Sans', sans-serif",
      heading: "'Josefin Sans', sans-serif",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
