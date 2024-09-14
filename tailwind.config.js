/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container:{
      screens:{
        default:'1140px'
      },
      center:true
    }
  },
  plugins: [require('daisyui'),],
}

