/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#DD1111',
          black: '#000000',
          white: '#FFFFFF',
          light: '#F5F5F5',
          lightGray: '#EAEAEA',
          mediumGray: '#D9D9D9',
        },
        dark: {
          bg: '#0A0A0A',
          'bg-secondary': '#121212',
          'bg-tertiary': '#1A1A1A',
          'bg-card': '#1E1E1E',
          border: '#2A2A2A',
          'border-light': '#3A3A3A',
          text: '#F5F5F5',
          'text-secondary': '#D0D0D0',
          'text-tertiary': '#A0A0A0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        heading: ['Inter', 'Neue Haas', 'Roboto Condensed', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
