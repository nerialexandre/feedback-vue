/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      fontFamily: {
        regular: ['RobotoRegular'],
        medium: ['RobotoMedium'],
        bold: ['RobotoBold'],
        black: ['Robotoblack'],
        sans: 'Roboto, sans-serif'
      },
      colors: require('./palette')
    }
  },
  plugins: []
}
