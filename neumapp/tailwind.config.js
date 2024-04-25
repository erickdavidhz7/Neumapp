/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: "0 3px 5px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 5px var(--tw-shadow-color)",
        g: "0 -12px 2px var(--tw-shadow-color)",
      },
      keyframes: {
        linerInfinityTopX: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        linerInfinityRightY: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        linerInfinityButtonX: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        linerInfinityLeftY: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      screens: {
        'x': '400px',
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            primary: {
              100: "#EAE9FD",
              200: "#D5D2FB",
              300: "#BFBCF9",
              400: "#AAA6F7",
              500: "#958FF5",
              600: "#8079F3",
              700: "#6A63F1",
              800: "#554CEF",
              900: "#4036ED",
              DEFAULT: "#4036ED",
              foreground: "#FFFFFF"
            },
            firstInk: {
              100: "#EAE9FD",
              200: "#D5D2FB",
              300: "#BFBCF9",
              400: "#AAA6F7",
              500: "#958FF5",
              600: "#8079F3",
              700: "#6A63F1",
              800: "#554CEF",
              900: "#4036ED",
              DEFAULT: "#4036ED",
            },
            firstShadow: {
              100: "#4036ED",
              200: "#2418EA",
              300: "#1D13D0",
              400: "#1910B2",
              500: "#150D94",
              600: "#110B77",
              700: "#0C0859",
              800: "#08053B",
              900: "#04031E",
              DEFAULT: "#04031E",
            },
            secondInk: {
              100: "#FFEEEE",
              200: "#FFDDDD",
              300: "#FFCCCD",
              400: "#FFBBBC",
              500: "#FFAAAB",
              600: "#FF999A",
              700: "#FF888A",
              800: "#FF7779",
              900: "#FF6668",
              DEFAULT: "#FF6668",
            },
            secondShadow: {
              100: "#FF6668",
              200: "#FF3E41",
              300: "#FF171A",
              400: "#EE0003",
              500: "#C60003",
              600: "#9F0002",
              700: "#770002",
              800: "#4F0001",
              900: "#280001",
              DEFAULT: "#280001",
            },
            thirdInk: {
              100: "#FFF9F9",
              200: "#FFF3F3",
              300: "#FFEDED",
              400: "#FFE7E7",
              500: "#FFE1E1",
              600: "#FFDBDB",
              700: "#FFD5D5",
              800: "#FFCFCF",
              900: "#FFC9C9",
              DEFAULT: "#FFC9C9",
            },
            thirdShadow: {
              100: "#FFC9C9",
              200: "#FF9696",
              300: "#FF6464",
              400: "#FF3131",
              500: "#FD0000",
              600: "#CB0000",
              700: "#980000",
              800: "#650000",
              900: "#330000",
              DEFAULT: "#330000",
            },
            fourthShadow: {
              100: "#FFF7E6",
              200: "#FEEFCD",
              300: "#FEE8B3",
              400: "#FDE09A",
              500: "#FDD881",
              600: "#FCD068",
              700: "#FCC94E",
              800: "#FBC135",
              900: "#FBB91C",
              DEFAULT: "#FBB91C",
            },
            fourthShadow: {
              100: "#FBB91C",
              200: "#F4AD04",
              300: "#D59704",
              400: "#B78203",
              500: "#986C03",
              600: "#7A5602",
              700: "#5B4102",
              800: "#3D2B01",
              900: "#1E1601",
              DEFAULT: "#1E1601",
            },
            buttonDegrade: {
              one: "#FF666D",
              two: "#FBB224",
            },
          },
        },
      },
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
