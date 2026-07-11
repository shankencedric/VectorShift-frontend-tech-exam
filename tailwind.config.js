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
        'vs-grey': '#9ca3af',
        'vs-gold': '#b89b5e',
      },
    },
  },
  plugins: [],
}