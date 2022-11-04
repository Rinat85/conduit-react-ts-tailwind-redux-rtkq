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
          darkGreen: '#3d8b3d',
          lightenGray: '#dddddd',
          grey: '#bbbbbb',
          tag: '#aaaaaa',
          darkestGray: '#373a3c',
          darkenGrey: '#999999',
        },
      },
      spacing: {
        navItem: '0.0425rem',
        0.3: '0.3rem',
        0.2: '0.2rem',
        tag: '0.6rem',
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
        date: '0.8rem',
      },
      borderRadius: {
        buttonSm: '0.2rem',
        tag: '10rem',
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
