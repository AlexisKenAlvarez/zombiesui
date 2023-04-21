/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'heroBg': '#2a3a51',
        newbg: '#181c23'
      },
      fontFamily: {
        'zombie': ['zombie'],
        poppins: 'Poppins'
      },
    },
  },
  plugins: [],
}

