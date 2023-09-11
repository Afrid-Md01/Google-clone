/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      boxShadow:{
        c : "0 1px 20px rgb(32 33 36 / 30%)",
        c2: "0 1px 1px rg(0 0 0 / 10%)"
      }
    },
  },
  plugins: [],
}
