/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'oddblue': '#003c9e',
        'oddlightgreen': '#b0ed82',
        'oddlightblue': '#00d1ff',
        'oddpurple': '#85abfd',
        'oddlime': '#dbfe55',
        'oddmagenta': '#db95f7',
        'odddarkgray': '#1a1a1a',
      }
    },
  },
  plugins: [],
}
