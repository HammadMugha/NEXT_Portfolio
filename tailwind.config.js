/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary:"#F59E0B",
        fontColor: "#161c2d",
        global: "#94a3b8",
        lightOrange: "#FDF1DB"
      },
      container:{
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '1rem',
          xl: '2rem',
          '2xl': '6rem',
        },
      }
    },
  },
  plugins: [],
};
