/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainGreen' : '#64f67b',
        'textBlack' : '#142800',
        'mainGray' : '#E4E5E3'
      },
      fontFamily: {
        'poppins' : ['Poppins', 'sans-serif'],
      },
      screens: {
        '730' : {'max' : '730px'}
      }
    },
  },
  plugins: [],
}

