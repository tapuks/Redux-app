const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      },
      colors:{
        "special-gray" : '#F5F0F0',
        "myred": "#FF0000",
        "myred2": "#f6564d",
        "mywhite": "rgb(255 255 255)",
        ...defaultTheme.colors
      },
      extend: {},
    },
    plugins: [],
  }