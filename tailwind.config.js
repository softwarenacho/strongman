module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'strong-yellow': '#FEFF00',
        'strong-blue': '#3166AF',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
