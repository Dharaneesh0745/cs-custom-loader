/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          wiggle: {
            '0%, 100%': { transform: 'rotate(-3deg)' },
            '50%': { transform: 'rotate(3deg)' },
          },
          rotate3d: {
            '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
            '100%': { transform: 'rotateX(360deg) rotateY(360deg)' },
          },
        },
        animation: {
          wiggle: 'wiggle 1s ease-in-out infinite',
          rotate3d: 'rotate3d 2s linear infinite',
        },
      },
    },
    plugins: [],
  }
  