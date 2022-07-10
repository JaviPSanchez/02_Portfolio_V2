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
      gridTemplateColumns: {
        // Simple 16 column grid
        fit: "repeat(auto-fit, minmax(250px, 1fr))",
        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
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
        dark1: "#030243",
        dark2: "#385364",
        error: "#fc8181",
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
    require("tailwind-scrollbar-hide"),
  ],
};
