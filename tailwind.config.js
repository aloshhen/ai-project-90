/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bar-primary': '#1E1E2C',
        'bar-accent': '#00F0FF',
        'bar-secondary': '#FF00E5'
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}