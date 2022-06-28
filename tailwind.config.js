module.exports = {
  // media : system's color strategy
  darkMode: "class",
  content: [
    "./public/index.html",
    "./src/**/*.{html,js}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/sections/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        grey1: "#FAFAFA",
        grey2: "#F5F8F9",
        grey3: "#ECF2F4",
        grey4: "#CCDBE0",
        grey5: "#f1f4f8",
        primary: "#06283D",
        secondary: "#1363DF",
        tertiary: "#47B5FF",
        quaternary: "#DFF6FF",
      },
      lineHeight: {
        12: "1.2",
        13: "1.3",
        16: "1.6",
      },
    },
    screens: {
      lg: { max: "1800px" },
      md: { max: "990px" },
      sm: { max: "600px" },
      xs: { max: "400px" },
      minmd: "1700px",
      minlg: "2100px",
    },
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
