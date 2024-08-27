/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'tiny': '310px',
      'sm': '644px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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

