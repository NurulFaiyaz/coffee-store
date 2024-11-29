/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'header-bg' : "url('./src/images/more/15.jpg')",
        'addCoffee-bg' : "url('./src/images/more/11.png')"
      }
    },
  },
  plugins: [require('daisyui'),],
}

