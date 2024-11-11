/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lilita' : ['"Lilita One"', 'sans-serif'],
        'mali' : ['"Mali"', 'sans-serif']
      },
      colors: {
        'rgrey' : "#A8A9AA",
        'rblack' : "#1A1D20"
      }
    },
  },
  plugins: [],
}

