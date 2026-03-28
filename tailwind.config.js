/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./web/**/*.html",
    "./web/**/*.js",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Identidad visual de Leppe
        leppeRosa: '#F06292',   // Rosa de la mano del logo
        leppeOscuro: '#1A1A1B', // Color para texto y botones contrastados
        leppeFondo: '#FFFFFF',  // Fondo limpio para la app
      },
    },
  },
  plugins: [],
}