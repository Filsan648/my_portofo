/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
 theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      colors: {
        lightgray: '#D9D9D9',
      },
      cursor: {
        'og': "url('./assets/oval.png'), pointer",
      }
    },
  },
  plugins: [],
}

