/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.{css,js,jsx,tsx}" //Tailwin Css adala contents
  ],

  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#afc456',
        based: '#f34567'
      },

      // font-family: 'Josefin Sans', sans-serif;

      fontFamily:{
        heebo700: ('Josefin Sans')
      }

    },
    
  },
  plugins: [],
}

