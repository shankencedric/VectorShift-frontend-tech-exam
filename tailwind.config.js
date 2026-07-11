/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Public Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      },
      colors: {
        'vs-cream': '#fcfbf8',
        'vs-dark': '#12151a',
        'vs-gold': '#5b4824',
      },
    },
  },
  plugins: [],
}