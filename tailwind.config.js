module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/sections/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lightCream: "#FFF6DB",
        lightPink: "rgba(133, 119, 249, 0.5)",
        tertiaryOpacity: "rgba(255, 212, 77, 0.5)",

        darkBlue: "#44506A",

        primaryLight: "#9FEBCC",
        primaryFocus: "#0DD3B7",
        primary: "#0CC1A7",
        primaryDark: "#1C686E",

        secondaryLight: "#AEC0DD",
        secondary: "#5D6D8F",
        secondaryDark: "#1D2952",

        tertiaryLight: "#FFD44D",
        tertiary: "#FFC719",
        tertiaryDark: "#FFB400",

        quaternary: "#F24C00",

        white: "#FFFFFF",
        grey1: "#FAFAFA",
        grey2: "#F5F8F9",
        grey3: "#ECF2F4",
        grey4: "#CCDBE0",
        grey5: "#f1f4f8",
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
  plugins: [],
};
