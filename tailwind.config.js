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
      progressbar: colors.gray[200],
      "on-primary": colors.white,
      "primary-light": colors.pink[50],
    },
    fontSize: {
      xs: ["0.68rem", "1rem"],
      sm: ["0.875rem", "1.5rem"],
      base: ["1rem", "1.625rem"],
      md: ["1.125rem", "1.67rem"],
      lg: ["1.31rem", "1.94rem"],
      xl: ["2.5rem", "3rem"],
      xxl: ["2.81rem", "3rem"],
    },
    boxShadow: {
      sm: "0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)",
      DEFAULT: "0px 5px 20px 0px rgb(0 37 93 / 15%)",
    },
    fontFamily: {
      body: "'Open Sans', sans-serif",
      heading: "'Josefin Sans', sans-serif",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
