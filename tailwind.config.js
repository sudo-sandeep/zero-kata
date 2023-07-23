/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      hindi :'Tiro Devanagari Hindi'
    },
    extend: {
      backgroundImage: {
        'background': "url('/src/assets/images/background.jpg')",
      }
    },
  },
  plugins: [],
}