/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}", 
    "./public/index.html"],
  theme: {
    extend: {
      colors: {
        'background': '#F4F0F1',
        'primary': '#E94536',
        'yellow': '#FFE0AC',
        'violet': '#6986C5',
        'pink': '#FFACB7',
      }
    },
  },
  plugins: [],
}

