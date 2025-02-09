/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'oddblue': '#003c9e',
        'odddarkgreen': '#388ba4',
        'oddlightgreen': '#f2fBe6',
        'oddlightblue': '#00d1ff',
        'oddpurple': '#85abfd',
        'oddlime': '#dbfe55',
        'oddlightlime': '#f2fbc4',
        'oddmagenta': '#db95f7',
        'odddarkgray': '#1a1a1a'
      }
    },
  },
  plugins: [],
}
