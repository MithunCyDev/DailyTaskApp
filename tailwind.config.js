/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},

    screens: {
      sm: "270px",
      md: "640px",
      lg: "1085px",
      xl: "1280px",
    },

    colors: {
      liteGreen: "#e8fff1",
      red: "#D92D20 ",
      blue: "#0084ff ",
      yellow: "#ffe400 ",
      orange: "#ff9f59 ",
      white: "#F9F9F9",
      gray: "#9F9F9F",
      lightGray: "#f1f1f1",
      liteWhite: "#f7f8ff",
      black: "#1d1d1d",
      liteBlack: "#323232",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
