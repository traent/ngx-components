/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [
    require('../../tailwind.config'),
  ],
  content: [
    "./assets/**/*.{html,ts,scss}",
    "./src/lib/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
