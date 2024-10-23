/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-20px': '0 0 20px ', // Sombra personalizada
      },
    },
  },
  plugins: [],
}

