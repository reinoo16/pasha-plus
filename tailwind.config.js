/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./about.html",
    "./menu.html",
    "./gallery.html",
    "./contact.html",
    "./src/**/*.{js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C7A17A',
        secondary: '#161616',
        text: '#fff',
        text75: 'rgba(255,255,255,0.75)',
        secondary75: 'rgba(22,22,22,0.75)',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1400px',
      '3xl': '1700px',
    }
  },
  plugins: [],
}