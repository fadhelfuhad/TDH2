/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 
          "#003867",
        secondary: {
          main: "#DD1929",
          "100": "#06254B",
          "200": "#051633",
          "300": "#000000",
          "400": "#FFFFFF",
        },
        text: {
          primary: "#003867",
        },
      },
      fontFamily: {
        sans: ['tajawal'],
      
      },
    },
  },
  plugins: [],
}

