/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#161cbb",
        "light-blue": "#5865f2",
        purple: "#5865F2",
      },
      fontFamily: {
        trial: "Kanit, sans-serif",
      },
      backgroundImage: {
        stars: 'url("./assets/stars_bg.svg")',
        "feature-linear":
          "linear-gradient(135deg, rgba(255,255,255, 0.4), rgba(255,255,255, 0.2))",
        "feature-radial":
          "radial-gradient(circle at 70%, #11d9cb, #1662a1 80%)",
      },
    },
  },
  plugins: [],
};
