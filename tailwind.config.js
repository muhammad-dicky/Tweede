const { default: plugin } = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      colors: {
        "ijo-lumut": "#247881",
        "ijo-muda": "#F5F5F5",
        "ijo-transparant": "#D3E4E6",
        "tulisan": "#494A4B",
        "pink": "#FFB6B633",
      },
      backgroundImage: {
        'hero-pattern': "url('/bg-hero.png')",
      },
      container: {
        center: true,
      }

    },
  },
  plugins: [],
}
