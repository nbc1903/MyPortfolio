/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      animation: {
        link: "link 1s ease-in-out infinite",
      },
      keyframes: {
        link: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(2px, -2px)" },
        },
      },
      colors: {
        brandColors: {
          background: colors.gray[800],
          contrast: colors.cyan[500],
          main: colors.white,
          text: colors.gray[400],
        },
      },
      boxShadow: {
        neon: `0 0 .2rem #fff,
        0 0 .2rem #fff,
        0 0 0.5rem ${colors.cyan[500]},
        0 0 0.5rem ${colors.cyan[500]},
        0 0 1.5rem ${colors.cyan[500]},
        inset 0 0 0.5rem ${colors.cyan[500]};`,
      },
      dropShadow: {
        neon: `0 0 .2rem ${colors.cyan[400]}`,
      },
    },
  },
  plugins: [],
};
