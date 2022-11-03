/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Titillium: ['Titillium Web', 'sans-serif'],
      },
      colors: {
        conduit: {
          green: '#5cb85c',
        },
      },
      spacing: {
        navItem: '0.0425rem',
      },
    },
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
  },
  plugins: [],
};
