/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        main: "repeat(10, 60px)",
      },
      screens: {
        sm: "200px",
        md: "500px",
        lg: "860px",
        for3d: "600px",
      },
      colors: {
        main: "#CD482B",
        main2: "#4AABF3",
        bgcolor: "#0E0D0D",
        bgcolor2: "#000000",
        textMain: "#E9E9E9",
        textSub: "#8E8E8E",
        textSub2: "#C3BABA",
        textSub3: "#E1E1E1",
      },
      gradientColorStopPositions: {
        5: "5%",
      },
      animation: {
        appearFromTop: "appearFromTop .3s ease-in-out forwards",
        disappearToTop: "disappearToTop 1s ease-in-out forwards",
      },
      keyframes: {
        appearFromTop: {
          "0%": { transform: "translate(-50%, -50%) scale(0.3)", opacity: 0 },
          "60%": { opacity: 0.3 },
          "100%": { transform: "translate(-50, -50%) scale(1)", opacity: 1 },
        },
        disappearToTop: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        catamaran: ["Inter", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        title: "32px",
        base: "18px",
        category: "20px",
      },
      backgroundImage: {
        stars: "url('/animation/stars.svg')",
        "4paths": "url('/animation/4paths.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        lightsvg: "url('/cloudy0.svg')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    // ...
    // require("tailwind-scrollbar"),
  ],
};
