/** @type {import('tailwindcss').Config} */

const tw_traent = require('../traent-design-system/tailwind/tw-base-theme');
const tw_plugins = require('../traent-design-system/tailwind/tw-plugins');

module.exports = {
  prefix: 'tw-',
  content: [
    "./projects/ngx-t3-components/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: { ...tw_traent.theme },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({ ':root': { ...tw_plugins.extractPalette(theme('colors')) } });
    },
  ],
}
