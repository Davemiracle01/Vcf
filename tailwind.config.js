/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulseBounce: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' }
        }
      },
      animation: {
        pulseBounce: 'pulseBounce 1s infinite'
      }
    },
  },
  plugins: [],
};
