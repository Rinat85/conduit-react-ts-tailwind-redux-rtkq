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
      boxShadow: {
        banner:
          'inset 0 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px rgb(0 0 0 / 30%)',
      },
      dropShadow: {
        logo: '0 1px 3px rgb(0 0 0 / 30%)',
      },
      fontSize: {
        logo: '3.5rem',
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
