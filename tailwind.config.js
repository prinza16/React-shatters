/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: theme => ({
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        'plastic-pink' : '#ff1493',
      }),
      backgroundColor: theme => ({
        'plastic-pink' : '#ff1493',
      }),
      textColor: {
        'plastic-pink' : '#ff1493',
      }
    },
  },
  plugins: [],
}

