/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#f5f5f5",
        "color-highlight": "#e05d2d",
        "color-primary-light": "#020726",
        "color-primary-dark": "#010417",
        "text-color-secondary": "#ff7d3b",
        "color-gray": "#333",
        "color-white": "#000",
        "color-blob": "#A427DF",
      },
      screens: {
        'xs': '320px',  // Custom screen size, you can adjust the pixel value
        'xmd': '768px',
      },
    },
    
    container:{
      center: true,
      padding: {
        DEFAULT: '20px',
        md: "50px",
      }
    }
  },
  plugins: [],
}

