/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto'],
      serif: ['"Roboto Slab"'],
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#4ade80',
        light: '#d4d4d4'
      },
    },
  },
  plugins: [],
}