/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}", 'node_modules/preline/dist/*.js',
],
  theme: {
    extend: {
      fontFamily: {
        'play': ['"Playfair Display"', ...defaultTheme.fontFamily.sans],
        'neuro': ['"Neuropol"', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [require('preline/plugin'),],
}
