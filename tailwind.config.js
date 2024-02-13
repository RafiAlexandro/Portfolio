/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './pages/**/*.{html,js}',
    './src/**/*.{html,js}',
    './index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'contact1': "url('public/img/bgcontact1.jpg')",
        'contact2': "url('public/img/bgcontact2.jpg')",
        'section-header': "url('public/img/bgheader.jpg  ')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        grey: "#F4F5FE",
        purple: "#2E2C53",
        midpurple: "#F3F2FD",
        blue: "#20B9FC",
        violet: "#5664FA",
        orange: "#FC6B21",
        red: "#CB3161",
        black: "#151C1E",
        white: "#FAFAFA",
        text: "#DDDDDD",
        bgcopyright: "#363458",
        path_bg: "#8F8BCF",
        path_header: '#EDECFF'
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

