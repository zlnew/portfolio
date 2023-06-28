/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins'],
    },
    extend: {
      colors: {
        primary: 'hsl(200, 32%, 10%)',
        secondary: 'hsl(204, 77%, 26%)',
        tertiary: 'hsl(204, 57%, 46%)',
        accent: 'hsl(204, 86%, 86%)',
      },
    },
  },
  plugins: [],
}