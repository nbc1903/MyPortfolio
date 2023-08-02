/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
    },
  },
  plugins: [],
};
