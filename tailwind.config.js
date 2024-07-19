/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "100px", max: "640px" },
      md: { min: "641px", max: "1150px" },
    },
    extend: {
      colors: {
        primary: {
          100: "#0B80CC",
          200: "#DAF1FF",
          500: "#0072BC",
        },
        customGray: {
          100: "#F4F5F9",
          200: "#E8E8EA",
          300: "#F6F7F9",
          400: "#81859C",
          500: "#81818F",
          600: "#BCBCBC",
          700: "#F5F5F5",
          800: "#25252E",
        },
        customRed: {
          500: "#FF6666",
          600: "#F43F5E",
        },
        customeYellow: {
          100: "#F5BF55",
        },
        validationColors: {
          error: "#DC2828",
          sucess: "#2AAC27",
        },
        status: {
          completed: "#F0FFF3",
          Cancelled: "#FF992126",
        },
      },
      fontFamily: {
        body: [],
      },
    },
  },
  plugins: [],
};
