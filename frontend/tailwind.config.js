/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",


"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '6rem': '6rem',
        '10rem':'10rem',
        '80':'80%'
      },
    },
  },
  plugins: [],
}

