/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F4F1EC',
        ink: '#141414',
        accent: '#E8452C',
        muted: {
          light: '#6B6660',
          dark: '#9A968F',
        }
      },
      fontFamily: {
        display: ['Archivo', 'sans-serif'],
        headline: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
